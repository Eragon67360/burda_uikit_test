import { createButtonLink } from '@/components/Button/ButtonLink/ButtonLink';
import { TextArgs, TextItem } from '@/stories/types';
import './text.css';

/**
 * Creates a text list component with various styling options
 * @param {TextArgs} props - The configuration options
 * @param {('ordered'|'unordered'|'links')} props.variant - The style variant of the list
 * @param {string} [props.title] - Optional title for the list
 * @param {Array<TextItem|LinkItem>} props.items - The items to display in the list
 * @returns {HTMLElement} The created list component
 */
export const createText = ({ variant, title, items }: TextArgs) => {
  const container = document.createElement('div');
  container.className = 'flex flex-col';

  if (title) {
    const titleElement = document.createElement('h3');
    titleElement.className = 'text-teaser mb-4';
    titleElement.textContent = title;
    container.appendChild(titleElement);
  }

  if (variant === 'links') {
    const ul = document.createElement('ul');
    ul.className = 'list-none';

    items.forEach((item) => {
      const li = document.createElement('li');
      li.className = 'mb-1';

      if ('label' in item) {
        if (!item.href) {
          console.warn('href should be provided for items in links variant');
        }

        const buttonLink = createButtonLink({
          label: item.label,
          href: item.href,
          disabled: item.disabled || false,
          iconLeft: item.iconLeft || false,
          onClick: item.onClick || (() => {}),
          icon: item.icon || 'arrowRight',
        });
        li.appendChild(buttonLink);
      }

      ul.appendChild(li);
    });

    container.appendChild(ul);
    return container;
  }

  const list = document.createElement(variant === 'ordered' ? 'ol' : 'ul');
  list.className = variant === 'ordered' ? 'list-decimal marker:text-bulletpoint-copy pl-5' : 'list-disc pl-5';

  items.forEach((item: TextItem) => {
    if ('text' in item) {
      const li = document.createElement('li');
      li.className = 'mb-2';
      li.textContent = item.text;
      list.appendChild(li);
    }
  });

  container.appendChild(list);
  return container;
};
