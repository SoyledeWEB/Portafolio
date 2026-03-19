import { Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string[];
}

interface ExperienceProps {
  experiences: ExperienceItem[];
}

export function Experience({ experiences }: ExperienceProps) {
  return (
    <section className="w-full bg-white rounded-xl shadow-sm p-8 md:p-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl mb-8 text-gray-900">Work Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="border-l-2 border-[#E10600] pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl text-gray-900">{exp.role}</h3>
                <div className="flex items-center gap-2 text-gray-600 text-sm mt-1 md:mt-0">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
              </div>
              <p className="text-[#E10600] mb-3">{exp.company}</p>
              <ul className="space-y-2 text-gray-600">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex gap-2 leading-relaxed">
                    <span className="text-[#E10600] mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
