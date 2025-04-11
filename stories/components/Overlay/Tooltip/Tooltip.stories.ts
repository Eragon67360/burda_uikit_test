import type { Meta, StoryObj } from '@storybook/html';
import { createTooltip, TooltipArgs } from './Tooltip';
import { IconRegistry, IconCategory } from '@/assets/icons';

const meta: Meta<TooltipArgs> = {
  title: 'Components (Atoms)/Overlay/Tooltip',

  parameters: {
    layout: 'centered',
  },
  argTypes: {
    content: {
      control: 'text',
      description: 'Content to display in the tooltip',
    },
    triggerIcon: {
      control: 'text',
      description: 'Icon to use as trigger (defaults to info icon)',
    },
    position: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Position of the tooltip relative to the trigger',
    },
    className: {
      control: 'text',
      description: 'Additional classes for the tooltip wrapper',
    },
  },
  render: createTooltip,
};

export default meta;
type Story = StoryObj<TooltipArgs>;

export const Basic: Story = {
  args: {
    content: 'This is a basic tooltip with text content.',
    position: 'top',
  },
};

export const WithRichContent: Story = {
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
  args: {
    content: 'Tooltip with custom trigger icon',
    triggerIcon: IconRegistry[IconCategory.SYSTEM].help,
    position: 'bottom',
  },
};

export const ShortContent: Story = {
  render: () =>
    createTooltip({
      content: 'Short tooltip content',
    }),
};

export const LongContent: Story = {
  render: () =>
    createTooltip({
      content: `
      <div class="space-y-2">
        <p>This is a longer tooltip content that will expand to fit the content but won't exceed 400px in width. 
           It will wrap naturally when it reaches that limit.</p>
        <p>Multiple paragraphs are handled gracefully.</p>
      </div>
    `,
    }),
};

export const WithList: Story = {
  render: () =>
    createTooltip({
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
    }),
};

const createShowcaseTemplate = () => {
  const wrapper = document.createElement('div');
  wrapper.className = 'w-[480px] p-4';

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
    className: 'absolute left-full -translate-x-full -top-10',
  });

  inputContainer.appendChild(input);
  inputContainer.appendChild(tooltip);
  wrapper.appendChild(label);
  wrapper.appendChild(inputContainer);

  return wrapper;
};

export const InputWithTooltip: Story = {
  render: () => createShowcaseTemplate(),
};
