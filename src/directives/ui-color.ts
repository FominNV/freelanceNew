
export const UiColor = (el: HTMLElement, binding: any) => {
  if (binding.value && binding.arg) {
    const payload = binding.value;

    if (binding.arg === 'text') {
      el.setAttribute('style', `color: var(--color-${payload}) !important;${el.getAttribute('style')?.replace(/color: var\([a-z0-9\\-]+\) !important;/gm, '') || ''}`);
    } else if (binding.arg === 'bg') {
      el.setAttribute(
        'style',
        `background-color: var(--color-${payload}) !important;${el.getAttribute('style')?.replace(/background-color: var\([a-z0-9\\-]+\) !important;/gm, '') || ''}`,
      );
    }
  }
};
