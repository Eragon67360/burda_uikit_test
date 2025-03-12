import { IconRegistry, IconCategory } from "../../../assets/icons";
import { getSizedIcon } from "../../../utils/iconUtils";

export type FlyoutItem = {
    icon: string;
    title: string;
    description?: string;
};

export type FlyoutArgs = {
    label: string;
    icon: string;
    items: FlyoutItem[];
    activeIndex?: number;
};

export const createFlyout = ({
    items,
    label
}: FlyoutArgs) => {
    let isOpen = false;
    let isDescriptionOpen = false;

    const baseContainerClasses = `
        fixed right-0 bottom-1/2  border border-red-500
        transform
        flex 
        transition-all duration-300
    `;

    const baseButtonClasses = `
        w-[300px]
        h-[3.625rem]
        -rotate-90
        flex items-center justify-center
        cursor-pointer 
        transition-all 
        duration-300 
        z-10
        absolute 
        right-[1.813rem]
        origin-right
    `;

    const baseContentClasses = `
        absolute 
        right-0 
        top-0
        transform
        h-fit 
        bg-white 
        shadow-[10px_5px_30px_0px_rgba(0,0,0,0.15)]
        transition-all 
        duration-300 
        overflow-hidden border border-blue-500
    `;

    const flyoutContainer = document.createElement('div');
    flyoutContainer.className = baseContainerClasses;

    const button = document.createElement('button');
    button.innerText = label;
    button.className = `${baseButtonClasses} bg-base-black hover:bg-secondary-dark text-base-white`;

    const expandableContent = document.createElement('div');
    expandableContent.className = `${baseContentClasses} w-0`;

    const closeButton = document.createElement('button');
    closeButton.innerHTML = 'x';
    closeButton.className = `
        absolute 
        top-2 
        right-2 
        text-gray-500 
        hover:text-gray-800 
        text-2xl 
        hidden
    `;

    function updateComponentState(open: boolean) {
        button.classList.toggle('bg-base-black', !open);
        button.classList.toggle('hover:bg-secondary-dark', !open);
        button.classList.toggle('text-base-white', !open);
        button.classList.toggle('bg-secondary-interaction', open);
        button.classList.toggle('text-base-black', open);
        button.classList.toggle('translate-x-[-16.5rem]', open);

        expandableContent.classList.toggle('w-0', !open);
        expandableContent.classList.toggle('w-[16.5rem]', open);

        closeButton.classList.toggle('hidden', !open);
    }

    button.addEventListener('click', () => {
        isOpen = !isOpen;
        updateComponentState(isOpen);
    });

    closeButton.addEventListener('click', () => {
        isOpen = false;
        updateComponentState(isOpen);
    });

    function renderItems() {
        expandableContent.innerHTML = '';
        expandableContent.appendChild(closeButton);

        items.forEach((item) => {
            const contentItem = document.createElement('div');
            contentItem.className = 'flex items-start p-4 border-b min-w-[16.5rem] w-full';

            const contentWrapper = document.createElement('div');
            contentWrapper.className = 'w-full'; // Ensure full width
            contentWrapper.innerHTML = `
                <div class="flex items-center mb-2">
                    <img src="${item.icon}" class="w-5 h-5 mr-3 flex-shrink-0" />
                    <h3 class="font-semibold truncate flex-grow">${item.title}</h3>
                    <div class="ml-2 flex-shrink-0">
                        ${getSizedIcon(IconRegistry[IconCategory.SYSTEM].info, 18)}
                    </div>
                </div>
                <p class="text-gray-600 text-sm">${item.description}</p>
            `;

            contentItem.appendChild(contentWrapper);
            expandableContent.appendChild(contentItem);
        });
    }

    renderItems();

    flyoutContainer.appendChild(expandableContent);
    flyoutContainer.appendChild(button);

    return flyoutContainer;
};

