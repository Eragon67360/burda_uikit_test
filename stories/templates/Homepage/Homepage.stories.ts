import type { Meta, StoryObj } from '@storybook/html';
import { createHomepage, HomepageArgs } from './Homepage';

const meta: Meta<HomepageArgs> = {
  title: 'Templates/Homepage',
  parameters: {
    layout: 'fullscreen',
  },
  render: (args) => createHomepage(args)
};

export default meta;
type Story = StoryObj<HomepageArgs>;

export const DefaultHomepage: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'widescreen',
    },
    layout: 'fullscreen',
  },
  globals: {
    backgrounds: { value: 'white' },
  },
  render: (args) => {
    return createHomepage(args);
  }
};
