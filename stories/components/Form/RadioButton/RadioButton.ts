export type RadioButtonArgs = {
    name: string;
    value: string;
    label: string;
    fieldLabel?: string;
    checked?: boolean;
    disabled?: boolean;
};

export const createRadioButton = ({
    name,
    value,
    label,
    fieldLabel,
    checked = false,
    disabled = false,
}: RadioButtonArgs) => {
    const id = `radio-${name}-${value}`;

    const wrapper = document.createElement('div');
    wrapper.className = 'flex flex-col gap-2';

    if (fieldLabel) {
        const fieldLabelElement = document.createElement('label');
        fieldLabelElement.className = 'text-sm font-medium text-gray-700';
        fieldLabelElement.textContent = fieldLabel;
        wrapper.appendChild(fieldLabelElement);
    }

    const radioContainer = document.createElement('div');
    radioContainer.className = 'flex items-center gap-3';

    const radioWrapper = document.createElement('div');
    radioWrapper.className = 'relative flex items-center justify-center';

    const input = document.createElement('input');
    input.type = 'radio';
    input.id = id;
    input.name = name;
    input.value = value;
    input.checked = checked;
    input.disabled = disabled;
    input.className = `
        appearance-none
        size-4
        transition duration-300
        text-secondary-interaction
        shrink-0
        rounded-full
        bg-neutral-100
        border
        border-neutral-450
        checked:bg-base-white
        hover:border-secondary-dark
        checked:border-base-black
        focus-visible:border-2
        focus-visible:border-base-black
        peer
        ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
    `.trim();

    const innerContent = document.createElement('div');
    innerContent.className = `
        absolute inset-0 items-center transition bg-transparent peer-checked:bg-secondary-interaction m-auto  justify-center rounded-full 
        pointer-events-none size-2.5
        `;

    radioWrapper.appendChild(input);
    radioWrapper.appendChild(innerContent);

    const labelElement = document.createElement('label');
    labelElement.htmlFor = id;
    labelElement.className = `
        text-sm
        ${disabled ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 cursor-pointer'}
    `.trim();
    labelElement.textContent = label;

    radioContainer.appendChild(radioWrapper);
    radioContainer.appendChild(labelElement);
    wrapper.appendChild(radioContainer);

    return wrapper;
};
