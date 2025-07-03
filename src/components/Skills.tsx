import { useState } from "react";
import {
  Code,
  Database,
  Brain,
  Cloud,
  Smartphone,
  GitBranch,
  Server,
  Cpu,
  Zap,
} from "lucide-react";

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Mastery",
      color: "from-cyan-400 to-blue-500",
      bgColor: "from-cyan-500/10 to-blue-500/10",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Three.js", level: 80 },
      ],
    },
    {
      icon: Server,
      title: "Backend Architecture",
      color: "from-green-400 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10",
      skills: [
        { name: "Node.js", level: 95 },
        { name: "Python", level: 90 },
        { name: "FastAPI", level: 85 },
        { name: "Microservices", level: 90 },
      ],
    },
    {
      icon: Database,
      title: "Data Engineering",
      color: "from-purple-400 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "Redis", level: 90 },
        { name: "Elasticsearch", level: 80 },
        { name: "Apache Kafka", level: 75 },
      ],
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      color: "from-orange-400 to-red-500",
      bgColor: "from-orange-500/10 to-red-500/10",
      skills: [
        { name: "TensorFlow", level: 90 },
        { name: "PyTorch", level: 85 },
        { name: "Hugging Face", level: 95 },
        { name: "Computer Vision", level: 80 },
        { name: "NLP", level: 85 },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "from-indigo-400 to-purple-500",
      bgColor: "from-indigo-500/10 to-purple-500/10",
      skills: [
        { name: "AWS", level: 90 },
        { name: "Docker", level: 95 },
        { name: "Kubernetes", level: 85 },
        { name: "Terraform", level: 80 },
        { name: "CI/CD", level: 90 },
        { name: "GCP", level: 85 },
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Innovation",
      color: "from-teal-400 to-green-500",
      bgColor: "from-teal-500/10 to-green-500/10",
      skills: [
        { name: "React Native", level: 85 },
        { name: "iOS Native", level: 75 },
        { name: "PWA", level: 90 },
        { name: "Expo", level: 85 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-full px-6 py-2 mb-6">
            <Zap className="h-4 w-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">
              My expertise
            </span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Skills &{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive arsenal of cutting-edge technologies and frameworks,
            constantly evolving with the latest innovations in software
            development and AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative h-full"
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl blur`}
              ></div>
              <div
                className={`relative bg-gradient-to-br ${category.bgColor} backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 group-hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:scale-105 h-full flex flex-col`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <category.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-6">
                  {category.title}
                </h3>

                <div className="space-y-4 flex-grow">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-xs text-cyan-400 font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${
                            category.color
                          } rounded-full transition-all duration-1000 ease-out ${
                            hoveredSkill === index ? "animate-pulse" : ""
                          }`}
                          style={{
                            width:
                              hoveredSkill === index ? `${skill.level}%` : "0%",
                            transitionDelay: `${skillIndex * 100}ms`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              number: "50+",
              label: "Projects Completed",
              icon: Code,
              color: "from-cyan-400 to-blue-500",
            },
            {
              number: "5+",
              label: "Years Experience",
              icon: Zap,
              color: "from-purple-400 to-pink-500",
            },
            {
              number: "20+",
              label: "Technologies Mastered",
              icon: Cpu,
              color: "from-green-400 to-cyan-500",
            },
            {
              number: "100%",
              label: "Client Satisfaction",
              icon: GitBranch,
              color: "from-orange-400 to-red-500",
            },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div
                className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div
                className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
              >
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
