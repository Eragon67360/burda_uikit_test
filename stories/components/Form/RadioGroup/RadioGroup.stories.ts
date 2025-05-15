import type { Meta, StoryObj } from '@storybook/html';
import { RadioGroupArgs, createRadioGroup } from './RadioGroup';
import { ArgsCategory } from '@/stories/types/story';
import { play } from './RadioGroup.test';

const meta: Meta<RadioGroupArgs> = {
  title: 'Components (Atoms)/Form/RadioGroup',

  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'A radio group component that allows users to select one option from a set of radio buttons. It can be customized with various properties such as label, selected value, and disabled state.',
      },
    },
  },

  args: {
    id: 'uuid',
    name: 'sample-radio-group',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
    fieldLabel: undefined,
    selectedValue: undefined,
    required: false,
    disabled: false,
    direction: 'vertical',
  },

  argTypes: {
    id: {
      control: 'text',
      description: 'Unique identifier for the radio group.',
      type: { name: 'string', required: true },
      table: {
        category: ArgsCategory.PROPS,
      },
    },
    name: {
      control: 'text',
      description: 'Name attribute for the radio group. This groups the radio buttons together.',
      type: { name: 'string', required: true },
      table: {
        category: ArgsCategory.PROPS,
      },
    },
    options: {
      control: 'object',
      description: 'An array of objects representing the radio button options. Each object must contain value, and label properties.',
      type: { name: 'string', required: true },
      table: {
        type: { summary: 'Array<{ value: string; label: string }>' },
        category: ArgsCategory.PROPS,
      },
    },
    fieldLabel: {
      control: 'text',
      description: 'Label displayed above the radio group. This can be used to provide context or instructions for the user.',
      table: {
        type: { summary: 'string | undefined' },
        defaultValue: { summary: 'undefined' },
        category: ArgsCategory.PROPS,
      },
    },
    selectedValue: {
      control: 'text',
      description: 'The value of the currently selected radio button. This is used to determine which button should be checked.',
      table: {
        type: { summary: 'string | undefined' },
        defaultValue: { summary: 'undefined' },
        category: ArgsCategory.PROPS,
      },
    },
    required: {
      control: 'boolean',
      description:
        'Indicates if the radio group is required for form submission. If true, the user must select an option before submitting the form. An asterisk will be added to the field label.',
      type: { name: 'boolean' },
      defaultValue: { summary: false },
      table: {
        category: ArgsCategory.PROPS,
      },
    },
    disabled: {
      control: 'boolean',
      description: 'If true, all radio buttons in the group will be disabled and not selectable by the user.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: ArgsCategory.PROPS,
      },
    },
    direction: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description:
        "Defines the layout direction of the radio buttons. Use 'horizontal' for side-by-side layout and 'vertical' for stacked layout.",
      table: {
        type: { summary: "'horizontal' | 'vertical'" },
        defaultValue: { summary: 'vertical' },
        category: ArgsCategory.PROPS,
      },
    },
  },

  render: (args) => createRadioGroup(args),
  play,
};

export default meta;
type Story = StoryObj<RadioGroupArgs>;

export const HorizontalBasic: Story = {
  args: {
    id: 'radio-group-horizontal',
    name: 'radio-group-horizontal',
    direction: 'horizontal',
  },
  parameters: {
    docs: {
      description: {
        story: 'A basic horizontal radio group with default options. This layout is useful when you want to display options side by side.',
      },
    },
  },
};

export const VerticalBasic: Story = {
  args: {
    id: 'radio-group-vertical',
    name: 'radio-group-vertical',
    direction: 'vertical',
  },
  parameters: {
    docs: {
      description: {
        story:
          'A basic vertical radio group with default options. This layout is useful when you want to display options in a stacked format.',
      },
    },
  },
};

export const HorizontalWithFieldLabel: Story = {
  args: {
    id: 'radio-group-horizontal-with-field-label',
    name: 'radio-group-horizontal-with-field-label',
    fieldLabel: 'Select Option',
    direction: 'horizontal',
  },
  parameters: {
    docs: {
      description: {
        story:
          'A horizontal radio group with an additional field label for better context. This is useful for providing instructions or context to the user.',
      },
    },
  },
};

export const VerticalWithFieldLabel: Story = {
  args: {
    id: 'radio-group-vertical-with-field-label',
    name: 'radio-group-vertical-with-field-label',
    fieldLabel: 'Select Option',
    direction: 'vertical',
  },
  parameters: {
    docs: {
      description: {
        story:
          'A vertical radio group with an additional field label for better context. This is useful for providing instructions or context to the user.',
      },
    },
  },
};

export const HorizontalWithSelection: Story = {
  args: {
    id: 'radio-group-horizontal-with-selection',
    name: 'radio-group-horizontal-with-selection',
    selectedValue: 'option2',
    direction: 'horizontal',
  },
  parameters: {
    docs: {
      description: {
        story: 'A horizontal radio group with a pre-selected option. This is useful for indicating a default choice to the user.',
      },
    },
  },
};

