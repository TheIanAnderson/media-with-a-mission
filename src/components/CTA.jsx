import Button from './Button';
import { Link } from 'react-router-dom';

export default function CTA({ text = 'Start a Project', to = '/contact' }) {
  return (
    <div className="py-24 text-center">
      <Button as={Link} to={to}>{text}</Button>
    </div>
  );
}
