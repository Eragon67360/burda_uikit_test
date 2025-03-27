import { IconCategory, IconRegistry } from "@/assets/icons";
import { getSizedIcon } from "@/utils/iconUtils";
import { createIcon } from "@/components/Icon/Icon";
import * as Hammer from 'hammerjs';
import './flyout.css';

export type FlyoutItem = {
    icon: keyof typeof IconRegistry[IconCategory.LARGE];
    title: string;
    description?: string;
};

export type FlyoutArgs = {
    label: string;
    icon?: keyof typeof IconRegistry[IconCategory.SYSTEM];
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
    let isMobileOpen = false;

    const mainContainer = document.createElement('div')

    /** ------------------------------------------------------------- DESKTOP VERSION ------------------------------------------------------------- */
    const baseContainerClasses = `
        hidden sm:block
        transition-[z-index] duration-500 
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
        text-button-label
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
    const defaultButtonContainerClasses = 'text-base-black hover:text-secondary-dark transition-all ease-in-out duration-300 transform-gpu hover:w-[3.625rem] z-10';
    const openButtonContainerClasses = 'text-secondary-interaction z-50';

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
    flyoutContainer.classList = baseContainerClasses;
    function setupStickyContainer(flyoutContainer: HTMLElement) {
        flyoutContainer.style.zIndex = "10";
        function updateContainerPosition() {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const containerHeight = flyoutContainer.offsetHeight;
            const middleScreenPosition = windowHeight / 2 - containerHeight / 2;
            if (isOpen) {
                flyoutContainer.style.zIndex = "50";
            } else {
                flyoutContainer.style.zIndex = "10";
            }
            if (scrollY > (middleScreenPosition - 16)) {
                flyoutContainer.className = "top-1/2 -translate-y-1/2 right-0 transform fixed" + baseContainerClasses;
                flyoutContainer.style.removeProperty('bottom');

            } else {
                flyoutContainer.className = "right-0 transform fixed" + baseContainerClasses;
                flyoutContainer.style.bottom = `${scrollY + 16}px`;
            }
        }

        window.addEventListener('scroll', updateContainerPosition);
        window.addEventListener('resize', updateContainerPosition);

        updateContainerPosition();

        return () => {
            window.removeEventListener('scroll', updateContainerPosition);
            window.removeEventListener('resize', updateContainerPosition);
        };
    }

    setupStickyContainer(flyoutContainer);
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
        if (isOpen) {
            flyoutContainer.style.zIndex = "50";
        } else {
            flyoutContainer.style.zIndex = "10";
        }
        svgRight.classList.toggle('group-hover:w-[3.625rem]', !open)
        svgRight.classList.toggle('group-hover:w-[3rem]', open)
        svgLeft.classList.toggle('group-hover:w-[3.625rem]', !open)
        svgLeft.classList.toggle('group-hover:w-[3rem]', open)
        chevronElement.classList.toggle('scale-x-[-1]', open);

        closeButton.classList.toggle('hidden', !open);

        if (open) {
            if (descriptionOpen) {
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
        if (!isOpen) {
            isDescriptionOpen = false;
        }
        updateComponentState(isOpen, isDescriptionOpen);
    });

    closeButton.addEventListener('click', () => {
        toggleDescription();
    });

    function renderItems() {
        while (expandableContent.children.length > 1) {
            const lastChild = expandableContent.lastChild;
            if (lastChild) {
                expandableContent.removeChild(lastChild);
            }
        }

        items.forEach((item) => {
            const contentItem = document.createElement('div');
            contentItem.className = 'flex items-start justify-between min-full max-w-full w-full gap-0';

            const contentItemWrapper = document.createElement('div');
            contentItemWrapper.className = `h-full relative w-32 min-w-32 pl-7 padding-transition
                pr-7
                py-6 transition-all duration-1000
            `;

            const iconContainer = document.createElement('div');
            iconContainer.className = `flex flex-col transition-all duration-300 items-center gap-2 w-fit`;

            const iconWrapper = document.createElement('div');
            iconWrapper.className = `transition-all duration-700 ease-in-out flex justify-center w-full mx-auto`;
            iconWrapper.innerHTML = getSizedIcon(IconRegistry[IconCategory.LARGE][item.icon], 40);

            const titleElement = document.createElement('h3');
            titleElement.className = `font-bold leading-[0.875rem] text-center text-xs flex-grow flex-wrap break-words transition-[text-align,align-self] delay-700 duration-300 ease-in-out
            w-full`;
            titleElement.textContent = item.title;

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
                ${isDescriptionOpen ? 'pointer-events-none text-base-black/0' : 'pointer-events-auto text-base-black/100'}
            `;

            infoButton.addEventListener('click', toggleDescription);

            const contentDescriptionWrapper = document.createElement('div');
            contentDescriptionWrapper.className = `w-[7.1875rem] text-xs h-full relative mr-7 py-6 overflow-hidden`;

            if (item.description) {
                contentDescriptionWrapper.textContent = item.description.toString();
            }

            iconContainer.appendChild(iconWrapper);
            iconContainer.appendChild(titleElement);
            contentItemWrapper.appendChild(iconContainer);
            contentItemWrapper.appendChild(infoButton);

            contentItem.appendChild(contentItemWrapper);
            contentItem.appendChild(contentDescriptionWrapper);

            expandableContent.appendChild(contentItem);
        });
    }

    function toggleDescription() {
        isDescriptionOpen = !isDescriptionOpen;
        updateComponentState(isOpen, isDescriptionOpen);

        const contentItems = expandableContent.querySelectorAll(':scope > div:not(button)');

        contentItems.forEach((contentItem) => {
            const contentItemWrapper = contentItem.querySelector(':scope > div:first-child');
            const infoButton = contentItemWrapper?.querySelector('button');

            // Update info button classes
            infoButton?.classList.toggle('pointer-events-none', isDescriptionOpen);
            infoButton?.classList.toggle('text-base-black/0', isDescriptionOpen);
            infoButton?.classList.toggle('pointer-events-auto', !isDescriptionOpen);
            infoButton?.classList.toggle('text-base-black/100', !isDescriptionOpen);
        });
    }

    /** ------------------------------------------------------------- MOBILE VERSION ------------------------------------------------------------- */

    const baseMobileContainerClasses = "block sm:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] mx-auto rounded-2xl flex flex-col items-center justify-end overflow-hidden transition-opacity duration-500 pointer-events-none z-50";

    const buttonMobileContainerClasses = `
        bg-base-black
        text-base-white
        relative
        w-full
        cursor-pointer
        px-6
        py-5
        h-fit
        flex
        justify-between
        transition-all
        duration-500
    `;

    const handleClasses = 'absolute top-[0.38rem] left-1/2 -translate-x-1/2 w-[3.9375rem] h-[0.125rem] bg-neutral-400 z-50 transition-all duration-500'


    const flyoutMobileContainer = document.createElement('div');
    flyoutMobileContainer.className = baseMobileContainerClasses;
    flyoutMobileContainer.style.touchAction = 'pan-y';

    const buttonMobileContainer = document.createElement('button');
    buttonMobileContainer.className = buttonMobileContainerClasses;

    const handle = document.createElement('div');
    handle.className = handleClasses;

    flyoutMobileContainer.appendChild(buttonMobileContainer)
    buttonMobileContainer.addEventListener('click', toggleMobileFlyout);

    let mobileContentContainer: HTMLDivElement;

    function initializeMobileFlyout() {
        mobileContentContainer = document.createElement('div');
        mobileContentContainer.className = `
        mobile-content-container
        px-6
        py-0
        w-full
        bg-white
        rounded-b-xl
        shadow-lg
        transition-all
        duration-500
        ease-in-out
        overflow-hidden
        max-h-0
    `;

        const accordionItems: AccordionItem[] = items.map(item => ({
            icon: item.icon,
            trigger: item.title,
            content: item.description || ''
        }));

        const accordionElement = createAccordion({
            items: accordionItems
        });

        mobileContentContainer.appendChild(accordionElement);
        flyoutMobileContainer.appendChild(mobileContentContainer);

        const hammertime = new Hammer(flyoutMobileContainer);
        hammertime.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
        hammertime.on('swipe',
            function (ev) {
                if (ev.direction === Hammer.DIRECTION_UP && !isMobileOpen) {
                    toggleMobileFlyout();
                } else if (ev.direction === Hammer.DIRECTION_DOWN && isMobileOpen) {
                    toggleMobileFlyout();
                }
            }
        );
    }


    function toggleMobileFlyout() {
        isMobileOpen = !isMobileOpen;

        if (!mobileContentContainer) {
            initializeMobileFlyout();
        }

        requestAnimationFrame(() => {
            if (isMobileOpen) {
                mobileContentContainer.classList.add('max-h-screen', 'py-4');
                mobileContentContainer.classList.remove('max-h-0', 'py-0');
                handle.classList.add('opacity-0');
                handle.classList.remove('opacity-100');
                initialChevronMobileElement.classList.add('scale-y-[-1]');
                initialChevronMobileElement.classList.remove('scale-y-100');
                buttonMobileContainer.classList.add('py-4', 'bg-secondary-interaction', 'text-base-black');
                buttonMobileContainer.classList.remove('py-5', 'bg-base-black', 'text-base-white');

            } else {
                mobileContentContainer.classList.add('max-h-0', 'py-0');
                mobileContentContainer.classList.remove('max-h-screen', 'py-4');
                handle.classList.add('opacity-100');
                handle.classList.remove('opacity-0');
                initialChevronMobileElement.classList.add('scale-y-100');
                initialChevronMobileElement.classList.remove('scale-y-[-1]');
                buttonMobileContainer.classList.add('py-5', 'bg-base-black', 'text-base-white');
                buttonMobileContainer.classList.remove('py-4', 'bg-secondary-interaction', 'text-base-black');
            }
        });
    }

    function setupMobileFlyoutVisibility() {

        function checkScrollPosition() {
            const scrollThreshold = window.innerHeight * 1.0;

            if (window.scrollY >= scrollThreshold) {
                flyoutMobileContainer.classList.remove('opacity-0', 'pointer-events-none');
                flyoutMobileContainer.classList.add('opacity-100', 'pointer-events-auto');
            } else {
                flyoutMobileContainer.classList.remove('opacity-100', 'pointer-events-auto');
                flyoutMobileContainer.classList.add('opacity-0', 'pointer-events-none');
            }
        }

        checkScrollPosition();

        window.addEventListener('scroll', checkScrollPosition);

        return () => {
            window.removeEventListener('scroll', checkScrollPosition);
        };
    }

    setupMobileFlyoutVisibility();
    initializeMobileFlyout();

    buttonMobileContainer.innerHTML = '';
    const initialButtonMobileContent = document.createElement('div');
    initialButtonMobileContent.className = 'flex items-center justify-between w-full gap-2';

    const initialIconMobileElement = document.createElement('div');
    initialIconMobileElement.className = '';
    initialIconMobileElement.innerHTML = createIcon({
        name: icon,
        size: 22
    });

    const initialLabelMobileElement = document.createElement('span');
    initialLabelMobileElement.textContent = label;
    initialLabelMobileElement.className = 'flex-grow text-center text-button-label';

    const initialChevronMobileElement = document.createElement('div');
    initialChevronMobileElement.className = 'scale-y-100 transition-all duration-300';
    initialChevronMobileElement.innerHTML = createIcon({
        name: 'chevronUp',
        size: 18
    });

    initialButtonMobileContent.appendChild(initialIconMobileElement);
    initialButtonMobileContent.appendChild(initialLabelMobileElement);
    initialButtonMobileContent.appendChild(initialChevronMobileElement);

    buttonMobileContainer.appendChild(initialButtonMobileContent);
    buttonMobileContainer.appendChild(handle);


    renderItems();
    expandableContent.appendChild(buttonContainer)
    expandableContent.appendChild(closeButton)
    flyoutContainer.appendChild(expandableContent);
    mainContainer.appendChild(flyoutContainer);
    mainContainer.appendChild(flyoutMobileContainer);

    return mainContainer;

};

