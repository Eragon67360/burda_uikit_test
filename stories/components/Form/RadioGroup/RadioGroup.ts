import { createRadioButton, RadioButtonArgs } from '@/components/Form/RadioButton/RadioButton';

export type RadioOption = {
  value: string;
  label: string;
};

export type RadioGroupArgs = {
  name: string;
  options: RadioOption[];
  fieldLabel?: string;
  selectedValue?: string;
  disabled?: boolean;
  direction?: 'horizontal' | 'vertical';
};

export const createRadioGroup = ({
  name,
  options,
  fieldLabel,
  selectedValue,
  disabled = false,
  direction = 'vertical',
}: RadioGroupArgs) => {
  const wrapper = document.createElement('div');
  wrapper.className = 'flex flex-col gap-2';

  if (fieldLabel) {
    const fieldLabelElement = document.createElement('label');
    fieldLabelElement.className = 'text-sm font-medium text-gray-700';
    fieldLabelElement.textContent = fieldLabel;
    wrapper.appendChild(fieldLabelElement);
  }

  const radioContainer = document.createElement('div');
  radioContainer.className = `
        flex 
        ${direction === 'horizontal' ? 'flex-row gap-6' : 'flex-col gap-[17px]'} 
        items-${direction === 'horizontal' ? 'center' : 'start'}
        
    `.trim();

  options.forEach((option) => {
    const radioButtonArgs: RadioButtonArgs = {
      name,
      value: option.value,
      label: option.label,
      checked: option.value === selectedValue,
      disabled,
    };

    const radioButton = createRadioButton(radioButtonArgs);
    radioButton.className = 'flex items-center';

    radioContainer.appendChild(radioButton);
  });

  wrapper.appendChild(radioContainer);
  return wrapper;
};
