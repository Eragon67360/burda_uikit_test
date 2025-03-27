import { IconCategory, IconRegistry } from '@/assets/icons';
import { ButtonLinkArgs, createButtonLink } from '@/components/Button/ButtonLink/ButtonLink';
import './text.css'

type LinkItem = ButtonLinkArgs & {
  href: string;
};

type TextItem = {
  text: string;
} | LinkItem;

export type TextArgs<T extends 'ordered' | 'unordered' | 'links' = 'ordered' | 'unordered' | 'links'> = {
  variant: T;
  title?: string;
  items: T extends 'links' ? LinkItem[] : TextItem[];
};

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

    items.forEach(item => {
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
          onClick: item.onClick || (() => { }),
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
  list.className = variant === 'ordered'
    ? 'list-decimal marker:text-bulletpoint-copy pl-5'
    : 'list-disc pl-5';

  items.forEach(item => {
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