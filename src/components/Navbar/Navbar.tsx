const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-md text-white z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-10 py-5">

        <a
          href="#home"
          className="text-xl font-bold hover:text-sky-400 transition"
        >
          Pallavi
        </a>

        <ul className="flex gap-8">
          <li>
            <a href="#about" className="hover:text-sky-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-sky-400 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-sky-400 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#education" className="hover:text-sky-400 transition">
              Education
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-sky-400 transition">
              Contact
            </a>
          </li>
        </ul>

        <a
          href="/resume.pdf"
          className="border border-sky-500 px-4 py-2 rounded-lg text-sky-400 hover:bg-sky-500 hover:text-white transition"
        >
          Resume
        </a>

      </div>
    </nav>
  );
};

export default Navbar;