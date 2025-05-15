import { SlideshowNavButtonArgs } from '@/stories/types';
import { ArgsCategory } from '@/stories/types/story';
import type { Meta, StoryObj } from '@storybook/html';
import { createSlideshowNavButton } from './SlideNavButton';

const meta: Meta<SlideshowNavButtonArgs> = {
  title: 'Components (Atoms)/Slideshow/Navigation',
  tags: ['!autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A responsive navigation button component for slideshows. Features directional indicators, disabled states, and color variants. Automatically adapts its size based on viewport width.',
      },
    },
    viewport: {
      defaultViewport: 'responsive',
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1440px',
            height: '900px',
          },
        },
      },
    },
  },
  args: {
    mode: 'next',
    disabled: false,
  },
  argTypes: {
    mode: {
      control: 'radio',
      options: ['previous', 'next'],
      description: 'Sets the direction of the navigation button',
      type: { name: 'string', required: true },
      table: {
        category: ArgsCategory.PROPS,
        type: { summary: 'enum' },
        defaultValue: { summary: 'next' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Controls the disabled state of the button',
      type: { name: 'boolean', required: false },
      table: {
        category: ArgsCategory.ACCESSIBILITY,
      },
    },
    backgroundColor: {
      control: 'radio',
      options: ['white', 'gray'],
      description: 'Sets the background color variant',
      table: {
        category: ArgsCategory.PROPS,
        defaultValue: { summary: 'white' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Click event handler function',
      table: {
        category: ArgsCategory.EVENTS,
      },
    },
  },
  render: (args) => createSlideshowNavButton(args),
};

export default meta;
type Story = StoryObj<SlideshowNavButtonArgs>;

export const Next: Story = {
  args: {
    mode: 'next',
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Standard next button variant with right-pointing chevron icon. Adapts size from 2.75rem (mobile) to 3rem (desktop).',
      },
    },
  },
};

export const Previous: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Standard previous button variant with left-pointing chevron icon.',
      },
    },
  },
  args: {
    mode: 'previous',
    disabled: false,
  },
};

export const DisabledNext: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Disabled state of the next button. Features reduced opacity, disabled cursor, and proper ARIA attributes for accessibility.',
      },
    },
  },
  args: {
    mode: 'next',
    disabled: true,
  },
};

export const DisabledPrevious: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Disabled state of the previous button. Shows visual feedback of inactive state while maintaining proper accessibility attributes.',
      },
    },
  },
  args: {
    mode: 'previous',
    disabled: true,
  },
};

export const GrayBackgroundNext: Story = {
  args: {
    mode: 'next',
    disabled: false,
    backgroundColor: 'gray',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Next button variant with gray background, useful for placement on light or white backgrounds where the default white background might not provide enough contrast.',
      },
    },
    backgrounds: {
      default: 'White',
    },
  },
};

export const GrayBackgroundDisabledPrevious: Story = {
  args: {
    mode: 'previous',
    disabled: true,
    backgroundColor: 'gray',
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled previous button with gray background. Combines the disabled state styling with the alternative background color.',
      },
    },
    backgrounds: {
      default: 'White',
    },
  },
};

export const ResponsiveMobile: Story = {
  args: {
    mode: 'next',
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Mobile viewport demonstration (375px width). Button size adjusts to 2.75rem (44px) to maintain touch target accessibility standards.',
      },
    },
    viewport: {
      defaultViewport: 'mobile',
    },
  },
};

export const ResponsiveDesktop: Story = {
  args: {
    mode: 'next',
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Desktop viewport demonstration (1440px width). Button size increases to 3rem (48px) for better visual balance on larger screens.',
      },
    },
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};
