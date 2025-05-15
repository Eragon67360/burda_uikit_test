import { createRadioButton } from '@/components/Form/RadioButton/RadioButton';

export type RadioGroupOption = {
  label: string;
  value: string;
};

export type RadioGroupArgs = {
  id?: string;
  name: string;
  options: RadioGroupOption[];
  fieldLabel?: string | undefined;
  selectedValue?: string | undefined;
  required?: boolean;
  disabled?: boolean;
  direction?: 'horizontal' | 'vertical';
};

export const createRadioGroup = ({
  id = `input-radio-group-${Math.random().toString(36).substring(2, 9)}`,
  name,
  options,
  fieldLabel,
  selectedValue,
  required = false,
  disabled = false,
  direction = 'vertical',
}: RadioGroupArgs) => {
  const wrapper = document.createElement('fieldset');
  wrapper.id = id;
  wrapper.className = 'flex flex-col gap-2';

  if (fieldLabel) {
    const fieldLabelElement = document.createElement('legend');
    fieldLabelElement.className = 'text-sm font-medium text-gray-700';
    fieldLabelElement.textContent = fieldLabel;
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

  radioContainer.className = 'flex';
  if (direction === 'horizontal') {
    radioContainer.classList.add('flex-row', 'gap-6', 'items-center');
  } else {
    radioContainer.classList.add('flex-col', 'gap-[17px]', 'items-start');
  }

  options.forEach((option) => {
    const radioButton = createRadioButton({
      ...option,
      id: `${id}-${option.value}`,
      name,
      required,
      checked: option.value === selectedValue,
      disabled,
    });
    radioButton.className = 'flex items-center';

    radioContainer.appendChild(radioButton);
  });

  wrapper.appendChild(radioContainer);
  return wrapper;
};
