import './mobile.css'

export type MobileTagArgs = {
    text: string;
    showIcon?: boolean;
};

const MobileTagIcon = () => `
  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
    <g clip-path="url(#clip0_826_19057)">
      <path d="M10.5 0C4.986 0 0.5 4.486 0.5 10C0.5 15.514 4.986 20 10.5 20C16.014 20 20.5 15.514 20.5 10C20.5 4.486 16.014 0 10.5 0ZM10.5 18.1818C5.98848 18.1818 2.31818 14.5115 2.31818 10C2.31818 5.48855 5.98848 1.81818 10.5 1.81818C15.0115 1.81818 18.6818 5.48855 18.6818 10C18.6818 14.5115 15.0115 18.1818 10.5 18.1818Z" fill="black"/>
      <path d="M14.2508 6.46448L9.1081 11.6071L6.75113 9.25006C6.39616 8.89509 5.82052 8.89503 5.46549 9.25C5.11046 9.60503 5.11046 10.1806 5.46549 10.5356L8.46525 13.5355C8.63573 13.706 8.86695 13.8018 9.10804 13.8018H9.1081C9.34919 13.8018 9.5804 13.706 9.75089 13.5356L15.5364 7.75018C15.8914 7.39515 15.8914 6.81958 15.5364 6.46455C15.1814 6.10951 14.6058 6.10945 14.2508 6.46448Z" fill="black"/>
    </g>
    <defs>
      <clipPath id="clip0_826_19057">
        <rect width="20" height="20" fill="white" transform="translate(0.5)"/>
      </clipPath>
    </defs>
  </svg>
`;

export const createMobileTag = ({ text, showIcon = true }: MobileTagArgs) => {
    return `
    <div class="inline-flex items-center px-6 py-3 pl-4 my-auto gap-2 rounded-[3.25rem] border border-neutral-100 bg-neutral-50">
      ${MobileTagIcon()}
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



