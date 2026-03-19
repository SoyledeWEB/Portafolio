interface SkillCategory {
  title: string;
  skills: string[];
}

interface SkillsProps {
  categories: SkillCategory[];
}

export function Skills({ categories }: SkillsProps) {
  return (
    <section className="w-full bg-white rounded-xl shadow-sm p-8 md:p-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl mb-8 text-gray-900">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-lg mb-4 text-[#E10600]">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="inline-flex items-center px-3 py-1.5 rounded-full text-sm bg-gray-100 text-gray-700 hover:bg-[#000000] hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