export const VerticalWithSelection: Story = {
  args: {
    id: 'radio-group-vertical-with-selection',
    name: 'radio-group-vertical-with-selection',
    selectedValue: 'option2',
    direction: 'vertical',
  },
  parameters: {
    docs: {
      description: {
        story: 'A vertical radio group with a pre-selected option. This is useful for indicating a default choice to the user.',
      },
    },
  },
};

export const HorizontalWithFieldLabelAndSelection: Story = {
  args: {
    id: 'radio-group-horizontal-with-field-label-and-selection',
    name: 'radio-group-horizontal-with-field-label-and-selection',
    fieldLabel: 'Select Option',
    selectedValue: 'option2',
    direction: 'horizontal',
  },
  parameters: {
    docs: {
      description: {
        story: 'A horizontal radio group with an additional field label and a pre-selected option.',
      },
    },
  },
};

export const VerticalWithFieldLabelAndSelection: Story = {
  args: {
    id: 'radio-group-vertical-with-field-label-and-selection',
    name: 'radio-group-vertical-with-field-label-and-selection',
    fieldLabel: 'Select Option',
    selectedValue: 'option2',
    direction: 'vertical',
  },
  parameters: {
    docs: {
      description: {
        story: 'A vertical radio group with an additional field label and a pre-selected option.',
      },
    },
  },
};

export const HorizontalDisabled: Story = {
  args: {
    id: 'radio-group-horizontal-disabled',
    name: 'radio-group-horizontal-disabled',
    fieldLabel: 'Select Option',
    disabled: true,
    direction: 'horizontal',
  },
  parameters: {
    docs: {
      description: {
        story: 'A horizontal radio group with all options disabled.',
      },
    },
  },
};

export const VerticalDisabled: Story = {
  args: {
    id: 'radio-group-vertical-disabled',
    name: 'radio-group-vertical-disabled',
    fieldLabel: 'Select Option',
    disabled: true,
    direction: 'vertical',
  },
  parameters: {
    docs: {
      description: {
        story: 'A vertical radio group with all options disabled.',
      },
    },
  },
};

export const HorizontalDisabledWithSelection: Story = {
  args: {
    id: 'radio-group-horizontal-disabled-with-selection',
    name: 'radio-group-horizontal-disabled-with-selection',
    fieldLabel: 'Select Option',
    selectedValue: 'option2',
    disabled: true,
    direction: 'horizontal',
  },
  parameters: {
    docs: {
      description: {
        story: 'A horizontal radio group with all options disabled and a pre-selected option.',
      },
    },
  },
};

export const VerticalDisabledWithSelection: Story = {
  args: {
    id: 'radio-group-vertical-disabled-with-selection',
    name: 'radio-group-vertical-disabled-with-selection',
    fieldLabel: 'Select Option',
    selectedValue: 'option2',
    disabled: true,
    direction: 'vertical',
  },
  parameters: {
    docs: {
      description: {
        story: 'A vertical radio group with all options disabled and a pre-selected option.',
      },
    },
  },
};

export const HorizontalManyOptions: Story = {
  args: {
    id: 'radio-group-horizontal-many-options',
    name: 'radio-group-horizontal-many-options',
    options: [
      { value: 'xs', label: 'Extra Small' },
      { value: 'sm', label: 'Small' },
      { value: 'md', label: 'Medium' },
      { value: 'lg', label: 'Large' },
      { value: 'xl', label: 'Extra Large' },
    ],
    fieldLabel: 'Select Size',
    direction: 'horizontal',
  },
  parameters: {
    docs: {
      description: {
        story: 'A horizontal radio group with many options.',
      },
    },
  },
};

export const VerticalManyOptions: Story = {
  args: {
    id: 'radio-group-vertical-many-options',
    name: 'radio-group-vertical-many-options',
    options: [
      { value: 'xs', label: 'Extra Small' },
      { value: 'sm', label: 'Small' },
      { value: 'md', label: 'Medium' },
      { value: 'lg', label: 'Large' },
      { value: 'xl', label: 'Extra Large' },
    ],
    fieldLabel: 'Select Size',
    direction: 'vertical',
  },
  parameters: {
    docs: {
      description: {
        story: 'A vertical radio group with many options.',
      },
    },
  },
};

export const HorizontalLongLabels: Story = {
  args: {
    id: 'radio-group-horizontal-long-labels',
    name: 'radio-group-horizontal-long-labels',
    options: [
      { value: 'option1', label: 'This is a very long label that might wrap' },
      { value: 'option2', label: 'Another lengthy option label here' },
      { value: 'option3', label: 'Yet another long description for testing' },
    ],
    fieldLabel: 'Select your preference',
    direction: 'horizontal',
  },
  parameters: {
    docs: {
      description: {
        story: 'A horizontal radio group with long labels.',
      },
    },
  },
};

export const VerticalLongLabels: Story = {
  args: {
    id: 'radio-group-vertical-long-labels',
    name: 'radio-group-vertical-long-labels',
    options: [
      { value: 'option1', label: 'This is a very long label that might wrap' },
      { value: 'option2', label: 'Another lengthy option label here' },
      { value: 'option3', label: 'Yet another long description for testing' },
    ],
    fieldLabel: 'Select your preference',
    direction: 'vertical',
  },
  parameters: {
    docs: {
      description: {
        story: 'A vertical radio group with long labels.',
      },
    },
  },
};
