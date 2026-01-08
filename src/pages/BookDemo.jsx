import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function BookDemo() {
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    // simulate API call
    setTimeout(() => {
      setLoading(false);
      setShowPopup(true);
    }, 1500);
  };

  const handleClose = () => {
    setShowPopup(false);
    navigate("/"); // redirect to home
  };

  return (
    <>
      {/* Page */}
      <section className="min-h-[80vh] flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl w-full bg-white rounded-3xl shadow-lg border p-10"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-center">
            Book a Demo
          </h1>

          <p className="mt-4 text-center text-gray-600">
            See how Ryze can automate conversations and scale your business using AI.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="email"
              placeholder="Work Email"
              required
              className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="text"
              placeholder="Company Name"
              required
              className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition disabled:opacity-70"
            >
              {loading ? (
                <>
                  <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Scheduling...
                </>
              ) : (
                "Schedule Demo"
              )}
            </button>
          </form>
        </motion.div>
      </section>

      {/* SUCCESS POPUP */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-6"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-xl"
            >
              <h2 className="text-2xl font-bold">
                Demo Scheduled 🎉
              </h2>

              <p className="mt-4 text-gray-600">
                Thanks for booking a demo. Our team will reach out to you shortly.
              </p>

              <button
                onClick={handleClose}
                className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-indigo-700 transition"
              >
                Go to Home
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
