export type RadioButtonArgs = {
  id?: string;
  name: string;
  value: string;
  label: string;
  fieldLabel?: string;
  required?: boolean;
  checked?: boolean;
  disabled?: boolean;
};

export const createRadioButton = ({
  id = `input-radio-${Math.random().toString(36).substring(2, 9)}`,
  name,
  value,
  label,
  fieldLabel,
  required = false,
  checked = false,
  disabled = false,
}: RadioButtonArgs) => {
  const wrapper = document.createElement('div');
  wrapper.className = 'flex flex-col gap-2';

  if (fieldLabel) {
    const fieldLabelElement = document.createElement('p');
    fieldLabelElement.id = `${id}-field-label`;
    fieldLabelElement.textContent = fieldLabel;
    fieldLabelElement.className = 'text-sm font-medium text-gray-700';
    if (required) {
      const asterisk = document.createElement('span');
      asterisk.setAttribute('aria-hidden', 'true');
      asterisk.className = 'text-red-700';
      asterisk.textContent = ' *';
      fieldLabelElement.appendChild(asterisk);
    }
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
  input.required = required;
  input.checked = checked;
  input.disabled = disabled;

  if (fieldLabel) {
    input.setAttribute('aria-describedby', `${id}-field-label`);
  }

  const baseClasses = [
    'appearance-none',
    'size-4',
    'transition',
    'duration-300',
    'text-secondary-interaction',
    'shrink-0',
    'rounded-full',
    'bg-neutral-100',
    'border',
    'border-neutral-450',
    'checked:bg-base-white',
    'checked:border-base-black',
    'focus:outline-hidden',
    'focus-visible:border-2',
    'focus-visible:border-base-black',
    'peer',
  ];

  input.classList.add(...baseClasses);
  if (disabled) {
    input.classList.add('cursor-not-allowed', 'opacity-50');
  } else {
    input.classList.add('cursor-pointer', 'hover:border-secondary-dark');
  }

  const innerContent = document.createElement('div');

  const innerBaseClasses = [
    'absolute',
    'inset-0',
    'items-center',
    'transition',
    'bg-transparent',
    'peer-checked:bg-secondary-interaction',
    'm-auto',
    'justify-center',
    'rounded-full',
    'pointer-events-none',
    'size-2.5',
  ];

  innerContent.classList.add(...innerBaseClasses);

  radioWrapper.appendChild(input);
  radioWrapper.appendChild(innerContent);

  const labelElement = document.createElement('label');
  labelElement.htmlFor = id;
  labelElement.setAttribute('for', id);
  labelElement.textContent = label;
  labelElement.className = `text-sm ${disabled ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 cursor-pointer'}`;

  radioContainer.appendChild(radioWrapper);
  radioContainer.appendChild(labelElement);
  wrapper.appendChild(radioContainer);

  return wrapper;
};
