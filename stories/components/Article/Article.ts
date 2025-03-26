import { ButtonCTAVariant, createButtonCTA } from "../Button/CTA/ButtonCTA";

export type ArticleArgs = {
  backgroundColor?: 'white' | 'gray';
  title: string;
  image: string;
  imageAltText: string;
  buttonLabel: string;
  badgeText?: string;
  onClick?: () => void;
};

export const createArticle = ({
  backgroundColor = 'white',
  title,
  image,
  imageAltText = title,
  buttonLabel,
  badgeText,
  onClick = () => { },
}: ArticleArgs) => {

  const bgColor = backgroundColor === 'gray' ? 'bg-neutral-100' : 'bg-white';

  return `
    <div class="size-full min-w-48 p-4 flex flex-col justify-end gap-4 ${bgColor} rounded">
      <div class="relative h-0 grow w-full px-2.5">
        <img src="${image}" alt="${imageAltText}" class="size-full object-contain">
        ${!!badgeText && badgeText.length > 0
          ? `
            <div class="absolute top-0 left-0 p-2 min-w-11 min-h-11 aspect-square bg-primary-interaction rounded-full flex items-center justify-center">
              <div class="text-copy-small font-bold">${badgeText}</div>
            </div>
          `
          : ''
        }
      </div>
      <p class="text-label text-center">${title}</p>
      ${buttonLabel
        ? createButtonCTA({
          label: buttonLabel,
          onClick,
          disabled: false,
          variant: ButtonCTAVariant.PRIMARY,
          nested: true,
          iconLeft: false,
          icon: 'arrowRight',
        }).outerHTML
        : ''
      }
    </div>
  `
}
