import { IconCategory, IconRegistry } from '@/assets/icons';
import { getSizedIcon } from '@/utils/iconUtils';
import './fAQ.css';

export type AccordionItem = {
  trigger: string;
  content: string;
};

export type FAQArgs = {
  items: AccordionItem[];
  backgroundColor?: 'white' | 'gray';
};

export const createFAQ = ({ items, backgroundColor = 'white' }: FAQArgs) => {
  const wrapper = document.createElement('div');
  const bgColorClass = backgroundColor === 'gray' ? 'bg-neutral-100' : 'bg-base-white';
  wrapper.className = `w-full md:w-[23.5rem] max-w-2xl mx-auto rounded-lg overflow-hidden`;

  items.forEach((item, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = '';

    const trigger = document.createElement('button');
    trigger.className = `w-full flex justify-between items-center gap-6 p-8 text-left ${bgColorClass} hover:bg-secondary-light transition`;
    trigger.innerHTML = `
        <span class="text-label md:text-subhead3">${item.trigger}</span>
        ${getSizedIcon(IconRegistry[IconCategory.SYSTEM].chevronDown, 18)}
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
      wrapper.querySelectorAll('.accordion-content').forEach((el) => {
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
};
