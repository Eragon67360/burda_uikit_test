import './text.css'
import { ICON_ARROW_RIGHT } from '../../../assets/icons';

export type TextArgs = {
    variant: 'ordered' | 'unordered' | 'links';
    title?: string;
    items: Array<{
        text: string;
        href?: string;
    }>;
};
export const createText = ({ variant, title, items }: TextArgs) => {
    const titleHtml = title
        ? `<h3 class="text-teaser-desktop mb-4">${title}</h3>`
        : '';

    if (variant === 'links') {
        return `
      <div class="flex flex-col">
        ${titleHtml}
        <ul class="list-none">
          ${items
                .map(
                    (item) => `
            <li class="mb-1">
              <a href="${item.href || '#'}" class="group flex items-center text-link-desktop no-underline">
                ${item.text}
                <span class="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                  ${ICON_ARROW_RIGHT}
                </span>
              </a>
            </li>
          `
                )
                .join('')}
        </ul>
      </div>
    `;
    }

    const ListTag = variant === 'ordered' ? 'ol' : 'ul';
    const listClass = variant === 'ordered'
        ? 'list-decimal marker:text-bulletpoint-copy-desktop'
        : 'list-disc';

    return `
    <div class="flex flex-col">
      ${titleHtml}
      <${ListTag} class="${listClass} pl-5">
        ${items.map((item) => `<li class="mb-2">${item.text}</li>`).join('')}
      </${ListTag}>
    </div>
  `;
};