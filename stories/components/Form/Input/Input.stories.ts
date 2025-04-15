import type { Meta, StoryObj } from '@storybook/html';
import { InputArgs, createInput } from './Input';
import { ArgsCategory } from '@/stories/types/story';
import { play } from './Input.tests';

const meta: Meta<InputArgs> = {
  title: 'Components (Atoms)/Form/InputField',

  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    docs: {
      description: {
        component: '',
      },
    },
  },

  args: {
    name: 'sample-input',
    id: 'uuid',
    variant: 'input',
    type: 'text',
    label: 'Label',
    labelPosition: 'top',
    placeholder: 'Enter text...',
    value: '',
    required: false,
    disabled: false,
    autocomplete: undefined,
    state: 'default',
    errorMessage: '',
    tooltipContent: '',
    ariaLabel: undefined,
    ariaLabelTooltipTrigger: 'Sample Tooltip',
    ariaLabelTooltipClose: 'Close tooltip',
  },

  argTypes: {
    name: {
      control: 'text',
      description: 'Name of the input field, used for form submission.',
      type: { name: 'string', required: true },
      table: {
        category: ArgsCategory.PROPS,
      },
    },
    id: {
      control: 'text',
      description: 'Unique identifier for the input field.',
      type: { name: 'string', required: true },
      table: {
        category: ArgsCategory.PROPS,
      },
    },
    variant: {
      control: 'select',
      options: ['input', 'textarea'],
      description:
        'Defines the visual style of the input field. The default is a standard text input which can be used for different types of data set by "type". The "textarea" variant is used for multi-line text input.',
      type: { name: 'string', required: true },
      defaultValue: { summary: 'input' },
      table: {
        category: ArgsCategory.PROPS,
      },
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
      description: 'Defines the type of input field. If variant is "textarea", this prop is ignored.',
      type: { name: 'string' },
      defaultValue: { summary: 'text' },
      table: {
        category: ArgsCategory.PROPS,
      },
    },
    label: {
      control: 'text',
      description:
        'Label for the input field, displayed above or beside the field based on labelPosition. If not provided the ariaLabel prop is required for accessibility.',
      table: {
        type: { summary: 'string | undefined' },
        category: ArgsCategory.PROPS,
      },
    },
    labelPosition: {
      control: 'select',
      options: ['top', 'side'],
      description:
        'Position of the label relative to the input field. "top" places the label above the field, while "side" places it to the left.',
      type: { name: 'string' },
      defaultValue: { summary: 'top' },
      table: {
        category: ArgsCategory.PROPS,
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text displayed inside the input field when it is empty.',
      table: {
        type: { summary: 'string | undefined' },
        category: ArgsCategory.PROPS,
      },
    },
    value: {
      control: 'text',
      description: 'Current value of the input field.',
      type: { name: 'string' },
      table: {
        category: ArgsCategory.PROPS,
      },
    },
    required: {
      control: 'boolean',
      description: 'Indicates if the input field is required for form submission.',
      type: { name: 'boolean' },
      defaultValue: { summary: false },
      table: {
        category: ArgsCategory.PROPS,
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Indicates if the input field is disabled and cannot be interacted with.',
      type: { name: 'boolean' },
      defaultValue: { summary: false },
      table: {
        category: ArgsCategory.PROPS,
      },
    },
    autocomplete: {
      control: 'text',
      description:
        'Autocomplete attribute for the input field, used to specify what kind of information is expected. See [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for a full list of options.',
      table: {
        type: { summary: 'string | undefined' },
        category: ArgsCategory.PROPS,
      },
    },
    state: {
      control: 'select',
      options: ['default', 'error', 'success', 'highlighted', 'tooltip'],
      description:
        'Visual state of the input field. "default" is the normal state, "error" indicates a validation error, "success" indicates valid input, "highlighted" draws attention to the field, and "tooltip" shows additional information.',
      type: { name: 'string' },
      defaultValue: { summary: 'default' },
      table: {
        category: ArgsCategory.PROPS,
      },
    },
    errorMessage: {
      control: 'text',
      description: 'Error message displayed when the state is "error".',
      table: {
        type: { summary: 'string | undefined' },
        category: ArgsCategory.PROPS,
      },
    },
    tooltipContent: {
      control: 'text',
      description: 'Content displayed in a tooltip when the state is "tooltip".',
      table: {
        type: { summary: 'string | undefined' },
        category: ArgsCategory.PROPS,
      },
    },
    ariaLabel: {
      control: 'text',
      description: 'Aria label for accessibility. Required if label is not provided. Used for screen readers.',
      table: {
        type: { summary: 'string | undefined' },
        category: ArgsCategory.ACCESSIBILITY,
      },
    },
    ariaLabelTooltipTrigger: {
      control: 'text',
      description: 'Aria label for the tooltip trigger element. Used for screen readers.',
      table: {
        type: { summary: 'string | undefined' },
        category: ArgsCategory.ACCESSIBILITY,
      },
    },
    ariaLabelTooltipClose: {
      control: 'text',
      description: 'Aria label for the close button of the tooltip. Used for screen readers.',
      table: {
        type: { summary: 'string | undefined' },
        category: ArgsCategory.ACCESSIBILITY,
      },
    },
  },

  render: (args) => createInput(args),
  play,
};

export default meta;
type Story = StoryObj<InputArgs>;

export const Default: Story = {};

export const WithError: Story = {
  args: {
    id: 'error-input',
    state: 'error',
    label: 'Error Input',
    errorMessage: 'This field is required',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Input field with error state. This state is typically used to indicate a validation error or required field with missing value.',
      },
    },
  },
};

