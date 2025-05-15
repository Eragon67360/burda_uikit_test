import { IconRegistry, IconCategory } from '@/assets/icons';
import { IconArgs } from '@/stories/types';

/**
 * Creates an SVG icon element with the specified configuration
 * @param {IconArgs} props - The icon configuration options
 * @returns {string} The HTML string representation of the SVG icon
 */
export const createIcon = ({ name, size = 20, classNames, role, ariaLabel, focusable = false, ariaHidden = false }: IconArgs) => {
  const iconSvg = IconRegistry[IconCategory.SYSTEM][name];

  const parser = new DOMParser();
  const doc = parser.parseFromString(iconSvg, 'image/svg+xml');
  const svg = doc.documentElement;

  svg.classList.add('focus:outline-hidden', 'focus-visible:ring-2', 'focus-visible:ring-offset-0');

  if (role) {
    svg.setAttribute('role', role);
  } else {
    svg.removeAttribute('role');
  }

  if (ariaLabel) {
    svg.setAttribute('aria-label', ariaLabel);
  }

  if (ariaHidden) {
    svg.setAttribute('aria-hidden', 'true');
  }

  svg.setAttribute('focusable', focusable && !ariaHidden ? 'true' : 'false');
  svg.setAttribute('tabindex', focusable && !ariaHidden ? '0' : '-1');

  svg.setAttribute('width', `${size}`);
  svg.setAttribute('height', `${size}`);

  if (classNames) {
    svg.classList.add(...classNames.split(' '));
  }

  return svg.outerHTML;
};
