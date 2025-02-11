import { IconCategory, IconRegistry } from '../../../assets/icons';
import { getSizedIcon } from '../../../utils/iconUtils';
import { createButtonLink } from '../../Button/ButtonLink/ButtonLink'

export type SearchArgs = {
    placeholder?: string;
    results?: Array<{
        label: string;
        href: string;
        onClick?: () => void;
    }>;
    onSearch?: (value: string) => void;
    emptyText?: string;
};

export const createSearch = ({
    placeholder = 'Search...',
    results = [],
    onSearch,
    emptyText = 'No results found'
}: SearchArgs) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'relative w-full';

    const inputWrapper = document.createElement('div');
    inputWrapper.className = 'relative';

    const input = document.createElement('input');
    input.className = `
        w-full
        px-5
        py-2
        rounded-t-sm
        transition
        bg-transparent
        border-b
        border-neutral-400
        focus:bg-base-white
        focus:border-b-2
        focus:border-secondary-dark
        overflow-hidden
        transition-colors
        duration-300
        outline-none
    `;
    input.placeholder = placeholder;

    const searchIcon = document.createElement('div');
    searchIcon.className = 'absolute right-5 top-1/2 -translate-y-1/2';
    searchIcon.innerHTML = getSizedIcon(IconRegistry[IconCategory.SYSTEM].search, 20);

    const resultsPopover = document.createElement('div');
    resultsPopover.className = `
        absolute
        top-full
        left-0
        w-full
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

    input.addEventListener('focus', () => {
        resultsPopover.style.display = 'flex';
    });

    input.addEventListener('blur', (e) => {
        setTimeout(() => {
            resultsPopover.style.display = 'none';
        }, 200);
    });

    input.addEventListener('input', (e) => {
        if (onSearch) {
            onSearch((e.target as HTMLInputElement).value);
        }
    });

    inputWrapper.appendChild(input);
    inputWrapper.appendChild(searchIcon);
    wrapper.appendChild(inputWrapper);
    wrapper.appendChild(resultsPopover);

    return wrapper;
};
