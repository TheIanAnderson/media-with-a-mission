import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <Link to="/" className="text-xl font-bold tracking-tight">Media with a Mission</Link>
      <div className="space-x-4">
        <Link to="/our-work" className="hover:text-blue-600">Our Work</Link>
        <Link to="/upgive" className="hover:text-blue-600">UpGive</Link>
        <Link to="/about" className="hover:text-blue-600">About</Link>
        <Link to="/contact" className="hover:text-blue-600">Contact</Link>
      </div>
    </nav>
  );
}
