import { IconCategory, IconRegistry } from '@/assets/icons';
import { ButtonCTAVariant, createButtonCTA } from '../Button/CTA/ButtonCTA';
import { getSizedIcon } from '@/utils/iconUtils';
import { sanitizeHTML } from '@/stories/utils/sanitize';

export interface CardArgs {
  backgroundColor?: 'white' | 'gray';
  image?: string;
  title: string;
  text: string;
  buttonLabel: string;
  maxWidth?: string;
  onClick?: () => void;
}

export const createCard = ({
  backgroundColor = 'white',
  image,
  title,
  text,
  buttonLabel,
  maxWidth = '384px',
  onClick = () => {},
}: CardArgs) => {
  const cardContainer = document.createElement('div');
  cardContainer.className = `shrink grow max-md:!max-w-full max-w-full max-md:!w-full w-full flex flex-col justify-stretch ${backgroundColor === 'gray' ? 'bg-neutral-100' : 'bg-white'} rounded`;
  if (!!maxWidth && maxWidth !== '') {
    cardContainer.style.maxWidth = maxWidth;
    cardContainer.style.width = maxWidth;
  }

  const contentWrapper = document.createElement('div');
  contentWrapper.className = 'p-8 flex flex-col md:flex-row gap-8 h-full';

  const textContainer = document.createElement('div');
  textContainer.className = 'w-auto md:w-0 grow text-center md:text-left';

  const titleElement = document.createElement('h4');
  titleElement.className = 'text-h4 hyphens-auto';
  titleElement.textContent = sanitizeHTML(title);

  const textElement = document.createElement('p');
  textElement.className = 'mt-4 text-copy-small';
  textElement.innerHTML = text;

  textContainer.appendChild(titleElement);
  textContainer.appendChild(textElement);

  if (image) {
    const iconContainer = document.createElement('div');
    iconContainer.className = 'md:min-w-24 flex justify-center md:block';

    const iconElement = document.createElement('div');
    iconElement.innerHTML = getSizedIcon(IconRegistry[IconCategory.LARGE][image], 96);
    iconContainer.appendChild(iconElement);
    contentWrapper.appendChild(iconContainer);
  }

  contentWrapper.appendChild(textContainer);

  cardContainer.appendChild(contentWrapper);

  if (buttonLabel) {
    const buttonElement = createButtonCTA({
      label: buttonLabel,
      classNames: 'rounded-tl-none rounded-tr-none',
      onClick: onClick,
      disabled: false,
      variant: ButtonCTAVariant.PRIMARY,
      nested: false,
      iconLeft: false,
      icon: 'arrowRight',
    });

    cardContainer.appendChild(buttonElement);
  }

  return cardContainer;
};
