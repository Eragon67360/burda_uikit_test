import { IconCategory, IconRegistry } from "../../../assets/icons";
import './select.css'
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
    multiple?: boolean;
};

export const createSelect = ({
    placeholder,
    items,
    labelText,
    labelPosition,
    disabled = false,
    multiple = false,
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

    const selectedValues: string[] = [];

    const updateSelectedText = () => {
        if (selectedValues.length === 0) {
            selectedText.textContent = placeholder;
            selectedBadge.classList.add('hidden');
            return;
        }

        if (multiple) {
            const selectedItems = items.filter(item => selectedValues.includes(item.value));
            if (selectedItems.length === 1) {
                selectedText.textContent = selectedItems[0].label;
                selectedBadge.classList.add('hidden');
            } else {
                selectedText.textContent = selectedItems[0].label;
                selectedBadge.textContent = `+${selectedItems.length - 1}`;
                selectedBadge.classList.remove('hidden');
            }
        } else {
            const selectedItem = items.find(item => item.value === selectedValues[0]);
            selectedText.textContent = selectedItem?.label || placeholder;
        }
    };

    const selectedBadge = document.createElement('div');
    selectedBadge.className = `
        hidden
        px-3 py-2
        bg-tertiary
        z-20
        rounded-full
        text-sm
        font-medium
        ml-4
    `;

    const selectWrapper = document.createElement('div');
    selectWrapper.className = 'relative w-full';

    const button = document.createElement('button');
    button.type = 'button';
    button.setAttribute('data-state', 'closed');
    button.className = `
        text-input-desktop
        cursor-pointer
        w-full h-[3.25rem] pl-4 pr-1 gap-4
        min-w-64
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

    const textContainer = document.createElement('div');
    textContainer.className = 'flex items-center';
    textContainer.appendChild(selectedText);
    textContainer.appendChild(selectedBadge);
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
    bg-white
    border-none rounded-lg
    shadow-popover
    z-50
    hidden
    max-h-56
    py-4
    pr-1
    pl-2
    overflow-y-auto
`;
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
            flex items-center gap-3
            hover:border-transparent
            [&:hover+div]:border-transparent
        `;

        if (multiple) {
            const checkboxWrapper = document.createElement('div');
            checkboxWrapper.className = 'relative';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = `
                    relative appearance-none w-4 h-4 rounded-sm 
                border border-neutral-450 bg-neutral-100 
                checked:border-base-black
                peer
                `;

            const checkmark = document.createElement('div');
            checkmark.className = `
                absolute inset-0  items-center justify-center hidden peer-checked:flex
                pointer-events-none size-4
                `;

            checkmark.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.6747 5.3252C16.2415 4.89146 15.5381 4.89174 15.1044 5.3252L8.03702 12.3929L4.89587 9.25174C4.46213 8.818 3.75904 8.818 3.3253 9.25174C2.89157 9.68548 2.89157 10.3886 3.3253 10.8223L7.25157 14.7486C7.46831 14.9653 7.7525 15.0739 8.03672 15.0739C8.32094 15.0739 8.6054 14.9656 8.82213 14.7486L16.6747 6.89574C17.1084 6.4623 17.1084 5.75891 16.6747 5.3252Z" fill="currentColor"/>
                </svg>
                `;
            checkboxWrapper.appendChild(checkbox);
            checkboxWrapper.appendChild(checkmark);
            option.appendChild(checkboxWrapper);
        }

        const labelContainer = document.createElement('span');
        labelContainer.textContent = item.label;
        option.appendChild(labelContainer);

        if (!multiple) {
            const circle = document.createElement('div');
            circle.className = 'w-[0.875rem] h-[0.875rem] rounded-full bg-secondary-interaction hidden ml-auto';
            option.appendChild(circle);
        }

        option.addEventListener('click', () => {
            if (multiple) {
                const index = selectedValues.indexOf(item.value);
                if (index === -1) {
                    selectedValues.push(item.value);
                } else {
                    selectedValues.splice(index, 1);
                }

                const checkbox = option.querySelector('input[type="checkbox"]') as HTMLInputElement;
                checkbox.checked = selectedValues.includes(item.value);
                labelContainer.classList.toggle('font-medium', checkbox.checked);
            } else {
                selectedValues.length = 0;
                selectedValues.push(item.value);
                dropdown.classList.add('hidden');
                button.setAttribute('data-state', 'closed');
                arrowIcon.style.transform = 'rotate(0)';
                dropdown.querySelectorAll('div').forEach(opt => {
                    const optLabel = opt.querySelector('span');
                    const optCircle = opt.querySelector('div');

                    if (opt.textContent === item.label) {
                        optLabel?.classList.add('font-medium');
                        optCircle?.classList.remove('hidden');
                    } else {
                        optLabel?.classList.remove('font-medium');
                        optCircle?.classList.add('hidden');
                    }
                });
            }

            updateSelectedText();

            const event = new CustomEvent('change', {
                detail: {
                    values: selectedValues,
                    items: items.filter(item => selectedValues.includes(item.value))
                }
            });
            wrapper.dispatchEvent(event);
        });

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
    button.appendChild(textContainer);
    button.appendChild(arrowContainer);
    selectWrapper.appendChild(button);
    selectWrapper.appendChild(dropdown);
    wrapper.appendChild(label);
    wrapper.appendChild(selectWrapper);

    return wrapper;
};

