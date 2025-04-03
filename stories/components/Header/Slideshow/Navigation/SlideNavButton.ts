import { createIcon } from "@/components/Icon/Icon";

export type SlideshowNavButtonArgs = {
    mode: 'previous' | 'next';
    disabled?: boolean;
    classNames?: string;
    onClick?: () => void;
};

export const createSlideshowNavButton = ({ mode, disabled = false, classNames, onClick }: SlideshowNavButtonArgs) => {
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
        'transition-all',
        'duration-300',
        'hover:bg-secondary-light',
        'focus:outline-hidden',
        'focus:ring-none',
        'focus:border-transparent',
        'disabled:cursor-not-allowed',
        'relative z-40',
        'overflow-hidden',
        'flex items-center justify-center',
        'text-base-black',
        'size-11 md:size-12 p-1 rounded-lg',
        'focus:ring-base-black',
        'disabled:text-neutral-400',
        'disabled:border-neutral-300',
        'disabled:bg-base-white',
        'active:bg-secondary-dark',
    ];


    btnButton.className = baseClasses.join(' ');
    if (classNames) {
        btnButton.className += ` ${classNames}`;
    }

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
