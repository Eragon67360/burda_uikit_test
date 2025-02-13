import { createIcon } from "../../Icon/Icon";

export type SlideshowNavButtonArgs = {
    mode: 'previous' | 'next';
    disabled?: boolean;
    onClick?: () => void;
};

export const createSlideshowNavButton = ({ mode, disabled = false, onClick }: SlideshowNavButtonArgs) => {
    const icon = mode === 'next'
        ? 'chevronRight'
        : 'chevronLeft';

    const btnButton = document.createElement('button');
    btnButton.type = 'button';

    if (icon) {
        btnButton.innerHTML = createIcon({
            name: icon,
            size: 16,
            className: disabled ? 'opacity-50' : 'z-10'
        });
    }

    const baseClasses = [
        'group',
        'cursor-pointer',
        'bg-base-white',
        'transition-[color,opacity]',
        'duration-300',
        'focus:outline-hidden',
        'focus:ring-none',
        'focus:border-transparent',
        'disabled:cursor-not-allowed',
        'relative',
        'overflow-hidden ',
        'flex items-center justify-center',
        'text-base-black',
        'border-none',
        'size-11 md:size-12 p-1 rounded-lg',
        'focus:ring-base-black',
        'disabled:text-neutral-400',
        'disabled:border-neutral-300',
        'disabled:bg-base-white',
        'before:absolute',
        'before:bottom-0',
        'before:left-0',
        'before:w-full',
        'before:h-0',
        'before:bg-secondary-light',
        'before:transition-all',
        'before:duration-300',
        'before:ease-in-out',
        'before:z-0',
        'hover:before:h-full',
        'active:bg-secondary-dark',
        'active:before:bg-secondary-dark',
        'disabled:before:bg-transparent'
    ];


    btnButton.className = baseClasses.join(' ');

    if (disabled) {
        btnButton.disabled = true;
    }
    btnButton.setAttribute('type', 'button');
    btnButton.setAttribute('aria-label', `${mode} slide`);

    if (disabled) {
        btnButton.setAttribute('disabled', 'true');
        btnButton.setAttribute('aria-disabled', 'true');
    }

    if (!disabled && onClick) {
        btnButton.addEventListener('click', onClick);
    }
    return btnButton;

};
