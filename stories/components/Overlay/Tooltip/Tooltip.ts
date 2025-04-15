import './tooltip.css';
import { IconRegistry, IconCategory } from '@/assets/icons';

export type TooltipArgs = {
  content: string | HTMLElement;
  triggerIcon?: string;
  position?: 'top' | 'right' | 'bottom' | 'left';
  className?: string;
};

export const createTooltip = ({
  content,
  triggerIcon = IconRegistry[IconCategory.SYSTEM].info,
  position = 'top',
  className = '',
}: TooltipArgs) => {
  const wrapper = document.createElement('div');
  wrapper.className = `relative inline-block ${className}`;

  const trigger = document.createElement('button');
  trigger.className = `
    p-2 rounded-full transition-colors
    text-base-black hover:text-secondary-dark
    data-[active=true]:text-secondary-dark data-[active=true]:opacity-50
  `;
  trigger.innerHTML = triggerIcon;

  const tooltipContent = document.createElement('div');
  tooltipContent.className = `
    invisible opacity-0 scale-95 absolute z-50 
    min-w-[200px] max-w-[400px] w-max
    p-4 bg-white rounded-lg shadow-lg
    border border-gray-200 transition-all duration-200 ease-in-out
    ${getPositionClasses(position)}
  `;

  const closeButton = document.createElement('button');
  closeButton.className = 'absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full transition-colors';
  closeButton.innerHTML = IconRegistry[IconCategory.SYSTEM].close;

  const contentWrapper = document.createElement('div');
  contentWrapper.className = 'pr-6';
  if (typeof content === 'string') {
    contentWrapper.innerHTML = content;
  } else {
    contentWrapper.appendChild(content);
  }
  tooltipContent.appendChild(closeButton);
  tooltipContent.appendChild(contentWrapper);

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isVisible = !tooltipContent.classList.contains('invisible');

    if (isVisible) {
      tooltipContent.classList.remove('visible', 'opacity-100', 'scale-100');
      tooltipContent.classList.add('invisible', 'opacity-0', 'scale-95');
      trigger.setAttribute('data-active', 'false');
    } else {
      tooltipContent.classList.remove('invisible', 'opacity-0', 'scale-95');
      tooltipContent.classList.add('visible', 'opacity-100', 'scale-100');
      trigger.setAttribute('data-active', 'true');
    }
  });

  closeButton.addEventListener('click', () => {
    tooltipContent.classList.remove('visible', 'opacity-100', 'scale-100');
    tooltipContent.classList.add('invisible', 'opacity-0', 'scale-95');
    trigger.setAttribute('data-active', 'false');
  });

  document.addEventListener('click', (e) => {
    if (!wrapper.contains(e.target as Node)) {
      tooltipContent.classList.remove('visible', 'opacity-100', 'scale-100');
      tooltipContent.classList.add('invisible', 'opacity-0', 'scale-95');
      trigger.setAttribute('data-active', 'false');
    }
  });

  wrapper.appendChild(trigger);
  wrapper.appendChild(tooltipContent);
  return wrapper;
};

const getPositionClasses = (position: string): string => {
  switch (position) {
    case 'top':
      return 'bottom-full left-1/2 -translate-x-1/2 mb-2';
    case 'right':
      return 'left-full top-1/2 -translate-y-1/2 ml-2';
    case 'bottom':
      return 'top-full left-1/2 -translate-x-1/2 mt-2';
    case 'left':
      return 'right-full top-1/2 -translate-y-1/2 mr-2';
    default:
      return 'bottom-full left-1/2 -translate-x-1/2 mb-2';
  }
};
