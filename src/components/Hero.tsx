import { Mail } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/50 to-gray-900"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6">
            <span className="block text-white mb-2">Hello, I'm</span>
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
              Miracle Nwadiaro
            </span>
          </h1>

          <div className="text-2xl sm:text-3xl text-gray-300 mb-4 space-y-2">
            <div className="flex items-center justify-center space-x-4 animate-fade-in-up delay-200">
              <span className="text-cyan-400  font-semibold">a</span>

              <div className="flex items-center justify-center space-x-4 animate-fade-in-up delay-300">
                {/* <Code className="h-8 w-8 text-purple-400" /> */}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
                  Machine Learning
                </span>
              </div>
              <span className="text-cyan-400  font-semibold">and</span>
            </div>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-semibold">
              AI Engineer
            </span>
          </div>

          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-400">
            Architecting next-generation AI systems with Large Language Models,
            cloud infrastructure, and cutting-edge machine learning.
            <span className="text-cyan-400">
              {" "}
              Building towards AGI, one innovation at a time.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-fade-in-up delay-500">
            <button
              onClick={() => scrollToSection("contact")}
              className="group relative bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>Let's Connect</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
