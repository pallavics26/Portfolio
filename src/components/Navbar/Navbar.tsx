import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-md text-white z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-5">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold hover:text-sky-400 transition"
        >
          Pallavi
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
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

        {/* Desktop Resume */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block border border-sky-500 px-4 py-2 rounded-lg text-sky-400 hover:bg-sky-500 hover:text-white transition"
        >
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-700">
          <ul className="flex flex-col items-center gap-6 py-6">

            <li>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-sky-400"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                onClick={() => setMenuOpen(false)}
                className="hover:text-sky-400"
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="hover:text-sky-400"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#education"
                onClick={() => setMenuOpen(false)}
                className="hover:text-sky-400"
              >
                Education
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-sky-400"
              >
                Contact
              </a>
            </li>

            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="border border-sky-500 px-5 py-2 rounded-lg text-sky-400 hover:bg-sky-500 hover:text-white transition"
              >
                Resume
              </a>
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
