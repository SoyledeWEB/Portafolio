import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  url: string;
}

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section className="w-full bg-white rounded-xl shadow-sm p-8 md:p-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl mb-8 text-gray-900">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl mb-3 text-gray-900">{project.name}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs bg-gray-100 text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* CTA Button */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#E10600] text-white rounded-lg hover:bg-[#000000] transition-colors"
              >
                See project
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
