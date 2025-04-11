import type { Meta, StoryObj } from '@storybook/html';
import { createLanguageDropdown, LanguageDropdownArgs } from './LanguageDropdown';

const meta: Meta<LanguageDropdownArgs> = {
  title: 'Components (Atoms)/LanguageDropdown',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    selectedLanguage: {
      control: 'select',
      options: ['en', 'es', 'fr'],
    },
    disabled: { control: 'boolean' },
  },
  render: (args) => createLanguageDropdown(args),
};

export default meta;
type Story = StoryObj<LanguageDropdownArgs>;

export const Default: Story = {
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
  args: {
    ...Default.args,
    disabled: true,
  },
};
