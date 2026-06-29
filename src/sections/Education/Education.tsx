import FadeIn from "../../components/Motion/FadeIn";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";

const Education = () => {
  return (
    <FadeIn>
    <section
  id="education"
  className="min-h-screen bg-slate-800 text-white px-8 py-20"
>
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center">
          Education
        </h2>

        <p className="mt-6 text-lg text-gray-300 text-center max-w-2xl mx-auto">
          My academic journey and current education.
        </p>

        {/* Education Card */}
        <div className="mt-16 flex justify-center">

          <div className="w-full md:w-3/4 bg-slate-900 border border-slate-700 rounded-xl p-8 transition duration-300 hover:-translate-y-2 hover:border-sky-500 hover:shadow-xl">

            <div className="flex items-center gap-4">
              <div className="bg-sky-500 p-4 rounded-full">
                <FaGraduationCap className="text-2xl text-white" />
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  Bachelor of Technology (B.Tech)
                </h3>

                <p className="text-sky-400 text-lg">
                  Computer Science & Engineering
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-4">

              <p className="text-gray-300 text-lg">
                <span className="font-semibold text-white">
                  University:
                </span>{" "}
                GLA University, Mathura
              </p>

              <div className="flex items-center gap-3 text-gray-300">
                <FaCalendarAlt className="text-sky-400" />
                <span>2023 – 2027</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
    </FadeIn>
  );
};

export default Education;