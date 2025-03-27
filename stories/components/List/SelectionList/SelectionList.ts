import './selectionList.css'

export type SelectionListArgs = {
    items: string[];
    name: string;
    selectedValue?: string;
    backgroundColor?: 'white' | 'gray';
};

export const createSelectionList = ({ items, name, selectedValue = items[0], backgroundColor = 'white' }: SelectionListArgs) => {
    const bgColor = backgroundColor === 'gray' ? 'bg-neutral-100' : 'bg-white';

    return `
    <div class="flex flex-col divide-y divide-neutral-300 ${bgColor} rounded">
        ${items.map(item => `
        <label class="flex items-center gap-3 cursor-pointer px-4 py-4">
            <input
                type="radio"
                name="${name}"
                value="${item}"
                ${selectedValue === item ? 'checked' : ''}
                class="size-4 border rounded-full border-neutral-450 bg-neutral-100
                checked:border-base-black checked:bg-base-white checked:before:bg-secondary-interaction
                appearance-none relative
                before:content-[''] before:block before:w-2.5 before:h-2.5 before:rounded-full 
                before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2
                transition-all duration-200 ease-in-out
                before:transition-all before:duration-200 before:ease-in-out
                before:scale-0 checked:before:scale-100
                hover:border-base-black"
            />
            <span class="text-label">${item}</span>
        </label>
        `).join('')}
    </div>
  `;
}
