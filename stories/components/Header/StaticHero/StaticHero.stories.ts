import type { Meta, StoryObj } from '@storybook/html';
import { createStaticHero, StaticHeroArgs } from './StaticHero';

const meta: Meta<StaticHeroArgs> = {
  title: 'Components (Organisms)/Header/StaticHero',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  render: (args) => createStaticHero(args)
};

export default meta;
type Story = StoryObj<StaticHeroArgs>;

export const DefaultStaticHero: Story = {
  args: {
    imageSrc: 'static-hero-header-example.jpg',
    altText: 'Example of a static hero image',
    href: '#',
  },
  render: createStaticHero,
};
