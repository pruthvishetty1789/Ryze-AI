import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function CTA() {
  const navigate = useNavigate();

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative py-28 mb-32 rounded-3xl overflow-hidden
                 bg-gradient-to-br from-teal-200 via-cyan-200 to-blue-300"
    >
      {/* soft decorative glow */}
      <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-white/60 blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-white/40 blur-3xl"></div>

      <div className="relative text-center max-w-3xl mx-auto px-6 text-gray-900">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Start Scaling With AI Today
        </h2>

        <p className="mt-6 text-lg text-gray-700">
          Let Ryze automate conversations, workflows, and customer engagement —
          so your team can focus on growth.
        </p>

        <button
          onClick={() => navigate("/book-demo")}
          className="mt-10 inline-flex items-center gap-2
                     rounded-2xl bg-gray-900 px-10 py-4
                     text-lg font-semibold text-white
                     hover:bg-gray-800 transition shadow-xl"
        >
          Book a Demo →
        </button>
      </div>
    </motion.section>
  );
}
