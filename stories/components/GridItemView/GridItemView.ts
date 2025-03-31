import { ArticleArgs, createArticle } from "../Article/Article";
import { CardArgs, createCard } from "../Card/Card";
    
export type GridItemViewArgs = {
  gridItemType: 'article' | 'card';
  articles?: Array<ArticleArgs>;
  cards?: Array<CardArgs>;
  maxWidth?: string;
  centerItems?: boolean;
  fixedDoubleGrid?: boolean;
};

export const createGridItemView = ({
  articles = [],
  cards = [],
  gridItemType = 'article',
  maxWidth,
  centerItems = false,
  fixedDoubleGrid = false,
}: GridItemViewArgs) => {

  let elements = [];
  if (gridItemType === 'card') {
    elements = cards.map(card => createCard(card));
  } else {
    elements = articles.map(article => createArticle(article));
  }

  const container = document.createElement('div');
  container.className = 'w-full flex';
  container.style.maxWidth = maxWidth ?? 'unset';

  const innerContainer = document.createElement('div');
  innerContainer.className = 'w-full shrink flex gap-5 flex-wrap';
  if (centerItems) {
    innerContainer.classList.add('justify-center');
  }

  elements.forEach(element => {
    if (fixedDoubleGrid) {
      element.classList.add('!max-w-[calc(50%-20px)]', 'max-md:!max-w-full', 'max-md:!basis-full', '!w-[unset]');
      element.style.flexBasis = 'calc(50% - 20px)';
    }
    innerContainer.appendChild(element);
  });

  container.appendChild(innerContainer);

  return container;
}
