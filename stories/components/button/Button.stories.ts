import type { Meta, StoryObj } from '@storybook/html';
import { createButton } from './Button';

type ButtonArgs = {
  primary: boolean;
  label: string;
};

const meta: Meta<ButtonArgs> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/configure/#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Example/Button',
  tags: ['autodocs'],
  parameters: {
    controls: { expanded: true },
  },
  render: (args) => createButton(args as any),
};

export default meta;
type Story = StoryObj<ButtonArgs>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args) => {
    const btn = document.createElement('button');
    btn.innerText = args.label;

    const mode = args.primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    btn.className = ['bg-slate-400', 'storybook-button--medium', mode].join(' ');

    return btn;
  },
  args: {
    primary: true,
    label: 'Button1',
  },
};

export const Primary2: Story = {
  render: (args) => {
    const btn = document.createElement('button');
    btn.innerText = args.label;

    const mode = args.primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    btn.className = ['bg-slate-600', 'storybook-button--medium', mode].join(' ');

    return btn;
  },
  args: {
    primary: true,
    label: 'Button2',
  },
};
