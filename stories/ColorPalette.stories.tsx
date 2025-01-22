import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Design System/Colors",
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj;

const createColorSwatch = (
  colorClass: string,
  label: string,
  variable: string
) => {
  const wrapper = document.createElement("div");
  wrapper.className = "flex flex-col gap-2";

  const swatch = document.createElement("div");
  swatch.className = `${colorClass} h-20 w-full rounded-lg shadow-md`;
  swatch.style.minWidth = "200px";

  const labelDiv = document.createElement("div");
  labelDiv.className = "text-sm";

  const labelText = document.createElement("p");
  labelText.className = "font-medium";
  labelText.textContent = label;

  const variableText = document.createElement("p");
  variableText.className = "text-gray-500 font-mono text-xs";
  variableText.textContent = variable;

  labelDiv.appendChild(labelText);
  labelDiv.appendChild(variableText);
  wrapper.appendChild(swatch);
  wrapper.appendChild(labelDiv);

  return wrapper;
};

const createSection = (title: string, swatches: HTMLElement[]) => {
  const section = document.createElement("div");
  section.className = "mb-8";

  const heading = document.createElement("h2");
  heading.className = "text-xl font-bold mb-4";
  heading.textContent = title;

  const grid = document.createElement("div");
  grid.className =
    "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 transition-all";

  swatches.forEach((swatch) => grid.appendChild(swatch));

  section.appendChild(heading);
  section.appendChild(grid);
  return section;
};

export const AllColors: Story = {
  render: () => {
    const container = document.createElement("div");
    container.className = "space-y-8";

    container.appendChild(
      createSection("Brand", [
        createColorSwatch("bg-brand", "Brand", "var(--color-brand)"),
      ])
    );

    container.appendChild(
      createSection("Primary Colors", [
        createColorSwatch(
          "bg-primary-interaction",
          "Primary Interaction",
          "var(--color-brand)"
        ),
        createColorSwatch(
          "bg-primary-light",
          "Primary Light",
          "var(--color-primary-light)"
        ),
        createColorSwatch(
          "bg-primary-extra-light",
          "Primary Extra Light",
          "var(--color-primary-extraLight)"
        ),
        createColorSwatch(
          "bg-primary-dark",
          "Primary Dark",
          "var(--color-primary-dark)"
        ),
      ])
    );

    container.appendChild(
      createSection("Secondary Colors", [
        createColorSwatch(
          "bg-secondary-interaction",
          "Secondary Interaction",
          "var(--color-secondary-interaction)"
        ),
        createColorSwatch(
          "bg-secondary-light",
          "Secondary Light",
          "var(--color-secondary-light)"
        ),
        createColorSwatch(
          "bg-secondary-extra-light",
          "Secondary Extra Light",
          "var(--color-secondary-extraLight)"
        ),
        createColorSwatch(
          "bg-secondary-dark",
          "Secondary Dark",
          "var(--color-secondary-dark)"
        ),
      ])
    );

    container.appendChild(
      createSection("Tertiary", [
        createColorSwatch("bg-tertiary", "Tertiary", "var(--color-tertiary)"),
      ])
    );

    container.appendChild(
      createSection("System Colors", [
        createColorSwatch(
          "bg-system-success",
          "Success",
          "var(--color-system-success)"
        ),
        createColorSwatch(
          "bg-system-notification",
          "Notification",
          "var(--color-system-notification)"
        ),
        createColorSwatch(
          "bg-system-error",
          "Error",
          "var(--color-system-error)"
        ),
      ])
    );

    container.appendChild(
      createSection("Base Colors", [
        createColorSwatch(
          "bg-base-notification",
          "Base Notification",
          "var(--color-base-notification)"
        ),
        createColorSwatch(
          "bg-base-white",
          "White",
          "var(--color-base-notification)"
        ),
        createColorSwatch("bg-base-black", "Black", "var(--color-base-black)"),
        createColorSwatch("bg-base-transparent", "Transparent", "#FFFFFF00"),
      ])
    );

    container.appendChild(
      createSection("Background", [
        createColorSwatch(
          "bg-neutral-50",
          "Neutral 50",
          "var(--color-neutral-50)"
        ),
        createColorSwatch(
          "bg-neutral-100",
          "Neutral 100",
          "var(--color-neutral-100)"
        ),
        createColorSwatch(
          "bg-neutral-200",
          "Neutral 200",
          "var(--color-neutral-200)"
        ),
        createColorSwatch(
          "bg-neutral-300",
          "Neutral 300",
          "var(--color-neutral-300)"
        ),
        createColorSwatch(
          "bg-neutral-400",
          "Neutral 400",
          "var(--color-neutral-400)"
        ),
        createColorSwatch(
          "bg-neutral-450",
          "Neutral 450",
          "var(--color-neutral-450)"
        ),
        createColorSwatch(
          "bg-neutral-500",
          "Neutral 500",
          "var(--color-neutral-500)"
        ),
      ])
    );
    const borderRadiusSection = document.createElement("div");
    borderRadiusSection.className = "mb-8";
    borderRadiusSection.innerHTML = `
      <h2 class="text-xl font-bold mb-4">Border Radius</h2>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="space-y-2">
          <div class="bg-white border border-black h-20 rounded"></div>
          <p class="text-sm font-medium">Default Border Radius</p>
          <p class="text-gray-500 font-mono text-xs">0.5rem</p>
        </div>
        <div class="space-y-2">
          <div class="bg-white border border-black h-20 rounded-nested"></div>
          <p class="text-sm font-medium">Nested Border Radius</p>
          <p class="text-gray-500 font-mono text-xs">0.25rem</p>
        </div>
      </div>
    `;
    container.appendChild(borderRadiusSection);

    return container;
  },
};
