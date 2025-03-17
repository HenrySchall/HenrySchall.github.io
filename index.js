import React from 'react';
import { Github, Mail, Linkedin, ExternalLink, Star, GitFork } from 'lucide-react';

function App() {
  const projects = [
    {
      name: "Project One",
      description: "A full-stack web application built with React and Node.js",
      stars: 45,
      forks: 12,
      language: "TypeScript",
      languageColor: "bg-blue-400"
    },
    {
      name: "Project Two",
      description: "Mobile-first responsive dashboard with real-time data",
      stars: 32,
      forks: 8,
      language: "JavaScript",
      languageColor: "bg-yellow-300"
    },
    {
      name: "Project Three",
      description: "Open-source library for data visualization",
      stars: 128,
      forks: 24,
      language: "Python",
      languageColor: "bg-green-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="h-[40vh] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80&w=2070")'
        }}
      >
        <div className="absolute inset-0 bg-gray-900 bg-opacity-70">
          <div className="container mx-auto px-6 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">John Doe</h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-6">Full Stack Developer</p>
              <div className="flex space-x-4">
                <a href="https://github.com" className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com" className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:contact@example.com" className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            I'm a passionate full-stack developer with 5 years of experience building web applications.
            I specialize in React, Node.js, and cloud technologies. Currently working on open-source
            projects and contributing to the developer community.
          </p>
        </div>

        {/* Projects Section */}
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full ${project.languageColor} mr-2`}></div>
                  {project.language}
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-1" />
                  {project.stars}
                </div>
                <div className="flex items-center">
                  <GitFork className="w-4 h-4 mr-1" />
                  {project.forks}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
