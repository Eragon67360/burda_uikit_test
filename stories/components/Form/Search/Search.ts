import { IconCategory, IconRegistry } from '@/assets/icons';
import { getSizedIcon } from '@/utils/iconUtils';
import { createButtonLink } from '@/components/Button/ButtonLink/ButtonLink'

export type SearchArgs = {
    placeholder?: string;
    results?: Array<{
        label: string;
        href: string;
        onClick?: () => void;
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
    const wrapper = document.createElement('div');
    wrapper.className = 'relative w-full flex items-center justify-center h-full ' + classNames;

    const inputWrapper = document.createElement('div');
    inputWrapper.className = 'relative h-full flex items-center';

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
    `;
    input.placeholder = placeholder;

    const popoverTrigger = document.createElement('button');
    popoverTrigger.className = `
        h-full px-5 
        hover:bg-secondary-interaction 
        active:bg-secondary-dark 
        transition-all duration-300 
        cursor-pointer 
        border-b-[5px] 
        border-transparent 
        bg-transparent 
    `;

    popoverTrigger.addEventListener('click', () => {
        isPopoverOpen = !isPopoverOpen;
        if (!isPopoverOpen) {
            resultsPopover.style.display = 'none';
            popoverTrigger.classList.remove('bg-base-white', 'border-secondary-dark');
            popoverTrigger.classList.add('bg-transparent', 'border-transparent');
        } else {
            resultsPopover.style.display = 'flex';
            popoverTrigger.classList.add('bg-base-white', 'border-secondary-dark');
            popoverTrigger.classList.remove('bg-transparent', 'border-transparent');
        }
    })

    popoverTrigger.innerHTML = getSizedIcon(IconRegistry[IconCategory.SYSTEM].search, 18);

    const searchIcon = document.createElement('div');
    searchIcon.className = 'absolute right-5 top-1/2 -translate-y-1/2';
    searchIcon.innerHTML = getSizedIcon(IconRegistry[IconCategory.SYSTEM].search, 18);

    const resultsPopover = document.createElement('div');
    resultsPopover.className = `
        absolute
        top-full
        left-1/2
        -translate-x-1/2
        w-fit 
        bg-base-white
        shadow-popover
        rounded-md
        mt-2
        p-2
        hidden
        flex-col
        gap-0
    `;

    if (results.length === 0) {
        const emptyState = document.createElement('div');
        emptyState.className = `
            py-4
            text-center
            text-neutral-400
            text-body-desktop
        `;
        emptyState.textContent = emptyText;
        resultsPopover.appendChild(emptyState);
    } else {
        results.forEach(result => {
            const link = createButtonLink({
                label: result.label,
                href: result.href,
                onClick: result.onClick || (() => { }),
                icon: 'arrowRight',
                disabled: false,
                iconLeft: false
            });
            resultsPopover.appendChild(link);
        });
    }

    input.addEventListener('input', (e) => {
        const inputValue = (e.target as HTMLInputElement).value.trim();

        if (inputValue) {
            resultsPopover.style.display = 'flex';

            if (onSearch) {
                onSearch(inputValue);
            }
        } else {
            resultsPopover.style.display = 'none';
        }
    });

    input.addEventListener('blur', () => {
        setTimeout(() => {
            if (!input.value.trim()) {
                resultsPopover.style.display = 'none';
            }
        }, 200);
    });

    if (isSmall) {
        inputWrapper.appendChild(popoverTrigger);
    }
    else {
        inputWrapper.appendChild(input);
        inputWrapper.appendChild(searchIcon);
    }
    wrapper.appendChild(inputWrapper);
    wrapper.appendChild(resultsPopover);

    return wrapper;
};
