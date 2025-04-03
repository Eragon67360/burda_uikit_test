import { ButtonCTAVariant, createButtonCTA } from "../Button/CTA/ButtonCTA";
import { createBadge } from "../Badge/Badge";
import { sanitizeHTML } from "@/stories/utils/sanitize";

export type ArticleArgs = {
  backgroundColor?: 'white' | 'gray';
  title: string;
  image: string;
  imageAltText?: string;
  buttonLabel: string;
  badgeText?: string;
  onClick?: () => void;
};

type AccessibleArticleArgs = ArticleArgs & {
  ariaLabel?: string;
  role?: 'article' | 'region';
  focusable?: boolean;
};

export const createArticle = ({
  backgroundColor = 'white',
  title,
  image,
  imageAltText = title,
  buttonLabel,
  badgeText,
  onClick = () => { },
  ariaLabel,
  role = 'article',
  focusable = true,
}: AccessibleArticleArgs) => {
  const bgColor = backgroundColor === 'gray' ? 'bg-neutral-100' : 'bg-base-white';

  const articleElement = document.createElement('article');
  articleElement.setAttribute('role', role);
  articleElement.setAttribute('aria-label', ariaLabel || sanitizeHTML(title));
  articleElement.className = `shrink h-72 min-w-44 w-48 p-4 flex flex-col justify-end gap-4 ${bgColor} rounded`;
  articleElement.setAttribute('tabindex', '0');
  articleElement.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') onClick?.();
  });

  const imageContainer = document.createElement('div');
  imageContainer.className = 'relative h-0 grow w-full px-2.5';

  const imgElement = document.createElement('img');
  imgElement.src = image;
  imgElement.alt = sanitizeHTML(imageAltText);
  imgElement.setAttribute('loading', 'lazy');
  imgElement.onerror = () => {
    imgElement.setAttribute('aria-invalid', 'true');
    imgElement.setAttribute('aria-errormessage', 'Image failed to load');
  };
  imgElement.className = 'size-full object-contain pointer-events-none';
  imageContainer.appendChild(imgElement);

  if (badgeText && badgeText.length > 0) {
    const badgeElement = createBadge(badgeText, 42, "primary");
    imageContainer.appendChild(badgeElement);
  }

  const titleElement = document.createElement('p');
  titleElement.className = 'text-label text-center';
  titleElement.textContent = sanitizeHTML(title);

  articleElement.appendChild(imageContainer);
  articleElement.appendChild(titleElement);

  if (buttonLabel) {
    articleElement.appendChild(createButtonCTA({
      label: buttonLabel,
      onClick,
      disabled: false,
      variant: ButtonCTAVariant.PRIMARY,
      nested: true,
      iconLeft: false,
      icon: 'arrowRight',
    }));
  }

  return articleElement;
}
