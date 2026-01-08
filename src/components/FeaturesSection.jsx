import { motion } from "framer-motion";

const features = [
  {
    title: "AI Sales Agents",
    desc: "Autonomous AI agents that engage leads, qualify prospects, and close conversations 24/7.",
    icon: "🤖",
  },
  {
    title: "Customer Support Automation",
    desc: "Instant, accurate support across chat and messaging channels without human intervention.",
    icon: "💬",
  },
  {
    title: "Workflow Automation",
    desc: "Automate repetitive operational tasks and let your team focus on growth.",
    icon: "⚡",
  },
  {
    title: "Real-time Analytics",
    desc: "Monitor conversations, performance, and revenue impact from a single dashboard.",
    icon: "📊",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-28 relative">
      {/* subtle background glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50/60 to-transparent"></div>

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Built to Scale With You
        </h2>
        <p className="mt-5 text-lg text-gray-600">
          Ryze replaces repetitive human effort with intelligent AI agents,
          helping modern teams scale faster without increasing headcount.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group relative rounded-3xl border border-white/60 bg-white/70 backdrop-blur-xl p-8 shadow-sm hover:shadow-xl transition-all"
          >
            {/* gradient hover glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition"></div>

            <div className="relative">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {f.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
