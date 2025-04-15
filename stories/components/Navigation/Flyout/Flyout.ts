import './flyout.css';
import { createButtonLink } from '@/components/Button/ButtonLink/ButtonLink';
import { createSearch, SearchArgs } from '@/components/Form/Search/Search';
import { IconCategory, IconRegistry } from '@/assets/icons';
import { getSizedIcon } from '@/utils/iconUtils';

export type LinkItem = {
  label: string;
  href: string;
  target: '_blank' | '_self' | '_parent' | '_top';
};

export type FlyoutArgs = {
  variant: 'search' | 'sublinks';
  linkItems?: LinkItem[];
  searchProps?: SearchArgs;
  triggerLabel?: string;
  has2LinesNavigation?: boolean;
};

export const createFlyout = ({ variant, linkItems = [], searchProps, triggerLabel = 'Menu', has2LinesNavigation }: FlyoutArgs) => {
  const container = document.createElement('div');
  container.className = `relative inline-block z-40 ${has2LinesNavigation ? 'h-full' : 'h-[4.5rem]'}`;

  let isOpen = false;

  const flyoutWrapper = document.createElement('div');
  flyoutWrapper.className = `
        absolute 
        top-full 
        left-0 
        mt-2 
        w-[22rem] 
        bg-base-white 
        rounded-md 
        shadow-popover 
        p-2 
        flex 
        flex-col 
        gap-2 
        hidden
    `;

  if (variant === 'search') {
    const searchComponent = createSearch(searchProps);
    return searchComponent;
  }

  if (variant === 'sublinks') {
    const triggerButton = document.createElement('button');
    triggerButton.className = `
            flex 
            items-center 
            h-full 
            gap-2 
            px-4 
            py-2 
            text-sm 
            font-semibold 
            rounded-none 
            transition-all 
            duration-300 
            cursor-pointer 
            hover:bg-secondary-light
        `;

    const chevronIcon = document.createElement('div');
    chevronIcon.innerHTML = getSizedIcon(IconRegistry[IconCategory.SYSTEM].chevronDown, 14);
    chevronIcon.className = 'transition-transform duration-300';

    const labelSpan = document.createElement('span');
    labelSpan.textContent = triggerLabel;

    triggerButton.appendChild(labelSpan);
    triggerButton.appendChild(chevronIcon);

    linkItems.forEach((item, index) => {
      const link = createButtonLink({
        label: item.label,
        href: item.href,
        target: item.target,
        icon: 'arrowRight',
        disabled: false,
        iconLeft: false,
      });

      flyoutWrapper.appendChild(link);

      if (index < linkItems.length - 1) {
        const separator = document.createElement('div');
        separator.className = 'h-px bg-neutral-200 w-full';
        flyoutWrapper.appendChild(separator);
      }
    });

    triggerButton.addEventListener('click', () => {
      isOpen = !isOpen;
      flyoutWrapper.classList.toggle('hidden', !isOpen);

      if (isOpen) {
        triggerButton.classList.add('bg-base-white', 'border-b-[3px]', 'border-secondary-interaction', 'pb-[0.313rem]');
        chevronIcon.classList.add('scale-y-[-1]');
      } else {
        triggerButton.classList.remove('bg-base-white', 'border-b-[3px]', 'border-secondary-interaction', 'pb-[0.313rem]');
        chevronIcon.classList.remove('scale-y-[-1]');
      }
    });

    document.addEventListener('click', (event) => {
      if (isOpen && !container.contains(event.target as Node)) {
        flyoutWrapper.classList.add('hidden');
        triggerButton.classList.remove('bg-base-white', 'border-b-[3px]', 'border-secondary-interaction');
        chevronIcon.classList.remove('scale-y-[-1]');
        isOpen = false;
      }
    });

    container.appendChild(triggerButton);
    container.appendChild(flyoutWrapper);

    return container;
  }

  return document.createElement('div');
};
