import { IconCategory, IconRegistry } from '@/assets/icons';
import { TooltipArgs } from '@/stories/types';
import { ArgsCategory } from '@/stories/types/story';
import type { Meta, StoryObj } from '@storybook/html';
import { createTooltip } from './Tooltip';

const meta: Meta<TooltipArgs> = {
  title: 'Components (Atoms)/Overlay/Tooltip',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'The Tooltip component provides contextual information about an element when hovered or focused. It can display text, HTML content, and supports various positions and styles.',
      },
    },
  },

  args: {
    content: 'This is a tooltip',
    triggerIcon: IconRegistry[IconCategory.SYSTEM].info,
    position: 'top',
    classNames: undefined,
    ariaLabelTrigger: 'Sample Tooltip',
    ariaLabelClose: 'Close tooltip',
    ariaControlsId: 'sample-tooltip',
  },

  argTypes: {
    content: {
      control: 'text',
      description: 'Content to be displayed inside the tooltip. Can be plain text or HTML.',
      type: { name: 'string', required: true },
      table: {
        type: { summary: 'string | HTMLElement' },
        category: ArgsCategory.PROPS,
      },
    },
    triggerIcon: {
      control: 'select',
      options: Object.keys(IconRegistry[IconCategory.SYSTEM]),
      description: 'Icon to be displayed as the trigger for the tooltip.',
      type: { name: 'string', required: true },
      table: {
        category: ArgsCategory.PROPS,
      },
    },
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Position of the tooltip relative to the trigger element. Default is "top".',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'top' },
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
    ariaLabelTrigger: {
      control: 'text',
      description: 'Accessible label for the tooltip, used for screen readers.',
      type: { name: 'string', required: false },
      table: {
        category: ArgsCategory.ACCESSIBILITY,
      },
    },
    ariaLabelClose: {
      control: 'text',
      description: 'Accessible label for the close button of the tooltip, used for screen readers.',
      type: { name: 'string', required: false },
      table: {
        category: ArgsCategory.ACCESSIBILITY,
      },
    },
    ariaControlsId: {
      control: 'text',
      description: 'ID of the element controlled by the tooltip. Useful for accessibility.',
      type: { name: 'string', required: false },
      table: {
        category: ArgsCategory.ACCESSIBILITY,
      },
    },
  },

  render: (args) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'm-auto w-full max-h-[500px] h-screen p-4 flex items-center justify-center';
    wrapper.appendChild(createTooltip(args));
    return wrapper;
  },
};

export default meta;
type Story = StoryObj<TooltipArgs>;

export const Basic: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A simple tooltip with basic text content. This is the most common use case for providing brief explanations or hints.',
      },
    },
  },
  args: {
    content: 'This is a basic tooltip with text content.',
    position: 'top',
  },
};

export const WithRichContent: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates how tooltips can contain rich HTML content including headings, formatted text, and interactive elements.',
      },
    },
  },
  args: {
    content: `
      <div class="space-y-2">
        <h3 class="font-bold text-lg">Rich Content Tooltip</h3>
        <p>This tooltip contains <strong>rich</strong> content with multiple elements.</p>
        <button class="text-black font-bold">
          -> Zum Kundenservice
        </button>
      </div>
    `,
    position: 'right',
  },
};

export const CustomTrigger: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Shows how to customize the trigger icon to better match the context where the tooltip is used.',
      },
    },
  },
  args: {
    content: 'Tooltip with custom trigger icon',
    triggerIcon: IconRegistry[IconCategory.SYSTEM].help,
    position: 'bottom',
  },
};

export const ShortContent: Story = {
  args: {
    content: 'Short tooltip content',
  },
};

export const LongContent: Story = {
  args: {
    content: `
      <div class="space-y-2">
        <p>This is a longer tooltip content that will expand to fit the content but won't exceed 400px in width. 
           It will wrap naturally when it reaches that limit.</p>
        <p>Multiple paragraphs are handled gracefully.</p>
      </div>
    `,
  },
};

export const WithList: Story = {
  args: {
    content: `
      <div class="space-y-2">
        <h3 class="font-semibold">Features:</h3>
        <ul class="list-disc pl-4 space-y-1">
          <li>Adaptive width</li>
          <li>Maximum width of 400px</li>
          <li>Minimum width of 200px</li>
          <li>Automatically centers content</li>
        </ul>
      </div>
    `,
  },
};

const createShowcaseTemplate = () => {
  const wrapper = document.createElement('div');
  wrapper.className = 'm-auto w-full max-h-[500px] h-screen p-4 flex flex-col items-center justify-center';
  const content = document.createElement('div');
  content.className = 'flex flex-col items-start justify-center';

  const label = document.createElement('label');
  label.className = 'block text-sm font-medium text-gray-700 mb-1';
  label.textContent = 'Land';

  const inputContainer = document.createElement('div');
  inputContainer.className = 'relative';

  const input = document.createElement('input');
  input.className = 'w-full px-3 py-2 bg-neutral-200 rounded-md cursor-text';
  input.placeholder = 'Deutschland';
  input.disabled = false;
  input.setAttribute('aria-label', 'Land');
  const tooltip = createTooltip({
    content: `
        <div class="space-y-3 w-full">
          <h3 class="font-semibold text-base">Hinweise für Bestellungen aus dem Ausland</h3>
          <p class="text-sm">Auslandskonditionen unter</p>
          <p class="text-sm font-medium">0049 (0) 180 6 480 1002 ***</p>
          <p class="text-xs text-gray-500">*** Dieser Anruf kostet € 0,20/Verbindung aus allen deutschen Netzen.</p>
          <a href="#" class="inline-block text-sm text-base-black hover:opacity-80 font-semibold mt-2">
            → Zum Kundenservice
          </a>
        </div>
      `,
    classNames: 'absolute left-full -translate-x-full -top-10',
  });

  inputContainer.appendChild(input);
  inputContainer.appendChild(tooltip);

  content.appendChild(label);
  content.appendChild(inputContainer);
  wrapper.appendChild(content);

  return wrapper;
};

export const InputWithTooltip: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'A practical example showing how tooltips can be integrated with form inputs to provide additional information or help text.',
      },
    },
  },
  render: () => createShowcaseTemplate(),
};
