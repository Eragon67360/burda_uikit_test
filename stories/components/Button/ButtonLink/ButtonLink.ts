import { IconCategory, IconRegistry } from '../../../assets/icons';
import { getSizedIcon } from '../../../utils/iconUtils';
import './buttonLink.css';

export type ButtonLinkArgs = {
    disabled: boolean;
    iconLeft: boolean;
    label: string;
    onClick: () => void;
    icon: string | null;
};

export const createButtonLink = ({
    disabled = false,
    label,
    onClick,
    icon = 'arrowRight',
    iconLeft = false, }: ButtonLinkArgs) => {

    const btnButton = document.createElement('button');

    if (!disabled) {
        btnButton.addEventListener('click', onClick);
    }

    const baseClasses = [
        'group flex items-center gap-[0.375rem] hover:gap-[0.625rem] border-b-[0.1875rem] border-t-2 border-x-2 border-b-transparent border-t-transparent border-x-transparent',
        'text-button-label-desktop hover:border-b-secondary-light',
        'transition-all duration-300',
        'outline-none',
        'active:border-b-secondary-dark',
        'ring-none',
        'focus-visible:border-2 focus-visible:rounded-lg focus-visible:px-3 focus-visible:border-black focus-visible:ring-base-black',
        'disabled:cursor-not-allowed disabled:pointer-events-none',
        'disabled:text-neutral-400 disabled:pointer-events-none',
        'py-1'
    ];

    const classes = [
        ...baseClasses
    ];
    const iconHtml = icon
        ? getSizedIcon(
            IconRegistry[IconCategory.SYSTEM][icon],
            20
        )
        : '';

    btnButton.innerHTML = `${iconLeft ? iconHtml : ''}
      ${label}
      ${!iconLeft ? iconHtml : ''}`
    btnButton.className = classes.join(' ');

    if (disabled) {
        btnButton.disabled = true;
    }

    return btnButton;
}
