import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative mt-10 rounded-3xl bg-brand-dark text-white overflow-hidden"
    >
      {/* background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-indigo/30 via-transparent to-brand-purple/30"></div>

      <div className="relative px-10 py-28 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          AI That Works Like Your Best Employee
        </h1>

        <p className="mt-6 text-lg text-gray-300">
          Ryze helps businesses automate conversations, workflows,
          and customer engagement using AI agents.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          {/* Get Started (you can later route this if needed) */}
          <button
            className="bg-white text-black px-7 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            Get Started
          </button>

          {/* Book a Demo → navigates to page */}
          <button
            onClick={() => navigate("/book-demo")}
            className="border border-white/40 px-7 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition"
          >
            Book a Demo
          </button>
        </div>
      </div>
    </motion.section>
  );
}
