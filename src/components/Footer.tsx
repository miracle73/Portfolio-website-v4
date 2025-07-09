import { Code, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 relative border-t border-gray-800">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate AI Engineer and Machine Learning specialist creating
            innovative solutions that transform ideas into intelligent
            applications.
            <span className="text-cyan-400">
              {" "}
              Building towards AGI, one algorithm at a time.
            </span>
          </p>

          <div className="flex items-center justify-center space-x-2 text-gray-400 mb-6">
            <span>Crafted with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>and</span>
            <Code className="h-4 w-4 text-cyan-400" />
            <span>by</span>
            <span className="text-white font-semibold">Miracle Nwadiaro</span>
          </div>

          <div className="pt-6 border-t border-gray-800 text-sm text-gray-500">
            <p>
              &copy; {currentYear} Miracle Chukwuma Nwadiaro. All rights
              reserved. Built with React, TypeScript & Tailwind CSS.
            </p>
            <p className="mt-2 text-xs">🇳🇬 Proudly crafted from Uyo, Nigeria</p>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute top-6 right-6 group bg-gradient-to-r from-cyan-500 to-purple-600 text-white p-3 rounded-full hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-110 transition-all duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5 group-hover:animate-bounce" />
      </button>
    </footer>
  );
};

export default Footer;
