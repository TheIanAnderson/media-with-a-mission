import { useEffect } from 'react';

export default function usePageMeta({ title, description, image }) {
  useEffect(() => {
    if (title) {
      document.title = title;
      setMeta('og:title', title, 'property');
    }
    if (description) {
      setMeta('description', description);
      setMeta('og:description', description, 'property');
    }
    if (image) {
      setMeta('og:image', image, 'property');
    }
  }, [title, description, image]);
}

function setMeta(name, content, attr = 'name') {
  let tag = document.querySelector(`meta[${attr}="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}
