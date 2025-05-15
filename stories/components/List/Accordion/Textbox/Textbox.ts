import { IconCategory, IconRegistry } from '@/assets/icons';
import { TextboxArgs } from '@/stories/types';
import './textbox.css';

/**
 * Creates an expandable/collapsible textbox component with accessibility features
 * @param {TextboxArgs} props - The configuration options
 * @returns {HTMLElement} The textbox wrapper element
 */
export const createTextbox = ({
  expandText = 'See more',
  collapseText = 'See less',
  content = '',
  className = '',
  chevronIcon = IconRegistry[IconCategory.SYSTEM].chevronDown as string,
}: TextboxArgs) => {
  const wrapper = document.createElement('div');
  wrapper.className = `textbox-wrapper ${className}`;

  let isExpanded = false;
  const uniqueId = `textbox-${Math.random().toString(36).substr(2, 9)}`;

  const container = document.createElement('div');
  container.className = 'w-full';

  const flexContainer = document.createElement('div');
  flexContainer.className = 'flex flex-col';

  const topButtonContainer = document.createElement('div');
  topButtonContainer.className = 'flex items-center justify-center transition-opacity duration-200';
  topButtonContainer.dataset.button = 'top';

  const topBorder = document.createElement('div');
  topBorder.className = 'border-t border-neutral-400 w-full h-0';

  const topButton = document.createElement('button');
  topButton.id = `${uniqueId}-trigger-top`;
  topButton.setAttribute('aria-expanded', 'false');
  topButton.setAttribute('aria-controls', `${uniqueId}-content`);
  topButton.className =
    'textbox-trigger flex items-center gap-2 mx-4 w-fit text-nowrap justify-center text-base-black text-button-label group cursor-pointer';

  const topButtonTextSpan = document.createElement('span');
  topButtonTextSpan.className = 'border-b-2 border-transparent transition group-hover:border-secondary-light';
  topButtonTextSpan.textContent = expandText;

  const topChevronSpan = document.createElement('span');
  topChevronSpan.className = 'chevron-wrapper scale-90';
  topChevronSpan.innerHTML = chevronIcon;

  const contentContainer = document.createElement('div');
  contentContainer.id = `${uniqueId}-content`;
  contentContainer.className = 'textbox-content transition-all duration-200 overflow-hidden';
  contentContainer.setAttribute('role', 'region');
  contentContainer.setAttribute('aria-labelledby', `${uniqueId}-trigger-top`);
  contentContainer.style.maxHeight = '0';
  contentContainer.style.opacity = '0';

  const contentInner = document.createElement('div');
  contentInner.className = 'pt-4';
  contentInner.innerHTML = content;

  const bottomButtonContainer = document.createElement('div');
  bottomButtonContainer.className = 'items-center justify-center opacity-0 transition-opacity duration-200 hidden mt-4';
  bottomButtonContainer.dataset.button = 'bottom';

  const bottomBorder = document.createElement('div');
  bottomBorder.className = 'border-t border-neutral-400 w-full h-0';

  const bottomButton = document.createElement('button');
  bottomButton.id = `${uniqueId}-trigger-bottom`;
  bottomButton.setAttribute('aria-expanded', 'false');
  bottomButton.setAttribute('aria-controls', `${uniqueId}-content`);
  bottomButton.className =
    'textbox-trigger flex items-center gap-2 mx-4 w-fit text-nowrap justify-center text-base-black text-button-label group cursor-pointer';

  const bottomButtonTextSpan = document.createElement('span');
  bottomButtonTextSpan.className = 'border-b-2 border-transparent transition group-hover:border-secondary-light';
  bottomButtonTextSpan.textContent = collapseText;

  const bottomChevronSpan = document.createElement('span');
  bottomChevronSpan.className = 'chevron-wrapper rotate-180 scale-90';
  bottomChevronSpan.innerHTML = chevronIcon;

  // Assemble the structure
  topButton.appendChild(topButtonTextSpan);
  topButton.appendChild(topChevronSpan);

  bottomButton.appendChild(bottomButtonTextSpan);
  bottomButton.appendChild(bottomChevronSpan);

  topButtonContainer.appendChild(topBorder.cloneNode());
  topButtonContainer.appendChild(topButton);
  topButtonContainer.appendChild(topBorder.cloneNode());

  contentContainer.appendChild(contentInner);

  bottomButtonContainer.appendChild(bottomBorder.cloneNode());
  bottomButtonContainer.appendChild(bottomButton);
  bottomButtonContainer.appendChild(bottomBorder.cloneNode());

  flexContainer.appendChild(topButtonContainer);
  flexContainer.appendChild(contentContainer);
  flexContainer.appendChild(bottomButtonContainer);

  container.appendChild(flexContainer);
  wrapper.appendChild(container);

  const toggleContent = () => {
    isExpanded = !isExpanded;

    topButton.setAttribute('aria-expanded', isExpanded.toString());
    bottomButton.setAttribute('aria-expanded', isExpanded.toString());

    if (isExpanded) {
      topButtonContainer.style.display = 'none';
      bottomButtonContainer.style.display = 'flex';
      setTimeout(() => {
        bottomButtonContainer.style.opacity = '1';
      }, 0);
    } else {
      bottomButtonContainer.style.opacity = '0';
      setTimeout(() => {
        topButtonContainer.style.display = 'flex';
        bottomButtonContainer.style.display = 'none';
      }, 200);
    }

    if (isExpanded) {
      contentContainer.style.maxHeight = `${contentContainer.scrollHeight}px`;
      contentContainer.style.opacity = '1';
    } else {
      contentContainer.style.maxHeight = '0';
      contentContainer.style.opacity = '0';
    }
  };

  topButton.addEventListener('click', toggleContent);
  bottomButton.addEventListener('click', toggleContent);

  return wrapper;
};
