import { IconRegistry, IconCategory } from "@/stories/assets/icons";
import { createMobileHorizontalScroller } from "../../MobileHorizontalScroller/MobileHorinzontalScroller";

export type TagArgs = {
    text: string;
    showIcon?: boolean;
};

export const createTag = ({ text, showIcon = true }: TagArgs) => {
    return `
    <div class="flex items-center py-3 md:py-4 pr-6 md:pr-8 pl-4 md:pl-5 my-auto gap-2 md:gap-4 rounded-[3.25rem] border border-neutral-200 bg-neutral-50 ">
      ${showIcon ? IconRegistry[IconCategory.SYSTEM].success : ''}
      <span class="text-label whitespace-nowrap">${text}</span>
    </div>
  `;
};

export const createTagGroup = (tags: TagArgs[]) => {
    const container = document.createElement('div');
    container.className = "overflow-hidden w-full max-w-[100dvw] flex items-center justify-center";

    const desktopContainer = document.createElement('div');
    desktopContainer.className = "hidden md:flex flex-wrap justify-center gap-4 max-w-[84rem] mx-auto";

    tags.forEach(tag => {
        const tagElement = document.createElement('div');
        tagElement.innerHTML = createTag(tag);
        desktopContainer.appendChild(tagElement);
    })
    const mobileContainer = document.createElement('div');
    mobileContainer.className = "flex md:hidden flex-wrap justify-center gap-4 w-full max-w-[100dvw] overflow-x-hidden";

    mobileContainer.innerHTML = createMobileHorizontalScroller({ elements: tags, currentPage: 0, elementType: 'tag' });

    container.appendChild(desktopContainer);
    container.appendChild(mobileContainer);
    return container
};
