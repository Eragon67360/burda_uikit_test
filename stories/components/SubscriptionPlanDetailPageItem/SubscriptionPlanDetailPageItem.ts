import { IconRegistry, IconCategory } from '@/stories/assets/icons';
import { createBadge } from '../Badge/Badge';
import { createButtonCTA, ButtonCTAVariant } from '../Button/CTA/ButtonCTA';
import { sanitizeHTMLRichContent } from '@/stories/utils/sanitize';

export type SubscriptionPlanDetailPageItemArgs = {
  title: string;
  subtitle?: string;
  badgeLabel?: string;
  priceInfo?: string;
  characteristics?: { icon?: string; content: string }[];
  backgroundColor?: 'white' | 'gray';
  maxWidth?: string;
  classNames?: string;
  primaryCTALabel: string;
  onPrimaryClick: () => void;
};

export const createSubscriptionPlanDetailPageItem = ({
  title,
  subtitle,
  badgeLabel,
  priceInfo,
  characteristics,
  backgroundColor = 'white',
  maxWidth = '460px',
  classNames = '',
  primaryCTALabel,
  onPrimaryClick,
}: SubscriptionPlanDetailPageItemArgs) => {
  const bgColor = backgroundColor === 'gray' ? 'bg-neutral-100' : 'bg-base-white';

  const container = document.createElement('div');
  container.className = `relative flex flex-col ${bgColor} rounded-lg shadow-[0px_8px_44px_0px_rgba(0,0,0,0.20)] ${classNames}`;
  container.style.maxWidth = maxWidth;

  if (badgeLabel) {
    const badge = createBadge(badgeLabel, 80, 'secondary', 'top-[unset] bottom-full translate-y-2/3 left-[unset] right-8');
    container.appendChild(badge);
  }

  const content = document.createElement('div');
  content.className = `grow p-8 flex flex-col items-center gap-8 ${badgeLabel ? 'pt-16' : 'pt-12'}`;

  const titleContainer = document.createElement('div');
  titleContainer.className = 'flex flex-col items-center gap-3';

  const titleElement = document.createElement('p');
  titleElement.className = 'text-subscription-small';
  titleElement.textContent = title;
  titleContainer.appendChild(titleElement);

  if (subtitle) {
    const subtitleElement = document.createElement('p');
    subtitleElement.className = 'text-subhead4';
    subtitleElement.textContent = subtitle;
    titleContainer.appendChild(subtitleElement);
  }

  content.appendChild(titleContainer);

  if (priceInfo) {
    const priceElement = document.createElement('p');
    priceElement.className = 'text-subhead3';
    priceElement.innerHTML = sanitizeHTMLRichContent(priceInfo);
    content.appendChild(priceElement);
  }

  if (characteristics?.length) {
    const list = document.createElement('ul');
    list.className = 'flex flex-col items-start gap-5 self-stretch px-8';

    characteristics.forEach((item) => {
      const listItem = document.createElement('li');
      listItem.className = 'flex items-start gap-4 text-bulletpoint-copy font-light';

      const iconSpan = document.createElement('span');
      iconSpan.innerHTML =
        item.icon && IconRegistry[IconCategory.SYSTEM][item.icon]
          ? IconRegistry[IconCategory.SYSTEM][item.icon]
          : item.icon && IconRegistry[IconCategory.SYSTEM].success;

      const contentSpan = document.createElement('span');
      contentSpan.innerHTML = item.content;

      listItem.appendChild(iconSpan);
      listItem.appendChild(contentSpan);
      list.appendChild(listItem);
    });

    content.appendChild(list);
  }

  container.appendChild(content);

  const button = createButtonCTA({
    label: primaryCTALabel,
    onClick: onPrimaryClick,
    disabled: false,
    variant: ButtonCTAVariant.PRIMARY,
    nested: true,
    iconLeft: false,
    icon: '',
    classNames: 'rounded-t-none rounded-b-lg',
  });

  container.appendChild(button);

  return container;
};
