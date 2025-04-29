import { IconCategory, IconRegistry } from '@/assets/icons';
import { ButtonCTAArgs, ButtonCTAVariant } from '@/stories/types';
import { getPrimaryColorMode } from '@/stories/utils/colorMode';
import './buttonCTA.css';

/**
 * Creates a ButtonCTA component with specified configuration
 * @param {ButtonCTAArgs} props - The button configuration options
 * @returns {HTMLButtonElement} The created button element
 */
export const createButtonCTA = ({
  variant,
  label,
  icon,
  iconLeft = false,
  nested = false,
  disabled = false,
  classNames,
  onClick = () => {},
}: ButtonCTAArgs): HTMLButtonElement => {
  const btnButton = document.createElement('button');
  btnButton.type = 'button';
  btnButton.onclick = onClick;

  if (disabled) {
    btnButton.disabled = true;
  }

  const isPrimaryColorDark = getPrimaryColorMode();

  if (variant.includes('icon')) {
    if (icon) {
      btnButton.innerHTML = IconRegistry[IconCategory.SYSTEM][icon];
    }
  } else {
    const labelSpan = document.createElement('span');
    labelSpan.className = 'relative z-10';
    labelSpan.innerText = label;
    const contentDiv = document.createElement('div');
    if (icon) {
      contentDiv.className = 'relative z-10 flex items-center justify-center gap-3 group-disabled:gap-3 transition-all';
    }

    const arrowSpan = document.createElement('span');
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

  const baseClasses = [
    'group',
    'transition-all',
    'duration-500',
    'focus:outline-hidden',
    'focus-visible:ring-2',
    'focus-visible:ring-offset-0',
    'disabled:cursor-not-allowed',
    'relative',
    'overflow-hidden',
    'cursor-pointer',
    classNames,
  ];

  const variantClasses: Record<ButtonCTAVariant, readonly string[]> = {
    [ButtonCTAVariant.PRIMARY]: [
      'bg-primary-interaction overflow-hidden relative',
      'text-button-label',
      ...(isPrimaryColorDark ? ['text-base-white'] : ['text-base-black']),
      'border-none',
      'px-8 py-3',
      'before:absolute before:top-0 before:left-0 before:z-10',
      'before:h-full before:w-0 before:inset-0',
      'before:bg-primary-light/0',
      'before:transform-gpu',
      'before:transition-[width,background-color]',
      'before:duration-300',
      'before:ease-in-out',
      'hover:before:w-full hover:before:bg-primary-extra-light/100',
      'active:bg-primary-dark',
      'active:before:bg-primary-dark',
      'disabled:bg-base-white disabled:border disabled:border-neutral-300',
      'disabled:text-neutral-400 disabled:before:bg-transparent',
      'focus:ring-base-black',
      'hover:before:w-full',
      'before:rounded-l-none',
      ...(nested ? ['rounded-nested'] : ['rounded']),
    ] as const,

    [ButtonCTAVariant.SECONDARY]: [
      'bg-secondary-interaction',
      'text-button-label',
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
      'hover:before:w-full',
      ...(nested ? ['rounded-nested'] : ['rounded']),
    ] as const,

    [ButtonCTAVariant.TERTIARY]: [
      'bg-transparent',
      'text-button-label',
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
      'before:transition-all',
      'before:duration-300',
      'before:ease-in-out',
      'before:-z-10',
      'hover:before:w-full',
      ...(nested ? ['rounded-nested'] : ['rounded']),
    ] as const,

    [ButtonCTAVariant.LARGE]: [
      'bg-base-black',
      'text-base-white text-button-label-large',
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
      'rounded-none',
    ] as const,

    [ButtonCTAVariant.LARGE_LIGHT]: [
      'bg-base-white',
      'text-base-black text-button-label-large',
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
      'hover:before:w-full',
      'rounded-none',
    ] as const,

    [ButtonCTAVariant.LARGE_SUBSCRIPTION]: [
      'bg-primary-interaction overflow-hidden relative',
      ...(isPrimaryColorDark ? ['text-base-white'] : ['text-base-black']),
      'border-none text-button-label-large',
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

    [ButtonCTAVariant.LARGE_CART_PAY]: [
      'bg-neutral-300 hover:bg-secondary-light',
      'active:bg-secondary-dark',
      'text-base-black text-sm font-semibold',
      'border-none disabled:border',
      'focus:ring-base-black',
      'disabled:text-neutral-400',
      'disabled:border-neutral-300',
      'disabled:bg-base-white',
      'px-6 gap-2',
      'min-w-fit w-fit text-nowrap',
      'h-full',
      'active:text-neutral-600',
      'rounded-none',
    ] as const,

    [ButtonCTAVariant.LARGE_LOGIN]: [
      'bg-neutral-200 hover:bg-secondary-light',
      'active:bg-secondary-dark',
      'text-base-black text-sm font-semibold',
      'border-none disabled:border',
      'focus:ring-base-black',
      'disabled:text-neutral-400',
      'disabled:border-neutral-300',
      'disabled:bg-base-white',
      'px-6 gap-2',
      'min-w-fit w-fit text-nowrap',
      'h-full',
      'active:text-neutral-600',
      'active:before:bg-neutral-300',
      'hover:before:w-full',
      'rounded-none',
    ] as const,
  };

  const classes = [...baseClasses, ...variantClasses[variant]];
  btnButton.className = classes.join(' ');

  return btnButton;
};
