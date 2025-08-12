import site from '../assets/data/site.json';
import facebookIcon from '../assets/icons/social-facebook.svg';
import twitterIcon from '../assets/icons/social-twitter.svg';
import instagramIcon from '../assets/icons/social-instagram.svg';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border text-sm text-center py-6 space-y-4">
      <p className="text-muted">{site.tagline}</p>
      <div className="flex justify-center gap-4">
        <a href="#" aria-label="Facebook">
          <img src={facebookIcon} alt="Facebook icon" className="w-5 h-5" />
        </a>
        <a href="#" aria-label="Twitter">
          <img src={twitterIcon} alt="Twitter icon" className="w-5 h-5" />
        </a>
        <a href="#" aria-label="Instagram">
          <img src={instagramIcon} alt="Instagram icon" className="w-5 h-5" />
        </a>
      </div>
      <p className="text-muted">© {new Date().getFullYear()} Media with a Mission. All rights reserved.</p>
    </footer>
  );
}
