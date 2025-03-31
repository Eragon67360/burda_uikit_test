import { ArticleArgs, createArticle } from "../Article/Article";
import { CardArgs, createCard } from "../Card/Card";

export type GridItemViewArgs = {
  gridItemType: 'article' | 'card';
  articles?: Array<ArticleArgs>;
  cards?: Array<CardArgs>;
  maxWidth?: string;
};

export const createGridItemView = ({
  articles = [],
  cards = [],
  gridItemType = 'article',
  maxWidth,
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
  innerContainer.className = 'shrink flex gap-5 flex-wrap';

  elements.forEach(element => {
    innerContainer.appendChild(element);
  });

  container.appendChild(innerContainer);

  return container;
}
