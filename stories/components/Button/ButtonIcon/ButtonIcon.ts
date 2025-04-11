import { IconCategory, IconRegistry } from '@/assets/icons';
import { createIcon } from '@/components/Icon/Icon';
import './buttonIcon.css';

export enum ButtonIconVariant {
  SMALL = 'small',
  BIG = 'big',
}

export type ButtonIconArgs = {
  variant: ButtonIconVariant;
  icon: keyof (typeof IconRegistry)[IconCategory.SYSTEM];
  disabled?: boolean;
  backgroundColor?: 'neutral-100' | 'neutral-200';
  onClick?: () => void;
} & AccessibilityArgs;

type AccessibilityArgs = {
  ariaLabel?: string;
};

export const createButtonIcon = ({
  variant,
  icon,
  disabled = false,
  backgroundColor = 'neutral-100',
  onClick = () => {},
  ariaLabel,
}: ButtonIconArgs) => {
  const btnButton = document.createElement('button');
  btnButton.type = 'button';
  btnButton.addEventListener('click', onClick);

  if (ariaLabel) {
    btnButton.setAttribute('aria-label', ariaLabel);
  }

  if (disabled) {
    btnButton.disabled = true;
  }

  btnButton.innerHTML = createIcon({
    name: icon,
    size: 16,
    classNames: disabled ? 'opacity-50' : 'z-10',
    ariaHidden: true,
  });

  const baseClasses = [
    'group',
    'shrink-0',
    'transition-[color,opacity]',
    'duration-300',
    'focus:outline-hidden',
    'focus:ring-none',
    'focus:border-transparent',
    'disabled:cursor-not-allowed',
    'relative',
    'rounded-lg',
    'overflow-hidden ',
    'flex items-center justify-center',
    'cursor-pointer',
  ];
  const variantClasses: Record<ButtonIconVariant, readonly string[]> = {
    [ButtonIconVariant.SMALL]: [
      'bg-transparent border-none',
      'text-base-black',
      'hover:text-secondary-dark',
      'active:bg-transparent active:opacity-60',
      'focus-visible:bg-base-white',
      'focus-visible:ring-2',
      'focus-visible:ring-secondary-dark',
      'disabled:bg-base-white',
      'disabled:text-neutral-400',
      'disabled:border-none',
      'size-10 p-1',
    ] as const,

    [ButtonIconVariant.BIG]: [
      ...(backgroundColor === 'neutral-100' ? ['bg-neutral-100'] : ['bg-neutral-200']),
      'text-base-black',
      'border-none',
      'size-11 p-1 rounded-lg',
      'focus:ring-base-black',
      'disabled:text-neutral-400',
      'disabled:border-neutral-300',
      'disabled:bg-base-white',
      'hover:bg-secondary-light transition-all duration-300',
      'hover:before:h-full',
      'active:bg-secondary-dark',
      'active:before:bg-secondary-dark',
      'disabled:before:bg-transparent',
    ] as const,
  };

  const classes = [...baseClasses, ...variantClasses[variant]];
  btnButton.className = classes.join(' ');

  return btnButton;
};
