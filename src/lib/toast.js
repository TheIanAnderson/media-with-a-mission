export function toast(message, type = 'info') {
  const div = document.createElement('div');
  div.className = `toast toast-${type}`;
  div.textContent = message;
  document.body.appendChild(div);
  requestAnimationFrame(() => div.classList.add('show'));
  setTimeout(() => {
    div.classList.remove('show');
    div.addEventListener('transitionend', () => div.remove(), { once: true });
  }, 3000);
}
