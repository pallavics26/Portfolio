const Navbar = () => {
  return (
    <nav className="h-20 bg-slate-900 text-white flex items-center justify-between px-10">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-sky-400">
        Pallavi
      </h1>

      {/* Navigation Links */}
      <ul className="flex gap-8 text-gray-300">
        <li className="hover:text-sky-400 cursor-pointer">About</li>
        <li className="hover:text-sky-400 cursor-pointer">Skills</li>
        <li className="hover:text-sky-400 cursor-pointer">Projects</li>
        <li className="hover:text-sky-400 cursor-pointer">Education</li>
        <li className="hover:text-sky-400 cursor-pointer">Contact</li>
      </ul>

      {/* Resume Button */}
      <button className="border border-sky-500 text-sky-400 px-5 py-2 rounded-lg hover:bg-sky-500 hover:text-white transition">
        Resume
      </button>
    </nav>
  );
};

export default Navbar;