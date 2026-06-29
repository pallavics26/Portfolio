import FadeIn from "../../components/Motion/FadeIn";
import {
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
  FaBullseye,
} from "react-icons/fa";

const About = () => {
  return (
    <FadeIn>
    <section
  id="about"
  className="min-h-screen bg-slate-800 text-white px-8 py-20"
>
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center">
          About Me
        </h2>

        {/* Paragraph */}
        <p className="mt-8 text-lg text-gray-300 leading-8 text-center max-w-3xl mx-auto">
          Hi, I'm Pallavi Pandey, a final-year B.Tech Computer Science student
          at GLA University. I enjoy building full-stack web applications and
          solving DSA problems. I'm currently building full-stack web
          applications, strengthening my problem-solving skills through DSA, and
          preparing for software engineering roles.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">

          {/* Education */}
          <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl transition duration-300 hover:-translate-y-2 hover:border-sky-500 hover:shadow-xl cursor-default">
            <FaGraduationCap className="text-sky-400 text-3xl mb-4" />

            <h3 className="text-2xl font-semibold mb-3">
              Education
            </h3>

            <p className="text-gray-300">
              B.Tech Computer Science
            </p>

            <p className="text-gray-400 mt-1">
              GLA University
            </p>
          </div>

          {/* Tech Stack */}
          <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl transition duration-300 hover:-translate-y-2 hover:border-sky-500 hover:shadow-xl cursor-default">
            <FaLaptopCode className="text-sky-400 text-3xl mb-4" />

            <h3 className="text-2xl font-semibold mb-3">
              Tech Stack
            </h3>

            <p className="text-gray-300">
              Java, React, Node.js, MongoDB, TypeScript
            </p>
          </div>

          {/* Problem Solving */}
          <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl transition duration-300 hover:-translate-y-2 hover:border-sky-500 hover:shadow-xl cursor-default">
            <FaCode className="text-sky-400 text-3xl mb-4" />

            <h3 className="text-2xl font-semibold mb-3">
              Problem Solving
            </h3>

            <p className="text-gray-300">
              DSA • LeetCode • Logical Thinking
            </p>
          </div>

          {/* Career Goal */}
          <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl transition duration-300 hover:-translate-y-2 hover:border-sky-500 hover:shadow-xl cursor-default">
            <FaBullseye className="text-sky-400 text-3xl mb-4" />

            <h3 className="text-2xl font-semibold mb-3">
              Career Goal
            </h3>

            <p className="text-gray-300">
              Software Engineer
            </p>

            <p className="text-gray-400 mt-1">
              Full Stack Developer
            </p>
          </div>

        </div>
      </div>
    </section>
    </FadeIn>
  );
};

export default About;