import { IconCategory, IconRegistry } from '../../assets/icons';
import { ButtonCTAVariant, createButtonCTA } from "../Button/CTA/ButtonCTA";
import { getSizedIcon } from '../../utils/iconUtils';

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
  const bgColor = backgroundColor === 'gray' ? 'bg-neutral-100' : 'bg-white';

  return `
    <div class="flex flex-col justify-stretch ${bgColor} rounded">
      <div class="p-8 flex flex-col md:flex-row space-x-8 space-y-8 h-full">
        <div class="w-full md:min-w-24 flex justify-center md:block">
          ${getSizedIcon(IconRegistry[IconCategory.LARGE][image], 96)}
        </div>
        <div class="w-auto text-center md:text-left">
          <h4 class="text-h4-desktop font-roboto-serif">${title}</h4>
          <p class="mt-4 text-xs">${text}</p>
        </div>
      </div>
      ${buttonLabel
      ? createButtonCTA({
        label: buttonLabel,
        classNames: 'rounded-tl-none rounded-tr-none',
        onClick: () => { },
        disabled: false,
        variant: ButtonCTAVariant.PRIMARY,
        nested: false,
        iconLeft: false,
        icon: 'arrowRight',
      }).outerHTML
      : ''
    }
    </div>
  `;
};
