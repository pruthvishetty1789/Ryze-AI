import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function DashboardPreview() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* background glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-indigo-200/40 blur-3xl"></div>

      {/* header */}
      <div className="relative text-center max-w-4xl mx-auto mb-24 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          AI That Optimizes Everything
        </h2>
        <p className="mt-6 text-lg text-gray-600">
          Ryze continuously analyzes creatives, reallocates budgets, and improves
          campaign performance — automatically.
        </p>
      </div>

      {/* DASHBOARD GRID */}
      <div className="relative max-w-7xl mx-auto grid gap-8 px-6 lg:grid-cols-5">

        {/* LEFT – KEYWORD OPTIMIZATION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-1 rounded-2xl border bg-white shadow-sm p-5"
        >
          <h4 className="text-sm font-semibold mb-4">Keyword Optimization</h4>
          <ul className="space-y-3 text-sm">
            {[
              ["bmw x5 lease", 12],
              ["cheap bmw parts", -8],
              ["audi q7 price", 6],
              ["bmw service", 9],
            ].map(([keyword, value], i) => (
              <li key={i} className="flex justify-between">
                <span className="text-gray-600">{keyword}</span>
                <span
                  className={`font-semibold ${
                    value > 0 ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {value > 0 ? "+" : ""}
                  <CountUp end={Math.abs(value)} duration={1} />%
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* CENTER – CREATIVE ANALYSIS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-2 relative rounded-3xl border bg-white/80 backdrop-blur-xl shadow-xl p-6"
        >
          <h4 className="text-sm font-semibold mb-4">Creative Analysis</h4>

          {/* AI Canvas */}
          <div className="relative h-56 rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600">
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

            {/* status pills */}
            <div className="relative z-10 p-4 flex gap-3">
              <StatusPill label="Analyzing" />
              <StatusPill label="AI Vision" />
              <StatusPill label="Ad Creative" />
            </div>

            <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold">
              AI Creative Intelligence
            </div>
          </div>

          {/* floating insight */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg border p-4 text-sm"
          >
            <p className="font-semibold">CTA Effectiveness</p>
            <p className="text-indigo-600 font-bold text-lg">
              <CountUp end={43} duration={1.5} />%
            </p>
          </motion.div>

          {/* metric bars */}
          <div className="mt-6 space-y-4">
            <MetricBar label="Visual Quality" value={90} />
            <MetricBar label="Copy Score" value={68} />
            <MetricBar label="Brand Alignment" value={82} />
          </div>
        </motion.div>

        {/* RIGHT – BUDGET REALLOCATION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-2 rounded-2xl border bg-white shadow-sm p-6"
        >
          <h4 className="text-sm font-semibold mb-6">Budget Reallocation</h4>

          <div className="space-y-4 text-sm">
            {[
              ["Google Ads", 5.2, "$2,135"],
              ["Meta Ads", 4.5, "$1,855"],
              ["LinkedIn", 1.2, "$535"],
              ["Reddit Ads", 0.8, "$375"],
            ].map(([platform, roi, amount], i) => (
              <div key={i} className="flex items-center justify-between">
                <span>{platform}</span>
                <span className="text-green-600 font-semibold">
                  <CountUp end={roi} decimals={1} />×
                </span>
                <span className="text-gray-500">{amount}</span>
              </div>
            ))}
          </div>

          {/* AI insight */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 rounded-xl bg-indigo-50 border border-indigo-200 p-4 text-sm"
          >
            🤖 AI is reallocating budget in real time
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

/* SMALL UI COMPONENTS */

function StatusPill({ label }) {
  return (
    <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-md">
      {label}
    </span>
  );
}

function MetricBar({ label, value }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="font-medium">{label}</span>
        <span className="font-semibold">{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
        />
      </div>
    </div>
  );
}
