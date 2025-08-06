import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle button for mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 bg-yellow-500 text-white rounded md:hidden"
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>

      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-40
          ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center h-16 border-b">
            <img src={logo} alt="Media with a Mission" className="h-10 w-auto" />
          </div>
          <nav className="flex flex-col mt-4 space-y-4 px-6">
            <Link to="/" className="font-semibold hover:text-yellow-500 transition-colors">Home</Link>
            <Link to="/our-work" className="font-semibold hover:text-yellow-500 transition-colors">Our Work</Link>
            <Link to="/upgive" className="font-semibold hover:text-yellow-500 transition-colors">UpGive</Link>
            <Link to="/about" className="font-semibold hover:text-yellow-500 transition-colors">About</Link>
            <Link to="/contact" className="font-semibold hover:text-yellow-500 transition-colors">Contact</Link>
          </nav>
        </div>
      </aside>
    </>
  );
}
