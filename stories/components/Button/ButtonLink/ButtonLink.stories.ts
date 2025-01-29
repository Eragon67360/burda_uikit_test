
import type { Meta, StoryObj } from '@storybook/html';
import { ButtonLinkArgs, ButtonVariant, createButtonLink } from './ButtonLink';
import { IconCategory, IconRegistry } from '../../../assets/icons';

const meta: Meta<ButtonLinkArgs> = {
  title: 'Components/Button/ButtonLink',
  tags: ['autodocs'],
  parameters: {
    controls: { expanded: true },
  },
  args: {
    icon: null,
    iconLeft: false,
    nested: false,
    disabled: false,
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: Object.values(ButtonVariant),
      description: 'Button variant',
    },
    nested: {
      control: 'boolean',
      description: 'Nested state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    label: {
      control: 'text',
      description: 'Button label (not applicable for icon buttons)',
    },
    iconLeft: {
      control: 'boolean',
      description: 'Icon on the left of the label',
    },
    icon: {
      control: { type: 'select' },
      options: Object.keys(IconRegistry[IconCategory.SYSTEM]),
      description: 'Select an icon',
    },
    onClick: { action: 'clicked' },
  },
  render: (args) => createButtonLink(args as any)
};
export default meta;
type Story = StoryObj<ButtonLinkArgs>;

export const Primary: Story = {
  args: {
    variant: ButtonVariant.PRIMARY,
    nested: false,
    disabled: false,
    label: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: ButtonVariant.SECONDARY,
    nested: false,
    label: 'Secondary Button',
  },
};

export const Tertiary: Story = {
  args: {
    variant: ButtonVariant.TERTIARY,
    nested: false,
    label: 'Tertiary Button',
  },
};