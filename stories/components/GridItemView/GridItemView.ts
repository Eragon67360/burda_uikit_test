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
    elements = cards.map(card => createCard(card).outerHTML);
  } else {
    elements = articles.map(article => createArticle(article).outerHTML);
  }

  console.log('elements', elements);

  return `
    <div class="w-full flex" style="max-width: ${maxWidth ?? 'unset'};">
        <div class="shrink flex gap-5 flex-wrap">
          ${elements.join('')}
        </div>
    </div>
  `
}
