import { TabsArgs } from '@/stories/types';
import { ArgsCategory } from '@/stories/types/story';
import type { Meta, StoryObj } from '@storybook/html';
import { createTabs } from './Tabs';

const meta: Meta<TabsArgs> = {
  title: 'Components (Atoms)/Tabs',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The Tabs component provides an accessible way to organize and navigate between related sections of content. It supports both interactive tabs and content panels, with various styling options and states.',
      },
    },
  },
  argTypes: {
    items: {
      table: {
        category: ArgsCategory.PROPS,
      },
      description: 'Array of tab items containing id, label, and optional content',
    },
    variant: {
      control: 'select',
      options: ['plain', 'outline'],
      table: {
        category: ArgsCategory.PROPS,
      },
      description: 'Visual style of the tabs',
    },
    color: {
      table: {
        category: ArgsCategory.PROPS,
      },
      description: 'Color theme of the tabs',
    },
    background: {
      control: 'select',
      options: ['white', 'gray'],
      table: {
        category: ArgsCategory.PROPS,
      },
      description: 'Background color of the tabs container',
    },
    hasContent: {
      control: 'boolean',
      table: {
        category: ArgsCategory.PROPS,
      },
      description: 'Whether to display content panels',
    },
    disabled: {
      control: 'boolean',
      table: {
        category: ArgsCategory.ACCESSIBILITY,
      },
      description: 'Disables all tab interactions',
    },
    selectedId: {
      control: 'text',
      table: {
        category: ArgsCategory.PROPS,
      },
      description: 'ID of the initially selected tab',
    },
    onTabSelected: {
      table: {
        category: ArgsCategory.EVENTS,
      },
      description: 'Callback function when a tab is selected',
    },
  },
  render: (args) => createTabs(args),
};

export default meta;
type Story = StoryObj<TabsArgs>;

export const SimpleSelection: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Basic tabs implementation with simple text labels and no content panels.',
      },
    },
  },
  args: {
    items: [
      { id: 'mr', label: 'Mr' },
      { id: 'ms', label: 'Ms' },
      { id: 'other', label: 'Other' },
    ],
    variant: 'plain',
    background: 'white',
    hasContent: false,
    disabled: false,
  },
};

export const Outlined: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Tabs with an outlined container, providing more visual definition to the component.',
      },
    },
  },
  args: {
    ...SimpleSelection.args,
    variant: 'outline',
  },
};
export const GrayBackground: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Tabs with a gray background, useful for displaying on white or light-colored surfaces to provide better contrast.',
      },
    },
    backgrounds: {
      default: 'White',
    },
  },
  args: {
    ...SimpleSelection.args,
    background: 'gray',
  },
};

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Disabled state of the tabs where all interaction is prevented. The component visually indicates its inactive state through reduced opacity and removal of hover effects.',
      },
    },
  },
  args: {
    ...SimpleSelection.args,
    disabled: true,
  },
};

export const DisabledOutlined: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Combination of disabled state with outlined variant, showing how the disabled state appears within a bordered container.',
      },
    },
  },
  args: {
    ...SimpleSelection.args,
    variant: 'outline',
    disabled: true,
  },
};

export const WithContent: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Tabs with associated content panels that are displayed when their respective tab is selected. This example demonstrates how the component handles rich HTML content including text formatting, links, and lists.',
      },
    },
  },
  args: {
    items: [
      {
        id: 'tab1',
        label: 'Tab 1',
        content:
          '<p>This is the content for Tab 1. It can include <strong>bold text</strong>, <em>italic text</em>, and even <a href="#">links</a>.</p>',
      },
      {
        id: 'tab2',
        label: 'Tab 2',
        content: '<p>Tab 2 content with a <button class="bg-transparent font-bold ">Link button -></button> and other elements.</p>',
      },
      {
        id: 'tab3',
        label: 'Tab 3',
        content: '<p>Content for Tab 3 with a list:</p><ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>',
      },
    ],
    variant: 'plain',
    background: 'white',
    hasContent: true,
    disabled: false,
  },
};
