import type { Meta, StoryObj } from '@storybook/html';
import { createHomepage, HomepageArgs } from './Homepage';

const meta: Meta<HomepageArgs> = {
  title: 'Templates/Homepage',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    withSmallSlideshow: {
      control: { type: 'boolean' },
      description: 'Display a small slideshow',
    },
    withStaticHero: {
      control: { type: 'boolean' },
      description: 'Display the static image hero',
      defaultValue: false
    },
    staticHeroImageSrc: {
      control: { type: 'text' },
      description: 'Path of the image',
      if: { arg: 'withStaticHero', eq: true }
    },
    staticHeroHref: {
      control: { type: 'text' },
      description: 'Link for the image',
      if: { arg: 'withStaticHero', eq: true }
    },
    staticHeroImageAltText: {
      control: { type: 'text' },
      description: 'Alternative text',
      if: { arg: 'withStaticHero', eq: true }
    },
    navigationHas2Lines: {
      control: { type: 'boolean' },
      description: 'Display a 2 lines navigation',
      defaultValue: false
    },
  },
  args: {
    withStaticHero: false,
    withSmallSlideshow: false,
  },
  render: (args) => createHomepage(args)
};

export default meta;
type Story = StoryObj<HomepageArgs>;

export const HomepageWithSlideshow: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'widescreen',
    },
    layout: 'fullscreen',
  },
  globals: {
    backgrounds: { value: 'white' },
  }
};

export const HomepageWithSmallSlideshow: Story = {
  args: { withSmallSlideshow: true },
  parameters: {
    viewport: {
      defaultViewport: 'widescreen',
    },
    layout: 'fullscreen',
  },
  globals: {
    backgrounds: { value: 'white' },
  }
};

export const HomepageWithStaticHero: Story = {
  args: {
    withStaticHero: true,
    staticHeroImageSrc: 'static-hero-header-example.jpg',
    staticHeroHref: '#',
    staticHeroImageAltText: 'Static hero'
  },
  parameters: {
    viewport: {
      defaultViewport: 'widescreen',
    },
    layout: 'fullscreen',
  },
  globals: {
    backgrounds: { value: 'white' },
  }
};

export const HomepageWith2LinesNavigation: Story = {
  args: {
    withStaticHero: true,
    staticHeroImageSrc: 'static-hero-header-example.jpg',
    staticHeroHref: '#',
    staticHeroImageAltText: 'Static hero',
    navigationHas2Lines: true,
  },
  parameters: {
    viewport: {
      defaultViewport: 'widescreen',
    },
    layout: 'fullscreen',
  },
  globals: {
    backgrounds: { value: 'white' },
  }
};

export const MeinSchoenerGarten: Story = {
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
    const wrapper = document.createElement('div');
    wrapper.style.setProperty('--color-primary-interaction', 'hsla(88, 63%, 44%, 1)');
    wrapper.style.setProperty('--color-primary-extra-light', 'hsla(86, 33%, 91%,1)');
    wrapper.style.setProperty('--color-brand', 'hsla(88, 63%, 44%, 1)');
    wrapper.appendChild(createHomepage(args))
    return wrapper;
  }
}