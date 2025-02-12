import { IconCategory, IconRegistry } from "../../../assets/icons";

export type CheckboxArgs = {
    label: string;
    checked?: boolean;
    disabled?: boolean;
    name?: string;
    required?: boolean;
    onChange?: (checked: boolean) => void;
};

export const createCheckbox = ({
    label,
    checked = false,
    disabled = false,
    name = '',
    required = false,
    onChange,
}: CheckboxArgs) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'flex items-center gap-3';

    const checkboxWrapper = document.createElement('div');
    checkboxWrapper.className = 'relative flex items-center justify-center';

    const uniqueId = `checkbox-${Math.random().toString(36).substr(2, 9)}`;

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.name = name;
    input.id = uniqueId;
    input.checked = checked;
    input.disabled = disabled;
    input.required = required;
    input.className = `
        relative appearance-none size-4.5 rounded-sm
        border border-neutral-450 bg-neutral-100
        checked:border-base-black
        focus-visible:ring-2
        focus-visible:border-transparent
        transition
        peer
        cursor-pointer
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
  `;

    const checkmark = document.createElement('div');
    checkmark.className = `
        absolute inset-0 items-center justify-center hidden peer-checked:flex
        pointer-events-none size-4.5
        `;

    checkmark.innerHTML = IconRegistry[IconCategory.SYSTEM].checkAlt;

    checkboxWrapper.appendChild(input);
    checkboxWrapper.appendChild(checkmark);

    const labelElement = document.createElement('label');
    labelElement.textContent = label;
    labelElement.htmlFor = uniqueId;
    labelElement.className = `text-sm text-gray-700 ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`;

    if (onChange) {
        input.addEventListener('change', (e) => {
            onChange((e.target as HTMLInputElement).checked);
        });
    }

    wrapper.appendChild(checkboxWrapper);
    wrapper.appendChild(labelElement);

    return wrapper;
};
