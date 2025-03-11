import { IconCategory, IconRegistry } from '../../../assets/icons';
import { getSizedIcon } from '../../../utils/iconUtils';
import './buttonLink.css';

export type ButtonLinkArgs = {
    disabled?: boolean;
    iconLeft?: boolean;
    label: string;
    onClick?: () => void;
    icon?: string | null;
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

    const fullHref = href.startsWith('http') ? href : `https://${href}`;

    if (disabled) {
        link.setAttribute('aria-disabled', 'true');
        link.style.pointerEvents = 'none';
        link.href = '#';
        link.setAttribute('tabindex', '-1');
    } else {
        link.href = fullHref;
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
        'items-center m-1',
        'gap-[0.375rem]',
        'hover:gap-[0.625rem]',
        'border-b-[0.1875rem]',
        'border-b-transparent',
        'border-t-0',
        'border-x-0',
        'ring-2 ring-offset-0 ring-transparent',
        'text-button-label-desktop',
        'transition-[border-color,opacity,gap]',
        'duration-300',
        'outline-hidden',
        'hover:border-b-secondary-light',
        'active:border-b-secondary-dark',
        'focus:outline-hidden',
        'focus:border-transparent',
        'focus-visible:active:border-b-transparent',
        'py-1',
        'focus-visible:px-3',
        'focus-visible:ring-secondary-dark',
        'focus-visible:rounded-md',
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
