import FadeIn from "../../components/Motion/FadeIn";
import { skillCategories } from "../../data/skills";

const Skills = () => {
  return (
    <FadeIn>
    <section
  id="skills"
 className="min-h-screen bg-slate-900 text-white px-8 py-20"
>
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center">
          Skills
        </h2>

        {/* Description */}
        <p className="mt-6 text-lg text-gray-300 text-center max-w-2xl mx-auto">
          Technologies and tools I use to build responsive, scalable, and modern
          full-stack web applications.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">

          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-slate-800 border border-slate-700 rounded-xl p-6 transition duration-300 hover:-translate-y-2 hover:border-sky-500 hover:shadow-xl"
            >
              <h3 className="text-2xl font-semibold mb-5">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <span
                      key={skill.name}
                      className="flex items-center gap-2 bg-slate-700 px-4 py-2 rounded-full transition-all duration-300 hover:bg-sky-500 hover:scale-105 cursor-default"
                    >
                      <Icon
                        className="text-xl"
                        style={{ color: skill.color }}
                      />

                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
    </FadeIn>
  );
};

export default Skills;