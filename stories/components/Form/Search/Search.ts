import { IconCategory, IconRegistry } from '@/assets/icons';
import { createButtonLink } from '@/components/Button/ButtonLink/ButtonLink';
import { getSizedIcon } from '@/utils/iconUtils';

export type SearchArgs = {
  placeholder?: string;
  results?: Array<{
    label: string;
    href: string;
    onClick?: () => void;
    target?: '_blank' | '_self' | '_parent' | '_top';
  }>;
  onSearch?: (value: string) => void;
  emptyText?: string;
  classNames?: string;
  isSmall: boolean;
};

export const createSearch = ({
  placeholder = 'Search...',
  results = [],
  onSearch,
  emptyText = 'No results found',
  classNames,
  isSmall = false,
}: SearchArgs) => {
  let isPopoverOpen = false;
  let resultsRendered = false;
  const wrapper = document.createElement('div');
  wrapper.className = 'relative w-full flex items-center justify-center h-full search-container ' + classNames;

  const inputWrapper = document.createElement('div');
  inputWrapper.className = 'relative h-full flex items-center';

  // Large version input
  const input = document.createElement('input');
  input.className = `
        my-auto
        w-full
        px-5
        py-2
        rounded-t-sm
        transition
        bg-transparent
        border-b
        border-neutral-400
        focus:bg-base-white
        focus:border-b-[3px] 
        focus:border-secondary-dark 
        active:bg-secondary-dark 
        cursor-pointer 
        overflow-hidden
        transition-colors
        duration-150 
        outline-none 
        ${isSmall ? 'hidden' : ''}
    `;
  input.placeholder = placeholder;

  const smallInputContainer = document.createElement('div');
  smallInputContainer.className = 'relative w-full mb-2';

  const smallSearchIcon = document.createElement('div');
  smallSearchIcon.className = `
        absolute 
        right-5 
        top-1/2 
        -translate-y-1/2 
        z-10
    `;
  smallSearchIcon.innerHTML = getSizedIcon(IconRegistry[IconCategory.SYSTEM].search, 18);

  const smallInput = document.createElement('input');
  smallInput.className = `
        w-full
        px-5
        py-2
        rounded-sm
        transition
        bg-neutral-100
        border border-base-black 
        hover:border-secondary-light
        active:bg-secondary-light 
        cursor-pointer 
        overflow-hidden 
        transition-colors 
        duration-150 
        outline-none 
    `;
  smallInput.placeholder = placeholder;
  // Large version search icon
  const searchIcon = document.createElement('div');
  searchIcon.className = `
        absolute 
        right-5 
        top-1/2 
        -translate-y-1/2 
        ${isSmall ? 'hidden' : ''}
    `;
  searchIcon.innerHTML = getSizedIcon(IconRegistry[IconCategory.SYSTEM].search, 18);

  // Popover trigger for small version
  const popoverTrigger = document.createElement('button');
  popoverTrigger.className = `
        h-full px-5 py-4
        hover:bg-secondary-light 
        active:bg-secondary-dark 
        transition-all duration-300 
        cursor-pointer 
        border-b-[5px] 
        border-transparent
        bg-transparent 
    `;

  // Function to update the popover trigger icon
  const updatePopoverTriggerIcon = () => {
    popoverTrigger.innerHTML = isPopoverOpen
      ? getSizedIcon(IconRegistry[IconCategory.SYSTEM].close, 18)
      : getSizedIcon(IconRegistry[IconCategory.SYSTEM].search, 18);
  };

  // Results popover setup
  const resultsPopover = document.createElement('div');
  resultsPopover.className = `
        absolute
        top-full
        left-1/2
        -translate-x-1/2
        w-fit 
        min-w-64
        bg-base-white
        shadow-popover
        rounded-md
        mt-2
        p-2
        hidden
        flex-col
        gap-0
    `;

  popoverTrigger.addEventListener('click', () => {
    isPopoverOpen = !isPopoverOpen;
    updatePopoverTriggerIcon();

    if (!isPopoverOpen) {
      resultsPopover.style.display = 'none';
      popoverTrigger.classList.remove('bg-base-white', 'border-secondary-dark');
      popoverTrigger.classList.add('bg-transparent', 'border-transparent');

      // Reset small input
      if (isSmall) {
        smallInput.value = '';
        resultsPopover.innerHTML = '';
        smallInputContainer.appendChild(smallSearchIcon);
        smallInputContainer.appendChild(smallInput);
      }
    } else {
      resultsPopover.style.display = 'flex';
      popoverTrigger.classList.add('bg-base-white', 'border-secondary-dark');
      popoverTrigger.classList.remove('bg-transparent', 'border-transparent');

      if (isSmall) {
        smallInputContainer.appendChild(smallSearchIcon);
        smallInputContainer.appendChild(smallInput);
        resultsPopover.insertBefore(smallInputContainer, resultsPopover.firstChild);
        smallInput.focus();
      }
    }
  });

  updatePopoverTriggerIcon();

  input.addEventListener('input', (e) => {
    const inputValue = (e.target as HTMLInputElement).value.trim();
    handleSearch(inputValue);
  });

  input.addEventListener('focus', () => {
    if (input.value.trim()) {
      resultsPopover.style.display = 'flex';
    }
  });

  input.addEventListener('blur', () => {
    setTimeout(() => {
      resultsPopover.style.display = 'none';
      if (!input.value.trim()) {
        resultsPopover.style.display = 'none';
      }
    }, 200);
  });

  // Small input event listener
  smallInput.addEventListener('input', (e) => {
    const inputValue = (e.target as HTMLInputElement).value.trim();
    handleSearch(inputValue);
  });

  const handleSearch = (inputValue: string) => {
    if (inputValue) {
      if (!isSmall && !resultsRendered) {
        resultsPopover.innerHTML = '';
      }

      if (!resultsRendered) {
        if (results.length === 0) {
          const emptyState = document.createElement('div');
          emptyState.className = `
                    py-4
                    text-center
                    text-neutral-400
                    text-body
                `;
          emptyState.textContent = emptyText;
          resultsPopover.appendChild(emptyState);
        } else {
          results.forEach((result) => {
            const link = createButtonLink({
              label: result.label,
              href: result.href,
              onClick: result.onClick || (() => {}),
              icon: 'arrowRight',
              disabled: false,
              iconLeft: false,
            });
            resultsPopover.appendChild(link);
          });
        }
        resultsRendered = true;
      }

      resultsPopover.style.display = 'flex';

      if (onSearch) {
        onSearch(inputValue);
      }
    } else {
      if (isSmall) {
        // Clear results but keep smallInput and smallSearchIcon
        resultsPopover.innerHTML = '';

        // Ensure smallInputContainer contains smallSearchIcon and smallInput
        smallInputContainer.innerHTML = '';
        smallInputContainer.appendChild(smallSearchIcon);
        smallInputContainer.appendChild(smallInput);
        resultsPopover.appendChild(smallInputContainer);
        smallInput.focus();
      } else {
        resultsPopover.innerHTML = '';
        resultsPopover.style.display = 'none';
      }
      resultsRendered = false;
    }
  };

  if (isSmall) {
    inputWrapper.appendChild(popoverTrigger);
  } else {
    inputWrapper.appendChild(input);
    inputWrapper.appendChild(searchIcon);
  }

  wrapper.appendChild(inputWrapper);
  wrapper.appendChild(resultsPopover);

  return wrapper;
};
