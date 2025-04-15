import type { Meta, StoryObj } from '@storybook/html';
import { createProcess, ProcessArgs } from './Process';

const meta: Meta<ProcessArgs> = {
  title: 'Components (Organisms)/List/Process',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Main title of the process section',
    },
    subtitle: {
      control: 'text',
      description: 'Subtitle providing additional context',
    },
    items: {
      control: 'object',
      description: 'List of process items (2-5 recommended)',
    },
    callToAction: {
      control: 'object',
      description: 'Optional call to action button',
    },
    backgroundColor: {
      control: { type: 'select' },
      options: ['white', 'primary-light'],
      description: 'Background color of the process section',
    },
  },
  render: (args) => createProcess(args),
};

export default meta;
type Story = StoryObj<ProcessArgs>;

export const Default: Story = {
  args: {
    title: 'Jetzt Abo sichern',
    subtitle: 'So geht’s!',
    items: [
      {
        order: 1,
        icon: 'openBook',
        description: 'Wählen Sie eine Zeitschrift',
      },
      {
        order: 2,
        icon: 'calendarLike',
        description: 'Entscheiden Sie sich für eine Aboart',
      },
      {
        order: 3,
        icon: 'giftBox',
        description: 'Sichern Sie sich eine Prämie Ihrer Wahl',
      },
      {
        order: 4,
        icon: 'deliver',
        description: 'Genießen Sie pünktliche & kostenlose Lieferung',
      },
    ],
    callToAction: {
      text: 'Jetzt Abo abschließen',
      onClick: () => console.log('CTA Clicked'),
    },
  },
};

export const WhiteBackground: Story = {
  args: {
    ...Default.args,
    backgroundColor: 'white',
  },
};

export const PrimaryLightBackground: Story = {
  args: {
    ...Default.args,
    backgroundColor: 'primary-light',
  },
};

export const FiveStepProcess: Story = {
  args: {
    title: 'Comprehensive Process',
    subtitle: 'Detailed steps to achieve your goal',
    items: [
      {
        order: 1,
        icon: 'openBook',
        description: 'Wählen Sie eine Zeitschrift',
      },
      {
        order: 2,
        icon: 'calendarLike',
        description: 'Entscheiden Sie sich für eine Aboart',
      },
      {
        order: 3,
        icon: 'giftBox',
        description: 'Sichern Sie sich eine Prämie Ihrer Wahl',
      },
      {
        order: 4,
        icon: 'deliver',
        description: 'Genießen Sie pünktliche & kostenlose Lieferung',
      },
    ],
    callToAction: {
      text: 'Start Your Journey',
      onClick: () => console.log('Five Step Process CTA'),
    },
  },
};

export const NoCallToAction: Story = {
  args: {
    ...Default.args,
    callToAction: undefined,
  },
};
