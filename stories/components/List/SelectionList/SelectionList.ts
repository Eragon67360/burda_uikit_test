import './selectionList.css';

export type SelectionListArgs = {
  items: string[];
  name: string;
  selectedValue?: string;
  backgroundColor?: 'white' | 'gray';
  onChange?: (value: string) => void;
};

export const createSelectionList = ({
  items,
  name,
  selectedValue = items[0],
  backgroundColor = 'white',
  onChange,
}: SelectionListArgs): HTMLDivElement => {
  const container = document.createElement('div');
  const bgColor = backgroundColor === 'gray' ? 'bg-neutral-100' : 'bg-white';
  container.className = `flex flex-col divide-y divide-neutral-300 ${bgColor} rounded`;

  items.forEach((item) => {
    const label = document.createElement('label');
    label.className = 'flex items-center gap-3 cursor-pointer px-4 py-4';

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = name;
    radio.value = item;
    radio.checked = item === selectedValue;
    radio.className = `size-4 border rounded-full border-neutral-450 bg-neutral-100
      checked:border-base-black checked:bg-base-white checked:before:bg-secondary-interaction
      appearance-none relative
      before:content-[''] before:block before:w-2.5 before:h-2.5 before:rounded-full 
      before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2
      transition-all duration-200 ease-in-out
      before:transition-all before:duration-200 before:ease-in-out
      before:scale-0 checked:before:scale-100
      hover:border-base-black`;

    if (onChange) {
      radio.addEventListener('change', () => onChange(item));
    }

    const span = document.createElement('span');
    span.className = 'text-label';
    span.textContent = item;

    label.appendChild(radio);
    label.appendChild(span);

    // Add to container
    container.appendChild(label);
  });

  return container;
};
