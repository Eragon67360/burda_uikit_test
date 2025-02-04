import { IconCategory, IconRegistry } from '../../../../assets/icons';
import './textbox.css';

export type TextboxArgs = {
    expandText?: string;
    collapseText?: string;
    content?: string;
    className?: string;
    chevronIcon?: string;
};

export const createTextbox = ({
    expandText = 'See more',
    collapseText = 'See less',
    content = '',
    className = '',
    chevronIcon = IconRegistry[IconCategory.SYSTEM].chevronDown
}) => {
    const wrapper = document.createElement('div');
    wrapper.className = `textbox-wrapper ${className}`;

    let isExpanded = false;

    const uniqueId = `textbox-${Math.random().toString(36).substr(2, 9)}`;

    wrapper.innerHTML = `
    <div class="w-full">
        <div class="flex flex-col">
            <div class="flex items-center justify-center transition-opacity duration-200" data-button="top">
                <div class="border-t border-neutral-400 w-full h-0"></div>
                <button
                    id="${uniqueId}-trigger-top"
                    aria-expanded="false"
                    aria-controls="${uniqueId}-content"
                    class="textbox-trigger flex items-center gap-2 mx-4 w-fit text-nowrap justify-center text-base-black text-button-label-desktop group"
                >
                    <span class="border-b-2 border-transparent transition group-hover:border-secondary-light">${expandText}</span>
                    <span class="chevron-wrapper scale-90">
                        ${chevronIcon}
                    </span>
                </button>
                <div class="border-t border-neutral-400 w-full h-0"></div>
            </div>

            <div
                id="${uniqueId}-content"
                class="textbox-content transition-all duration-200 overflow-hidden"
                style="max-height: 0; opacity: 0"
                role="region"
                aria-labelledby="${uniqueId}-trigger-top"
            >
                <div class="pt-4">
                    ${content}
                </div>
            </div>

            <div class="items-center justify-center opacity-0 transition-opacity duration-200 hidden mt-4" data-button="bottom">
                <div class="border-t border-neutral-400 w-full h-0"></div>
                <button
                    id="${uniqueId}-trigger-bottom"
                    aria-expanded="false"
                    aria-controls="${uniqueId}-content"
                    class="textbox-trigger flex items-center gap-2 mx-4 w-fit text-nowrap justify-center text-base-black text-button-label-desktop group"
                >
                    <span class="border-b-2 border-transparent transition group-hover:border-secondary-light">${collapseText}</span>
                    <span class="chevron-wrapper rotate-180 scale-90">
                        ${chevronIcon}
                    </span>
                </button>
                <div class="border-t border-neutral-400 w-full h-0"></div>
            </div>
        </div>
    </div>
  `;

    const topButtonContainer = wrapper.querySelector('[data-button="top"]') as HTMLElement;
    const bottomButtonContainer = wrapper.querySelector('[data-button="bottom"]') as HTMLElement;
    const contentElement = wrapper.querySelector('.textbox-content') as HTMLElement;
    const topButton = wrapper.querySelector('#' + uniqueId + '-trigger-top') as HTMLButtonElement;
    const bottomButton = wrapper.querySelector('#' + uniqueId + '-trigger-bottom') as HTMLButtonElement;

    const toggleContent = () => {

        isExpanded = !isExpanded;

        topButton.setAttribute('aria-expanded', isExpanded.toString());
        bottomButton.setAttribute('aria-expanded', isExpanded.toString());

        if (isExpanded) {
            topButtonContainer.style.display = 'none';
            bottomButtonContainer.style.display = 'flex';
            setTimeout(() => {
                bottomButtonContainer.style.opacity = '1';
            }, 0);
        } else {
            bottomButtonContainer.style.opacity = '0';
            setTimeout(() => {
                topButtonContainer.style.display = 'flex';
                bottomButtonContainer.style.display = 'none';
            }, 200);
        }

        if (isExpanded) {
            contentElement.style.maxHeight = `${contentElement.scrollHeight}px`;
            contentElement.style.opacity = '1';
        } else {
            contentElement.style.maxHeight = '0';
            contentElement.style.opacity = '0';
        }
    };

    topButton.addEventListener('click', toggleContent);
    bottomButton.addEventListener('click', toggleContent);

    return wrapper;
};
