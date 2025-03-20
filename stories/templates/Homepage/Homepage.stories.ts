import type { Meta, StoryObj } from '@storybook/html';
import { createHomepage, HomepageArgs } from './Homepage';

const meta: Meta<HomepageArgs> = {
  title: 'Templates/Homepage',
  parameters: {
    layout: 'fullscreen',
  }
};

export default meta;
type Story = StoryObj<HomepageArgs>;

export const DefaultHomepage: Story = {
  args: {},
  globals: {
    backgrounds: { value: 'white' },
  },
  render: createHomepage,
};
