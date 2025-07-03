import React, { useState } from 'react';
import { ExternalLink, Github, Brain, Code, Smartphone, Cloud, Zap, Star } from 'lucide-react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "NeuroChat AI Platform",
      description: "Revolutionary AI-powered conversational platform with advanced NLP capabilities, real-time learning, and multi-modal interactions. Processes 1M+ conversations daily with 99.9% uptime.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Python", "TensorFlow", "WebRTC", "Redis", "Kubernetes"],
      category: "AI/ML",
      icon: Brain,
      gradient: "from-purple-500 to-pink-500",
      featured: true,
      metrics: ["1M+ Users", "99.9% Uptime", "50ms Response"],
      links: { live: "#", github: "#" }
    },
    {
      title: "CloudScale Infrastructure",
      description: "Next-generation cloud orchestration platform with auto-scaling, cost optimization, and intelligent resource management. Reduces infrastructure costs by 40% while improving performance.",
      image: "https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Go", "Kubernetes", "Terraform", "AWS", "Prometheus", "React"],
      category: "DevOps",
      icon: Cloud,
      gradient: "from-cyan-500 to-blue-500",
      featured: true,
      metrics: ["40% Cost Reduction", "10x Faster Deploy", "Zero Downtime"],
      links: { live: "#", github: "#" }
    },
    {
      title: "VisionAI Analytics",
      description: "Advanced computer vision system for real-time object detection, behavior analysis, and predictive insights. Powers smart city initiatives and retail analytics worldwide.",
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["PyTorch", "OpenCV", "FastAPI", "React", "PostgreSQL", "Docker"],
      category: "AI/ML",
      icon: Brain,
      gradient: "from-green-500 to-teal-500",
      featured: false,
      metrics: ["95% Accuracy", "Real-time Processing", "Global Scale"],
      links: { live: "#", github: "#" }
    },
    {
      title: "QuantumTrade Platform",
      description: "High-frequency trading platform with microsecond latency, advanced risk management, and AI-driven market predictions. Handles billions in daily transactions.",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Rust", "React", "WebSocket", "TimescaleDB", "Redis", "Kafka"],
      category: "Full-Stack",
      icon: Code,
      gradient: "from-orange-500 to-red-500",
      featured: true,
      metrics: ["<1ms Latency", "$10B+ Volume", "24/7 Uptime"],
      links: { live: "#", github: "#" }
    },
    {
      title: "MindfulAR Mobile",
      description: "Augmented reality wellness app with AI-powered meditation guidance, biometric integration, and personalized mental health insights. Featured in App Store.",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React Native", "ARKit", "TensorFlow Lite", "Firebase", "HealthKit"],
      category: "Mobile",
      icon: Smartphone,
      gradient: "from-indigo-500 to-purple-500",
      featured: false,
      metrics: ["500K+ Downloads", "4.9★ Rating", "App Store Featured"],
      links: { live: "#", github: "#" }
    },
    {
      title: "DataFlow Pipeline",
      description: "Real-time data processing pipeline handling petabytes of data with ML-powered anomaly detection, automated scaling, and intelligent routing capabilities.",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Apache Spark", "Kafka", "Python", "Elasticsearch", "Grafana", "AWS"],
      category: "DevOps",
      icon: Cloud,
      gradient: "from-pink-500 to-rose-500",
      featured: false,
      metrics: ["Petabyte Scale", "Real-time Processing", "99.99% Reliability"],
      links: { live: "#", github: "#" }
    }
  ];

  const categories = ["All", "AI/ML", "Full-Stack", "Mobile", "DevOps"];
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-full px-6 py-2 mb-6">
            <Zap className="h-4 w-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">My work</span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge solutions that push the boundaries of technology, 
            from AI-powered platforms to scalable cloud architectures.
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
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50 hover:border-cyan-500/30'
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
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl blur`}></div>
              
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
                  <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-lg flex items-center justify-center`}>
                    <project.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                  
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
                      className={`flex items-center space-x-2 bg-gradient-to-r ${project.gradient} text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105`}
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo</span>
                    </a>
                    <a 
                      href={project.links.github}
                      className="flex items-center space-x-2 bg-gray-700/50 text-gray-300 px-4 py-2 rounded-lg font-medium hover:bg-gray-600/50 transition-all duration-300 border border-gray-600/30"
                    >
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="#" 
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300"
          >
            <Github className="h-6 w-6" />
            <span>Explore All Projects</span>
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;