export const WithSuccess: Story = {
  args: {
    id: 'success-input',
    state: 'success',
    value: 'Valid input',
    label: 'Successful Input',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Input field with success state. This state is typically used to indicate a valid input, such as a correctly formatted email address.',
      },
    },
  },
};

export const Highlighted: Story = {
  args: {
    id: 'highlighted-input',
    state: 'highlighted',
    value: 'Highlighted input',
    label: 'Highlighted Input',
  },
  parameters: {
    docs: {
      description: {
        story: 'Input field with highlighted state. This state is typically used to draw attention to the field.',
      },
    },
  },
};

export const WithAutocompletion: Story = {
  args: {
    id: 'autocomplete-input',
    autocomplete: 'name',
    label: 'Autocompletion Input',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Input field with autocompletion enabled for name input. A full list of options can be found in the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete).',
      },
    },
  },
};

export const Textarea: Story = {
  args: {
    id: 'textarea-input',
    variant: 'textarea',
    placeholder: 'Enter long text...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Textarea variant for multi-line text input. The "type" prop is ignored when variant is set to "textarea".',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    id: 'disabled-input',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled state of the input field. The field is not interactive and visually indicates its disabled state.',
      },
    },
  },
};

export const Required: Story = {
  args: {
    id: 'required-input',
    required: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Required state of the input field. This indicates that the field must be filled out before form submission.',
      },
    },
  },
};

export const SideLabel: Story = {
  args: {
    id: 'side-label-input',
    labelPosition: 'side',
  },
  parameters: {
    docs: {
      description: {
        story: 'Input field with label positioned to the side.',
      },
    },
  },
};

export const WithTooltip: Story = {
  args: {
    id: 'tooltip-input',
    state: 'tooltip',
    tooltipContent: `
      <div class="text-sm">
          <p class="font-medium mb-2">Help Information</p>
          <p class="text-gray-600">This input field accepts any text value. 
          Please ensure your input follows the required format.</p>
      </div>
    `,
  },
  parameters: {
    docs: {
      description: {
        story: 'Input field with an informational tooltip that provides additional context to the user.',
      },
    },
  },
};
