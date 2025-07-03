import React from 'react';
import { Calendar, MapPin, Building, Award, Zap, TrendingUp, Users, Code } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior AI Engineer",
      company: "TechCorp AI Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description: "Leading breakthrough AI initiatives and architecting next-generation machine learning systems that power millions of user interactions daily.",
      achievements: [
        "Architected ML infrastructure processing 50M+ daily predictions with 99.9% uptime",
        "Led cross-functional team of 12 engineers delivering 3 major AI products",
        "Reduced model inference latency by 75% through advanced optimization techniques",
        "Published 5 research papers in top-tier AI conferences (NeurIPS, ICML)"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "Kubernetes", "AWS", "MLOps"],
      gradient: "from-purple-500 to-pink-500",
      icon: Code
    },
    {
      title: "Full-Stack Architect",
      company: "InnovateLab",
      location: "New York, NY",
      period: "2020 - 2022",
      type: "Full-time",
      description: "Designed and built scalable cloud-native applications serving Fortune 500 clients, with focus on performance, security, and developer experience.",
      achievements: [
        "Architected microservices platform handling 500M+ API requests monthly",
        "Implemented zero-downtime deployment strategy reducing release time by 90%",
        "Mentored 8 developers and established engineering best practices",
        "Delivered 20+ enterprise applications with 99.95% uptime SLA"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS", "TypeScript"],
      gradient: "from-cyan-500 to-blue-500",
      icon: Building
    },
    {
      title: "Lead Software Engineer",
      company: "StartupXYZ",
      location: "Austin, TX",
      period: "2019 - 2020",
      type: "Full-time",
      description: "Spearheaded the technical transformation of a fintech startup from MVP to Series A, building the core platform that attracted 100K+ users.",
      achievements: [
        "Built real-time payment processing system handling $50M+ transactions",
        "Scaled platform from 1K to 100K+ active users with 99.9% uptime",
        "Implemented advanced fraud detection reducing false positives by 60%",
        "Led technical due diligence for $10M Series A funding round"
      ],
      technologies: ["Vue.js", "Express.js", "MongoDB", "Redis", "Stripe API", "WebSockets"],
      gradient: "from-green-500 to-teal-500",
      icon: TrendingUp
    }
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Stanford University",
      location: "Stanford, CA",
      period: "2017 - 2019",
      specialization: "Artificial Intelligence & Machine Learning",
      gpa: "3.9/4.0",
      gradient: "from-red-500 to-orange-500"
    },
    {
      degree: "Bachelor of Science in Computer Engineering",
      school: "UC Berkeley",
      location: "Berkeley, CA",
      period: "2013 - 2017",
      specialization: "Software Engineering",
      gpa: "3.8/4.0",
      gradient: "from-blue-500 to-indigo-500"
    }
  ];

  const certifications = [
    { name: "AWS Certified Solutions Architect - Professional", color: "from-orange-400 to-red-500" },
    { name: "Google Cloud Professional ML Engineer", color: "from-blue-400 to-cyan-500" },
    { name: "Kubernetes Certified Application Developer", color: "from-purple-400 to-pink-500" },
    { name: "TensorFlow Developer Certificate", color: "from-green-400 to-teal-500" }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-full px-6 py-2 mb-6">
            <Zap className="h-4 w-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">My journey</span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Experience & <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A track record of delivering exceptional results at innovative companies 
            and world-class educational institutions.
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-12 flex items-center">
            <Building className="h-8 w-8 mr-3 text-cyan-400" />
            Professional Experience
          </h3>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${exp.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl blur`}></div>
                
                <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 group-hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:scale-[1.02]">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className={`w-12 h-12 bg-gradient-to-r ${exp.gradient} rounded-lg flex items-center justify-center`}>
                          <exp.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-white">{exp.title}</h4>
                          <div className="text-cyan-400 font-semibold text-lg">{exp.company}</div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                        <span className={`bg-gradient-to-r ${exp.gradient} bg-opacity-20 text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">{exp.description}</p>
                  
                  <div className="mb-6">
                    <h5 className="font-semibold text-white mb-4 flex items-center">
                      <Award className="h-5 w-5 mr-2 text-yellow-400" />
                      Key Achievements
                    </h5>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-2 text-gray-300">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Award className="h-8 w-8 mr-3 text-purple-400" />
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="group relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${edu.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl blur`}></div>
                  
                  <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 group-hover:border-purple-500/30 transition-all duration-300">
                    <div className={`w-12 h-12 bg-gradient-to-r ${edu.gradient} rounded-lg flex items-center justify-center mb-4`}>
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                    <div className="text-purple-400 font-semibold mb-3">{edu.school}</div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-2">
                      <span className="text-cyan-400 font-semibold">Specialization:</span> {edu.specialization}
                    </p>
                    <p className="text-gray-300 text-sm">
                      <span className="text-green-400 font-semibold">GPA:</span> {edu.gpa}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Award className="h-8 w-8 mr-3 text-green-400" />
              Certifications
            </h3>
            
            <div className="space-y-4 mb-8">
              {certifications.map((cert, index) => (
                <div key={index} className="group relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg blur`}></div>
                  
                  <div className="relative bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700/50 group-hover:border-green-500/30 transition-all duration-300 flex items-center space-x-4">
                    <div className={`w-10 h-10 bg-gradient-to-r ${cert.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Award className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-gray-300 font-medium">{cert.name}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Stats */}
            <div className="bg-gradient-to-br from-gray-800/50 to-purple-900/20 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    5+
                  </div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent mb-2">
                    4
                  </div>
                  <div className="text-gray-400 text-sm">Certifications</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;