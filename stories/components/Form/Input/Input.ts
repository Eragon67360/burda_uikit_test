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
    label,
    labelPosition = 'top',
    placeholder = '',
    required = false,
    disabled = false,
    state = 'default',
    errorMessage = '',
    value = '',
}: InputArgs) => {
    const wrapper = document.createElement('div');
    wrapper.className = `input-wrapper ${labelPosition === 'side' ? 'flex items-center gap-2' : 'flex flex-col gap-1'
        }`;

    if (label) {
        const labelElement = document.createElement('label');
        labelElement.className = `flex items-center gap-1 ml-4 text-label-desktop 
        ${disabled ? 'text-neutral-400' : 'text-base-black'}
        `;
        labelElement.innerHTML = `
      ${label}
      ${required ? '<span class="text-red-500">*</span>' : ''}
    `;
        wrapper.appendChild(labelElement);
    }

    const inputElement = document.createElement(variant);
    const baseClasses = `
    w-full px-3 py-2 rounded-[0.25rem] border placeholder:text-neutral-800 placeholder:text-placeholder-desktop transition
    ${disabled ? 'bg-neutral-100 placeholder:text-neutral-400 cursor-not-allowed' : 'bg-neutral-100 hover:bg-neutral-50 active:bg-secondary-extra-light active:ring-transparent active:border-transparent'}
    ${state === 'error'
            ? 'border-red-500'
            : state === 'success'
                ? 'border-green-500'
                : state === 'highlighted'
                    ? 'border-blue-500'
                    : 'border-neutral-450'
        }
    focus:outline-none focus:ring-[3px] focus:ring-base-black
  `;

    inputElement.className = baseClasses;

    if (variant === 'input') {
        inputElement.setAttribute('type', type);
    }

    if (placeholder) {
        inputElement.setAttribute('placeholder', placeholder);
    }

    if (required) {
        inputElement.setAttribute('required', 'true');
    }

    if (disabled) {
        inputElement.setAttribute('disabled', 'true');
    }

    if (value) {
        inputElement.setAttribute('value', value);
    }

    wrapper.appendChild(inputElement);

    // Add error message if in error state
    if (state === 'error' && errorMessage) {
        const errorElement = document.createElement('span');
        errorElement.className = 'text-red-500 text-sm';
        errorElement.textContent = errorMessage;
        wrapper.appendChild(errorElement);
    }

    return wrapper;
};
