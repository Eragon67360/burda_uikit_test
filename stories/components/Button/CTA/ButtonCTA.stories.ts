import type { Meta, StoryObj } from '@storybook/html';
import { IconCategory, IconRegistry } from '@/assets/icons';
import { ButtonCTAArgs, ButtonCTAVariant, createButtonCTA } from './ButtonCTA';

const meta: Meta<ButtonCTAArgs> = {
  title: 'Components (Atoms)/Button/ButtonCTA',

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
      options: Object.values(ButtonCTAVariant),
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
  render: (args) => createButtonCTA(args),
};
export default meta;
type Story = StoryObj<ButtonCTAArgs>;

export const Primary: Story = {
  args: {
    variant: ButtonCTAVariant.PRIMARY,
    nested: false,
    disabled: false,
    label: 'Primary Button',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Primary variant with brand background color. This is the main call-to-action button style, used for the most important actions in the interface. Features a distinctive hover state and clear disabled state.',
      },
    },
  },
};

export const Secondary: Story = {
  args: {
    variant: ButtonCTAVariant.SECONDARY,
    nested: false,
    label: 'Secondary Button',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Secondary variant with interaction color background. Used for important but not primary actions. Includes a unique fill animation on hover and maintains hierarchy through subtle styling.',
      },
    },
  },
};

export const Tertiary: Story = {
  args: {
    variant: ButtonCTAVariant.TERTIARY,
    nested: false,
    label: 'Tertiary Button',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Tertiary variant with transparent background and border. Ideal for less prominent actions or in contexts where visual weight needs to be minimized. Features a subtle hover effect and maintains accessibility.',
      },
    },
  },
};

export const Large: Story = {
  args: {
    variant: ButtonCTAVariant.LARGE,
    nested: false,
    label: 'Large Button',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Large variant with black background and white text. Typically used for primary actions in hero sections or prominent areas.',
      },
    },
  },
};

export const LargeLight: Story = {
  args: {
    variant: ButtonCTAVariant.LARGE_LIGHT,
    nested: false,
    label: 'Large Light Button',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Large light variant with white background and black text. Suitable for use on dark backgrounds or when a lighter emphasis is needed.',
      },
    },
  },
};

export const LargeSubscription: Story = {
  args: {
    variant: ButtonCTAVariant.LARGE_SUBSCRIPTION,
    nested: false,
    label: 'Subscribe Now',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Special large variant designed specifically for subscription CTAs. Features a distinct primary interaction color and hover effects.',
      },
    },
    backgrounds: {
      default: 'White',
    },
  },
};
