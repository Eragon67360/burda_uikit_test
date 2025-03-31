import { getSizedIcon } from '@/stories/utils/iconUtils';
import './cartAndPay.css'
import { IconCategory, IconRegistry } from '@/stories/assets/icons';

export type CartAndPayArgs = {
    label: string;
    icon: string;
    onClick: () => void;
    classNames?: string;
    disabled: boolean;
    items: any[];
};

export const createCartAndPay = ({
    label,
    icon,
    onClick,
    classNames,
    disabled = false,
    items = []
}: CartAndPayArgs) => {
    const buttonContainer = document.createElement('button');
    buttonContainer.className = `
        ${items.length > 0 ? 'bg-primary-interaction hover:bg-primary-light active:bg-primary-dark' : 'bg-neutral-300 hover:bg-secondary-light active:bg-secondary-dark'}
        text-base-black text-button-label
        border-none disabled:border
        focus:ring-base-black
        disabled:text-neutral-400
        disabled:border-neutral-300
        disabled:bg-base-white
        px-6 gap-2
        min-w-fit w-fit text-nowrap
        h-18
        active:text-neutral-600
        rounded-none
        cursor-pointer
        transition-all
        duration-300 
        flex items-center
    `
    if (classNames) {
        buttonContainer.classList.add(classNames);
    }
    buttonContainer.disabled = disabled;
    buttonContainer.onclick = onClick;

    buttonContainer.setAttribute('aria-label', label);
    buttonContainer.setAttribute('aria-disabled', String(disabled));
    buttonContainer.setAttribute('role', 'button');
    buttonContainer.setAttribute('tabindex', '0');
    buttonContainer.setAttribute('data-testid', 'cart-and-pay-button');
    buttonContainer.setAttribute('data-icon', icon);
    const textLabel = document.createElement('span');
    textLabel.className = 'text-base-black text-sm font-semibold';
    textLabel.textContent = label;
    buttonContainer.appendChild(textLabel);

    const iconContainer = document.createElement('div');
    iconContainer.className = 'flex items-center justify-center relative';

    if (items.length > 0) {
        const iconBadge = document.createElement('div');
        iconBadge.className = 'absolute -top-1.5 -right-1/2 bg-base-white rounded-full size-[15px] flex items-center justify-center';

        const badgeText = document.createElement('span');
        badgeText.className = 'font-bold text-xs text-base-black';
        badgeText.textContent = items.length.toString();

        iconBadge.appendChild(badgeText);
        iconContainer.appendChild(iconBadge);
    }

    const iconElement = document.createElement('span');
    iconElement.innerHTML = getSizedIcon(IconRegistry[IconCategory.SYSTEM][icon], 18);
    iconContainer.appendChild(iconElement);
    buttonContainer.appendChild(iconContainer);
    return buttonContainer;

}
