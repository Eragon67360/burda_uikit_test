import { IconCategory, IconRegistry } from "../../../assets/icons";
import { getSizedIcon } from "../../../utils/iconUtils";
import { createIcon } from "../../Icon/Icon";
import './flyout.css';

export type FlyoutItem = {
    icon: keyof typeof IconRegistry[IconCategory.LARGE];
    title: string;
    description?: string;
};

export type FlyoutArgs = {
    label: string;
    icon: keyof typeof IconRegistry[IconCategory.SYSTEM];
    items: FlyoutItem[];
    activeIndex?: number;
};

export const createFlyout = ({
    items,
    label,
    icon = 'gift'
}: FlyoutArgs) => {
    let isOpen = false;
    let isDescriptionOpen = false;

    const baseContainerClasses = `
        fixed 
        right-0 
        bottom-4 
        gap-0 
        transition-all duration-300 
    `;
    const buttonContainerClasses = `
        flex flex-col
        group
        gap-0
        absolute
        top-1/2
        left-0 
        -translate-x-full
        -translate-y-1/2
        w-[3rem]
        cursor-pointer 
        transition-all 
        ease-in-out 
        duration-300 
        text-button-label-desktop
    `
    const buttonLabelClasses = `
        w-[3rem]
        h-fit 
        px-3 
        py-4 
        base-button 
        origin-left 
        flex items-center justify-center 
        gap-4 
        cursor-pointer 
        transition-all 
        duration-300 
        z-50 
    `;

    const baseContentClasses = `
        transform 
        h-fit 
        bg-white 
        shadow-[10px_5px_30px_0px_rgba(0,0,0,0.15)]
        transition-all 
        duration-700 
        ease-in-out 
        relative 
        w-[16.5rem] 
        bg-transparent
        translate-x-[16.5rem] 
        rounded-l-2xl
    `;

    const defaultClasses = 'bg-base-black group-hover:bg-secondary-dark text-base-white group-hover:w-[3.625rem] transition-all ease-in-out duration-300';
    const openClasses = 'bg-secondary-interaction text-base-black';
    const defaultButtonContainerClasses = 'text-base-black hover:text-secondary-dark transition-all ease-in-out duration-300 transform-gpu hover:w-[3.625rem]';
    const openButtonContainerClasses = 'text-secondary-interaction';

    const svgRight = document.createElement('div')
    svgRight.className = `
        h-full w-[3rem] translate-y-[1px] group-hover:w-[3.625rem] transition-[width] ease-in-out duration-300
    `
    svgRight.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="currentColor" class="h-full w-full">
        <path d="M24.7129 22.3425C48 22.3425 47.5248 8.08507 48 0.00585938V24.0059V48.0059H0C0.316832 40.0851 2.85149 22.3425 24.7129 22.3425Z"/>
    </svg>`
    const svgLeft = document.createElement('div')
    svgLeft.className = 'h-full w-[48px] translate-y-[-1px] group-hover:w-[3.625rem] transition-[width] ease-in-out duration-300'
    svgLeft.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="currentColor" class="h-full w-full">
        <path d="M24.7129 25.6692C48 25.6692 47.5248 39.9267 48 48.0059V24.0059V0.00585938H0C0.316832 7.92665 2.85149 25.6692 24.7129 25.6692Z"/>
    </svg>`

    const flyoutContainer = document.createElement('div');
    flyoutContainer.className = baseContainerClasses;

    const buttonContainer = document.createElement('button')
    buttonContainer.className = `${buttonContainerClasses} ${defaultButtonContainerClasses}`;

    buttonContainer.appendChild(svgRight)

    const buttonLabel = document.createElement('div');
    const iconElement = document.createElement('div');
    iconElement.innerHTML = createIcon({
        name: 'gift',
        size: 22
    });

    const spanElement = document.createElement('span');
    spanElement.innerText = label

    const chevronElement = document.createElement('div')
    chevronElement.className = 'scale-x-100 transition-all duration-500'
    chevronElement.innerHTML = createIcon({
        name: 'chevronLeft',
        size: 18
    });

    buttonLabel.appendChild(chevronElement)
    buttonLabel.appendChild(spanElement)
    buttonLabel.appendChild(iconElement)

    buttonContainer.appendChild(buttonLabel)
    buttonContainer.appendChild(svgLeft)

    buttonLabel.className = `${buttonLabelClasses} ${defaultClasses}`;

    const expandableContent = document.createElement('div');
    expandableContent.className = `${baseContentClasses}`;

    const closeButton = document.createElement('button');
    closeButton.innerHTML = createIcon({
        name: 'close',
        size: 16
    });
    closeButton.className = `
        absolute 
        cursor-pointer
        top-2.5 
        right-2.5 
        text-base-black
        transition-all
        hover:text-gray-800 
        text-2xl 
        z-50
    `;

    function updateComponentState(open: boolean, descriptionOpen: boolean) {
        buttonLabel.className = `${buttonLabelClasses} ${open ? openClasses : defaultClasses}`;
        buttonContainer.className = `${buttonContainerClasses} ${open ? openButtonContainerClasses : defaultButtonContainerClasses}`;

        svgRight.classList.toggle('group-hover:w-[3.625rem]', !open)
        svgRight.classList.toggle('group-hover:w-[3rem]', open)
        svgLeft.classList.toggle('group-hover:w-[3.625rem]', !open)
        svgLeft.classList.toggle('group-hover:w-[3rem]', open)
        chevronElement.classList.toggle('scale-x-[-1]', open);

        closeButton.classList.toggle('hidden', !open);

        if (open) {
            console.log("FLYOUT OPEN");

            if (descriptionOpen) {
                console.log("DESCRIPTION OPEN");
                expandableContent.classList.toggle('translate-x-[8.5rem]', false);
                expandableContent.classList.toggle('translate-x-0', true);
            } else {
                expandableContent.classList.toggle('translate-x-0', false);
                expandableContent.classList.toggle('translate-x-[8.5rem]', true);
            }
        }
        expandableContent.classList.toggle('translate-x-[16.5rem]', !open);
    }

    buttonContainer.addEventListener('click', () => {
        isOpen = !isOpen;
        updateComponentState(isOpen, isDescriptionOpen);
    });

    closeButton.addEventListener('click', () => {
        toggleDescription();
    });

    function toggleDescription() {
        isDescriptionOpen = !isDescriptionOpen;
        updateComponentState(isOpen, isDescriptionOpen);
        renderItems();
        expandableContent.appendChild(buttonContainer)
    }

    function renderItems() {
        expandableContent.innerHTML = '';
        expandableContent.appendChild(closeButton);

        items.forEach((item) => {
            const contentItem = document.createElement('div');
            contentItem.className = 'flex items-start justify-between min-full max-w-full w-full gap-0';

            const contentItemWrapper = document.createElement('div');
            contentItemWrapper.className = `h-full relative w-32 min-w-32 pl-7 padding-transition
                ${isDescriptionOpen ? 'pr-0' : 'pr-7'} 
                py-6 transition-all duration-1000
            `;

            contentItemWrapper.innerHTML = `
                <div class="flex flex-col transition-all duration-300 ${isDescriptionOpen ? 'items-start' : 'items-center'} gap-2 w-fit">
                <div class=" transition-all duration-700 ease-in-out w-full ${isDescriptionOpen ? 'px-0' : 'px-3.5'}">
                    ${getSizedIcon(IconRegistry[IconCategory.LARGE][item.icon], 40)}
                </div>
                    <h3 class="font-bold leading-[0.875rem] text-xs flex-grow flex-wrap break-words transition-[text-align,align-self] delay-300 duration-700 ease-in-out
                        ${isDescriptionOpen ? 'text-left' : 'text-center'} 
                        w-full">${item.title}</h3>
                </div>
            `;

            const infoButton = document.createElement('button');
            infoButton.innerHTML = getSizedIcon(IconRegistry[IconCategory.SYSTEM].info, 18);
            infoButton.className = `
                absolute
                ml-2 
                top-2.5 right-2.5 
                flex-shrink-0 
                cursor-pointer 
                transition-all 
                duration-1000 
                
                ${isDescriptionOpen ? 'pointer-events-none text-base-black/0' : 'text-opacity-100 pointer-events-auto text-base-black/100'}`;

            infoButton.addEventListener('click', toggleDescription);

            const contentDescriptionWrapper = document.createElement('div');
            contentDescriptionWrapper.className = `w-[7.1875rem] text-xs h-full relative mr-7 py-6 overflow-hidden`;

            if (item.description) {
                contentDescriptionWrapper.innerText = item.description.toString()
            }

            contentItemWrapper.appendChild(infoButton);
            contentItem.appendChild(contentItemWrapper);
            contentItem.appendChild(contentDescriptionWrapper);
            expandableContent.appendChild(contentItem);
        });
    }

    renderItems();
    expandableContent.appendChild(buttonContainer)
    flyoutContainer.appendChild(expandableContent);

    return flyoutContainer;
};

