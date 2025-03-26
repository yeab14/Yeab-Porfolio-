import * as React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="relative w-full p-6 bg-[#0f0f0f] rounded-2xl border border-[#2d2d2d] shadow-[0_4px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_6px_60px_rgba(0,0,0,0.7)] transition-all duration-500 overflow-hidden">
      <div className="relative p-6 rounded-xl border border-[#333] bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]">
        <h2 className="text-center text-3xl lg:text-4xl font-bold text-gray-100 tracking-wide mb-4 border-b border-[#2d2d2d] pb-3">
          {project.name}
        </h2>

        <div className="overflow-hidden px-4 lg:px-8 py-6 lg:py-8 bg-[#141414] rounded-xl shadow-inner">
          <pre className="font-mono text-base text-[#d0d0d0] leading-relaxed whitespace-pre-wrap break-words">
            <span className="text-pink-500">const </span>
            <span className="text-white">project </span>
            <span className="text-pink-500">= </span>
            {'{'}

            {'\n  '}
            <span className="text-white">name</span>: <span className="text-amber-300">&apos;{project.name}&apos;</span>,

            {'\n  '}
            <span className="text-white">tools</span>: [
            {project.tools.map((tool, index) => (
              <span key={index}>
                <span className="text-amber-300">&apos;{tool}&apos;</span>
                {index < project.tools.length - 1 ? <span>, </span> : ''}
              </span>
            ))} ],

            {'\n  '}
            <span className="text-white">myRole</span>: <span className="text-orange-400">&apos;{project.role}&apos;</span>,

            {'\n  '}
            <span className="text-white">description</span>: <span className="text-cyan-400">&quot;{project.description}&quot;</span>

            {'\n'}
            {'}'};
          </pre>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

