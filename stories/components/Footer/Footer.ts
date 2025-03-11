import { IconRegistry, IconCategory } from "../../assets/icons";
import { createButtonLink } from "../Button/ButtonLink/ButtonLink";
export interface FooterArgs {
  // First Column - Completely Configurable
  column1: {
    logo?: {
      src: string;
      alt?: string;
      width?: number;
      height?: number;
    };
    phone?: {
      label?: string;
      number?: string;
      description?: string;
    };
    hints?: {
      firstHint?: {
        text?: string;
        linkText?: string;
        linkHref?: string;
      };
      secondHint?: string;
    };
    copyright?: string;
  };

  // Second Column - Completely Configurable
  column2: {
    title?: string;
    links?: Array<{ text: string; href: string }>;
    paymentSection?: {
      title?: string;
      icons?: Array<{
        src: string;
        alt: string;
        width?: number;
        height?: number;
      }>;
    };
    qualitySection?: {
      title?: string;
      icons?: Array<{
        src: string;
        alt: string;
        width?: number;
        height?: number;
      }>;
    };
    socialSection?: {
      title?: string;
      networks?: Array<{
        svg: string;
        href: string;
        alt: string;
        width?: number;
        height?: number;
      }>;
    };
  };

  // Third Column - Completely Configurable
  column3: {
    logo?: {
      src: string;
      alt?: string;
      width?: number;
      height?: number;
    };
    description?: {
      title?: string;
      text?: string;
    };
    linkColumns?: {
      column1?: Array<{ text: string; href: string }>;
      column2?: Array<{ text: string; href: string }>;
    };
    secondSection?: {
      title?: string;
      description?: string;
    };
    specialLinks?: Array<{ text: string; href: string }>;
    finalDescription?: string;
  };
}

