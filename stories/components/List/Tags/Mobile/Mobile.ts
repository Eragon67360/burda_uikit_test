import { IconCategory, IconRegistry } from '../../../../assets/icons';
import './mobile.css';

export type MobileTagArgs = {
    text: string;
    showIcon?: boolean;
};


export const createMobileTag = ({ text, showIcon = true }: MobileTagArgs) => {
    return `
    <div class="inline-flex items-center px-6 py-3 pl-4 my-auto gap-2 rounded-[3.25rem] border border-neutral-100 bg-neutral-50">
      ${IconRegistry[IconCategory.SYSTEM].success}
      <span class="text-label-mobile whitespace-nowrap">${text}</span>
    </div>
  `;
};

export const createMobileTagGroup = (tags: MobileTagArgs[], currentPage: number = 0) => {
    const totalPages = Math.ceil(tags.length / 2);
    const groupId = `tag-group-${Math.random().toString(36).substr(2, 9)}`;

    setTimeout(() => {
        const container = document.getElementById(groupId);
        if (!container) return;

        const scrollContainer = container.querySelector('.scroll-container') as HTMLElement;
        const dots = container.querySelectorAll('.pagination-dot');

        if (!scrollContainer) return;

        const updateActiveDot = (activePage: number) => {
            dots.forEach((dot, index) => {
                dot.classList.remove('border-secondary-dark', 'bg-secondary-interaction', 'border-[#949494]');

                if (index === activePage) {
                    dot.classList.add('border-secondary-dark', 'bg-secondary-interaction');
                } else {
                    dot.classList.add('border-[#949494]');
                }
            });
        };

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                const scrollWidth = scrollContainer.scrollWidth;
                const containerWidth = scrollContainer.clientWidth;
                const scrollPerPage = scrollWidth / totalPages;
                scrollContainer.scrollTo({
                    left: scrollPerPage * index,
                    behavior: 'smooth'
                });
                updateActiveDot(index);
            });
        });

        scrollContainer.addEventListener('wheel', (e: WheelEvent) => {
            e.preventDefault();
            scrollContainer.scrollLeft += e.deltaY;
        });

        let isDown = false;
        let startX: number;
        let scrollLeft: number;

        scrollContainer.addEventListener('mousedown', (e: MouseEvent) => {
            isDown = true;
            scrollContainer.style.cursor = 'grabbing';
            startX = e.pageX - scrollContainer.offsetLeft;
            scrollLeft = scrollContainer.scrollLeft;
        });

        scrollContainer.addEventListener('mouseleave', () => {
            isDown = false;
            scrollContainer.style.cursor = 'grab';
        });

        scrollContainer.addEventListener('mouseup', () => {
            isDown = false;
            scrollContainer.style.cursor = 'grab';
        });

        scrollContainer.addEventListener('mousemove', (e: MouseEvent) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - scrollContainer.offsetLeft;
            const walk = (x - startX) * 2;
            scrollContainer.scrollLeft = scrollLeft - walk;
        });

        scrollContainer.addEventListener('scroll', () => {
            const scrollWidth = scrollContainer.scrollWidth;
            const containerWidth = scrollContainer.clientWidth;
            const scrollPerPage = scrollWidth / totalPages;
            const currentPage = Math.round(scrollContainer.scrollLeft / scrollPerPage);
            updateActiveDot(currentPage);
        });

        updateActiveDot(currentPage);
    }, 0);

    return `
    <div id="${groupId}" class="flex flex-col gap-4 w-full max-w-[320px]">
        <div class="scroll-container flex overflow-x-auto items-center scrollbar-hide gap-4 pb-4 snap-x snap-mandatory cursor-grab">
            ${tags.map(tag => `
                <div class="snap-start select-none">
                    ${createMobileTag(tag)}
                </div>
            `).join('')}
        </div>
        <div class="flex justify-center gap-2">
            ${Array(totalPages)
            .fill(0)
            .map((_, index) => `
                    <button 
                        class="pagination-dot w-2 h-2 rounded-full border-[1.5px] cursor-pointer transition-all duration-200 ${index === currentPage
                    ? 'border-secondary-dark bg-secondary-interaction'
                    : 'border-[#949494]'
                }"
                        aria-label="Go to page ${index + 1}"
                    ></button>
                `).join('')}
        </div>
    </div>
    `;
};



