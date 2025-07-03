import { Code, Brain, Target, Zap, Rocket } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Brain,
      title: "AI/ML Engineering",
      description:
        "Developing intelligent systems with deep learning, computer vision, and transformer architectures",
      color: "from-cyan-400 to-blue-500",
    },
    {
      icon: Code,
      title: "MLOps & Infrastructure",
      description:
        "Building scalable ML pipelines with Docker, Kubernetes, and cloud platforms for production deployment",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: Rocket,
      title: "Full Stack Development",
      description:
        "Building scalable web applications with React, FastAPI, and modern development frameworks",
      color: "from-green-400 to-cyan-500",
    },
    {
      icon: Target,
      title: "Research & Innovation",
      description:
        "Contributing to deepfake detection research and open-source ML frameworks",
      color: "from-orange-400 to-red-500",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/50 to-gray-900 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-full px-6 py-2 mb-6">
            <Zap className="h-4 w-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">
              Get to know me
            </span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl  max-w-3xl mx-auto text-white">
            I'm a passionate AI Engineer specializing in machine learning
            systems, from <span className="">agricultural diagnostics</span> to
            <span className=""> advanced deepfake detection</span>.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-8">My Journey</h3>
            <div className="space-y-6 text-white leading-relaxed">
              <p className="text-lg">
                My journey began with a{" "}
                <span className="t">foundation in engineering principles</span>,
                but I've evolved beyond traditional boundaries to embrace the
                <span className="">
                  transformative power of artificial intelligence
                </span>
                . Where others see complexity, I see patterns waiting to be
                discovered.
              </p>
              <p className="text-lg">
                I thrive on <span className=" ">emerging technologies</span> -
                leveraging modern frameworks like PyTorch, TensorFlow, and
                transformer architectures to solve complex problems. From
                <span className=" ">
                  {" "}
                  MLOps pipelines and cloud deployment
                </span>{" "}
                to exploring the frontiers of LLMs and multi-modal AI systems.
              </p>
              <p className="text-lg">
                My expertise spans the full ML lifecycle: from{" "}
                <span className=" ">model development</span>
                using PyTorch and TensorFlow to{" "}
                <span className=" ">production deployment</span>
                with MLOps pipelines on cloud platforms.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-gray-800/50 to-purple-900/50 backdrop-blur-sm rounded-3xl p-8 border border-cyan-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-3xl"></div>
              <div className="relative text-center">
                <div className="w-40 h-40 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-300 to-purple-400 animate-pulse"></div>
                  <span className="relative text-5xl font-bold text-white">
                    MN
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-4 text-cyan-400">
                    <Code className="h-5 w-5" />
                    <span className="font-semibold">
                      2+ Years ML Experience
                    </span>
                  </div>
                  <div className="flex items-center justify-center space-x-4 text-purple-400">
                    <Brain className="h-5 w-5" />
                    <span className="font-semibold">AI/ML Specialist</span>
                  </div>
                  <div className="flex items-center justify-center space-x-4 text-green-400">
                    <Rocket className="h-5 w-5" />
                    <span className="font-semibold">
                      5+ Full stack developer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 group-hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:scale-105 h-full flex flex-col">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
