import { createSlideshowNavButton } from '../Header/Slideshow/Navigation/SlideNavButton';
import './horizontalScroller.css';

export type HorizontalScrollerArgs = {
  elements: Array<any>;
  currentPage: number;
  showControls?: boolean;
  horizontalScrollContainerPadding?: string;
  backgroundColor?: 'white' | 'gray';
};

export const createHorizontalScroller = ({
  elements = [],
  currentPage = 1,
  showControls = false,
  horizontalScrollContainerPadding = '0',
  backgroundColor = 'white',
}: HorizontalScrollerArgs) => {
  const groupId = `tag-group-${Math.random().toString(36).substr(2, 9)}`;

  let contentPages = 1;
  let isDown = false;
  let startX: number;
  let scrollLeft: number;

  let container: HTMLElement | null;
  let scrollContainer: HTMLElement | null;
  let dots: NodeListOf<Element>;

  const initContainer = () => {
    container = document.getElementById(groupId);
    scrollContainer = container?.querySelector('.scroll-container') as HTMLElement;
  };

  const initContentPages = () => {
    try {
      const containerWidth = container?.clientWidth;
      const scrollWidth = scrollContainer?.scrollWidth;
      contentPages = Math.ceil(scrollWidth / containerWidth);
    } catch {
      contentPages = 1;
    }
    if (contentPages < 1 || isNaN(contentPages)) {
      contentPages = 1;
    }
    if (contentPages === 1) {
      container?.classList.add('items-center');
      scrollContainer?.classList.remove('cursor-grab');
      scrollContainer?.style.removeProperty('cursor');
    } else {
      container?.classList.remove('items-center');
      scrollContainer?.classList.add('cursor-grab');
    }
  };

  const initControls = () => {
    let controlContainer = container?.querySelector('.control-container') as HTMLElement;
    if (!showControls) {
      if (controlContainer) {
        controlContainer.remove();
      }
      return;
    }
    if (contentPages <= 1) {
      if (controlContainer) {
        controlContainer.remove();
      }
      return;
    }

    if (controlContainer) {
      controlContainer.innerHTML = '';
    } else {
      controlContainer = document.createElement('div');
    }
    controlContainer.className = 'control-container w-full flex items-center justify-between gap-2';
    if (horizontalScrollContainerPadding) {
      controlContainer.style.paddingLeft = horizontalScrollContainerPadding;
      controlContainer.style.paddingRight = horizontalScrollContainerPadding;
    }

    const dotContainer = document.createElement('div');
    dotContainer.className = 'dot-container flex justify-center gap-2';

    Array(contentPages)
      .fill(0)
      .forEach((_, index) => {
        const button = document.createElement('button');
        button.className = `pagination-dot w-2 h-2 rounded-full border-[1.5px] cursor-pointer transition-all duration-200 ${index === currentPage - 1 ? 'border-secondary-dark bg-secondary-interaction' : 'border-[#949494]'}`;
        button.setAttribute('aria-label', `Go to page ${index + 1}`);
        dotContainer.appendChild(button);
      });

    const prevButton = createSlideshowNavButton({
      mode: 'previous',
      disabled: false,
      classNames: 'prev-button',
      backgroundColor,
      onClick: () => handlePrevButtonClick(),
    });

    const nextButton = createSlideshowNavButton({
      mode: 'next',
      disabled: false,
      classNames: 'next-button',
      backgroundColor,
      onClick: () => handleNextButtonClick(),
    });

    controlContainer.appendChild(prevButton);
    controlContainer.appendChild(dotContainer);
    controlContainer.appendChild(nextButton);

    container?.appendChild(controlContainer);

    dots = container?.querySelectorAll('.pagination-dot');
  };

  const updateControls = () => {
    if (!container) return;
    dots?.forEach((dot, index) => {
      dot.classList.remove('border-secondary-dark', 'bg-secondary-interaction', 'border-[#949494]');

      if (index === currentPage - 1) {
        dot.classList.add('border-secondary-dark', 'bg-secondary-interaction');
      } else {
        dot.classList.add('border-[#949494]');
      }
    });

    const prevButton = container?.querySelector('.prev-button') as HTMLElement;
    const nextButton = container?.querySelector('.next-button') as HTMLElement;
    if (currentPage === 1) {
      prevButton?.setAttribute('disabled', 'true');
    } else {
      prevButton?.removeAttribute('disabled');
    }
    if (currentPage === contentPages) {
      nextButton?.setAttribute('disabled', 'true');
    } else {
      nextButton?.removeAttribute('disabled');
    }
  };

  const init = () => {
    initContainer();
    initContentPages();
    initControls();
    removeEventListener();
    addEventListener();
    updateControls();
  };

  const handleMouseDown = (e: MouseEvent) => {
    isDown = true;
    if (!scrollContainer) return;
    if (contentPages <= 1) return;
    scrollContainer.style.cursor = 'grabbing';
    startX = e.pageX - scrollContainer?.offsetLeft;
    scrollLeft = scrollContainer?.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
    if (!scrollContainer) return;
    if (contentPages <= 1) return;
    scrollContainer.style.cursor = 'grab';
  };

  const handleMouseUp = () => {
    isDown = false;
    if (!scrollContainer) return;
    if (contentPages <= 1) return;
    scrollContainer.style.cursor = 'grab';
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDown) return;
    if (contentPages <= 1) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer?.offsetLeft;
    const walk = (x - startX) * 2; //scroll-fast
    if (!scrollContainer) return;
    scrollContainer.scrollLeft = scrollLeft - walk;
  };

  const handleScroll = () => {
    if (contentPages <= 1) return;
    const visibleWith = container?.clientWidth;
    const scrollOffset = scrollContainer?.scrollLeft;
    const visibleCenter = scrollOffset + container?.clientWidth / 2;
    const rightEdge = scrollOffset + visibleWith;
    if (rightEdge >= scrollContainer?.scrollWidth) {
      currentPage = contentPages;
    } else if (scrollOffset <= 0) {
      currentPage = 1;
    } else {
      currentPage = Math.ceil(visibleCenter / visibleWith);
    }
    updateControls();
  };

  const handleDotClick = (index: number) => {
    const scrollWidth = scrollContainer?.scrollWidth;
    const scrollPerPage = scrollWidth / contentPages;
    scrollContainer?.scrollTo({
      left: scrollPerPage * index,
      behavior: 'smooth',
    });
    currentPage = index + 1;
    updateControls();
  };

  const handleNextButtonClick = () => {
    if (currentPage < contentPages) {
      const scrollWidth = scrollContainer?.scrollWidth;
      const scrollPerPage = scrollWidth / contentPages;
      scrollContainer?.scrollTo({
        left: scrollPerPage * currentPage,
        behavior: 'smooth',
      });
      currentPage = currentPage + 1;
      updateControls();
    }
  };

  const handlePrevButtonClick = () => {
    if (currentPage > 1) {
      const scrollWidth = scrollContainer?.scrollWidth;
      const scrollPerPage = scrollWidth / contentPages;
      scrollContainer?.scrollTo({
        left: scrollPerPage * (currentPage - 2),
        behavior: 'smooth',
      });
      currentPage = currentPage - 1;
      updateControls();
    }
  };

  const handleResize = () => {
    init();
  };

  const addEventListener = () => {
    scrollContainer?.addEventListener('mousedown', handleMouseDown);
    scrollContainer?.addEventListener('mouseleave', handleMouseLeave);
    scrollContainer?.addEventListener('mouseup', handleMouseUp);
    scrollContainer?.addEventListener('mousemove', handleMouseMove);
    scrollContainer?.addEventListener('scroll', handleScroll);
    dots?.forEach((dot, index) => {
      dot.addEventListener('click', () => handleDotClick(index));
    });
  };

  const removeEventListener = () => {
    scrollContainer?.removeEventListener('mousedown', handleMouseDown);
    scrollContainer?.removeEventListener('mouseleave', handleMouseLeave);
    scrollContainer?.removeEventListener('mouseup', handleMouseUp);
    scrollContainer?.removeEventListener('mousemove', handleMouseMove);
    scrollContainer?.removeEventListener('scroll', handleScroll);
    dots?.forEach((dot, index) => {
      dot.removeEventListener('click', () => handleDotClick(index));
    });
  };

  const initializeComponent = () => {
    requestAnimationFrame(() => {
      init();
      window.addEventListener('resize', handleResize);
    });
  };
  initializeComponent();

  container = document.createElement('div');
  container.id = groupId;
  container.className = 'flex flex-col gap-4 w-full max-w-full';

  scrollContainer = document.createElement('div');
  scrollContainer.className = 'scroll-container max-w-fit flex overflow-x-auto items-center scrollbar-hide gap-4 pb-4';
  if (showControls) {
    scrollContainer.classList.remove('snap-x', 'snap-mandatory');
  } else {
    scrollContainer.classList.add('snap-x', 'snap-mandatory');
  }

  elements.forEach((element, index) => {
    const elementDiv = document.createElement('div');
    elementDiv.className = 'select-none';
    if (showControls) {
      elementDiv.classList.remove('snap-start');
    } else {
      elementDiv.classList.add('snap-start');
    }
    if (index === 0) {
      elementDiv.style.paddingLeft = horizontalScrollContainerPadding;
    } else if (index === elements.length - 1) {
      elementDiv.style.paddingRight = horizontalScrollContainerPadding;
    }
    elementDiv.appendChild(element);
    scrollContainer.appendChild(elementDiv);
  });

  container?.appendChild(scrollContainer);

  return container;
};
