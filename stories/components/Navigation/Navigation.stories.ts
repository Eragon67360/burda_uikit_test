import type { Meta, StoryObj } from '@storybook/html';
import { createNavigation, NavigationArgs } from './Navigation';
import { IconRegistry, IconCategory } from '@/stories/assets/icons';

const meta: Meta<NavigationArgs> = {
    title: 'Components (Molecules)/Navigation',
    tags: ['autodocs'],
    parameters: {
        controls: { expanded: true },
        layout: 'fullscreen',
    },
    argTypes: {
        logoSrc: {
            control: 'text',
            description: 'Source URL for the logo image',
            defaultValue: '/burda_logo.png'
        },
        logoAltText: {
            control: 'text',
            description: 'Source URL for the logo image',
            defaultValue: '/burda_logo.png'
        },
        has2LinesNavigation: {
            control: 'boolean',
            description: 'Enable two-line navigation layout',
            defaultValue: false
        },
        flyoutLabel: {
            control: 'text',
            description: 'Label for the flyout menu',
            defaultValue: 'Menu',
            if: { arg: 'hasFlyoutLinks', eq: true }
        },
        flyoutItems: {
            control: 'object',
            description: 'List of items in the flyout menu',
            defaultValue: [],
            if: { arg: 'hasFlyoutLinks', eq: true }
        },
        navigationItems: {
            control: {
                type: 'object',
            },
            description: 'Dynamically configurable navigation items',
        },
        hasSearch: {
            control: 'boolean',
            description: 'Enable search functionality',
            defaultValue: false
        },
        searchProps: {
            control: 'object',
            description: 'Additional search configuration',
            defaultValue: {},
            if: { arg: 'hasSearch', eq: true }
        },
        loginButtonText: {
            control: 'text',
            description: 'Login button label',
            defaultValue: 'Kundenservice & Login'
        },
        loginButtonIcon: {
            control: { type: 'select' },
            options: Object.keys(IconRegistry[IconCategory.SYSTEM]),
            description: 'Login button icon',
            defaultValue: 'userCircle'
        },
        cartButtonText: {
            control: 'text',
            description: 'Cart button label',
            defaultValue: 'Warenkorb & Kasse'
        },
        cartButtonIcon: {
            control: { type: 'select' },
            options: Object.keys(IconRegistry[IconCategory.SYSTEM]),
            description: 'Cart button icon',
            defaultValue: 'cart'
        },
        addNavigationItem: {
            control: {
                type: 'object',
                fields: {
                    type: {
                        type: 'select',
                        options: ['link', 'flyout'],
                        default: 'link'
                    },
                    order: {
                        type: 'number',
                        default: 1
                    },
                    label: {
                        type: 'text'
                    },
                    href: {
                        type: 'text',
                        if: { arg: 'type', eq: 'link' }
                    },
                    target: {
                        type: 'select',
                        options: ['_self', '_blank', '_parent', '_top'],
                        default: '_self',
                        if: { arg: 'type', eq: 'link' }
                    },
                    flyoutItems: {
                        type: 'object',
                        if: { arg: 'type', eq: 'flyout' }
                    }
                }
            },
            description: 'Add a new navigation item',
            action: 'addNavigationItem'
        }
    },
    render: (args) => createNavigation(args as any)
};

export default meta;
type Story = StoryObj<NavigationArgs>;

