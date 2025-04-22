import { getSizedIcon } from '@/stories/utils/iconUtils';
import './cartAndPay.css';
import { IconCategory, IconRegistry } from '@/stories/assets/icons';

export type CartAndPayArgs = {
  label: string;
  icon: string;
  disabled?: boolean;
  items: any[];
  classNames?: string;
  onClick: () => void;
} & AccessibilityArgs;

type AccessibilityArgs = {
  ariaLabelCartCount?: string;
};

export const createCartAndPay = ({
  label,
  icon,
  disabled = false,
  items = [],
  classNames,
  onClick,
  ariaLabelCartCount,
}: CartAndPayArgs) => {
  const buttonContainer = document.createElement('button');
  buttonContainer.type = 'button';
  buttonContainer.onclick = onClick;

  buttonContainer.setAttribute('aria-label', label);
  buttonContainer.setAttribute('aria-describedby', 'cart-count');

  if (disabled) {
    buttonContainer.disabled = true;
  }

  buttonContainer.classList.add(classNames);

  const baseClasses = [
    'text-base-black',
    'text-button-label',
    'border-none',
    'disabled:border',
    'focus:outline-hidden',
    'focus-visible:ring-2',
    'focus-visible:ring-offset-0',
    'focus:ring-base-black',
    'disabled:text-neutral-400',
    'disabled:border-neutral-300',
    'disabled:bg-base-white',
    'disabled:cursor-not-allowed',
    'px-6',
    'gap-2',
    'min-w-fit',
    'w-fit',
    'text-nowrap',
    'h-18',
    'active:text-neutral-600',
    'rounded-none',
    'cursor-pointer',
    'transition-all',
    'duration-300',
    'flex',
    'items-center',
  ];

  const classesWithItems = ['bg-primary-interaction', 'hover:bg-primary-light', 'active:bg-primary-dark'];
  const classesWithoutItems = ['bg-neutral-300', 'hover:bg-secondary-light', 'active:bg-secondary-dark'];

  buttonContainer.classList.add(...baseClasses, ...(items.length > 0 ? classesWithItems : classesWithoutItems));

  if (classNames) {
    buttonContainer.classList.add(...classNames.split(' '));
  }

  const textLabel = document.createElement('span');
  textLabel.textContent = label;
  textLabel.className = 'text-base-black text-sm font-semibold';
  buttonContainer.appendChild(textLabel);

  const iconContainer = document.createElement('div');
  iconContainer.className = 'flex items-center justify-center relative';

  if (items.length > 0) {
    const iconBadge = document.createElement('div');
    iconBadge.className = 'absolute -top-1.5 -right-1/2 bg-base-white rounded-full size-[15px] flex items-center justify-center';

    const badgeText = document.createElement('span');
    badgeText.textContent = items.length.toString();
    badgeText.id = 'cart-count';

    if (ariaLabelCartCount) {
      badgeText.setAttribute('aria-label', ariaLabelCartCount);
    }

    badgeText.className = 'font-bold text-xs text-base-black';

    iconBadge.appendChild(badgeText);
    iconContainer.appendChild(iconBadge);
  }

  const iconElement = document.createElement('span');
  iconElement.innerHTML = getSizedIcon(IconRegistry[IconCategory.SYSTEM][icon], 18);
  iconContainer.appendChild(iconElement);
  buttonContainer.appendChild(iconContainer);
  return buttonContainer;
};
