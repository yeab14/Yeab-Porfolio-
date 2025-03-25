// @flow strict

import * as React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="relative w-full p-4 bg-gradient-to-r from-[#121212] to-[#090909] rounded-lg border border-[#1b2c68a0] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
      {/* Project Name Section */}
      <div className="flex items-center justify-between mb-4">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-purple-500 to-violet-600"></div>
        <p className="text-[#8a2be2] font-semibold text-xl lg:text-1xl mx-3">
          {project.name}
        </p>
        <div className="h-[2px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      
      {/* Project Status Indicator */}
      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 flex gap-2">
        <div className="h-3 w-3 rounded-full bg-red-400 animate-pulse"></div>
        <div className="h-3 w-3 rounded-full bg-orange-400 animate-pulse"></div>
        <div className="h-3 w-3 rounded-full bg-green-200 animate-pulse"></div>
      </div>

      {/* Code Display Section */}
      <div className="overflow-hidden border-t-2 border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-sm lg:text-base text-[#b0b0b0]">
          <div className="blink">
            <span className="text-pink-500 mr-2">const</span>
            <span className="text-white mr-2">project</span>
            <span className="text-pink-500 mr-2">=</span>
            <span className="text-gray-400">{'{'}</span>
          </div>

          <div className="ml-6 lg:ml-10">
            <span className="text-white mr-2">name:</span>
            <span className="text-gray-400">{`'`}</span>
            <span className="text-amber-300">{project.name}</span>
            <span className="text-gray-400">{`',`}</span>
          </div>

          <div className="ml-6 lg:ml-10">
            <span className="text-white mr-2">tools:</span>
            <span className="text-gray-400">{` [`}</span>
            {project.tools.map((tag, i) => (
              <React.Fragment key={i}>
                <span className="text-amber-300">{tag}</span>
                {i !== project.tools.length - 1 && (
                  <span className="text-gray-400">{`, `}</span>
                )}
              </React.Fragment>
            ))}
            <span className="text-gray-400">{`]`}</span>
          </div>

          <div className="ml-6 lg:ml-10">
            <span className="text-white mr-2">myRole:</span>
            <span className="text-orange-400">{project.role}</span>
            <span className="text-gray-400">{`, `}</span>
          </div>

          <div className="ml-6 lg:ml-10">
            <span className="text-white mr-2">Description:</span>
            <span className="text-cyan-400">{' ' + project.description}</span>
            <span className="text-gray-400">{`, `}</span>
          </div>

          <div className="mt-4">
            <span className="text-gray-400">{`};`}</span>
          </div>
        </code>
      </div>

   
    </div>
  );
};

export default ProjectCard;
