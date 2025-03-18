import { IconCategory, IconRegistry } from "../../../assets/icons";
import { ButtonCTAVariant, createButtonCTA } from "../../Button/CTA/ButtonCTA";

export type ModalArgs = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string | HTMLElement;
  triggerButton: {
    variant: ButtonCTAVariant;
    label: string;
  };
  actions?: {
    primary?: {
      label: string;
      onClick: () => void;
      icon: string | null;
    };
    secondary?: {
      label: string;
      onClick: () => void;
      icon: string | null;
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

          <div class="relative ${actions ? 'px-14 py-16' : 'p-6'}">
            <h3 class="text-lg font-semibold pr-8">${title}</h3>
            
            <button class="modal-close absolute top-6 right-6 transition-transform hover:scale-110">
              ${IconRegistry[IconCategory.SYSTEM].close}
            </button>
            
            <div class="modal-content"></div>
          </div>

          ${actions ? `
            <div class="flex ">
              ${actions.primary ?
        createButtonCTA({
          variant: ButtonCTAVariant.LARGE_SUBSCRIPTION,
          nested: false,
          disabled: false,
          iconLeft: false,
          icon: actions.primary.icon,
          label: actions.primary.label,
          onClick: actions.primary.onClick,
          classNames: "w-full primary-action"
        }).outerHTML
        :
        ''}
              ${actions.secondary ? createButtonCTA({
          variant: ButtonCTAVariant.LARGE,
          nested: false,
          disabled: false,
          iconLeft: false,
          icon: actions.secondary.icon,
          label: actions.secondary.label,
          onClick: actions.secondary.onClick,
          classNames: "w-full secondary-action"
        }).outerHTML : ''}
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

  const button = createButtonCTA({
    variant: triggerButton.variant,
    label: triggerButton.label,
    nested: false,
    disabled: false,
    iconLeft: false,
    icon: null,
    onClick: () => {
      button.setAttribute('disabled', 'true');
      button.classList.add('pointer-events-none', 'opacity-50');
      modalContainer.classList.remove('hidden');
      setTimeout(() => {
        const backdrop = modalContainer.querySelector('.modal-backdrop');
        const modalContent = modalContainer.querySelector('.modal-content-animate');
        backdrop?.classList.add('opacity-50');
        modalContent?.classList.remove('translate-y-4', 'opacity-0', 'scale-95');
        modalContent?.classList.add('translate-y-0', 'opacity-100', 'scale-100');
      }, 10);
    },
    classNames: ''
  });

  const closeModal = () => {
    const modalContent = modalContainer.querySelector('.modal-content-animate');
    const backdrop = modalContainer.querySelector('.modal-backdrop');
    backdrop?.classList.remove('opacity-50');
    modalContent?.classList.remove('translate-y-0', 'opacity-100', 'scale-100');
    modalContent?.classList.add('translate-y-4', 'opacity-0', 'scale-95');
    button.removeAttribute('disabled');
    button.classList.remove('pointer-events-none', 'opacity-50');
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
