import './fAQ.css'

export type AccordionItem = {
    trigger: string;
    content: string;
}

export type FAQArgs = {
    items: AccordionItem[];
};

export const createFAQ = ({ items }: FAQArgs) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'w-[23.5rem] max-w-2xl mx-auto rounded-lg overflow-hidden';

    items.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = '';

        const trigger = document.createElement('button');
        trigger.className = 'w-full flex justify-between items-center gap-6 p-8 text-left bg-base-white hover:bg-secondary-light transition';
        trigger.innerHTML = `
        <span class="text-subhead3-desktop">${item.trigger}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g clip-path="url(#clip0_610_23343)">
                <path d="M23.7071 5.79338C23.3166 5.40286 22.6834 5.40286 22.2929 5.79338L12 16.0862L1.70711 5.79338C1.31659 5.40286 0.683402 5.40286 0.292887 5.79338C-0.0976289 6.18389 -0.0976289 6.81708 0.292887 7.20759L11.2929 18.2076C11.6834 18.5981 12.3166 18.5981 12.7071 18.2076L23.7071 7.20759C24.0977 6.81703 24.0977 6.18389 23.7071 5.79338Z" fill="black"/>
            </g>
            <defs>
                <clipPath id="clip0_610_23343">
                <rect width="24" height="24" fill="white" transform="translate(0 0.000488281)"/>
                </clipPath>
            </defs>
        </svg>
        `;

        const separator = document.createElement('div');
        separator.className = 'h-[1px] bg-neutral-400';

        const content = document.createElement('div');
        content.className = 'accordion-content bg-secondary-light';

        content.textContent = item.content;

        itemDiv.appendChild(trigger);

        itemDiv.appendChild(content);
        if (index < items.length - 1) {
            itemDiv.appendChild(separator);
        }
        wrapper.appendChild(itemDiv);

        trigger.addEventListener('click', () => {
            wrapper.querySelectorAll('.accordion-content').forEach(el => {
                if (el !== content) {
                    el.classList.remove('active');
                    const otherTrigger = el.previousElementSibling as HTMLElement;
                    const otherSvg = otherTrigger?.querySelector('svg');
                    if (otherSvg) {
                        otherSvg.style.transform = 'rotate(0deg)';
                    }
                    otherTrigger?.classList.remove('bg-secondary-interaction');
                }
            });

            content.classList.toggle('active');
            const svg = trigger.querySelector('svg');
            if (svg) {
                svg.style.transition = 'transform 0.3s ease';
                svg.style.transform = content.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
            }
            trigger.classList.toggle('bg-secondary-interaction');
        });
    });

    return wrapper;
}
