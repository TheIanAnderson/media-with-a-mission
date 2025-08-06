import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Sidebar() {
  return (
    <header className="bg-white text-black h-14 shadow flex items-center justify-between px-4 sticky top-0 z-50">
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Media with a Mission" className="h-10 w-auto" />
        <nav className="flex space-x-4">
          <Link to="/" className="font-semibold hover:text-yellow-500 transition-all">Home</Link>
          <Link to="/our-work" className="font-semibold hover:text-yellow-500 transition-all">Our Work</Link>
          <Link to="/upgive" className="font-semibold hover:text-yellow-500 transition-all">UpGive</Link>
          <Link to="/about" className="font-semibold hover:text-yellow-500 transition-all">About</Link>
          <Link to="/contact" className="font-semibold hover:text-yellow-500 transition-all">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
