import { IconRegistry, IconCategory } from '@/assets/icons';

export type IconArgs = {
  name: keyof (typeof IconRegistry)[IconCategory.SYSTEM];
  size?: number;
  classNames?: string | undefined;
} & AccessibilityArgs;

type AccessibilityArgs = {
  role?: string | undefined;
  ariaLabel?: string | undefined;
  focusable?: boolean;
  ariaHidden?: boolean;
  alternativeText?: string | undefined;
};

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
