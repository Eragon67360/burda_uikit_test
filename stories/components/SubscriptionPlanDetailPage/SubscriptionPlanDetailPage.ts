import { IconRegistry, IconCategory } from '@/stories/assets/icons';
import { createBadge } from '../Badge/Badge';
import { ButtonCTAVariant, createButtonCTA } from '../Button/CTA/ButtonCTA';
import './subscriptionPlanDetailPage.css'
    
export type SubscriptionPlanDetailPageArgs = {
  title: string;
  subtitle?: string;
  badgeLabel?: string;
  priceInfo?: string;
  characteristics?: { icon?: string, content: string }[];
  backgroundColor?: 'white' | 'gray';
  maxWidth?: string;
  primaryCTALabel: string;
  onPrimaryClick: () => void;
};

export const createSubscriptionPlanDetailPage = ({
  title,
  subtitle,
  badgeLabel,
  priceInfo,
  characteristics,
  backgroundColor = 'white',
  maxWidth = '460px',
  primaryCTALabel,
  onPrimaryClick,
}: SubscriptionPlanDetailPageArgs) => {
  const bgColor = backgroundColor === 'gray' ? 'bg-neutral-100' : 'bg-base-white';

  return `
    <div class="relative flex flex-col ${bgColor} rounded-lg shadow-[0px_8px_44px_0px_rgba(0,0,0,0.20)]" style="max-width: ${maxWidth};">
      ${badgeLabel && badgeLabel !== ''
        ? createBadge(badgeLabel, 42, 'secondary', 'top-[unset] bottom-[calc(100%-32px)] left-[unset] right-8').outerHTML
        : ''
      }
      <div class="p-8 flex flex-col items-center gap-8">
        <div class="flex flex-col items-center gap-3">
          <p class="text-subscription-small">${title}</p>
          ${subtitle ? `<p class="text-subhead4">${subtitle}</p>` : ''}
        </div>
        ${priceInfo ? `<p class="text-subhead3">${priceInfo}</p>` : ''}
        ${characteristics && characteristics.length > 0
          ? `
            <ul class="flex flex-col items-start gap-5 self-stretch px-8">
              ${characteristics.map(item => `
                <li class="flex items-start gap-4 text-bulletpoint-copy font-light">
                  <span>
                    ${item.icon && IconRegistry[IconCategory.SYSTEM][item.icon] ? IconRegistry[IconCategory.SYSTEM][item.icon] : item.icon && IconRegistry[IconCategory.SYSTEM].success}
                  </span>
                  <span>${item.content}</span>
                </li>
              `).join('')}
            </ul>
          `
          : ''
        }
      </div>
      ${createButtonCTA({
        label: primaryCTALabel,
        onClick: onPrimaryClick,
        disabled: false,
        variant: ButtonCTAVariant.PRIMARY,
        nested: true,
        iconLeft: false,
        icon: '',
        classNames: 'rounded-t-none rounded-b-lg'
      }).outerHTML}
    </div>
  `
}
