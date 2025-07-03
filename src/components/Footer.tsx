import React from 'react';
import { Code, Brain, Heart, ArrowUp, Zap, Sparkles } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg blur opacity-75 animate-pulse"></div>
              <div className="relative bg-gray-900 rounded-lg p-2 flex items-center space-x-1">
                <Zap className="h-5 w-5 text-cyan-400" />
                <Sparkles className="h-5 w-5 text-purple-400" />
              </div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              DevAI Portfolio
            </span>
          </div>
          
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions that bridge software engineering and artificial intelligence. 
            <span className="text-cyan-400"> Building the future, one line of code at a time.</span>
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-gray-400 mb-6">
            <span>Crafted with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>and</span>
            <Code className="h-4 w-4 text-cyan-400" />
            <span>by</span>
            <span className="text-white font-semibold">Your Name</span>
          </div>
          
          <div className="pt-6 border-t border-gray-800 text-sm text-gray-500">
            <p>&copy; {currentYear} Your Name. All rights reserved. Built with React, TypeScript & Tailwind CSS.</p>
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