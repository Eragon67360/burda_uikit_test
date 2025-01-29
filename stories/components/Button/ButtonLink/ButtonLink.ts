import { IconCategory, IconRegistry } from '../../../assets/icons';
import './buttonLink.css';

export enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
}

export type ButtonLinkArgs = {
  variant: ButtonVariant;
  nested: boolean;
  disabled: boolean;
  iconLeft: boolean;
  label: string;
  onClick: () => void;
  icon: string | null;
};

export const createButtonLink = ({
  variant = ButtonVariant.PRIMARY,
  nested = false,
  disabled = false,
  label,
  onClick,
  icon = null,
  iconLeft = false,
}: ButtonLinkArgs) => {
  const btnButton = document.createElement('button');
  btnButton.type = 'button';

  if (variant.includes('icon')) {
    if (icon) {
      btnButton.innerHTML = IconRegistry[IconCategory.SYSTEM][icon];
    }
  } else {
    const labelSpan = document.createElement('span');
    labelSpan.innerText = label;
    const contentDiv = document.createElement('div');
    if (icon) {
      contentDiv.className = 'flex items-center justify-center gap-3 group-hover:gap-5 group-disabled:gap-3 transition-all';
    }

    let arrowSpan = document.createElement('span');
    if ([ButtonVariant.PRIMARY, ButtonVariant.SECONDARY, ButtonVariant.TERTIARY].includes(variant)) {
      if (icon) {
        arrowSpan.innerHTML = IconRegistry[IconCategory.SYSTEM][icon];
        arrowSpan.className = 'size-5'
      }
    }
    if (iconLeft) {
      contentDiv.appendChild(arrowSpan);
      contentDiv.appendChild(labelSpan);
    } else {
      contentDiv.appendChild(labelSpan);
      contentDiv.appendChild(arrowSpan);
    }
    btnButton.appendChild(contentDiv);
  }

  if (!disabled) {
    btnButton.addEventListener('click', onClick);
  }

  const baseClasses = [
    'group',
    'text-button-label-desktop',
    'transition-all',
    'duration-200',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-0',
    'disabled:cursor-not-allowed',
  ];

  const variantClasses: Record<ButtonVariant, readonly string[]> = {
    [ButtonVariant.PRIMARY]: [
      'bg-brand',
      'text-base-black',
      'hover:bg-primary-light',
      'active:bg-primary-dark',
      'focus:ring-base-black',
      'focus:bg-primary-light',
      'disabled:bg-base-white',
      'disabled:text-neutral-400',
      'disabled:border-base-white',
      'px-8 py-3'
    ] as const,

    [ButtonVariant.SECONDARY]: [
      'bg-secondary-interaction',
      'text-base-black',
      'hover:bg-secondary-light',
      'active:bg-secondary-dark',
      'focus:ring-base-black',
      'focus:bg-secondary-light',
      'disabled:bg-base-white',
      'disabled:text-neutral-400',
      'px-8 py-3'
    ] as const,

    [ButtonVariant.TERTIARY]: [
      'bg-transparent',
      'text-base-black',
      'border border-neutral-400',
      'hover:bg-neutral-300',
      'active:bg-neutral-400',
      'focus:ring-base-black',
      'disabled:text-neutral-400',
      'disabled:border-neutral-300',
      'disabled:bg-base-white',
      'px-8 py-3'
    ] as const,
  };

  const classes = [
    ...baseClasses,
    ...variantClasses[variant],
    ...nested ? ['rounded-nested'] : ['rounded']
  ];

  btnButton.className = classes.join(' ');

  if (disabled) {
    btnButton.disabled = true;
  }

  return btnButton;
};