export const Desktop: Story = {
    parameters: {
        viewport: {
            defaultViewport: 'desktop',
        },
        layout: 'fullscreen',
    },
    args: {
        logoSrc: '/burda_logo.png',
        logoAltText: 'Burda Logo',
        has2LinesNavigation: false,
        navigationItems: [
            {
                type: 'flyout',
                order: 1,
                label: 'Zeitschriften',
                flyoutItems: [
                    { label: 'FOCUS', href: '/', target: '_blank' },
                    { label: 'FOCUS MONEY', href: '/about', target: '_blank' },
                    { label: 'FOCUS GESUNDHEIT', href: '/contact', target: '_blank' }
                ]
            },
            {
                type: 'link',
                order: 2,
                label: 'FOCUS+',
                href: '/focus',
                target: '_self'
            },
            {
                type: 'link',
                order: 3,
                label: 'Einzelausgaben',
                href: '/einzelausgaben',
                target: '_self'
            }
        ],
        hasSearch: true,
        searchProps: {
            emptyText: 'Keine Ergebnisse gefunden',
            placeholder: 'Suche',
            results: [
                { label: 'Product 1', href: '/product1' },
                { label: 'Product 2', href: '/product2' },
                { label: 'Product 3', href: '/product3' }
            ]
        },
        loginButtonText: 'Kundenservice & Login',
        loginButtonIcon: 'userCircle',
        cartButtonText: 'Warenkorb & Kasse',
        cartButtonIcon: 'cart',
        onClickLoginButton: () => console.log("Login button has been clicked"),
        onClickCartButton: () => console.log("Cart button has been clicked"),
    },
    render: (args) => {
        const scrollContainer = document.createElement('div');
        scrollContainer.style.height = '300vh';
        scrollContainer.style.position = 'relative';

        const topContent = document.createElement('div');
        topContent.style.height = '100vh';
        topContent.style.backgroundColor = '#f0f0f0';
        topContent.innerHTML = '<h1 style="text-align: center; padding-top: 200px;" class="w-[42rem] mx-auto">Scroll down to see Navigation behavior<br><p class="font-bold mt-8">Please click on the upper right Fullscreen button (alt+F) and change the size of the preview (top left) to see the widescreen behavior</p></h1>';

        const middleContent = document.createElement('div');
        middleContent.style.height = '100vh';
        middleContent.style.backgroundColor = '#e0e0e0';
        middleContent.innerHTML = '<h2 style="text-align: center; padding-top: 200px;">Scrolling through content</h2>';

        const bottomContent = document.createElement('div');
        bottomContent.style.height = '100vh';
        bottomContent.style.backgroundColor = '#d0d0d0';
        bottomContent.innerHTML = '<h2 style="text-align: center; padding-top: 200px;">Bottom of the page</h2>';

        scrollContainer.appendChild(topContent);
        scrollContainer.appendChild(middleContent);
        scrollContainer.appendChild(bottomContent);

        const navigation = createNavigation(args);
        scrollContainer.appendChild(navigation);
        return scrollContainer;
    }
};

