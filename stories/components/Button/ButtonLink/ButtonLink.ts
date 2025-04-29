import { IconCategory, IconRegistry } from '@/assets/icons';
import { getSizedIcon } from '@/utils/iconUtils';
import './buttonLink.css';
import { ButtonLinkArgs } from '@/stories/types';

/**
 * Creates a styled anchor element that looks and behaves like a button
 * @param {ButtonLinkArgs} props - The button link configuration options
 * @returns {HTMLAnchorElement} The created anchor element with button-like styling and behavior
 */
export const createButtonLink = ({
  label,
  href = '#',
  target = '_self',
  icon,
  iconLeft = false,
  disabled = false,
  classNames,
  onClick = () => {},
}: ButtonLinkArgs) => {
  const link = document.createElement('a');
  link.href = href;
  link.target = target;

  if (disabled) {
    link.setAttribute('aria-disabled', 'true');
    link.style.pointerEvents = 'none';
    link.href = '#';
    link.setAttribute('tabindex', '-1');
  } else {
    if (onClick) {
      link.addEventListener('click', (e) => {
        // Call the onClick handler first
        onClick(e);

        // If the default hasn't been prevented, navigate
        if (!e.defaultPrevented) {
          // If it's not a new tab/window, manually navigate
          if (target === '_self') {
            e.preventDefault();
            window.location.href = href;
          }
        }
      });
    } else {
      // If no onClick, ensure standard link behavior
      link.addEventListener('click', (e) => {
        // For '_self' target, use programmatic navigation
        if (target === '_self') {
          e.preventDefault();
          window.location.href = href;
        }
      });
    }
  }

  const iconHtml = icon ? getSizedIcon(IconRegistry[IconCategory.SYSTEM][icon], 20) : '';
  link.innerHTML = `
      ${iconLeft ? iconHtml : ''}
      ${label}
      ${!iconLeft ? iconHtml : ''}
  `;

  const baseClasses = [
    'group',
    'w-fit',
    'flex flex-nowrap text-nowrap',
    'items-center m-1',
    'gap-2',
    'border-b-[0.1875rem]',
    'border-b-transparent',
    'border-t-0',
    'border-x-0',
    'ring-2 ring-offset-0 ring-transparent',
    'text-button-label',
    'transition-[border-color,opacity,gap]',
    'duration-300',
    'outline-hidden',
    'hover:border-b-secondary-light',
    'active:border-b-secondary-dark',
    'focus:outline-hidden',
    'focus:border-transparent',
    'focus-visible:active:border-b-transparent',
    'py-1',
    'focus-visible:px-3',
    'focus-visible:ring-secondary-dark',
    'focus-visible:rounded-md',
    disabled ? ['cursor-not-allowed', 'text-neutral-400', 'hover:border-b-transparent', 'active:border-b-transparent'].join(' ') : '',
    classNames,
  ].filter(Boolean);

  link.className = baseClasses.join(' ');

  return link;
};
