import { BadgeProps } from '@/stories/types';

/**
 * Creates a badge element with the specified configuration
 * @param {BadgeProps} props - The configuration options
 * @returns {HTMLElement} The created badge element
 */
export const createBadge = ({ badgeLabel, size = 42, color = 'primary', classNames, ariaLabel }: BadgeProps): HTMLElement => {
  const textColorMap = {
    primary: 'text-primary-interaction-foreground',
    secondary: 'text-secondary-interaction-foreground',
    // Add other colors as needed
  };

  const badgeElement = document.createElement('div');
  badgeElement.className = `absolute top-0 left-0 p-2 aspect-square bg-${color}-interaction rounded-full flex items-center justify-center`;
  badgeElement.classList.add(...(classNames?.split(' ') ?? []));
  badgeElement.style.minWidth = `${size}px`;
  badgeElement.style.minHeight = `${size}px`;

  badgeElement.setAttribute('role', 'status');
  badgeElement.setAttribute('aria-label', ariaLabel || badgeLabel);

  const badgeTextElement = document.createElement('div');
  badgeTextElement.className = `font-bold text-copy-small ${textColorMap[color] || 'text-black'}`;
  badgeTextElement.textContent = badgeLabel;

  badgeElement.appendChild(badgeTextElement);

  return badgeElement;
};
