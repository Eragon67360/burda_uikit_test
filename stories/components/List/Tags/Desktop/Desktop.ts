import { IconCategory, IconRegistry } from '@/assets/icons';
import './desktop.css';

export type DesktopTagArgs = {
  text: string;
  showIcon?: boolean;
};

export const createDesktopTag = ({ text, showIcon = true }: DesktopTagArgs) => {
  return `
    <div class="inline-flex items-center px-5 py-4 pl-5 gap-4 rounded-[3.25rem] border border-neutral-200 bg-white">
      ${showIcon ? IconRegistry[IconCategory.SYSTEM].success : ''}
      <span class="text-label-desktop">${text}</span>
    </div>
  `;
};

export const createTagGroup = (tags: DesktopTagArgs[]) => {
  return `
    <div class="flex flex-wrap justify-center gap-4">
      ${tags.map(tag => createDesktopTag(tag)).join('')}
    </div>
  `;
};