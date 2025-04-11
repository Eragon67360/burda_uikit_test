import { ArticleArgs, createArticle } from '../Article/Article';
import { CardArgs, createCard } from '../Card/Card';

export type GridItemViewArgs = {
  gridItemType: 'article' | 'card';
  articles?: Array<ArticleArgs>;
  cards?: Array<CardArgs>;
  maxWidth?: string;
  centerItems?: boolean;
  fixedColumnCount?: number;
};

export const createGridItemView = ({
  articles = [],
  cards = [],
  gridItemType = 'article',
  maxWidth,
  centerItems = false,
  fixedColumnCount,
}: GridItemViewArgs) => {
  let elements = [];
  if (gridItemType === 'card') {
    elements = cards.map((card) => createCard(card));
  } else {
    elements = articles.map((article) => createArticle(article));
  }

  const container = document.createElement('div');
  container.className = 'w-full flex';
  container.style.maxWidth = maxWidth ?? 'unset';

  const innerContainer = document.createElement('div');
  innerContainer.className = 'w-full shrink flex gap-5 flex-wrap';
  if (centerItems) {
    innerContainer.classList.add('justify-center');
  }

  elements.forEach((element) => {
    if (fixedColumnCount) {
      const columnWidth = 100 / fixedColumnCount;
      element.classList.add(
        'max-md:!max-w-full',
        'max-md:!basis-full',
        'max-xl:!max-w-[calc(50%-20px)]',
        'max-xl:!basis-[calc(50%-20px)]',
        '!w-[unset]'
      );
      element.style.flexBasis = `calc(${columnWidth}% - 20px)`;
      element.style.maxWidth = `calc(${columnWidth}% - 20px)`;
    }
    innerContainer.appendChild(element);
  });

  container.appendChild(innerContainer);

  return container;
};
