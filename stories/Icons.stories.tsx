import type { Meta, StoryObj } from "@storybook/html";
import { IconRegistry, IconCategory } from "./assets/icons";

interface IconStoryProps {
  category: IconCategory;
  name: string;
  size: "sm" | "md" | "lg" | "large";
  color: string;
}

const meta: Meta<IconStoryProps> = {
  title: "Design System/Icons",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    category: {
      control: "select",
      options: Object.values(IconCategory),
      description: "Icon category",
    },
    name: {
      control: "select",
      options: Object.keys(IconRegistry[IconCategory.SYSTEM]),
      description: "Icon name",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "large"],
      description: "Icon size",
    },
    color: {
      control: "color",
      description: "Icon color",
    },
  },
};

export default meta;
type Story = StoryObj<IconStoryProps>;

const renderIcon = ({ category, name, size, color }: IconStoryProps) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    large: "w-16 h-16",
  };

  const iconSize =
    category === IconCategory.LARGE ? sizeClasses.large : sizeClasses[size];

  return `
    <div class="flex flex-col items-center gap-4">
      <div 
        class="${iconSize} flex items-center justify-center"
        style="color: ${color}"
      >${IconRegistry[category][name]}</div>
      <span class="text-sm text-center break-words w-full">${name}</span>
    </div>
  `;
};

const renderIconGrid = (category: IconCategory) => {
  const icons = Object.entries(IconRegistry[category]);

  const gridClass =
    category === IconCategory.LARGE ? "grid-cols-6" : "grid-cols-8";

  return `
    <div class="p-8">
      <h2 class="text-3xl capitalize font-bold mb-4">${category}</h2>
      <div class="grid ${gridClass} gap-8">
        ${icons
          .map(([name]) =>
            renderIcon({
              category,
              name,
              size: "md",
              color: "#000000",
            })
          )
          .join("")}
      </div>
    </div>
  `;
};

export const SingleIcon: Story = {
  args: {
    category: IconCategory.SYSTEM,
    name: "arrowRight",
    size: "md",
    color: "#000000",
  },
  render: (args) => {
    const size = args.category === IconCategory.LARGE ? "large" : args.size;
    return renderIcon({ ...args, size });
  },
};

export const SystemIcons: Story = {
  render: () => renderIconGrid(IconCategory.SYSTEM),
};

export const LargeIcons: Story = {
  render: () => renderIconGrid(IconCategory.LARGE),
};

export const SliderIcons: Story = {
  render: () => renderIconGrid(IconCategory.SLIDER),
};

export const FlagIcons: Story = {
  render: () => renderIconGrid(IconCategory.FLAGS),
};

export const AllIcons: Story = {
  render: () => `
    <div class="space-y-12">
      ${Object.values(IconCategory)
        .map((category) => renderIconGrid(category))
        .join("")}
    </div>
  `,
};

export const UsageExamples: Story = {
  render: () => `
    <div class="space-y-8">
      <div class="p-4 border rounded">
        <h3 class="font-bold mb-4">Button with Icon</h3>
        <button class="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded">
          ${IconRegistry.system.arrowRight}
          <span>Click me</span>
        </button>
      </div>

      <div class="p-4 border rounded">
        <h3 class="font-bold mb-4">Alert with Icon</h3>
        <div class="flex items-center gap-2 p-4 bg-yellow-100 text-yellow-800 rounded">
          ${IconRegistry.system.warningTriangle}
          <span>Warning message</span>
        </div>
      </div>

      <div class="p-4 border rounded">
        <h3 class="font-bold mb-4">Navigation with Icons</h3>
        <nav class="flex gap-4">
          <a href="#" class="flex items-center gap-2 text-blue-500">
            ${IconRegistry.system.apps}
            <span>Apps</span>
          </a>
          <a href="#" class="flex items-center gap-2 text-blue-500">
            ${IconRegistry.system.user}
            <span>Profile</span>
          </a>
          <a href="#" class="flex items-center gap-2 text-blue-500">
            ${IconRegistry.system.search}
            <span>Search</span>
          </a>
        </nav>
      </div>
    </div>
  `,
};
