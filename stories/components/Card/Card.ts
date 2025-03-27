import { IconCategory, IconRegistry } from '../../assets/icons';
import { ButtonCTAVariant, createButtonCTA } from "../Button/CTA/ButtonCTA";
import { getSizedIcon } from '../../utils/iconUtils';
import { sanitizeHTML } from '@/stories/utils/sanitize';

export interface CardArgs {
  backgroundColor?: 'white' | 'gray';
  image: string;
  title: string;
  text: string;
  buttonLabel: string;
  onClick?: () => void;
}

export const createCard = ({
  backgroundColor = 'white',
  image,
  title,
  text,
  buttonLabel,
  onClick = () => { },
}: CardArgs) => {
  const cardContainer = document.createElement('div');
  cardContainer.className = `flex flex-col justify-stretch ${backgroundColor === 'gray' ? 'bg-neutral-100' : 'bg-white'} rounded`;

  const contentWrapper = document.createElement('div');
  contentWrapper.className = 'p-8 flex flex-col md:flex-row space-x-8 space-y-8 h-full';

  const iconContainer = document.createElement('div');
  iconContainer.className = 'w-full md:min-w-24 flex justify-center md:block';

  const iconElement = document.createElement('div');
  iconElement.innerHTML = getSizedIcon(IconRegistry[IconCategory.LARGE][image], 96);
  iconContainer.appendChild(iconElement);

  const textContainer = document.createElement('div');
  textContainer.className = 'w-auto text-center md:text-left';

  const titleElement = document.createElement('h4');
  titleElement.className = 'text-h4 font-roboto-serif';
  titleElement.textContent = sanitizeHTML(title);

  const textElement = document.createElement('p');
  textElement.className = 'mt-4 text-copy-small';
  textElement.innerHTML = text;

  textContainer.appendChild(titleElement);
  textContainer.appendChild(textElement);

  contentWrapper.appendChild(iconContainer);
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
