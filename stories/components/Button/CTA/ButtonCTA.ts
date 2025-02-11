import { IconCategory, IconRegistry } from '../../../assets/icons';
import './buttonCTA.css';

export enum ButtonCTAVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
  LARGE = 'large',
  LARGE_LIGHT = 'large_light',
  LARGE_SUBSCRIPTION = 'large_subscription',
}

export type ButtonCTAArgs = {
  variant: ButtonCTAVariant;
  nested: boolean;
  disabled: boolean;
  iconLeft: boolean;
  label: string;
  onClick: () => void;
  icon: string | null;
};

export const createButtonCTA = ({
  variant = ButtonCTAVariant.PRIMARY,
  nested = false,
  disabled = false,
  label,
  onClick,
  icon = null,
  iconLeft = false,
}: ButtonCTAArgs) => {
  const btnButton = document.createElement('button');
  btnButton.type = 'button';

  if (variant.includes('icon')) {
    if (icon) {
      btnButton.innerHTML = IconRegistry[IconCategory.SYSTEM][icon];
    }
  } else {
    const labelSpan = document.createElement('span');
    labelSpan.className = 'relative z-10'
    labelSpan.innerText = label;
    const contentDiv = document.createElement('div');
    if (icon) {
      contentDiv.className = 'relative z-10 flex items-center justify-center gap-3 group-hover:gap-5 group-disabled:gap-3 transition-all';
    }

    let arrowSpan = document.createElement('span');
    if ([ButtonCTAVariant.PRIMARY, ButtonCTAVariant.SECONDARY, ButtonCTAVariant.TERTIARY].includes(variant)) {
      if (icon) {
        arrowSpan.innerHTML = IconRegistry[IconCategory.SYSTEM][icon];
        arrowSpan.className = 'size-4'
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
    'duration-500',
    'focus:outline-hidden',
    'focus-visible:ring-2',
    'focus-visible:ring-offset-0',
    'disabled:cursor-not-allowed',
    'relative',
    'overflow-hidden',
  ];

  const variantClasses: Record<ButtonCTAVariant, readonly string[]> = {
    [ButtonCTAVariant.PRIMARY]: [
      'bg-brand',
      'text-base-black',
      'hover:bg-secondary-interaction',
      'active:bg-secondary-dark active:brightness-50 active:text-white/60',
      'focus-visible:ring-base-black',
      'focus:bg-secondary-interaction',
      'disabled:bg-base-white',
      'disabled:text-neutral-400',
      'disabled:border-base-white',
      'px-8 py-3',
      ...nested ? ['rounded-nested'] : ['rounded']
    ] as const,

    [ButtonCTAVariant.SECONDARY]: [
      'bg-secondary-interaction',
      'text-base-black',
      'focus:ring-base-black',
      'disabled:text-neutral-400',
      'disabled:border-neutral-300',
      'disabled:bg-base-white',
      'px-8 py-3',
      'before:absolute',
      'before:bottom-0',
      'before:left-0',
      'before:w-full',
      'before:h-0',
      'before:bg-secondary-light',
      'before:transition-all',
      'before:duration-300',
      'before:ease-in-out',
      'before:z-10',
      'hover:before:h-full',
      'active:bg-secondary-dark',
      'active:before:bg-secondary-dark',
      'disabled:before:bg-transparent',
      ...nested ? ['rounded-nested'] : ['rounded']
    ] as const,

    [ButtonCTAVariant.TERTIARY]: [
      'bg-transparent',
      'text-base-black',
      'border border-neutral-400',
      'focus:ring-base-black',
      'disabled:text-neutral-400',
      'disabled:border-neutral-300',
      'disabled:bg-base-white',
      'px-8 py-3',
      'before:absolute',
      'before:bottom-0',
      'before:left-0',
      'before:w-full',
      'before:h-0',
      'before:bg-neutral-300',
      'before:transition-all',
      'before:duration-300',
      'before:ease-in-out',
      'before:-z-10',
      'hover:before:h-full',
      'active:bg-neutral-400',
      ...nested ? ['rounded-nested'] : ['rounded']
    ] as const,

    [ButtonCTAVariant.LARGE]: [
      'bg-base-black',
      'text-base-white',
      'border border-transparent',
      'focus:ring-base-black',
      'disabled:text-neutral-400',
      'disabled:border-neutral-300',
      'disabled:bg-base-white',
      'px-8',
      'h-[4.5rem]',
      'before:absolute',
      'before:bottom-0',
      'before:left-0',
      'before:w-full',
      'before:h-0',
      'before:bg-neutral-600',
      'before:transition-all',
      'before:duration-300',
      'before:ease-in-out',
      'before:z-10',
      'hover:before:h-full',
      'active:text-neutral-450',
      'active:before:bg-base-black',
      'rounded-none'
    ] as const,

    [ButtonCTAVariant.LARGE_LIGHT]: [
      'bg-base-white',
      'text-base-black',
      'border border-transparent',
      'focus:ring-base-black',
      'disabled:text-neutral-400',
      'disabled:border-neutral-300',
      'disabled:bg-base-white',
      'px-8',
      'h-[4.5rem]',
      'before:absolute',
      'before:bottom-0',
      'before:left-0',
      'before:w-full',
      'before:h-0',
      'before:bg-neutral-200',
      'before:transition-all',
      'before:duration-300',
      'before:ease-in-out',
      'before:z-10',
      'hover:before:h-full',
      'active:text-neutral-600',
      'active:before:bg-neutral-300',
      'rounded-none'
    ] as const,

    [ButtonCTAVariant.LARGE_SUBSCRIPTION]: [
      'bg-primary-interaction',
      'text-base-black',
      'border-none ring-[3px] ring-transparent',
      'focus-visible:ring-base-black',
      'focus:ring-transparent',
      'disabled:text-neutral-400',
      'disabled:bg-base-white',
      'px-8',
      'h-[4.5rem]',
      'before:absolute',
      'before:bottom-0',
      'before:left-0',
      'before:w-full',
      'before:h-0',
      'before:bg-primary-light',
      'before:transition-all',
      'before:duration-300',
      'before:ease-in-out',
      'before:z-10',
      'hover:before:h-full',
      'active:before:bg-primary-dark',
      'rounded-none'
    ] as const,
  };


  const classes = [
    ...baseClasses,
    ...variantClasses[variant],
  ];

  btnButton.className = classes.join(' ');

  if (disabled) {
    btnButton.disabled = true;
  }

  return btnButton;
};