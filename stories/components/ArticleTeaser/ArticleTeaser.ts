import { ArticleArgs, createArticle } from '../Article/Article';
import { ButtonCTAVariant, createButtonCTA } from '../Button/CTA/ButtonCTA';
import { createSlideshowNavButton } from '../Header/Slideshow/Navigation/SlideNavButton';
import { createTabs, TabItem } from '../Tabs/Tabs';
import './articleTeaser.css'
    
export type ArticleTeaserArgs = {
  title: string;
  tabItems: [TabItem, TabItem];
  buttonLabel?: string;
  articlesForTab1: Array<ArticleArgs>;
  articlesForTab2: Array<ArticleArgs>;
  backgroundColor?: 'white' | 'gray';
};

export const createArticleTeaser = ({
  title,
  tabItems,
  buttonLabel,
  articlesForTab1,
  articlesForTab2,
  backgroundColor = 'white',
}: ArticleTeaserArgs) => {
  const elements = articlesForTab1.map(article => createArticle({ ...article, backgroundColor }));
  return `
    <div class="w-full py-8 flex flex-col gap-8 overflow-hidden">
      <div class="w-full px-8 flex flex-col gap-8">
        <h2 class="w-full text-h2 text-center">${title}</h2>
        <div class="w-full flex items-center gap-8">
          <div class="basis-1/4 max-lg:hidden"></div>
          <div class="sm:basis-1/2 max-sm:grow max-w-[628px]">
            ${createTabs({
              items: tabItems,
              variant: 'plain',
              hasContent: false,
              selectedId: tabItems[0]?.id,
              background: backgroundColor,
              disabled: false,
            }).outerHTML}
          </div>
          <div class="basis-1/4 max-lg:basis-1/2 max-sm:hidden">
            ${!!buttonLabel
              ? `
                ${createButtonCTA({
                  variant: ButtonCTAVariant.TERTIARY,
                  nested: false,
                  disabled: false,
                  label: buttonLabel,
                  icon: 'arrowRight',
                  onClick: () => { },
                }).outerHTML}
              `
              : ``
            }
          </div>
        </div>
      </div>
      <div class="w-full flex">
        <div class="grow shrink px-8 flex gap-4 overflow-auto">
          ${elements.map((element) => element.outerHTML).join('')}
        </div>
      </div>
      <div class="w-full px-8 flex gap-4 hidden">
        ${createSlideshowNavButton({
          mode: 'previous',
          disabled: false,
          onClick: () => { },
        }).outerHTML}
        <div class="grow shrink">

        </div>
        ${createSlideshowNavButton({
          mode: 'next',
          disabled: false,
          onClick: () => { },
        }).outerHTML}
      </div>
      <div class="w-full px-8 sm:hidden">
        ${!!buttonLabel
          ? `
            ${createButtonCTA({
              variant: ButtonCTAVariant.TERTIARY,
              nested: false,
              disabled: false,
              label: buttonLabel,
              icon: 'arrowRight',
              classNames: 'w-full',
              onClick: () => { },
            }).outerHTML}
          `
          : ``
        }
      </div>
    </div>
  `
}
