import { IconCategory, IconRegistry } from '@/assets/icons';
import { PopupArgs, PopupTriggerArgs } from '@/stories/types';
import { ArgsCategory } from '@/stories/types/story';
import type { Meta, StoryObj } from '@storybook/html';
import { createPopupWithTrigger } from './Popup';

const meta: Meta<PopupTriggerArgs> = {
  title: 'Components (Atoms)/Overlay/Popup',
  tags: ['!autodocs'],
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'Popup component provides temporary, non-modal feedback to users through toast notifications. It supports different variants for various contexts (error, success, info), flexible positioning, and optional action buttons. Popups automatically dismiss after 8 seconds or can be manually closed.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['error', 'success', 'info'],
      type: { name: 'string', required: true },
      table: {
        category: ArgsCategory.PROPS,
        defaultValue: { summary: 'info' },
      },
      description: 'Determines the visual style and context of the popup',
    },
    position: {
      control: 'select',
      options: ['top-right', 'top', 'top-left', 'bottom-right', 'bottom', 'bottom-left'],
      type: { name: 'string', required: true },
      table: {
        category: ArgsCategory.PROPS,
        defaultValue: { summary: 'top-right' },
      },
      description: 'Screen position where the popup will appear',
    },
    title: {
      control: 'text',
      type: { name: 'string', required: true },
      table: {
        category: ArgsCategory.PROPS,
      },
      description: 'Main heading text of the popup',
    },
    description: {
      control: 'text',
      type: { name: 'string', required: true },
      table: {
        category: ArgsCategory.PROPS,
      },
      description: 'Detailed message text of the popup',
    },
    action: {
      control: 'object',
      table: {
        category: ArgsCategory.PROPS,
      },
      description: 'Optional action button configuration',
    },
    triggerLabel: {
      control: 'text',
      table: {
        category: ArgsCategory.PROPS,
        defaultValue: { summary: 'Show Toast' },
      },
      description: 'Text displayed on the trigger button',
    },
    triggerVariant: {
      control: 'select',
      options: ['primary', 'secondary'],
      table: {
        category: ArgsCategory.PROPS,
        defaultValue: { summary: 'primary' },
      },
      description: 'Visual style of the trigger button',
    },
  },
  render: (args) => createPopupWithTrigger(args),
};

export default meta;
type Story = StoryObj<PopupTriggerArgs>;

export const ErrorToast: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Error toast displays critical information about failures or problems that need attention.',
      },
    },
  },
  args: {
    variant: 'error',
    position: 'top-right',
    title: 'Error Occurred',
    description: 'Something went wrong while processing your request.',
    action: {
      label: 'Zum Kundensupport',
      icon: IconRegistry[IconCategory.SYSTEM].arrowRight,
      href: '#support',
    },
    triggerLabel: 'Show Error Toast',
  },
};

export const SuccessToast: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Success toast provides positive feedback when an action has been completed successfully. It uses green styling and is typically displayed briefly to confirm an operation.',
      },
    },
  },
  args: {
    variant: 'success',
    position: 'top-right',
    title: 'Successfully Saved',
    description: 'Your changes have been saved successfully.',
    triggerLabel: 'Show Success Toast',
  },
};

export const InfoToast: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Info toast displays neutral informational messages or updates to users. It uses a yellow/amber styling to distinguish it from success or error messages, and is commonly used for system notifications or updates.',
      },
    },
  },
  args: {
    variant: 'info',
    position: 'bottom',
    title: 'New Update Available',
    description: 'A new version of the application is available.',
    triggerLabel: 'Show Info Toast',
    triggerVariant: 'secondary',
  },
};

export const PositionedToasts: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "This story demonstrates all possible position variants for the toast notifications. It shows how toasts can be positioned in six different locations on the screen: top-left, top, top-right, bottom-left, bottom, and bottom-right. This flexibility allows for optimal placement based on your application's layout and user experience requirements.",
      },
    },
  },
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.className = 'space-y-4';

    const positions: PopupArgs['position'][] = ['top-right', 'top', 'top-left', 'bottom-right', 'bottom', 'bottom-left'];

    positions.forEach((position) => {
      const toast = createPopupWithTrigger({
        variant: 'info',
        position,
        title: `${position} Toast`,
        description: `This toast appears in the ${position} position`,
        triggerLabel: `Show ${position} Toast`,
        triggerVariant: 'secondary',
      });
      wrapper.appendChild(toast);
    });

    return wrapper;
  },
};
