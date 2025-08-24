import Button from './Button';
import { Link } from 'react-router-dom';

export default function CTA({ heading, subtext, primary, secondary }) {
  return (
    <div className="text-center space-y-4">
      {heading && <h2 className="text-2xl font-bold">{heading}</h2>}
      {subtext && <p className="text-muted">{subtext}</p>}
      <div className="flex justify-center gap-4">
        {primary && (
          <Button as={Link} variant="primary" to={primary.href}>
            {primary.label}
          </Button>
        )}
        {secondary && (
          <Button as={Link} variant="outline" to={secondary.href}>
            {secondary.label}
          </Button>
        )}
      </div>
    </div>
  );
}
