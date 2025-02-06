import { IconCategory, IconRegistry } from '../../../assets/icons';
import { getSizedIcon } from '../../../utils/iconUtils';
import './buttonLink.css';

export type ButtonLinkArgs = {
    disabled: boolean;
    iconLeft?: boolean;
    label: string;
    onClick: () => void;
    icon: string | null;
    href: string;
};

export const createButtonLink = ({
    disabled = false,
    label,
    onClick,
    href,
    icon = 'arrowRight',
    iconLeft = false, }: ButtonLinkArgs) => {

    const link = document.createElement('a');

    if (disabled) {
        link.setAttribute('aria-disabled', 'true');
        link.style.pointerEvents = 'none';
        link.href = '#';

        link.setAttribute('tabindex', '-1');
    } else {
        link.href = href;
        if (onClick) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                onClick();
            });
        }
    }

    const baseClasses = [
        'group',
        'w-fit',
        'flex',
        'items-center',
        'gap-[0.375rem]',
        'hover:gap-[0.625rem]',
        'border-b-[0.1875rem]',
        'border-t-2',
        'border-x-2',
        'border-b-transparent',
        'border-t-transparent',
        'border-x-transparent',
        'text-button-label-desktop',
        'hover:border-b-secondary-light',
        'transition-all',
        'duration-300',
        'outline-none',
        'active:border-b-secondary-dark',
        'ring-none',
        'focus-visible:border-2',
        'focus-visible:rounded-lg',
        'focus-visible:px-3',
        'focus-visible:border-black',
        'focus-visible:ring-base-black',
        'py-1',
        disabled ? [
            'cursor-not-allowed',
            'text-neutral-400',
            'hover:border-b-transparent',
            'active:border-b-transparent',
        ].join(' ') : '',
    ].filter(Boolean);

    const iconHtml = icon
        ? getSizedIcon(
            IconRegistry[IconCategory.SYSTEM][icon],
            20
        )
        : '';

    link.innerHTML = `
        ${iconLeft ? iconHtml : ''}
        ${label}
        ${!iconLeft ? iconHtml : ''}
    `;

    link.className = baseClasses.join(' ');

    link.setAttribute('role', 'link');

    return link;
}
