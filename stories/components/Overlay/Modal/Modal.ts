import { ButtonVariant, createButtonLink } from "../../Button/ButtonLink/ButtonLink";
import { IconCategory, IconRegistry } from "../../../assets/icons";

export type ModalArgs = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    content: string | HTMLElement;
    triggerButton: {
        variant: ButtonVariant;
        label: string;
    };
    actions?: {
        primary?: {
            label: string;
            onClick: () => void;
        };
        secondary?: {
            label: string;
            onClick: () => void;
        };
    };
};

export const createModal = ({
    isOpen,
    onClose,
    title,
    content,
    triggerButton,
    actions
}: ModalArgs) => {
    const wrapper = document.createElement('div');

    const modalContainer = document.createElement('div');
    modalContainer.className = `modal-container ${isOpen ? '' : 'hidden'}`;

    modalContainer.innerHTML = `
      <div class="modal-backdrop fixed inset-0 bg-base-black opacity-0 transition-opacity duration-300"></div>
      
      <div class="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
        <div class="bg-base-white rounded-lg w-fit max-w-6xl mx-4 pointer-events-auto
          transform transition-all duration-300 ease-in-out
          translate-y-4 opacity-0 scale-95
          modal-content-animate overflow-hidden">

          <div class="relative ${actions ? 'px-14 pt-16 pb-0' : 'p-6'}">
            <h3 class="text-lg font-semibold pr-8">${title}</h3>
            
            <button class="modal-close absolute top-6 right-6 transition-transform hover:scale-110">
              ${IconRegistry[IconCategory.SYSTEM].close}
            </button>
            
            <div class="modal-content"></div>
          </div>

          ${actions ? `
            <div class="flex mt-4">
              ${actions.primary ? `
                <button class="primary-action h-[4.5rem] w-full bg-primary-interaction text-base-black text-button-label-desktop hover:opacity-90 transition-all duration-200">
                  ${actions.primary.label}
                </button>
              ` : ''}
              ${actions.secondary ? `
                <button class="secondary-action h-[4.5rem] w-full bg-base-black text-base-white text-button-label-desktop hover:opacity-90 transition-all duration-200">
                  ${actions.secondary.label}
                </button>
              ` : ''}
            </div>
          ` : ''}
        </div>
      </div>
    `;

    const contentContainer = modalContainer.querySelector('.modal-content');
    if (contentContainer) {
        if (content instanceof HTMLElement) {
            contentContainer.appendChild(content);
        } else {
            contentContainer.innerHTML = content;
        }
    }

    const button = createButtonLink({
        variant: triggerButton.variant,
        label: triggerButton.label,
        nested: false,
        disabled: false,
        iconLeft: false,
        icon: null,
        onClick: () => {
            modalContainer.classList.remove('hidden');
            setTimeout(() => {
                const backdrop = modalContainer.querySelector('.modal-backdrop');
                const modalContent = modalContainer.querySelector('.modal-content-animate');
                backdrop?.classList.add('opacity-50');
                modalContent?.classList.remove('translate-y-4', 'opacity-0', 'scale-95');
                modalContent?.classList.add('translate-y-0', 'opacity-100', 'scale-100');
            }, 10);
        }
    });

    const closeModal = () => {
        const modalContent = modalContainer.querySelector('.modal-content-animate');
        const backdrop = modalContainer.querySelector('.modal-backdrop');
        backdrop?.classList.remove('opacity-50');
        modalContent?.classList.remove('translate-y-0', 'opacity-100', 'scale-100');
        modalContent?.classList.add('translate-y-4', 'opacity-0', 'scale-95');

        setTimeout(() => {
            modalContainer.classList.add('hidden');
            onClose();
        }, 300);
    };

    const closeButton = modalContainer.querySelector('.modal-close');
    const backdrop = modalContainer.querySelector('.modal-backdrop');
    const primaryAction = modalContainer.querySelector('.primary-action');
    const secondaryAction = modalContainer.querySelector('.secondary-action');

    closeButton?.addEventListener('click', closeModal);
    backdrop?.addEventListener('click', closeModal);

    if (actions?.primary && primaryAction) {
        primaryAction.addEventListener('click', actions.primary.onClick);
    }
    if (actions?.secondary && secondaryAction) {
        secondaryAction.addEventListener('click', actions.secondary.onClick);
    }

    wrapper.appendChild(button);
    wrapper.appendChild(modalContainer);

    return wrapper;
};
