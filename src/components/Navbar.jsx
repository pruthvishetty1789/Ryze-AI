import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold cursor-pointer" onClick={() => navigate("/")}>
          Ryze AI
        </h1>

        {/* Desktop */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link to="/" className="hover:text-gray-600">Home</Link>
          <Link to="/features" className="hover:text-gray-600">Features</Link>
          <Link to="/pricing" className="hover:text-gray-600">Pricing</Link>
          <button
            onClick={() => navigate("/book-demo")}
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Book Demo
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-4">
          <Link onClick={() => setOpen(false)} to="/">Home</Link>
          <Link onClick={() => setOpen(false)} to="/features">Features</Link>
          <Link onClick={() => setOpen(false)} to="/pricing">Pricing</Link>
          <button
            onClick={() => {
              setOpen(false);
              navigate("/book-demo");
            }}
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Book Demo
          </button>
        </div>
      )}
    </header>
  );
}
