import './desktop.css'

export type DesktopTagArgs = {
    text: string;
    showIcon?: boolean;
};

const DesktopTagIcon = () => `
  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
    <g clip-path="url(#clip0_826_19057)">
      <path d="M10.5 0C4.986 0 0.5 4.486 0.5 10C0.5 15.514 4.986 20 10.5 20C16.014 20 20.5 15.514 20.5 10C20.5 4.486 16.014 0 10.5 0ZM10.5 18.1818C5.98848 18.1818 2.31818 14.5115 2.31818 10C2.31818 5.48855 5.98848 1.81818 10.5 1.81818C15.0115 1.81818 18.6818 5.48855 18.6818 10C18.6818 14.5115 15.0115 18.1818 10.5 18.1818Z" fill="black"/>
      <path d="M14.2508 6.46448L9.1081 11.6071L6.75113 9.25006C6.39616 8.89509 5.82052 8.89503 5.46549 9.25C5.11046 9.60503 5.11046 10.1806 5.46549 10.5356L8.46525 13.5355C8.63573 13.706 8.86695 13.8018 9.10804 13.8018H9.1081C9.34919 13.8018 9.5804 13.706 9.75089 13.5356L15.5364 7.75018C15.8914 7.39515 15.8914 6.81958 15.5364 6.46455C15.1814 6.10951 14.6058 6.10945 14.2508 6.46448Z" fill="black"/>
    </g>
    <defs>
      <clipPath id="clip0_826_19057">
        <rect width="20" height="20" fill="white" transform="translate(0.5)"/>
      </clipPath>
    </defs>
  </svg>
`;

export const createDesktopTag = ({ text, showIcon = true }: DesktopTagArgs) => {
    return `
    <div class="inline-flex items-center px-5 py-4 pl-5 gap-4 rounded-[3.25rem] border border-neutral-200 bg-white">
      ${showIcon ? DesktopTagIcon() : ''}
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