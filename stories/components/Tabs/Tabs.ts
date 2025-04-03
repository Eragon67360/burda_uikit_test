export type TabItem = {
    id: string;
    label: string;
    content?: string;
};

export type TabsArgs = {
    items: TabItem[];
    variant?: 'outline' | 'plain';
    color?: 'primary' | 'secondary';
    hasContent?: boolean;
    selectedId?: string;
    background?: 'white' | 'gray';
    disabled?: boolean;
    onTabSelected?: (id: string) => void;
};

export const createTabs = ({
    items,
    variant = 'plain',
    color = 'secondary',
    hasContent = false,
    selectedId,
    background = 'white',
    disabled = false,
    onTabSelected = () => { },
}: TabsArgs) => {
    const colorClasses = {
        default: color === 'primary' ? 'bg-primary-interaction' : 'bg-secondary-interaction',
        hover: color === 'primary' ? 'hover:bg-primary-light' : 'hover:bg-secondary-light',
        active: color === 'primary' ? 'active:bg-primary-interaction' : 'active:bg-secondary-interaction',
    }

    const defaultSelectedId = selectedId || items[0]?.id;

    const tabsContainer = document.createElement('div');
    tabsContainer.className = `
    p-2
    rounded-lg
    ${background === 'white' ? 'bg-base-white' : 'bg-neutral-100'}
    ${variant === 'outline'
            ? 'border border-neutral-450'
            : ''}
    focus-visible:border-2 focus-visible:border-base-black
    transition-all duration-200 ease-in-out
  `;

    const tabsList = document.createElement('div');
    tabsList.className = 'flex gap-2';

    items.forEach((item) => {
        const tab = document.createElement('button');
        tab.setAttribute('data-tab-id', item.id);

        const baseClasses = `
        grow
        px-4 
        py-2 
        rounded
        text-button-label
        transition-colors duration-200 ease-in-out
        ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
        focus:outline-hidden
        focus-visible:border-2 focus-visible:border-base-black
        `;

        const stateClasses = disabled
            ? item.id === defaultSelectedId
                ? 'bg-neutral-100 text-neutral-300'
                : 'bg-transparent text-neutral-300'
            : item.id === defaultSelectedId
                ? colorClasses.default
                : [colorClasses.hover, colorClasses.active].join(' ')

        tab.className = `${baseClasses} ${stateClasses}`;
        tab.textContent = item.label;

        if (!disabled) {
            tab.addEventListener('click', (e) => {
                e.preventDefault();
                tab.blur();

                tabsContainer.querySelectorAll('[data-tab-id]').forEach((t) => {
                    t.classList.remove(colorClasses.default);
                    t.classList.add(colorClasses.hover);
                });

                tab.classList.remove(colorClasses.hover);
                tab.classList.add(colorClasses.default);

                if (hasContent) {
                    const contents = tabsContainer.querySelectorAll('[data-content-id]');
                    contents.forEach((content) => {
                        content.classList.add('hidden', 'opacity-0');
                    });
                    const activeContent = tabsContainer.querySelector(
                        `[data-content-id="${item.id}"]`
                    );
                    activeContent?.classList.remove('hidden', 'opacity-0');
                    activeContent?.classList.add('opacity-100');
                }
                onTabSelected(item.id);
            });
        }

        tabsList.appendChild(tab);
    });

    tabsContainer.appendChild(tabsList);

    if (hasContent) {
        const contentContainer = document.createElement('div');
        contentContainer.className = 'mt-4 transition-all duration-200 ease-in-out';

        items.forEach((item) => {
            if (item.content) {
                const content = document.createElement('div');
                content.setAttribute('data-content-id', item.id);
                content.innerHTML = item.content;
                content.className = `
          transition-opacity duration-200 ease-in-out
          ${item.id === defaultSelectedId ? 'opacity-100' : 'opacity-0 hidden'}
        `;
                contentContainer.appendChild(content);
            }
        });

        tabsContainer.appendChild(contentContainer);
    }

    return tabsContainer;
};
