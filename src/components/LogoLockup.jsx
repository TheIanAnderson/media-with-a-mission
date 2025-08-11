import { Link } from 'react-router-dom';
import useTheme from '../hooks/useTheme';
import logoLight from '../assets/MWM-logo-light-mode.png';
import logoDark from '../assets/MWM-logo-dark-mode.png';

export default function LogoLockup() {
  const theme = useTheme();
  const src = theme === 'dark' ? logoDark : logoLight;
  return (
    <Link
      to="/"
      aria-label="Media with a Mission"
      className="logo-lockup fixed z-50 transition-transform duration-300 ease-out"
    >
      <img src={src} alt="Media with a Mission" className="w-64 h-auto" />
    </Link>
  );
}
