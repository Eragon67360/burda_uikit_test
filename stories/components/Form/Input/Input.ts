import { IconRegistry, IconCategory } from "../../../assets/icons";
import './input.css'
export type InputVariant = 'input' | 'textarea';
export type InputType = 'text' | 'email' | 'password' | 'tel' | 'number';
export type LabelPosition = 'top' | 'side';
export type InputState = 'default' | 'error' | 'success' | 'highlighted';

export type InputArgs = {
    variant?: InputVariant;
    type?: InputType;
    label?: string;
    labelPosition?: LabelPosition;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    state?: InputState;
    errorMessage?: string;
    value?: string;
};

export const createInput = ({
    variant = 'input',
    type = 'text',
    label = '',
    labelPosition = 'top',
    placeholder = '',
    required = false,
    disabled = false,
    state = 'default',
    errorMessage = '',
    value = ''
}: InputArgs) => {
    const wrapper = document.createElement('div');
    wrapper.className = `input-wrapper ${labelPosition === 'side' ? 'flex items-center gap-4' : 'flex flex-col gap-2'
        }`;

    if (label) {
        const labelElement = document.createElement('label');
        labelElement.className = `
        text-sm font-medium  pl-4 ml-px
        ${disabled ? 'text-neutral-400' : state === 'error' ? 'text-red-700' : state === 'success' ? 'text-green-700' : 'text-gray-700'}
        `;
        const labelText = document.createTextNode(label);
        labelElement.appendChild(labelText);
        if (required) {
            const asterisk = document.createElement('span');
            asterisk.className = 'text-red-700';
            asterisk.textContent = ' *';
            labelElement.appendChild(asterisk);
        }

        wrapper.appendChild(labelElement);
    }

    const inputContainer = document.createElement('div');
    inputContainer.className = 'relative w-full';

    const inputElement = document.createElement(variant);
    const baseClasses = `
    w-full
    px-4
    py-0
    border
    relative
    rounded-[0.25rem]
    transition-all
    duration-200
    outline-none
    placeholder:text-neutral-800
    disabled:bg-neutral-100
    disabled:border-transparent
    disabled:cursor-not-allowed
    disabled:placeholder:text-neutral-400
    ${variant === 'textarea' ? 'min-h-[100px] resize-handle-center' : 'h-[2.75rem]'}
  `;

    const stateClasses = {
        default: `
       bg-base-white
        placeholder-shown:bg-neutral-100
        border-neutral-450
        enabled:active:border-secondary-extra-light
        active:bg-secondary-extra-light
        focus:ring-2
        focus:ring-base-black
        focus:border-base-black
    `,
        error: 'bg-red-50 invalid:font-bold placeholder:font-medium border-system-error ring-2 ring-system-error text-red-700 focus:border-system-error focus:ring-system-error',
        success: 'bg-green-50 font-bold placeholder:font-medium border-system-success ring-2 ring-system-success text-green-700 focus:border-system-success focus:ring-system-success',
        highlighted: 'bg-amber-50 font-bold placeholder:font-medium border-system-notification ring-2 ring-system-notification text-base-black focus:border-system-notification focus:ring-system-notification'
    };

    inputElement.className = `${baseClasses} ${stateClasses[state]}`;

    if (variant === 'input') {
        (inputElement as HTMLInputElement).type = type;
    }

    inputElement.placeholder = placeholder;
    inputElement.disabled = disabled;
    inputElement.required = required;
    if (value) {
        inputElement.value = value;
    }
    if (state === 'error' || state === 'success') {
        const iconWrapper = document.createElement('div');

        if (state === 'error') {
            iconWrapper.className = 'absolute right-4 top-1/2 -mt-[1.375rem]';
        } else {
            iconWrapper.className = 'absolute right-4 top-1/2 -translate-y-1/2';
        }
        const icon = document.createElement('span');
        icon.innerHTML = state === 'error'
            ? IconRegistry[IconCategory.SYSTEM].warningFilled
            : IconRegistry[IconCategory.SYSTEM].checkAlt;

        icon.classList.add(state === 'error' ? 'text-system-error' : 'text-system-success');

        iconWrapper.appendChild(icon);
        inputContainer.appendChild(iconWrapper);

        inputElement.classList.add('pr-12');
    }

    inputContainer.appendChild(inputElement);

    if (state === 'error' && errorMessage) {
        const errorElement = document.createElement('p');
        errorElement.className = 'mt-1 pl-4 ml-px text-sm text-red-700 font-bold';
        errorElement.textContent = errorMessage;
        inputContainer.appendChild(errorElement);
    }

    wrapper.appendChild(inputContainer);
    return wrapper;
};
