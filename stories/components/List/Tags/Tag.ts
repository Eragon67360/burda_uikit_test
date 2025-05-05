import { IconCategory, IconRegistry } from '@/stories/assets/icons';
import { TagArgs } from '@/stories/types';
import { createHorizontalScroller } from '../../HorizontalScroller/HorizontalScroller';

/**
 * Creates a single tag element with optional icon
 * @param {TagArgs} props - The configuration options
 * @returns {HTMLElement} A div element containing the tag
 *
 * @example
 * const tag = createTag({
 *   text: 'New Feature',
 *   showIcon: true
 * });
 */
export const createTag = ({ text, showIcon = true }: TagArgs) => {
  const mainContainerDiv = document.createElement('div');
  mainContainerDiv.className =
    'w-fit flex items-center py-3 md:py-4 pr-6 md:pr-8 pl-4 md:pl-5 my-auto gap-2 md:gap-4 rounded-[3.25rem] border border-neutral-200 bg-neutral-50';

  if (showIcon) {
    const iconDiv = document.createElement('div');
    iconDiv.innerHTML = IconRegistry[IconCategory.SYSTEM].success;
    mainContainerDiv.appendChild(iconDiv);
  }

  const textSpan = document.createElement('span');
  textSpan.className = 'text-label whitespace-nowrap';
  textSpan.textContent = text;

  mainContainerDiv.appendChild(textSpan);
  return mainContainerDiv;
};

/**
 * Creates a responsive tag group with horizontal scrolling on mobile
 * @param {Array<TagArgs>} tags - Array of tag configurations
 * @returns {HTMLElement} A container with desktop and mobile layouts
 *
 * @example
 * const tagGroup = createTagGroup([
 *   { text: 'First Tag', showIcon: true },
 *   { text: 'Second Tag', showIcon: false }
 * ]);
 */
export const createTagGroup = (tags: Array<TagArgs>) => {
  const container = document.createElement('div');
  container.className = 'overflow-hidden w-full max-w-[100dvw] flex items-center justify-center';

  const desktopContainer = document.createElement('div');
  desktopContainer.className = 'hidden md:flex flex-wrap justify-center gap-4 max-w-[84rem] mx-auto';

  tags.forEach((tag) => {
    const tagElement = document.createElement('div');
    tagElement.innerHTML = createTag(tag).outerHTML;
    desktopContainer.appendChild(tagElement);
  });
  const elements = tags.map((tag) => createTag(tag));
  const mobileContainer = document.createElement('div');
  mobileContainer.className = 'flex md:hidden flex-wrap justify-center gap-4 w-full max-w-[100dvw] overflow-x-hidden';

  mobileContainer.appendChild(createHorizontalScroller({ elements, currentPage: 1 }));

  container.appendChild(desktopContainer);
  container.appendChild(mobileContainer);
  return container;
};
