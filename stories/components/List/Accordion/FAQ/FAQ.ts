import { IconCategory, IconRegistry } from '@/assets/icons';
import { getSizedIcon } from '@/utils/iconUtils';
import './fAQ.css';
import { FAQArgs } from '@/stories/types';

/**
 * Creates an accessible FAQ accordion component
 * @param {FAQArgs} props - The configuration options
 * @returns {HTMLElement} The FAQ wrapper element
 */
export const createFAQ = ({ items, backgroundColor = 'white' }: FAQArgs) => {
  const wrapper = document.createElement('div');
  const bgColorClass = backgroundColor === 'gray' ? 'bg-neutral-100' : 'bg-base-white';
  wrapper.className = `w-full md:w-[23.5rem] max-w-2xl mx-auto rounded-lg overflow-hidden`;

  items.forEach((item, index) => {
    const itemId = `faq-${index}`;

    const content = document.createElement('div');
    content.id = `${itemId}-content`;
    content.setAttribute('role', 'region');
    content.setAttribute('aria-labelledby', `${itemId}-trigger`);

    content.className = 'accordion-content bg-secondary-light';

    const itemDiv = document.createElement('div');
    itemDiv.className = '';

    const trigger = document.createElement('button');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('aria-controls', `${itemId}-content`);
    trigger.id = `${itemId}-trigger`;

    trigger.className = `w-full flex justify-between items-center gap-6 p-8 text-left ${bgColorClass} hover:bg-secondary-light transition cursor-pointer`;
    trigger.innerHTML = `
        <span class="text-label md:text-subhead3">${item.trigger}</span>
        ${getSizedIcon(IconRegistry[IconCategory.SYSTEM].chevronDown, 18)}
        `;

    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const nextTrigger = trigger.closest('div').nextElementSibling?.querySelector('button');
        nextTrigger?.focus();
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prevTrigger = trigger.closest('div').previousElementSibling?.querySelector('button');
        prevTrigger?.focus();
      }
    });
    const separator = document.createElement('div');
    separator.className = 'h-[1px] bg-neutral-400';

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
