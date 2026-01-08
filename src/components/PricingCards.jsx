import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "$29",
    desc: "Perfect for small teams starting with AI automation.",
    features: [
      "AI conversations",
      "Basic analytics",
      "Email support",
    ],
  },
  {
    name: "Pro",
    price: "$79",
    desc: "Best for fast-growing businesses using AI daily.",
    highlight: true,
    features: [
      "Advanced AI agents",
      "Real-time analytics",
      "Workflow automation",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Tailored solutions for large-scale operations.",
    features: [
      "Custom AI workflows",
      "Dedicated account manager",
      "Enterprise security",
    ],
  },
];

export default function PricingCards() {
  return (
    <section className="relative py-32">
      {/* background tint */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50/70 to-white"></div>

      {/* header */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Simple, Transparent Pricing
        </h2>
        <p className="mt-4 text-gray-600">
          Choose a plan that fits your business today — upgrade as you grow.
        </p>
      </div>

      {/* cards */}
      <div className="mt-20 grid gap-10 md:grid-cols-3 max-w-7xl mx-auto px-6">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`relative rounded-3xl p-10 border bg-white shadow-sm transition ${
              plan.highlight
                ? "scale-105 border-indigo-500 shadow-lg"
                : "hover:shadow-lg"
            }`}
          >
            {/* highlight badge */}
            {plan.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                Most Popular
              </div>
            )}

            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <p className="mt-3 text-gray-600 text-sm">{plan.desc}</p>

            <p className="mt-6 text-4xl font-extrabold">
              {plan.price}
              {plan.price !== "Custom" && (
                <span className="text-base font-medium text-gray-500">
                  /mo
                </span>
              )}
            </p>

            <ul className="mt-8 space-y-3 text-sm text-gray-600">
              {plan.features.map((f, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-indigo-600">✔</span>
                  {f}
                </li>
              ))}
            </ul>

            <button
              className={`mt-10 w-full py-3 rounded-xl font-semibold transition ${
                plan.highlight
                  ? "bg-indigo-600 text-white hover:bg-indigo-700"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
