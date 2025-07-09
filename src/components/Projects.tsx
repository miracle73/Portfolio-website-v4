import { useState } from "react";
import {
  ExternalLink,
  Github,
  Brain,
  Code,
  Smartphone,
  Cloud,
  Zap,
  Star,
} from "lucide-react";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "TrueToForm 3D Body Scanning",
      description:
        "Revolutionary AI-powered 3D body scanning platform for fashion retail. Built mobile app and web integration enabling accurate body measurements using computer vision and machine learning. Implemented real-time avatar generation and fit prediction algorithms.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: [
        "React Native",
        "React",
        "TensorFlow",
        "Computer Vision",
        "WebRTC",
        "Node.js",
      ],
      category: "AI/ML",
      icon: Brain,
      gradient: "from-purple-500 to-pink-500",
      featured: true,
      metrics: ["500K+ Scans", "95% Accuracy", "Multi-Platform"],
      contribution:
        "Full-stack developer - Built mobile scanning interface and ML model integration",
      links: { live: "https://www.truetoform.fit/", github: "#" },
    },
    {
      title: "Bonsai Business Platform",
      description:
        "All-in-one freelance business management platform (formerly PDF2DOC). Developed core features for contract generation, invoicing, project management, and payment processing. Built scalable solutions serving 500K+ freelancers worldwide.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Stripe API",
        "Redux",
        "Express",
      ],
      category: "Full-Stack",
      icon: Code,
      gradient: "from-cyan-500 to-blue-500",
      featured: true,
      metrics: ["500K+ Users", "99.9% Uptime", "Enterprise Scale"],
      contribution:
        "Frontend developer - Built dashboard, invoicing system, and contract builder",
      links: { live: "https://www.hellobonsai.com/", github: "#" },
    },
    {
      title: "OceData Utility Platform",
      description:
        "Data and utility payment platform enabling users to purchase data bundles, convert airtime to cash, and pay utility bills. Implemented secure payment processing, user management, and real-time transaction handling with seamless user experience.",
      image:
        "https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: [
        "React",
        "FastAPI",
        "PostgreSQL",
        "Payment APIs",
        "Redis",
        "AWS",
      ],
      category: "Full-Stack",
      icon: Cloud,
      gradient: "from-green-500 to-teal-500",
      featured: true,
      metrics: ["Real-time Payments", "Multi-provider", "High Security"],
      contribution:
        "Backend developer - Built payment processing and API integrations",
      links: { live: "https://app.ocedata.com/", github: "#" },
    },
    {
      title: "Beels Mobile Application",
      description:
        "Feature-rich mobile application with advanced user interaction capabilities. Developed cross-platform solution using React Native with real-time features, push notifications, and seamless offline functionality. Optimized for performance and user engagement.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: [
        "React Native",
        "Firebase",
        "Redux",
        "AsyncStorage",
        "Push Notifications",
      ],
      category: "Mobile",
      icon: Smartphone,
      gradient: "from-indigo-500 to-purple-500",
      featured: false,
      metrics: ["Cross-platform", "Real-time Sync", "Offline Support"],
      contribution: "Mobile developer - Built core features and user interface",
      links: {
        live: "https://play.google.com/store/apps/details?id=com.beels.app",
        github: "#",
      },
    },
    {
      title: "DigitsToken Platform",
      description:
        "Cryptocurrency and digital token management platform with advanced security features. Implemented wallet functionality, transaction processing, and token management system. Built with enterprise-grade security and real-time market data integration.",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: [
        "React Native",
        "Blockchain APIs",
        "Cryptography",
        "Firebase",
        "WebSocket",
      ],
      category: "Mobile",
      icon: Smartphone,
      gradient: "from-orange-500 to-red-500",
      featured: false,
      metrics: ["Secure Wallet", "Real-time Data", "Multi-token Support"],
      contribution:
        "Mobile developer - Built wallet interface and security features",
      links: {
        live: "https://play.google.com/store/apps/details?id=com.digitstech.token",
        github: "#",
      },
    },
  ];

  const categories = ["All", "AI/ML", "Full-Stack", "Mobile"];
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-full px-6 py-2 mb-6">
            <Zap className="h-4 w-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">
              Client Projects
            </span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional freelance projects showcasing expertise in AI/ML,
            full-stack development, and mobile applications for established
            platforms and growing startups.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50 hover:border-cyan-500/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl blur`}
              ></div>

              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 group-hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:scale-[1.02]">
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                    <Star className="h-3 w-3" />
                    <span>FEATURED</span>
                  </div>
                )}

                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                  <div
                    className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-lg flex items-center justify-center`}
                  >
                    <project.icon className="h-6 w-6 text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Contribution */}
                  <div className="mb-4">
                    <span className="text-xs text-cyan-400 font-semibold">
                      My Role:{" "}
                    </span>
                    <span className="text-xs text-gray-300">
                      {project.contribution}
                    </span>
                  </div>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.metrics.map((metric, metricIndex) => (
                      <span
                        key={metricIndex}
                        className={`px-3 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-20 text-xs rounded-full font-semibold text-white border border-gray-600/30`}
                      >
                        {metric}
                      </span>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-4">
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 bg-gradient-to-r ${project.gradient} text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105`}
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>View Live</span>
                    </a>
                    <button
                      className="flex items-center space-x-2 bg-gray-700/50 text-gray-300 px-4 py-2 rounded-lg font-medium hover:bg-gray-600/50 transition-all duration-300 border border-gray-600/30 cursor-not-allowed opacity-60"
                      title="Code is proprietary to client"
                    >
                      <Github className="h-4 w-4" />
                      <span>Proprietary</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            These projects represent freelance work completed for established
            clients. Code repositories are proprietary, but live platforms
            demonstrate the quality and scale of work delivered.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300"
          >
            <span>Discuss Your Project</span>
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
