import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-8 py-10">

        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Left */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold">
              Pallavi Pandey
            </h3>

            <p className="text-gray-400 mt-2">
              Full Stack Developer • Problem Solver
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6 text-2xl">

            <a
              href="https://github.com/pallavics26"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/pallavipcs27/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:pallavipandey.2511@gmail.com"
              className="hover:text-sky-400 transition duration-300"
            >
              <FaEnvelope />
            </a>

            <a
              href="#home"
              className="hover:text-sky-400 transition duration-300"
              title="Back to Top"
            >
              <FaArrowUp />
            </a>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-500">

          <p>
            © {new Date().getFullYear()} Pallavi Pandey. All Rights Reserved.
          </p>

          <p>
            Built with React • TypeScript • Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;