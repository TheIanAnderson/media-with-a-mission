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
            {primary.icon && (
              <primary.icon
                className="w-5 h-5 opacity-80 ico-wrap"
                aria-hidden="true"
              />
            )}
            {primary.label}
            {primary.trailingIcon && (
              <primary.trailingIcon
                className="w-5 h-5 ico-right"
                aria-hidden="true"
              />
            )}
          </Button>
        )}
        {secondary && (
          <Button as={Link} variant="outline" to={secondary.href}>
            {secondary.icon && (
              <secondary.icon
                className="w-5 h-5 opacity-80 ico-wrap"
                aria-hidden="true"
              />
            )}
            {secondary.label}
            {secondary.trailingIcon && (
              <secondary.trailingIcon
                className="w-5 h-5 ico-right"
                aria-hidden="true"
              />
            )}
          </Button>
        )}
      </div>
    </div>
  );
}
