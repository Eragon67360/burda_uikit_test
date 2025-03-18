import { IconRegistry, IconCategory } from "@/assets/icons";
import { ToastManager } from "./ToastManager";

export type PopupVariant = 'error' | 'success' | 'info';
export type PopupPosition = 'top-right' | 'top' | 'top-left' | 'bottom-right' | 'bottom' | 'bottom-left';

export type PopupAction = {
    label: string;
    icon: string;
    href: string;
};

export type PopupArgs = {
    variant: PopupVariant;
    position: PopupPosition;
    title: string;
    description: string;
    action?: PopupAction;
    onClose?: () => void;
};
export type PopupTriggerArgs = PopupArgs & {
    triggerLabel?: string;
    triggerVariant?: 'primary' | 'secondary';
};

const variantStyles = {
    error: 'border-system-error bg-red-50',
    success: 'border-system-success bg-green-50',
    info: 'border-system-notification bg-yellow-50',
};

const positionStyles = {
    'top-right': 'top-4 right-4 transform-origin-top',
    'top': 'top-4 left-1/2 -translate-x-1/2 transform-origin-top',
    'top-left': 'top-4 left-4 transform-origin-top',
    'bottom-right': 'bottom-4 right-4 transform-origin-bottom',
    'bottom': 'bottom-4 left-1/2 -translate-x-1/2 transform-origin-bottom',
    'bottom-left': 'bottom-4 left-4 transform-origin-bottom',
};


export const createPopup = ({
    variant,
    position,
    title,
    description,
    action,
    onClose
}: PopupArgs) => {
    const wrapper = document.createElement('div');
    const popup = document.createElement('div');
    const getInitialTransform = (position: PopupPosition) => {
        if (position.startsWith('top')) {
            return 'translate-y-[-100%]';
        }
        if (position.startsWith('bottom')) {
            return 'translate-y-[100%]';
        }
        return '';
    };
    popup.className = `
    fixed ${positionStyles[position]} z-50
    min-w-[320px] max-w-[520px] p-4
    border ${variantStyles[variant]}
    rounded-lg shadow-lg
    transition-all duration-300
    transform ${getInitialTransform(position)} opacity-0
    `;

    const content = `
    <div class="flex items-start justify-between gap-3">
      <div class="flex-1">
        <h3 class="text-subhead4-desktop">${title}</h3>
        
        <p class="mt-4 text-copy-desktop">${description}</p>
        ${action ? `
          <a href="${action.href}" class="inline-flex items-center gap-2 text-link-desktop">
            ${action.icon}
            ${action.label}
          </a>
        ` : ''}
      </div>
      <button class="text-gray-400 hover:text-gray-600" aria-label="Close">
        ${IconRegistry[IconCategory.SYSTEM].close}
      </button>
    </div>
  `;

    popup.innerHTML = content;

    setTimeout(() => {
        popup.remove();
        onClose?.();
    }, 8000);

    const closeButton = popup.querySelector('button');
    closeButton?.addEventListener('click', () => {
        popup.remove();
        onClose?.();
    });
    requestAnimationFrame(() => {
        popup.classList.remove(getInitialTransform(position), 'opacity-0');
    });
    wrapper.appendChild(popup);
    return wrapper;
};

export const createPopupWithTrigger = ({
    triggerLabel = 'Show Toast',
    triggerVariant = 'primary',
    ...popupArgs
}: PopupTriggerArgs) => {
    const wrapper = document.createElement('div');

    const triggerButton = document.createElement('button');
    triggerButton.className = `
    px-4 py-2 rounded-lg text-button-label-desktop
    ${triggerVariant === 'primary'
            ? 'bg-primary-interaction text-base-black hover:bg-primary-light'
            : 'bg-secondary-interaction text-gray-900 hover:bg-secondary-light'}
    transition-colors
  `;
    triggerButton.textContent = triggerLabel;

    triggerButton.addEventListener('click', () => {
        ToastManager.getInstance().show(popupArgs);
    });

    wrapper.appendChild(triggerButton);
    return wrapper;
};

export const showToast = (args: PopupArgs) => {
    ToastManager.getInstance().show(args);
};
