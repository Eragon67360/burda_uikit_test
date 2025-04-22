import type { Meta, StoryObj } from '@storybook/html';
import { RadioButtonArgs, createRadioButton } from './RadioButton';
import { ArgsCategory } from '@/stories/types/story';
import { play } from './RadioButton.test';

const meta: Meta<RadioButtonArgs> = {
  title: 'Components (Atoms)/Form/RadioButton',

  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'A single radio button element that can be used inside a radio group. It allows users to select one option from a set of choices. The radio button can be customized with various properties such as label, checked state, and disabled state.',
      },
    },
  },

  args: {
    id: 'uuid',
    name: 'option',
    value: 'option1',
    label: 'Radio label',
    fieldLabel: undefined,
    required: false,
    checked: false,
    disabled: false,
  },

  argTypes: {
    id: {
      control: 'text',
      description: 'Unique identifier for the radio button.',
      type: { name: 'string', required: true },
      table: {
        category: ArgsCategory.PROPS,
      },
    },
    name: {
      control: 'text',
      description:
        'Name attribute for the radio button. This groups the radio button with others that share the same name, allowing only one to be selected at a time.',
      type: { name: 'string', required: true },
      table: {
        category: ArgsCategory.PROPS,
      },
    },
    value: {
      control: 'text',
      description: 'Value of the radio button. This is the value that will be submitted when the form is submitted.',
      type: { name: 'string', required: true },
      table: {
        category: ArgsCategory.PROPS,
      },
    },
    label: {
      control: 'text',
      description:
        'Label displayed next to the radio button. This is the text that users will see and click on to select the radio button.',
      type: { name: 'string', required: true },
      table: {
        category: ArgsCategory.PROPS,
      },
    },
    fieldLabel: {
      control: 'text',
      description:
        'Optional label displayed above the radio button. This can be used to provide additional context or instructions for the radio button.',
      table: {
        type: { summary: 'string | undefined' },
        category: ArgsCategory.PROPS,
      },
    },
    required: {
      control: 'boolean',
      description:
        'Indicates if the radio button is required. If true, the radio button must be selected before form submission. An asterisk will be added to the field label.',
      type: { name: 'boolean' },
      defaultValue: { summary: false },
      table: {
        category: ArgsCategory.PROPS,
      },
    },
    checked: {
      control: 'boolean',
      description: 'Indicates if the radio button is selected.',
      type: { name: 'boolean' },
      defaultValue: { summary: false },
      table: {
        category: ArgsCategory.PROPS,
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Indicates if the radio button is disabled. When disabled, the radio button cannot be selected or interacted with.',
      type: { name: 'boolean' },
      defaultValue: { summary: false },
      table: {
        category: ArgsCategory.PROPS,
      },
    },
  },

  render: (args) => createRadioButton(args),
  play,
};

export default meta;
type Story = StoryObj<RadioButtonArgs>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Default radio button with a label. This is the basic usage of the radio button component.',
      },
    },
  },
};

export const WithFieldLabel: Story = {
  args: {
    id: 'radio-with-field-label',
    fieldLabel: 'Field Label',
  },
  parameters: {
    docs: {
      description: {
        story: 'Radio button with an additional field label for better context.',
      },
    },
  },
};

export const RequiredWithFieldLabel: Story = {
  args: {
    id: 'radio-required',
    fieldLabel: 'Field Label',
    required: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Radio button that is required to be selected before form submission.',
      },
    },
  },
};

export const Checked: Story = {
  args: {
    id: 'radio-checked',
    checked: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Radio button that is checked.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    id: 'radio-disabled',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Radio button that is disabled and cannot be selected.',
      },
    },
  },
};
