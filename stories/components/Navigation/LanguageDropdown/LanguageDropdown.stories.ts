import { LanguageDropdownArgs } from '@/stories/types';
import { ArgsCategory } from '@/stories/types/story';
import type { Meta, StoryObj } from '@storybook/html';
import { createLanguageDropdown } from './LanguageDropdown';

const defaultOptions = [
  { code: 'de', name: 'Deutsch', icon: 'germany' },
  { code: 'en', name: 'English', icon: 'england' },
  { code: 'fr', name: 'Français', icon: 'france' },
];

const meta: Meta<LanguageDropdownArgs> = {
  title: 'Components (Atoms)/LanguageDropdown',
  tags: ['!autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
An accessible language selection dropdown component with flag icons.

#### Note on Controls
When modifying the options array in controls:
- Add new languages in the format: \`{ code: 'es', name: 'Español', icon: 'spain' }\`
- The selectedLanguage dropdown will only show languages present in the options array
- Each language code must be unique`,
      },
    },
  },
  args: {
    disabled: false,
    isCompressed: false,
  },
  argTypes: {
    options: {
      control: 'object',
      description: 'Array of available language options',
      table: {
        category: ArgsCategory.PROPS,
        type: { summary: 'LanguageOption[]' },
      },
    },
    selectedLanguage: {
      control: {
        type: 'select',
        options: defaultOptions.map((option) => option.code),
      },
      options: defaultOptions.map((option) => option.code),
      description: 'Currently selected language code',
      table: {
        category: ArgsCategory.PROPS,
      },
    },
    label: {
      control: 'text',
      description: 'Label text for the dropdown button',
      table: {
        category: ArgsCategory.PROPS,
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the dropdown is disabled',
      table: {
        category: ArgsCategory.PROPS,
      },
    },
    isCompressed: {
      control: 'boolean',
      description: 'Show compressed version (icon only)',
      table: {
        category: ArgsCategory.PROPS,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const { args } = context;
      const availableCodes = args.options.map((opt) => opt.code);

      if (!availableCodes.includes(args.selectedLanguage)) {
        args.selectedLanguage = availableCodes[0];
        console.warn(`Selected language "${args.selectedLanguage}" not found in options. Defaulting to "${availableCodes[0]}"`);
      }

      return Story();
    },
  ],
  render: (args) => createLanguageDropdown(args),
};

export default meta;
type Story = StoryObj<LanguageDropdownArgs>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Default implementation of the language dropdown with multiple language options.',
      },
    },
  },
  args: {
    options: [
      { code: 'de', name: 'Deutsch', icon: 'germany' },
      { code: 'en', name: 'English', icon: 'england' },
      { code: 'fr', name: 'Français', icon: 'france' },
    ],
    selectedLanguage: 'en',
    label: 'Sprache',
  },
};

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Disabled state of the language dropdown.',
      },
    },
  },
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const Compressed: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Compressed version of the dropdown showing only the flag icon and chevron, useful for mobile or space-constrained layouts.',
      },
    },
  },
  args: {
    ...Default.args,
    isCompressed: true,
  },
};

export const CustomLabel: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Language dropdown with a custom label text.',
      },
    },
  },
  args: {
    ...Default.args,
    label: 'Choose Language',
  },
};
