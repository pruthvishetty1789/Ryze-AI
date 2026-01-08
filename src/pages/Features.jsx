import { motion } from "framer-motion";

const features = [
  {
    title: "AI Sales Agents",
    desc: "Autonomous AI agents that engage leads, qualify prospects, and drive conversions without human intervention.",
    metric: "3× Conversion Rate",
    gradient: "from-indigo-500 to-purple-500",
    icon: "🤖",
  },
  {
    title: "Customer Support Automation",
    desc: "Provide instant, accurate responses across channels and deliver 24/7 customer support at scale.",
    metric: "24/7 Availability",
    gradient: "from-emerald-500 to-teal-500",
    icon: "💬",
  },
  {
    title: "Workflow Automation",
    desc: "Eliminate repetitive operational tasks and allow teams to focus on strategic growth.",
    metric: "60% Time Saved",
    gradient: "from-orange-500 to-pink-500",
    icon: "⚡",
  },
  {
    title: "Real-time Analytics",
    desc: "Track conversations, performance metrics, and growth insights from a unified dashboard.",
    metric: "Live Insights",
    gradient: "from-sky-500 to-indigo-500",
    icon: "📊",
  },
];

export default function Features() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* soft background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50/60 via-white to-white"></div>

      {/* header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          Built for AI-Driven Growth
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          Ryze replaces manual effort with intelligent AI agents that automate
          conversations, workflows, and decision-making at scale.
        </p>
      </motion.div>

      {/* feature sections */}
      <div className="mt-32 space-y-32 max-w-7xl mx-auto px-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`grid gap-16 items-center ${
              i % 2 === 0 ? "md:grid-cols-2" : "md:grid-cols-2 md:[direction:rtl]"
            }`}
          >
            {/* TEXT */}
            <div className="md:[direction:ltr]">
              <div className="flex items-center gap-3 text-2xl">
                <span>{f.icon}</span>
                <h2 className="text-4xl font-bold">{f.title}</h2>
              </div>

              <p className="mt-6 text-gray-600 leading-relaxed max-w-lg">
                {f.desc}
              </p>

              {/* metric */}
              <div className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-white border px-6 py-3 shadow-sm">
                <span
                  className={`h-3 w-3 rounded-full bg-gradient-to-r ${f.gradient}`}
                ></span>
                <span className="font-semibold text-sm">{f.metric}</span>
              </div>
            </div>

            {/* VISUAL */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="relative md:[direction:ltr]"
            >
              <div
                className={`absolute inset-0 rounded-3xl blur-3xl opacity-30 bg-gradient-to-br ${f.gradient}`}
              ></div>

              <div className="relative rounded-3xl border bg-white/70 backdrop-blur-xl p-10 shadow-lg">
                {/* fake dashboard */}
                <div className="h-40 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center text-white text-lg font-semibold">
                  Ryze AI Dashboard
                </div>

                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="h-10 rounded-lg bg-gray-100"></div>
                  <div className="h-10 rounded-lg bg-gray-100"></div>
                  <div className="h-10 rounded-lg bg-gray-100"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