export const createFooter = ({
  column1 = {},
  column2 = {},
  column3 = {}
}: FooterArgs) => {
  return `
    <footer class="bg-transparent">
      <div class="container max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-3">
        
        <!-- First Column -->
        <div class="bg-base-black text-base-white px-4 pt-4 w-full">
          <div class="bg-brand w-full h-fit md:h-[11.125rem] pr-6 md:pr-20 pl-6 md:pl-12 py-7 md:py-0 flex justify-start items-center rounded-sm">
          ${column1.logo ? `
            <img 
              src="${column1.logo.src}" 
              alt="${column1.logo.alt || 'Logo'}" 
              width="${column1.logo.width || 'auto'}" 
              height="${column1.logo.height || 'auto'}"
              class="scale-80 md:scale-100 w-[11.75rem] md:w-auto"
            />
          ` : ''}
          </div>
          <div class="pl-2 md:pl-12 pt-14 md:pt-16 pr-2 md:pr-8 pb-14 md:pb-16 flex flex-col" >
            ${column1.phone ? `
            <div class="mb-4">
              <div class="flex items-center gap-4 text-subhead2-desktop" >${IconRegistry[IconCategory.SYSTEM].phone}<p class="font-bold">${column1.phone.label || 'Phone'}</p></div>
              <p class="text-hotline-footer-default-mobile font-roboto-serif mt-4 w-3/4 proportional-nums">${column1.phone.number || ''}</p>
              <p class="text-footer-copy-desktop mt-3">${column1.phone.description || ''}</p>
            </div>
            ` : ''}
            
            <div class="mt-14 md:mt-32">
              ${column1.hints?.firstHint ? `
                <div class="flex gap-2 items-center flex-wrap">
                  <span class="text-footer-copy-mobile md:text-footer-copy-desktop">${column1.hints.firstHint.text}</span>
                  ${column1.hints.firstHint.linkText
        ? createButtonLink({
          label: column1.hints.firstHint.linkText,
          href: column1.hints.firstHint.linkHref || '#'
        }).outerHTML
        : ''}
                </div>
              ` : ''}
            
              ${column1.hints?.secondHint ? `
                <p class="text-footer-copy-mobile md:text-footer-copy-desktop mt-2">${column1.hints.secondHint}</p>
              ` : ''}
              
              ${column1.copyright ? `
                <p class="text-footer-copy-mobile md:text-footer-copy-desktop mt-8">${column1.copyright}</p>
              ` : ''}
            </div>
          </div>
        </div>

        <div class="bg-neutral-100 text-base-black px-6 md:px-16 py-14 md:py-16 flex flex-col gap-8 w-full">
          <div class="flex flex-col gap-4" >
            ${column2.title ? `
            <h2 class="text-subhead2-mobile md:text-subhead2-desktop">${column2.title}</h2>
            ` : ''}
            
            ${column2.links ? `
              <ul class="">
                ${column2.links.map(link => `
                  <li>
                    ${link
            ? createButtonLink({
              label: link.text,
              href: link.href || '#',
              iconLeft: true
            }).outerHTML
            : ''}
                  </li>
                `).join('')}
              </ul>
            ` : ''}
          </div>
          <div class="flex flex-col gap-4">
              ${column2.paymentSection ? `
            <p class="text-subhead3-mobile md:text-subhead3-desktop mb-2">${column2.paymentSection.title || 'Payment Methods'}</p>
            <div class="flex gap-2 mb-4 self-stretch items-start content-start flex-wrap">
              ${column2.paymentSection.icons?.map(icon => `
                <img 
                  src="${icon.src}" 
                  alt="${icon.alt}" 
                  width="${icon.width || 50}" 
                  height="${icon.height || 30}"
                />
              `).join('')}
            </div>
          ` : ''}
          </div>
          <div class="flex flex-col gap-4">
              ${column2.qualitySection ? `
            <p class="text-subhead3-mobile md:text-subhead3-desktop mb-2">${column2.qualitySection.title || 'Sicher & Nachhaltig'}</p>
            <div class="flex gap-8 items-start">
              ${column2.qualitySection.icons?.map(icon => `
                <img 
                  src="${icon.src}" 
                  alt="${icon.alt}" 
                  width="${icon.width || 50}" 
                  height="${icon.height || 30}"
                />
              `).join('')}
            </div>
          ` : ''}
          </div>
          <div class="flex flex-col gap-4">
          ${column2.socialSection ? `
            <p class="text-subhead3-mobile md:text-subhead3-desktop">${column2.socialSection.title || 'Follow Us'}</p>
            <div class="flex gap-8">
              ${column2.socialSection.networks?.map(network => `
                <a href="${network.href}">
                ${network.svg}
                  
                </a>
              `).join('')}
            </div>
          ` : ''}
          </div>
          
        </div>

        <!-- Third Column -->
        <div class="bg-base-white text-base-black w-full flex flex-col gap-8 px-6 md:px-16 py-14 md:py-16">
          <div class="flex flex-col gap-5">
            ${column3.logo ? `
            <img 
              src="${column3.logo.src}" 
              alt="${column3.logo.alt || 'Logo'}" 
              width="${column3.logo.width || 150}" 
              height="${column3.logo.height || 50}"
              class="mb-4"
            />
          ` : ''}
          
          ${column3.description ? `
            <p class="text-footer-copy-mobile md:text-footer-copy-desktop">
              <span class="font-bold">${column3.description.title || ''}: </span>
              ${column3.description.text || ''}
            </p>
          ` : ''}

          ${column3.linkColumns ? `
            <div class="grid grid-cols-2 gap-2 uppercase text-link-mobile md:text-link-desktop font-bold">
              <div>
                ${column3.linkColumns.column1?.map(link => `
                  <a href="${link.href}" class="block">${link.text}</a>
                `).join('')}
              </div>
              <div>
                ${column3.linkColumns.column2?.map(link => `
                  <a href="${link.href}" class="block">${link.text}</a>
                `).join('')}
              </div>
            </div>
          ` : ''}

          </div>
          
          <div class="flex flex-col gap-4" >
          ${column3.secondSection ? `
            <h4 class="text-subhead3-mobile md:text-subhead3-desktop">${column3.secondSection.title || ''}</h4>
            <p class="text-footer-copy-mobile md:text-footer-copy-desktop">${column3.secondSection.description || ''}</p>
          ` : ''}

          ${column3.specialLinks ? `
            <div class="grid grid-cols-2 gap-0">
              ${column3.specialLinks.map(link => `
                    ${link
                ? createButtonLink({
                  label: link.text,
                  href: link.href || '#',
                  iconLeft: true
                }).outerHTML
                : ''}
                  `).join('')}
            </div>
          ` : ''}

          ${column3.finalDescription ? `
            <p class="text-footer-copy-mobile md:text-footer-copy-desktop">${column3.finalDescription}</p>
          ` : ''}
          </div>
        </div>
      </div>
    </footer>
  `;
};
