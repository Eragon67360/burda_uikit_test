import { IconCategory, IconRegistry } from "../../../assets/icons";

export type SelectItem = {
    value: string;
    label: string;
};

export type SelectArgs = {
    placeholder: string;
    items: SelectItem[];
    labelText: string;
    labelPosition: 'above' | 'beside';
    disabled?: boolean;
};

export const createSelect = ({
    placeholder,
    items,
    labelText,
    labelPosition,
    disabled = false,
}: SelectArgs) => {
    const labelClasses = labelPosition === 'beside'
        ? 'flex items-center gap-2'
        : 'flex flex-col gap-1';

    const wrapper = document.createElement('div');
    wrapper.className = labelClasses;

    const label = document.createElement('label');
    label.className = `
        text-sm text-label-desktop ml-4 w-full
        ${disabled ? 'text-neutral-400' : 'text-base-black'}
    `;
    label.textContent = labelText;

    const selectWrapper = document.createElement('div');
    selectWrapper.className = 'relative w-full';

    const button = document.createElement('button');
    button.type = 'button';
    button.setAttribute('data-state', 'closed'); // Add initial data-state
    button.className = `
    text-input-desktop
        cursor-pointer
        w-full h-[3.25rem] pl-4 pr-1 gap-4
        min-w-48
        max-w-[500px]
        group
        flex items-center justify-between
        border border-neutral-450 rounded-md
        transition duration-300
        outline-none
        truncate
        focus-visible:ring-[2px] focus-visible:ring-base-black
        focus:border-base-black
        disabled:bg-gray-100 disabled:cursor-not-allowed
        ${disabled ? 'ring-transparent border-transparent text-neutral-400' : 'text-base-black'}
        data-[state=closed]:bg-neutral-100
        data-[state=open]:bg-base-white
        active:!bg-secondary-extra-light
        active:border-transparent
        active:ring-transparent
    `;
    button.disabled = disabled;

    const selectedText = document.createElement('span');
    selectedText.className = 'text-base';
    selectedText.textContent = placeholder;

    const arrowContainer = document.createElement('div');
    arrowContainer.className = `
        flex items-center justify-center rounded-sm 
        h-[2.75rem] w-[2.75rem] transition
        ${disabled ? 'bg-base-white text-neutral-400' : 'group-hover:bg-secondary-light bg-secondary-interaction text-base-black'}
    `;

    const arrowIcon = document.createElement('div');
    arrowIcon.className = 'transition-transform duration-300';
    arrowIcon.innerHTML = IconRegistry[IconCategory.SYSTEM].chevronDown;

    const dropdown = document.createElement('div');
    dropdown.className = `
        absolute w-full mt-1
        px-2 py-4
        bg-white
        border-none rounded-lg overflow-hidden
        shadow-popover
        z-50
        hidden
    `;
    let selectedValue: string | null = null;
    items.forEach(item => {
        const option = document.createElement('div');
        option.className = `
            p-2
            cursor-pointer
            text-placeholder-desktop
            rounded-none
            hover:rounded-sm
            hover:bg-secondary-extra-light
            border-t border-neutral-200
            first:border-0
            transition-[background-color,border-color]
            flex items-center justify-between
            hover:border-transparent
            [&:hover+div]:border-transparent
        `;

        const labelContainer = document.createElement('span');
        labelContainer.textContent = item.label;

        const circle = document.createElement('div');
        circle.className = `
            w-[0.875rem]
            h-[0.875rem]
            rounded-full
            bg-secondary-interaction
            hidden
        `;

        option.appendChild(labelContainer);
        option.appendChild(circle);

        option.addEventListener('click', () => {
            selectedValue = item.value;
            selectedText.textContent = item.label;
            dropdown.classList.add('hidden');
            arrowIcon.style.transform = 'rotate(0)';

            dropdown.querySelectorAll('div').forEach(opt => {
                const optLabel = opt.querySelector('span');
                const optCircle = opt.querySelector('div');

                if (opt.textContent === item.label) {
                    optLabel?.classList.add('font-bold');
                    optCircle?.classList.remove('hidden');
                } else {
                    optLabel?.classList.remove('font-bold');
                    optCircle?.classList.add('hidden');
                }
            });

            const event = new CustomEvent('change', {
                detail: { value: item.value, label: item.label }
            });
            wrapper.dispatchEvent(event);
        });

        if (item.value === selectedValue) {
            labelContainer.classList.add('font-bold');
            circle.classList.remove('hidden');
        }

        dropdown.appendChild(option);
    });

    button.addEventListener('click', () => {
        const isOpen = !dropdown.classList.contains('hidden');
        dropdown.classList.toggle('hidden');
        button.setAttribute('data-state', isOpen ? 'closed' : 'open');
        arrowIcon.style.transform = isOpen ? 'rotate(0)' : 'rotate(180deg)';
    });

    document.addEventListener('click', (e) => {
        if (!wrapper.contains(e.target as Node)) {
            dropdown.classList.add('hidden');
            button.setAttribute('data-state', 'closed');
            arrowIcon.style.transform = 'rotate(0)';
        }
    });

    button.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            button.click();
        }
    });

    arrowContainer.appendChild(arrowIcon);
    button.appendChild(selectedText);
    button.appendChild(arrowContainer);
    selectWrapper.appendChild(button);
    selectWrapper.appendChild(dropdown);
    wrapper.appendChild(label);
    wrapper.appendChild(selectWrapper);

    return wrapper;
};