type AccordionItem = {
    icon: string;
    trigger: string;
    content: string;
}

type AccordionArgs = {
    items: AccordionItem[];
};

const createAccordion = ({ items }: AccordionArgs) => {
    const wrapper = document.createElement('div');
    wrapper.className = `w-full md:w-[23.5rem] max-w-2xl mx-auto rounded-lg overflow-hidden`;

    items.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = `py-4 ${index < items.length - 1 ? 'border-b border-neutral-400' : ''}`;

        const trigger = document.createElement('button');
        trigger.className = `w-full flex justify-start items-center gap-4 px-0 text-left cursor-pointer`;

        trigger.innerHTML = `
            ${getSizedIcon(IconRegistry[IconCategory.LARGE][item.icon], 40)}
            <span class="text-link md:text-subhead3">${item.trigger}</span>
            <div class="chevron ml-auto">${getSizedIcon(IconRegistry[IconCategory.SYSTEM].chevronDown, 18)}</div>
        `;

        const content = document.createElement('div');
        content.className = `
            accordion-content-flyout
            max-h-0
            opacity-0
            overflow-hidden
            transition-all
            duration-500
            ease-in-out
            text-xs
            pl-14
        `;

        content.textContent = item.content;

        const svg = trigger.querySelector('.chevron');
        if (svg) {
            svg.classList.add('transition-transform', 'duration-500', 'ease-in-out');
        }

        itemDiv.appendChild(trigger);
        itemDiv.appendChild(content);
        wrapper.appendChild(itemDiv);

        trigger.addEventListener('click', () => {
            wrapper.querySelectorAll('.accordion-content-flyout').forEach(el => {
                if (el !== content) {
                    el.classList.remove('max-h-96', 'opacity-100', 'py-4');
                    el.classList.add('max-h-0', 'opacity-0', 'py-0');

                    const otherSvg = el.previousElementSibling?.querySelector('.chevron');
                    if (otherSvg) {
                        otherSvg.classList.add('rotate-0',);
                        otherSvg.classList.remove('rotate-180');
                    }
                }
            });

            const isCurrentlyActive = content.classList.contains('active');

            wrapper.querySelectorAll('.accordion-content-flyout').forEach(el => {
                el.classList.remove('active');
            });

            if (!isCurrentlyActive) {
                content.classList.add('active');
                content.classList.remove('max-h-0', 'opacity-0', 'py-0');
                content.classList.add('max-h-96', 'opacity-100', 'py-4');

                if (svg) {
                    svg.classList.add('rotate-180',);
                    svg.classList.remove('rotate-0');
                }
            } else {
                content.classList.remove('max-h-96', 'opacity-100', 'py-4');
                content.classList.add('max-h-0', 'opacity-0', 'py-0');

                if (svg) {
                    svg.classList.add('rotate-0',);
                    svg.classList.remove('rotate-180');
                }
            }
        });
    });

    return wrapper;
}