export const DynamicNavigation: Story = {
    parameters: {
        viewport: {
            defaultViewport: 'desktop',
        },
        layout: 'fullscreen',
    },
    args: {
        logoSrc: '/burda_logo.png',
        logoAltText: 'Burda Logo',
        has2LinesNavigation: false,
        navigationItems: [
            {
                type: 'flyout',
                order: 1,
                label: 'Zeitschriften',
                flyoutItems: [
                    { label: 'FOCUS', href: '/', target: '_blank' },
                    { label: 'FOCUS MONEY', href: '/about', target: '_blank' },
                    { label: 'FOCUS GESUNDHEIT', href: '/contact', target: '_blank' }
                ]
            },
            {
                type: 'link',
                order: 2,
                label: 'FOCUS+',
                href: '/focus',
                target: '_self'
            }
        ],
        hasSearch: true,
        loginButtonText: 'Kundenservice & Login',
        loginButtonIcon: 'userCircle',
        cartButtonText: 'Warenkorb & Kasse',
        cartButtonIcon: 'cart',
    },
    render: (args) => {
        args.navigationItems.forEach((item, index) => {
            item.order = index + 1;
        })
        const wrapper = document.createElement('div');
        wrapper.className = 'p-4 bg-base-white space-y-4';

        const createAddItemModal = () => {
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';

            const modalContent = document.createElement('div');
            modalContent.className = 'bg-white p-6 rounded-lg shadow-xl w-fit transition duration-300';

            const title = document.createElement('h2');
            title.textContent = 'Add Navigation Item';
            title.className = 'text-xl font-bold mb-4';

            const typeLabel = document.createElement('label');
            typeLabel.textContent = 'Item Type';
            typeLabel.className = 'block mb-2';

            const typeSelect = document.createElement('select');
            typeSelect.innerHTML = `
                <option value="link">Link</option>
                <option value="flyout">Flyout</option>
            `;
            typeSelect.className = 'w-full p-2 border rounded mb-4';

            const labelInput = document.createElement('input');
            labelInput.placeholder = 'Navigation Item Label';
            labelInput.className = 'w-full p-2 border rounded mb-4';

            const conditionalContainer = document.createElement('div');

            const updateConditionalInputs = () => {
                conditionalContainer.innerHTML = '';
                if (typeSelect.value === 'link') {
                    const hrefInput = document.createElement('input');
                    hrefInput.placeholder = 'Link URL';
                    hrefInput.className = 'w-full p-2 border rounded mb-4';
                    hrefInput.name = 'href';

                    const targetSelect = document.createElement('select');
                    targetSelect.innerHTML = `
                        <option value="_self">Same Window</option>
                        <option value="_blank">New Window</option>
                        <option value="_parent">Parent Frame</option>
                        <option value="_top">Full Body</option>
                    `;
                    targetSelect.className = 'w-full p-2 border rounded mb-4';
                    targetSelect.name = 'target';

                    conditionalContainer.appendChild(hrefInput);
                    conditionalContainer.appendChild(targetSelect);
                } else if (typeSelect.value === 'flyout') {
                    const flyoutItemsContainer = document.createElement('div');
                    flyoutItemsContainer.className = 'mb-4';

                    const addFlyoutItemButton = document.createElement('button');
                    addFlyoutItemButton.textContent = 'Add Flyout Item';
                    addFlyoutItemButton.className = 'bg-secondary-interaction text-base-black px-2 py-1 rounded mb-2';

                    const flyoutItemsList = document.createElement('div');

                    addFlyoutItemButton.onclick = () => {
                        const flyoutItemWrapper = document.createElement('div');
                        flyoutItemWrapper.className = 'flex space-x-2 mb-2';

                        const labelInput = document.createElement('input');
                        labelInput.placeholder = 'Flyout Item Label';
                        labelInput.className = 'flex-grow p-2 border rounded';

                        const hrefInput = document.createElement('input');
                        hrefInput.placeholder = 'Flyout Item URL';
                        hrefInput.className = 'flex-grow p-2 border rounded';

                        const removeButton = document.createElement('button');
                        removeButton.textContent = '✕';
                        removeButton.className = 'bg-primary-interaction hover:bg-primary-dark transition duration-300 cursor-pointer text-base-white px-2 rounded';
                        removeButton.onclick = () => flyoutItemWrapper.remove();

                        flyoutItemWrapper.appendChild(labelInput);
                        flyoutItemWrapper.appendChild(hrefInput);
                        flyoutItemWrapper.appendChild(removeButton);

                        flyoutItemsList.appendChild(flyoutItemWrapper);
                    };

                    flyoutItemsContainer.appendChild(addFlyoutItemButton);
                    flyoutItemsContainer.appendChild(flyoutItemsList);

                    conditionalContainer.appendChild(flyoutItemsContainer);
                }
            };

            typeSelect.onchange = updateConditionalInputs;
            updateConditionalInputs();

            const buttonsContainer = document.createElement('div');
            buttonsContainer.className = 'flex justify-end space-x-2';

            const cancelButton = document.createElement('button');
            cancelButton.textContent = 'Cancel';
            cancelButton.className = 'bg-gray-200 hover:bg-gray-300 transition duration-300 text-gray-800 px-4 py-2 rounded cursor-pointer';
            cancelButton.onclick = () => modal.remove();

            const saveButton = document.createElement('button');
            saveButton.textContent = 'Save';
            saveButton.className = 'bg-secondary-interaction hover:bg-secondary-light transition duration-300 text-base-black px-4 py-2 rounded cursor-pointer';
            saveButton.onclick = () => {
                if (!labelInput.value.trim()) {
                    alert('Please enter a label');
                    return;
                }

                const newItem: any = {
                    type: typeSelect.value,
                    order: args.navigationItems.length + 1,
                    label: labelInput.value.trim(),
                };

                if (typeSelect.value === 'link') {
                    const hrefInput = conditionalContainer.querySelector('input[name="href"]') as HTMLInputElement;
                    const targetSelect = conditionalContainer.querySelector('select[name="target"]') as HTMLSelectElement;

                    newItem.href = hrefInput.value.trim();
                    newItem.target = targetSelect.value;
                } else if (typeSelect.value === 'flyout') {
                    const flyoutItems = Array.from(conditionalContainer.querySelectorAll('.flex'))
                        .map(wrapper => {
                            const labelInput = wrapper.querySelector('input:first-child') as HTMLInputElement;
                            const hrefInput = wrapper.querySelector('input:nth-child(2)') as HTMLInputElement;

                            return {
                                label: labelInput.value.trim(),
                                href: hrefInput.value.trim(),
                                target: '_self'
                            };
                        })
                        .filter(item => item.label && item.href);

                    newItem.flyoutItems = flyoutItems;
                }

                args.navigationItems.push(newItem);

                const newNavigation = createNavigation(args);
                navigationContainer.replaceWith(newNavigation);
                navigationContainer = newNavigation;

                updateCurrentItems();

                modal.remove();
            };

            buttonsContainer.appendChild(cancelButton);
            buttonsContainer.appendChild(saveButton);

            modalContent.appendChild(title);
            modalContent.appendChild(typeLabel);
            modalContent.appendChild(typeSelect);
            modalContent.appendChild(labelInput);
            modalContent.appendChild(conditionalContainer);
            modalContent.appendChild(buttonsContainer);

            modal.appendChild(modalContent);
            return modal;
        };

        const addButton = document.createElement('button');
        addButton.textContent = 'Add Navigation Item';
        addButton.className = 'bg-secondary-interaction hover:bg-secondary-light transition duration-300 text-base-black px-4 py-2 rounded cursor-pointer';
        addButton.onclick = () => {
            const modal = createAddItemModal();
            document.body.appendChild(modal);
        };

        const controlsContainer = document.createElement('div');
        controlsContainer.className = 'mb-4 p-4 bg-white mt-[5rem] rounded shadow flex justify-between items-center';
        controlsContainer.appendChild(addButton);

        const currentItemsContainer = document.createElement('div');
        currentItemsContainer.className = 'mt-4 p-4 bg-white rounded shadow';
        currentItemsContainer.innerHTML = '<h3 class="font-bold mb-2">Current Navigation Items</h3>';

        const updateCurrentItems = () => {
            args.navigationItems.sort((a, b) => a.order - b.order);
            currentItemsContainer.innerHTML = '<h3 class="font-bold mb-2">Current Navigation Items</h3>';

            args.navigationItems.forEach((item, index) => {
                const itemDisplay = document.createElement('div');
                itemDisplay.className = 'mb-2 p-2 bg-gray-100 rounded flex items-center justify-between';

                const itemInfoContainer = document.createElement('div');
                itemInfoContainer.className = 'flex items-center';

                const orderContainer = document.createElement('div');
                orderContainer.className = 'flex flex-col mr-4';

                const upButton = document.createElement('button');
                upButton.innerHTML = '▲';
                upButton.className = `
                    text-xs 
                    text-secondary-interaction 
                    hover:text-secondary-dark 
                    transition 
                    duration-300 
                    cursor-pointer 
                    ${index === 0 ? 'opacity-30 cursor-not-allowed' : ''}
                `;
                upButton.disabled = index === 0;
                upButton.onclick = () => {
                    if (index > 0) {
                        const currentItem = args.navigationItems[index];
                        const previousItem = args.navigationItems[index - 1];

                        const tempOrder = currentItem.order;
                        currentItem.order = previousItem.order;
                        previousItem.order = tempOrder;

                        const newNavigation = createNavigation(args);
                        navigationContainer.replaceWith(newNavigation);
                        navigationContainer = newNavigation;

                        updateCurrentItems();
                    }
                };

                const downButton = document.createElement('button');
                downButton.innerHTML = '▼';
                downButton.className = `
                    text-xs 
                    text-secondary-interaction 
                    hover:text-secondary-dark 
                    transition 
                    duration-300 
                    cursor-pointer 
                    ${index === args.navigationItems.length - 1 ? 'opacity-30 cursor-not-allowed' : ''}
                `;
                downButton.disabled = index === args.navigationItems.length - 1;
                downButton.onclick = () => {
                    if (index < args.navigationItems.length - 1) {
                        const currentItem = args.navigationItems[index];
                        const nextItem = args.navigationItems[index + 1];

                        const tempOrder = currentItem.order;
                        currentItem.order = nextItem.order;
                        nextItem.order = tempOrder;

                        const newNavigation = createNavigation(args);
                        navigationContainer.replaceWith(newNavigation);
                        navigationContainer = newNavigation;

                        updateCurrentItems();
                    }
                };

                orderContainer.appendChild(upButton);
                orderContainer.appendChild(downButton);

                const itemText = document.createElement('span');
                itemText.textContent = `${index + 1}. ${item.label} (${item.type})`;
                itemText.className = 'mr-4';

                itemInfoContainer.appendChild(orderContainer);
                itemInfoContainer.appendChild(itemText);

                const removeButton = document.createElement('button');
                removeButton.textContent = 'Remove';
                removeButton.className = 'ml-2 bg-primary-interaction hover:bg-primary-light transition duration-300 text-base-white text-xs px-2 py-1 rounded cursor-pointer';
                removeButton.onclick = () => {
                    args.navigationItems.splice(index, 1);
                    const newNavigation = createNavigation(args);
                    navigationContainer.replaceWith(newNavigation);
                    navigationContainer = newNavigation;
                    updateCurrentItems();
                };

                itemDisplay.appendChild(itemInfoContainer);
                itemDisplay.appendChild(removeButton);
                currentItemsContainer.appendChild(itemDisplay);
            });
        };


        let navigationContainer = createNavigation(args);

        updateCurrentItems();

        wrapper.appendChild(controlsContainer);
        wrapper.appendChild(currentItemsContainer);
        wrapper.appendChild(navigationContainer);

        return wrapper;
    }
};

