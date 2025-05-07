import { getSizedIcon } from '@/stories/utils/iconUtils';
import './process.css';
import { IconCategory, IconRegistry } from '@/stories/assets/icons';
import { createButtonCTA } from '../../Button/CTA/ButtonCTA';
import { ButtonCTAVariant } from '@/stories/types';

export type ProcessItem = {
  order: number;
  icon: keyof (typeof IconRegistry)[IconCategory.LARGE];
  description: string;
};
export type ProcessArgs = {
  title: string;
  subtitle: string;
  items: ProcessItem[]; // 2 to 5 items
  callToAction?: {
    text: string;
    onClick: () => void;
  };
  backgroundColor?: 'white' | 'primary-light';
};

export const createProcess = ({
  title = 'Process Title',
  subtitle = 'Process Subtitle',
  items = [],
  callToAction,
  backgroundColor = 'white',
}: ProcessArgs) => {
  const processContainer = document.createElement('div');
  processContainer.className = 'process-container max-w-[90rem] flex flex-col gap-8 py-16 px-8 md:px-12 items-center';
  const computedBackgroundColor = backgroundColor === 'white' ? 'bg-base-white' : 'bg-brand-custom-background';

  processContainer.classList.add(computedBackgroundColor);

  const processTitle = document.createElement('div');
  processTitle.className = 'flex flex-col items-center text-center gap-4';
  const titleElement = document.createElement('h2');
  titleElement.className = 'text-h2 text-center';
  titleElement.textContent = title;

  const subtitleElement = document.createElement('p');
  subtitleElement.className = 'text-subhead2';
  subtitleElement.textContent = subtitle;
  processTitle.appendChild(titleElement);
  processTitle.appendChild(subtitleElement);
  processContainer.appendChild(processTitle);

  const processItemsContainer = document.createElement('div');
  processItemsContainer.className = `justify-center md:justify-center items-start gap-8 flex flex-wrap w-fit md:w-full`;

  items.forEach((item, index) => {
    const processItemElement = document.createElement('div');
    processItemElement.className = `flex flex-col items-center text-center p-2 w-full max-w-[8.25rem] md:max-w-[11.25rem]`;

    const orderBadge = document.createElement('div');
    orderBadge.className = `w-10 h-10 text-copy-mobile rounded-full flex items-center justify-center mb-3 ${
      backgroundColor === 'white' ? 'bg-secondary-interaction text-base-black' : 'bg-primary-interaction text-base-white'
    }`;

    if (index === items.length - 1) {
      orderBadge.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.178 4.70819C17.5279 5.01437 17.5597 5.54778 17.2484 5.89322L8.48684 15.618C8.17397 15.9653 7.63679 15.9874 7.29648 15.667L2.22645 10.894C1.91027 10.5964 1.88 10.1004 2.15128 9.76129C2.45061 9.38713 3.00804 9.33563 3.36428 9.65604L7.29794 13.1943C7.63979 13.5018 8.1661 13.4743 8.47409 13.1329L16.0103 4.77712C16.3153 4.43899 16.8353 4.40834 17.178 4.70819Z" fill="${
                  backgroundColor === 'white' ? 'black' : 'white'
                }"/>
                </svg>`;
    } else {
      orderBadge.textContent = item.order.toString();
    }

    const iconElement = document.createElement('div');
    iconElement.innerHTML = getSizedIcon(IconRegistry[IconCategory.LARGE][item.icon], 48);

    const descriptionElement = document.createElement('p');
    descriptionElement.className = `text-sm text-base-black`;
    descriptionElement.textContent = item.description;

    processItemElement.appendChild(orderBadge);
    processItemElement.appendChild(iconElement);
    processItemElement.appendChild(descriptionElement);

    processItemsContainer.appendChild(processItemElement);
  });

  processContainer.appendChild(processItemsContainer);

  // Call to Action (optional)
  if (callToAction) {
    const ctaButton = createButtonCTA({
      label: callToAction.text,
      onClick: callToAction.onClick,
      variant: ButtonCTAVariant.PRIMARY,
      icon: 'arrowRight',
      iconLeft: false,
      nested: false,
    });
    processContainer.appendChild(ctaButton);
  }

  return processContainer;
};
