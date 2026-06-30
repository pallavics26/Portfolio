import FadeIn from "../../components/Motion/FadeIn";

const Hero = () => {
  return (
    <FadeIn>
      <section
        id="home"
        className="relative min-h-screen bg-slate-900 flex flex-col justify-center items-center text-center px-6 overflow-hidden"
      >
        {/* Soft Background Glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-sky-500/15 blur-[160px]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10">
         <p className="text-sky-400 font-medium flex items-center justify-center gap-2">
  Hi, I'm
  <span className="wave-hand">👋</span>
</p>

          <h1 className="mt-4 text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-white via-sky-300 to-sky-500 bg-clip-text text-transparent">
  Pallavi Pandey
</h1>

          <h2 className="mt-4 text-2xl text-gray-300">
            Full Stack Developer
            <br />
            Problem Solver
          </h2>

          <p className="mt-6 max-w-xl text-gray-400 leading-8">
            I build responsive and scalable web applications using modern web
            technologies.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
             className="bg-sky-500 text-white px-6 py-3 rounded-lg shadow-lg shadow-sky-500/30 hover:bg-sky-600 hover:scale-105 transition-all duration-300"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-sky-500 text-sky-400 px-6 py-3 rounded-lg hover:bg-sky-500 hover:text-white transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </FadeIn>
  );
};

export default Hero;