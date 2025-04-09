import { ButtonCTAVariant, createButtonCTA } from "../Button/CTA/ButtonCTA";
import { createBadge } from "../Badge/Badge";
import { sanitizeHTML } from "@/stories/utils/sanitize";

/**
 * @component  
 * @param backgroundColor - Background color of the article 
 * @defaultValue 'white' 
 * @param title - Title of the article 
 * @param image - Image of the article 
 * @param imageAltText - Alternative text for the image (if undefined, the title will be used) 
 * @param buttonLabel - Label of the button 
 * @param badgeText - Text for the optional badge (if empty, no badge will be shown) 
 * @param onClick - Callback function when the button is clicked 
 */
export type ArticleArgs = {
  backgroundColor?: 'white' | 'gray';
  title: string;
  image: string;
  imageAltText?: string;
  buttonLabel: string;
  badgeText?: string;
  onClick?: () => void;
};

/**
 * @component  
 * @param backgroundColor - Background color of the article 
 * @defaultValue 'white' 
 * @param title - Title of the article 
 * @param image - Image of the article 
 * @param imageAltText - Alternative text for the image (if undefined, the title will be used) 
 * @param buttonLabel - Label of the button 
 * @param badgeText - Text for the optional badge (if empty, no badge will be shown) 
 * @param onClick - Callback function when the button is clicked 
 */
export const createArticle = ({
  backgroundColor = 'white',
  title,
  image,
  imageAltText = title,
  buttonLabel,
  badgeText,
  onClick = () => { },
}: ArticleArgs) => {
  const bgColor = backgroundColor === 'gray' ? 'bg-neutral-100' : 'bg-base-white';

  const articleElement = document.createElement('article');
  articleElement.className = `shrink h-72 min-w-44 w-48 p-4 flex flex-col justify-end gap-4 ${bgColor} rounded`;

  const imageContainer = document.createElement('div');
  imageContainer.className = 'relative h-0 grow w-full px-2.5';

  const imgElement = document.createElement('img');
  imgElement.src = image;
  imgElement.alt = sanitizeHTML(imageAltText);
  imgElement.className = 'size-full object-contain pointer-events-none';
  imageContainer.appendChild(imgElement);

  if (badgeText && badgeText.length > 0) {
    const badgeElement = createBadge(badgeText, 42, "primary")
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
