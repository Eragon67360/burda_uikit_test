import type { Meta, StoryObj } from '@storybook/html';
import { IconCategory, IconRegistry } from '@/assets/icons';
import { ButtonCTAArgs, ButtonCTAVariant, createButtonCTA } from './ButtonCTA';
import { fn } from '@storybook/test';
import { ArgsCategory } from '@/stories/types/story';
import { play } from './ButtonCTA.tests';

const meta: Meta<ButtonCTAArgs> = {
  title: 'Components (Atoms)/Button/ButtonCTA',

  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: 'A versatile Call-to-Action button component supporting multiple variants and states.',
      },
    },
  },

  args: {
    variant: ButtonCTAVariant.PRIMARY,
    label: 'Primary Button',
    icon: undefined,
    iconLeft: false,
    nested: false,
    disabled: false,
    classNames: undefined,
    onClick: fn(),
  },

  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(ButtonCTAVariant),
      description: 'Defines the visual style and behavior of the button. Each variant has its own unique design and purpose.',
      type: { name: 'string', required: true },
      table: {
        category: ArgsCategory.PROPS,
      },
    },
    label: {
      control: 'text',
      description: 'Label to be displayed on the button.',
      type: { name: 'string', required: true },
      table: {
        category: ArgsCategory.PROPS,
      },
    },
    icon: {
      control: 'select',
      options: [undefined, ...Object.keys(IconRegistry[IconCategory.SYSTEM])],
      description: 'Icon to be displayed on the button. If not provided, no icon will be shown.',
      table: {
        type: { summary: 'string | undefined' },
        defaultValue: { summary: 'undefined' },
        category: ArgsCategory.PROPS,
      },
    },
    iconLeft: {
      control: 'boolean',
      description: 'Position of the icon. If true, the icon appears on the left side of the label. If false, it appears on the right.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: ArgsCategory.PROPS,
      },
    },
    nested: {
      control: 'boolean',
      description: 'Indicates if the button is nested within another element.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: ArgsCategory.PROPS,
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button, preventing user interaction.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: ArgsCategory.PROPS,
      },
    },
    classNames: {
      control: 'text',
      description: 'Additional CSS classes for custom styling.',
      table: {
        type: { summary: 'string | undefined' },
        defaultValue: { summary: 'undefined' },
        category: ArgsCategory.PROPS,
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Callback function triggered on button click.',
      table: {
        type: { summary: '() => void' },
        defaultValue: { summary: 'undefined' },
        category: ArgsCategory.EVENTS,
      },
    },
  },

  render: (args) => createButtonCTA(args),
  play,
};

export default meta;

type Story = StoryObj<ButtonCTAArgs>;

export const Primary: Story = {
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

export const Disabled: Story = {
  args: {
    label: 'Disabled Primary Button',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled state of the button. The button is not clickable and has a different visual style to indicate its disabled state.',
      },
    },
  },
};
