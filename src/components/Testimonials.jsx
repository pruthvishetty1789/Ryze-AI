import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Product Lead, SaaS Startup",
    text: "Ryze helped us automate customer conversations and increase conversions without expanding our team.",
  },
  {
    name: "Neha Sharma",
    role: "Head of Growth, AI Company",
    text: "It feels like having an AI workforce operating 24/7. Ryze made scaling effortless for us.",
  },
  {
    name: "Rahul Verma",
    role: "Founder, Tech Startup",
    text: "From lead qualification to support automation, Ryze replaced multiple manual workflows seamlessly.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-gray-50">
      {/* header */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Loved by Modern Teams
        </h2>
        <p className="mt-4 text-gray-600">
          Teams trust Ryze to automate conversations, workflows, and customer engagement.
        </p>
      </div>

      {/* testimonial cards */}
      <div className="mt-20 grid gap-8 md:grid-cols-3 max-w-7xl mx-auto px-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border p-8 shadow-sm hover:shadow-lg transition"
          >
            <p className="text-gray-700 leading-relaxed text-sm">
              “{t.text}”
            </p>

            <div className="mt-6 flex items-center gap-4">
              {/* avatar */}
              <div className="h-10 w-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold">
                {t.name[0]}
              </div>

              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
