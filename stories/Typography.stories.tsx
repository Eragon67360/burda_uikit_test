import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Design System/Typography",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj;

const typography = `
  <div class="space-y-16 mx-16 my-16">
    <section>
      <h2 class="text-3xl font-bold">Headlines</h2>
      <div class="space-y-4 mt-8 ">
        <div class="flex gap-4 items-center">
          <span class="text-lg font-bold">H1</span><h1 class="text-h1">Lorem ipsum dolor sit amet momentum</h1>
        </div>
        <div class="flex gap-4 items-center">
          <span class="text-lg font-bold">H2</span><h2 class="text-h2">Lorem ipsum dolor sit amet momentum</h2>
        </div>
        <div class="flex gap-4 items-center">
          <span class="text-lg font-bold">H3</span><h3 class="text-h3">Lorem ipsum dolor sit amet momentum</h3>
        </div>
        <div class="flex gap-4 items-center">
          <span class="text-lg font-bold">H4</span><h4 class="text-h4">Lorem ipsum dolor sit amet momentum</h4>
        </div>
        <div class="flex gap-4 items-center">
          <span class="text-lg font-bold">H5</span><h5 class="text-h5">Lorem ipsum dolor sit amet momentum</h5>
        </div>
        <div class="flex gap-4 items-center">
          <span class="text-lg font-bold">H6</span><h6 class="text-h6">Lorem ipsum dolor sit amet momentum</h6>
        </div>
      </div>
    </section>

    <div class="border border-neutral-300 w-full"></div>

    <section>
      <h2 class="text-3xl font-bold">Subscription</h2>
      <div class="grid grid-cols-2 mt-8">
        <div class="space-y-4">
          <p class="text-sm">Default</p>
          <p class="text-subscription-default">103,45 €</p>
        </div>
        <div class="space-y-4">
          <p class="text-sm">Small</p>
          <p class="text-subscription-small">12,35 €</p>
        </div>
      </div>
    </section>

    <div class="border border-neutral-300 w-full"></div>

    <section class="grid grid-cols-2">
      <h2 class="text-3xl font-bold">Order Step</h2>
      <p class="text-order-step lining-nums proportional-nums">1 2 3 4 5</p>
    </section>
    <div class="border border-neutral-300 w-full"></div>
    <section>
      <h2 class="text-3xl font-bold">Subhead</h2>
      <div class="space-y-4 mt-8">
        <div class="flex gap-4 items-center">
          <span class="text-lg font-bold">Subhead1</span><h1 class="text-subhead1">Lorem ipsum dolor sit amet momentum</h1>
        </div>
        <div class="flex gap-4 items-center">
          <span class="text-lg font-bold">Subhead2</span><h2 class="text-subhead2 font-semibold">Lorem ipsum dolor sit amet momentum</h2>
        </div>
        <div class="flex gap-4 items-center">
          <span class="text-lg font-bold">Subhead3</span><h3 class="text-subhead3 font-semibold">Lorem ipsum dolor sit amet momentum</h3>
        </div>
        <div class="flex gap-4 items-center">
          <span class="text-lg font-bold">Subhead4</span><h4 class="text-subhead4 font-semibold">Lorem ipsum dolor sit amet momentum</h4>
        </div>
      </div>
    </section>

    <div class="border border-neutral-300 w-full"></div>

    <section>
      <h2 class="text-3xl font-bold">Hotline Footer</h2>
      <div class="grid grid-cols-2 mt-8">
        <div class="space-y-4">
          <p class="text-sm">Default</p>
          <p class="text-hotline-footer-default">0800 123 456</p>
        </div>
        <div class="space-y-4">
          <p class="text-sm">Small</p>
          <p class="text-hotline-footer-small">0800 123 456</p>
        </div>
      </div>
    </section>

    <div class="border border-neutral-300 w-full"></div>

    <section>
      <h2 class="text-3xl font-bold">Copy</h2>
      <div class="gap-8 mt-8 grid grid-cols-3">
        <div class="space-y-4">
          <p class="text-storybook-label">Teaser</p>
          <p class="text-teaser">Lorem ipsum dolor sit amet consectetur. Vulputate diam ac integer arcu commodo donec rhoncus lacus vestibulum. Sit tempus pharetra odio imperdiet nunc massa sodales at tempor. Auctor vestibulum phasellus aliquam cursus. Mattis enim accumsan ultricies vel imperdiet blandit dolor in.</p>
        </div>
        <div class="space-y-4">
          <p class="text-storybook-label">Copy</p>
          <p class="text-copy">Lorem ipsum dolor sit amet consectetur. Vulputate diam ac integer arcu commodo donec rhoncus lacus vestibulum. Sit tempus pharetra odio imperdiet nunc massa sodales at tempor. Auctor vestibulum phasellus aliquam cursus. Mattis enim accumsan ultricies vel imperdiet blandit dolor in.</p>
        </div>
        <div class="space-y-4">
          <p class="text-storybook-label">Copy small</p>
          <p class="text-copy-small">Lorem ipsum dolor sit amet consectetur. Vulputate diam ac integer arcu commodo donec rhoncus lacus vestibulum. Sit tempus pharetra odio imperdiet nunc massa sodales at tempor. Auctor vestibulum phasellus aliquam cursus. Mattis enim accumsan ultricies vel imperdiet blandit dolor in.</p>
        </div>
        <div class="space-y-4">          
          <p class="text-storybook-label">Bulletpoint Copy</p>
          <ul class="text-bulletpoint-copy list-disc ml-4">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Sit tempus pharetra</li>
            <li>Auctor vestibulum phasellus</li>
            <li>Mattis enim accumsan ultricies</li>
            <li>Nunc massa sodales at tempor</li>
          </ul>
          </div>
        <div class="space-y-4">
          <p class="text-storybook-label">Footer Copy</p>
          <p class="text-footer-copy">Lorem ipsum dolor sit amet consectetur. Vulputate diam ac integer arcu commodo donec rhoncus lacus vestibulum.</p>
        </div>
        <div></div>
        <div class="space-y-4">
          <p class="text-storybook-label">Label</p>
          <p class="text-label">Lorem ipsum dolor sit amet </p>
        </div>
        <div class="space-y-4">
          <p class="text-storybook-label">Button Label</p>
          <p class="text-button-label">Lorem ipsum dolor sit amet </p>
        </div>
        <div class="space-y-4">
          <p class="text-storybook-label">Button Label Large</p>
          <p class="text-button-label-large">Lorem ipsum dolor sit amet </p>
        </div>
        <div class="space-y-4">
          <p class="text-storybook-label">Input</p>
          <p class="text-input">Lorem ipsum dolor sit amet </p>
        </div>
        <div class="space-y-4">
          <p class="text-storybook-label">Placeholder</p>
          <p class="text-placeholder">Lorem ipsum dolor sit amet </p>
        </div>
        <div></div>
        <div class="space-y-4">
          <p class="text-storybook-label">Link</p>
          <p class="text-link">Lorem ipsum dolor sit amet </p>
        </div>
        <div class="space-y-4">
          <p class="text-storybook-label">Link Small</p>
          <p class="text-link-small">Lorem ipsum dolor sit amet </p>
        </div>
      </div>
    </section>
  </div>
`

export const Desktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  render: () => typography,
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
  render: () => typography,
};
