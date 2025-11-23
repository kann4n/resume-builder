const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">Kesume</span>
          <span className="text-gray-300">|</span>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Open Source Project.
          </p>
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">Terms</a>
          <a href="https://github.com/Munnoi/resume-builder" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-primary transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
