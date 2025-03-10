import { IconRegistry, IconCategory } from "../../assets/icons";

export type PaginationArgs = {
    variant?: 'white' | 'grey';
    currentPage: number;
    totalPages: number;
    onPageChange?: (page: number) => void;
};

export const createPagination = ({
    variant = 'white',
    currentPage,
    totalPages,
    onPageChange,
}: PaginationArgs) => {
    const baseClasses = 'flex items-center gap-2';
    const variantClasses = variant === 'grey' ? 'bg-neutral-100' : 'bg-white';

    const createPageButton = (pageNum: number, currentPage: number) => {
        const isSelected = pageNum === currentPage;

        return `
      <button
        class="relative w-12 h-12 flex items-center justify-center cursor-pointer text-button-label-large-desktop
               overflow-hidden group
               ${isSelected ? 'bg-secondary-dark text-base-black pointer-events-none' : 'cursor-pointer'}
               transition-colors duration-500 ease-in-out rounded-md"
        data-page="${pageNum}"
        ${isSelected ? 'disabled' : ''}
      >
        <span class="absolute inset-0 bg-secondary-light 
                     transform translate-y-full group-hover:translate-y-0 
                     transition-transform duration-500 ease-in-out 
                     z-0"></span>
        <span class="relative z-10">${pageNum}</span>
      </button>
    `;
    };

    const createChevronButton = (direction: 'left' | 'right', currentPage: number, totalPages: number) => {
        const icon = direction === 'left'
            ? IconRegistry[IconCategory.SYSTEM].chevronLeft
            : IconRegistry[IconCategory.SYSTEM].chevronRight;

        const isDisabled = direction === 'left'
            ? currentPage === 1
            : currentPage === totalPages;

        return `
      <button
        class="relative w-12 h-12 flex items-center justify-center 
               overflow-hidden group
               ${isDisabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ' cursor-pointer'}
               transition-colors duration-500 ease-in-out rounded-md"
        ${isDisabled ? 'disabled' : ''}
        data-direction="${direction}"
      >
        <span class="absolute inset-0 bg-secondary-light
                     transform translate-y-full group-hover:translate-y-0
                     transition-transform duration-500 ease-in-out 
                     z-0"></span>
        <span class="relative z-10">${icon}</span>
      </button>
    `;
    };

    // Function to determine visible pages
    const calculateVisiblePages = (page: number, totalPages: number): number[] => {
        if (totalPages <= 3) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        // If we're near the start
        if (page <= 2) {
            return [1, 2, 3];
        }

        // If we're near the end
        if (page >= totalPages - 1) {
            return [totalPages - 2, totalPages - 1, totalPages];
        }

        // For pages in the middle, show surrounding pages
        return [page - 1, page, page + 1];
    };

    // Create pagination element
    const element = document.createElement('div');
    element.className = `${baseClasses} ${variantClasses} p-2 rounded-lg`;

    // Render pagination with current page
    const renderPagination = (page: number) => {
        // Calculate visible pages dynamically
        const visiblePages = calculateVisiblePages(page, totalPages);

        element.innerHTML = `
            ${createChevronButton('left', page, totalPages)}
            ${visiblePages.map(p => createPageButton(p, page)).join('')}
            ${createChevronButton('right', page, totalPages)}
        `;
    };

    // Initial render
    renderPagination(currentPage);

    // Add event listeners
    element.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const button = target.closest('button');
        if (!button || button.disabled) return;

        const page = button.dataset.page;
        const direction = button.dataset.direction;

        let newPage = currentPage;

        if (page) {
            newPage = parseInt(page);
        } else if (direction) {
            newPage = direction === 'left' ? currentPage - 1 : currentPage + 1;
        }

        // Validate new page
        if (newPage >= 1 && newPage <= totalPages) {
            // Call onPageChange callback
            onPageChange?.(newPage);

            // Update current page and re-render
            currentPage = newPage;
            renderPagination(currentPage);
        }
    });

    return element;
};
