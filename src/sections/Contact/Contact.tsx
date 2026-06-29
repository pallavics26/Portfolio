import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
  id="contact"
  className="min-h-screen bg-slate-900 text-white px-8 py-20"
>
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center">
          Contact Me
        </h2>

        <p className="mt-6 text-lg text-gray-300 text-center max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, collaborations, or
          interesting projects. Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12 mt-16">

          {/* Left Side */}
          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-sky-400 text-2xl" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-400">
                  pallavipandey.2511@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaGithub className="text-sky-400 text-2xl" />
              <div>
                <h3 className="font-semibold">GitHub</h3>
                <a
                  href="https://github.com/pallavics26"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-sky-400 transition"
                >
                  github.com/pallavics26
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaLinkedin className="text-sky-400 text-2xl" />
              <div>
                <h3 className="font-semibold">LinkedIn</h3>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-sky-400 transition"
                >
                 https://www.linkedin.com/in/pallavipcs27/
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-sky-400 text-2xl" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-400">
                  Uttar Pradesh, India
                </p>
              </div>
            </div>

          </div>

          {/* Right Side */}
          <form className="bg-slate-800 border border-slate-700 rounded-xl p-8 space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-sky-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-sky-500"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-sky-500"
            />

            <button
              className="w-full bg-sky-500 hover:bg-sky-600 transition py-3 rounded-lg font-semibold"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;