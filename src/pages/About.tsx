import React from 'react';
import { Code, Zap, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About RouteApp</h1>
          <p className="text-xl text-gray-600">
            Learn more about our mission and the technology behind this application
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              RouteApp is a demonstration of modern client-side routing using React Router DOM. 
              This application showcases how to build a seamless single-page application with 
              multiple views and smooth navigation between them.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Built with React 18, TypeScript, and Tailwind CSS, this project demonstrates 
              best practices in modern web development, including responsive design, 
              accessible navigation, and clean code architecture.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <Code className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Clean Code</h3>
                <p className="text-gray-600">Well-structured, maintainable code with TypeScript</p>
              </div>
              <div className="text-center p-6 bg-teal-50 rounded-xl">
                <Zap className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Performance</h3>
                <p className="text-gray-600">Optimized for speed with modern React patterns</p>
              </div>
              <div className="text-center p-6 bg-pink-50 rounded-xl">
                <Heart className="h-12 w-12 text-pink-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">User Experience</h3>
                <p className="text-gray-600">Designed with users in mind for maximum usability</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Stack */}
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Stack</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Frontend</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  React 18 with TypeScript
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  React Router DOM v6
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Tailwind CSS
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Lucide React Icons
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Tools & Build</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                  Vite for fast development
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                  ESLint for code quality
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                  PostCSS with Autoprefixer
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                  Modern ES6+ JavaScript
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;