import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Footer() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const linkHover =
    "cursor-pointer transition hover:text-white hover:translate-x-1";

  return (
    <footer className="relative mt-32 overflow-hidden rounded-t-3xl bg-gray-950 text-gray-300">
      {/* background glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-8 py-20 grid gap-12 md:grid-cols-4">
        {/* Brand + CTA */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-extrabold text-white">
            Ryze AI
          </h2>
          <p className="mt-4 max-w-md text-gray-400 leading-relaxed">
            Ryze helps modern businesses scale faster by automating conversations,
            workflows, and decision-making using powerful AI agents.
          </p>

          <button
            onClick={() => navigate("/book-demo")}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-700 transition"
          >
            Book a Demo →
          </button>
        </div>

        {/* Product links */}
        <div>
          <h3 className="text-sm font-semibold text-white tracking-wide">
            Product
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li onClick={() => navigate("/features")} className={linkHover}>
              Features
            </li>
            <li onClick={() => navigate("/pricing")} className={linkHover}>
              Pricing
            </li>
            <li className={linkHover}>Integrations</li>
            <li className={linkHover}>Security</li>
          </ul>
        </div>

        {/* Company links */}
        <div>
          <h3 className="text-sm font-semibold text-white tracking-wide">
            Company
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className={linkHover}>About</li>
            <li className={linkHover}>Careers</li>
            <li className={linkHover}>Blog</li>
            <li className={linkHover}>Contact</li>
          </ul>
        </div>
      </div>

      {/* Newsletter */}
      <div className="relative max-w-7xl mx-auto px-8 pb-12">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div>
            <h4 className="text-lg font-semibold text-white">
              Stay in the loop
            </h4>
            <p className="text-sm text-gray-400">
              Get product updates and AI insights straight to your inbox.
            </p>
          </div>

          {!subscribed ? (
            <form
              onSubmit={handleSubscribe}
              className="flex gap-3 w-full md:w-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full md:w-64 rounded-xl bg-gray-900 border border-white/10 px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
              <button
                type="submit"
                className="rounded-xl bg-indigo-600 px-5 py-2 text-sm font-semibold text-white hover:bg-indigo-700 transition"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-green-400 font-medium"
            >
              🎉 Thanks for subscribing!
            </motion.p>
          )}
        </div>
      </div>

      {/* bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="border-t border-white/10 px-8 py-6 text-center text-xs text-gray-500"
      >
        © 2026 Ryze AI. All rights reserved.
      </motion.div>
    </footer>
  );
}
