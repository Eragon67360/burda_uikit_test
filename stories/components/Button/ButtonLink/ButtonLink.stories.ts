import type { Meta, StoryObj } from '@storybook/html';
import { IconCategory, IconRegistry } from '@/assets/icons';
import { ButtonLinkArgs, createButtonLink } from './ButtonLink';

const meta: Meta<ButtonLinkArgs> = {
  title: 'Components (Atoms)/Button/ButtonLink',

  parameters: {
    controls: { expanded: true },
  },
  args: {
    icon: 'arrowRight',
    iconLeft: false,
    disabled: false,
  },
  argTypes: {
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
  render: (args) => createButtonLink(args as any),
};

export default meta;
type Story = StoryObj<ButtonLinkArgs>;

export const ButtonLink: Story = {
  args: {
    icon: 'arrowRight',
    disabled: false,
    label: 'Link Button',
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};

export const ButtonLinkIconLeft: Story = {
  args: {
    icon: 'arrowLeft',
    disabled: false,
    label: 'Link Button',
    iconLeft: true,
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
