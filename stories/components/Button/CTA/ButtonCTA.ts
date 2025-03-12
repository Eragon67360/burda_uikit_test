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
  classNames?: string;
};

export const createButtonCTA = ({
  variant = ButtonCTAVariant.PRIMARY,
  nested = false,
  disabled = false,
  label,
  onClick,
  icon = null,
  iconLeft = false,
  classNames,
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
      contentDiv.className = 'relative z-10 flex items-center justify-center gap-3 group-active:gap-5 group-disabled:gap-3 transition-all';
    }

    let arrowSpan = document.createElement('span');
    if (icon) {
      arrowSpan.innerHTML = IconRegistry[IconCategory.SYSTEM][icon];
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
    'group ',
    'transition-all',
    'duration-500',
    'focus:outline-hidden',
    'focus-visible:ring-2',
    'focus-visible:ring-offset-0',
    'disabled:cursor-not-allowed',
    'relative',
    'overflow-hidden',
    'cursor-pointer',
    classNames
  ];

  const variantClasses: Record<ButtonCTAVariant, readonly string[]> = {
    [ButtonCTAVariant.PRIMARY]: [
      'bg-primary-interaction overflow-hidden relative',
      'text-button-label-desktop',
      'text-base-black border-none',
      'px-8 py-3',
      'before:absolute before:top-0 before:left-0 before:z-10',
      'before:h-full before:w-0 before:inset-0',
      'before:bg-secondary-interaction/0',
      'before:transform-gpu',
      'before:transition-[width,background-color,border-radius]',
      'before:duration-300',
      'before:ease-in-out',
      'hover:before:w-full hover:before:bg-secondary-interaction/100',
      'active:bg-secondary-dark active:brightness-50 active:text-white/60 hover:bg-transparent',
      'active:before:bg-secondary-dark',
      'disabled:bg-base-white disabled:border disabled:border-neutral-300',
      'disabled:text-neutral-400 disabled:before:bg-transparent',
      'focus:ring-base-black',
      'before:rounded-[0px_99px_99px_0px]',
      'hover:before:w-full',
      'before:rounded-l-none',
      ...(nested ? [
        'rounded-nested',
        'hover:before:rounded-[0px_0.25rem_0.25rem_0px]'
      ] : [
        'rounded',
        'hover:before:rounded-[0px_0.5rem_0.5rem_0px]'
      ])
    ] as const,


    [ButtonCTAVariant.SECONDARY]: [
      'bg-secondary-interaction',
      'text-button-label-desktop',
      'text-base-black',
      'focus:ring-base-black',
      'disabled:text-neutral-400',
      'disabled:border-neutral-300',
      'disabled:bg-base-white',
      'active:bg-secondary-dark',
      'active:before:bg-secondary-dark',
      'disabled:before:bg-transparent',
      'px-8 py-3',
      'before:absolute',
      'before:top-0',
      'before:left-0',
      'before:h-full',
      'before:w-0',
      'before:bg-secondary-light',
      'before:transition-all',
      'before:duration-300',
      'before:ease-in-out',
      'before:z-0',
      'before:rounded-r-full',
      'hover:before:w-full',
      'before:rounded-l-none',
      ...nested ? [
        'rounded-nested',
        'hover:before:rounded-r-nested'
      ] : [
        'rounded',
        'hover:before:rounded-r'
      ]
    ] as const,

    [ButtonCTAVariant.TERTIARY]: [
      'bg-transparent',
      'text-button-label-desktop',
      'text-base-black',
      'border border-neutral-400',
      'focus:ring-base-black',
      'disabled:text-neutral-400',
      'disabled:border-neutral-300',
      'disabled:bg-base-white',
      'px-8 py-3',
      'before:absolute',
      'before:top-0',
      'before:left-0',
      'before:h-full',
      'before:w-0',
      'before:bg-neutral-300',
      'active:bg-neutral-400',
      'before:rounded-l-none',
      'before:rounded-r-full',
      'before:transition-all',
      'before:duration-300',
      'before:ease-in-out',
      'before:-z-10',
      'hover:before:w-full',
      ...nested ? [
        'rounded-nested',
        'hover:before:rounded-r-nested'
      ] : [
        'rounded',
        'hover:before:rounded-r'
      ]
    ] as const,


    [ButtonCTAVariant.LARGE]: [
      'bg-base-black',
      'text-base-white text-button-label-large-desktop',
      'border-none disabled:border',
      'focus:ring-base-black',
      'disabled:text-neutral-400',
      'disabled:border-neutral-300',
      'disabled:bg-base-white',
      'px-8',
      'h-[4.5rem]',
      'before:absolute',
      'before:bottom-0',
      'before:left-0',
      'before:h-full',
      'before:w-0 before:inset-0',
      'before:bg-neutral-600',
      'before:transition-all',
      'before:duration-300',
      'before:ease-in-out',
      'before:z-10',
      'hover:before:w-full',
      'active:text-neutral-450',
      'active:before:bg-base-black',
      'before:rounded-[0_9999px_9999px_0]',
      'hover:before:rounded-[0px]',
      'rounded-none',
    ] as const,

    [ButtonCTAVariant.LARGE_LIGHT]: [
      'bg-base-white',
      'text-base-black text-button-label-large-desktop',
      'border-none disabled:border',
      'focus:ring-base-black',
      'disabled:text-neutral-400',
      'disabled:border-neutral-300',
      'disabled:bg-base-white',
      'px-8',
      'h-[4.5rem]',
      'before:absolute',
      'before:top-0',
      'before:left-0',
      'before:h-full',
      'before:w-0',
      'before:bg-neutral-200',
      'before:transition-all',
      'before:duration-300',
      'before:ease-in-out',
      'before:z-10',
      'hover:before:w-full',
      'active:text-neutral-600',
      'active:before:bg-neutral-300',
      'before:rounded-[0px_99px_99px_0px]',
      'hover:before:w-full',
      'before:rounded-l-none',
      'rounded-none',
      'hover:before:rounded-[0px]',
    ] as const,

    [ButtonCTAVariant.LARGE_SUBSCRIPTION]: [
      'bg-primary-interaction overflow-hidden relative',
      'border-none text-button-label-large-desktop',
      'px-8',
      'h-[4.5rem]',
      'before:absolute before:top-0 before:left-0 before:z-10',
      'before:h-full before:w-0 before:inset-0',
      'before:bg-secondary-interaction/0',
      'before:transform-gpu',
      'before:transition-[width,background-color,border-radius]',
      'before:duration-300',
      'before:ease-in-out',
      'hover:before:w-full hover:before:bg-secondary-interaction/100',
      'active:bg-secondary-dark active:brightness-50 active:text-white/60 hover:bg-transparent',
      'active:before:bg-secondary-dark',
      'disabled:bg-base-white disabled:border disabled:border-neutral-300',
      'disabled:text-neutral-400 disabled:before:bg-transparent',
      'focus:ring-base-black',
      'before:rounded-[0px_99px_99px_0px]',
      'hover:before:w-full',
      'before:rounded-l-none',
      'rounded-none',
      'hover:before:rounded-[0px]',
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