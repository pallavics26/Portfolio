const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-900 flex flex-col justify-center items-center text-center px-6"
    >
      <p className="text-sky-400 font-medium">
        Hi, I'm 👋
      </p>

      <h1 className="mt-4 text-5xl md:text-6xl font-bold text-white">
        Pallavi Pandey
      </h1>

      <h2 className="mt-4 text-2xl text-gray-300">
        Full Stack Developer
        <br />
        Problem Solver
      </h2>

      <p className="mt-6 max-w-xl text-gray-400 leading-8">
        I build responsive and scalable web applications
        <br />
        using modern web technologies.
      </p>

      <div className="mt-8 flex gap-4">
        <button className="bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-600 transition">
          View Projects
        </button>

        <button className="border border-sky-500 text-sky-400 px-6 py-3 rounded-lg hover:bg-sky-500 hover:text-white transition">
          Download Resume
        </button>
      </div>
    </section>
  );
};

export default Hero;