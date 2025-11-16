import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const { fullName, email, password, bio, avatar } = req.body;

    if (!fullName || !email || !password)
      return res.status(400).json({ success: false, message: "All fields are required" });
    if (password.length < 6)
      return res.status(400).json({ success: false, message: "Password must be at least 6 characters" });
    // simple email validation
    if (!email.match(/^\S+@\S+\.\S+$/)) {
      return res.status(400).json({ success: false, message: "Invalid email" });
    }
    const sanitizedEmail = email.trim().toLowerCase(); // removes whitespace and converts to lowercase

    const existingUser = await User.findOne({ email: sanitizedEmail }); // checks if email exists
    if (existingUser)
      return res.status(400).json({ success: false, message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10); // encrypting password

    const user = await User.create({
      fullName,
      email: sanitizedEmail,
      password: hashedPassword,
      bio: bio || "",
      avatar: avatar || "https://cdn.pixabay.com/photo/2016/03/31/19/57/avatar-1295404_640.png",
      role: "user", // only set role from the backend or db
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        ...user._doc,
        password: undefined, // don't send password
      },
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ success: false, message: "All fields are required" });

    const sanitizedEmail = email.trim().toLowerCase();

    const user = await User.findOne({ email: sanitizedEmail }).select("+password"); // checks if email exists
    if (!user)
      return res.status(400).json({ success: false, message: "Incorrect email or password" });

    const isPasswordCorrect = await bcrypt.compare(password, user.password); // compares password
    if (!isPasswordCorrect)
      return res.status(400).json({ success: false, message: "Incorrect email or password" });

    const secret = process.env.JWT_SECRET;
    if (!secret)
      return res.status(500).json({ success: false, message: "JWT secret not found" });

    const token = jwt.sign(
      { id: user._id },
      secret,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
