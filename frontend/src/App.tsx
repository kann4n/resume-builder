import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Builder from "./pages/Builder";
import Templates from "./pages/Templates";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-surface font-sans text-text-main selection:bg-primary/20 selection:text-primary flex flex-col">
        <NavBar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/builder" element={<Builder />} />
            <Route path="/templates" element={<Templates />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
