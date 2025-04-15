import { ArticleArgs, createArticle } from '../Article/Article';
import { ButtonCTAVariant, createButtonCTA } from '../Button/CTA/ButtonCTA';
import { createHorizontalScroller } from '../HorizontalScroller/HorizontalScroller';
import { createTabs, TabItem } from '../Tabs/Tabs';
import './articleTeaser.css';

export type ArticleTeaserArgs = {
  title: string;
  tabItems: [TabItem, TabItem];
  tertiaryButtonLabel?: string;
  articlesForTab1: Array<ArticleArgs>;
  articlesForTab2: Array<ArticleArgs>;
  backgroundColor?: 'white' | 'gray';
  onTertiaryButtonClick?: () => void;
};

export const createArticleTeaser = ({
  title,
  tabItems,
  tertiaryButtonLabel,
  articlesForTab1,
  articlesForTab2,
  backgroundColor = 'white',
  onTertiaryButtonClick = () => {},
}: ArticleTeaserArgs) => {
  let elements = articlesForTab1.map((article) => createArticle({ ...article, backgroundColor }));

  const selectTab = (id: string) => {
    if (id === tabItems[1].id) {
      elements = articlesForTab2.map((article) => createArticle({ ...article, backgroundColor }));
    } else {
      elements = articlesForTab1.map((article) => createArticle({ ...article, backgroundColor }));
    }

    const elementContainer = document.querySelector('.element-container');
    if (!elementContainer) return;
    elementContainer.classList.add('animate-article-teaser-disappear');
    setTimeout(() => {
      elementContainer.innerHTML = '';
      elementContainer.classList.remove('animate-article-teaser-disappear');
      elementContainer.classList.add('animate-article-teaser-appear');
      elementContainer.appendChild(
        createHorizontalScroller({
          elements,
          currentPage: 1,
          showControls: true,
          horizontalScrollContainerPadding: '32px',
        })
      );
      setTimeout(() => {
        elementContainer.classList.remove('animate-article-teaser-appear');
      }, 200);
    }, 200);
  };

  const container = document.createElement('div');
  container.className = 'w-full py-8 flex flex-col gap-8';

  const headlineContainer = document.createElement('div');
  headlineContainer.className = 'w-full px-8 flex flex-col gap-8';

  const titleElement = document.createElement('h2');
  titleElement.className = 'w-full text-h2 text-center';
  titleElement.textContent = title;

  headlineContainer.appendChild(titleElement);

  const controlsContainer = document.createElement('div');
  controlsContainer.className = 'w-full flex items-center gap-8';

  const spacerElement = document.createElement('div');
  spacerElement.className = 'basis-1/4 max-lg:hidden';

  controlsContainer.appendChild(spacerElement);

  const tabsContainer = document.createElement('div');
  tabsContainer.className = 'sm:basis-1/2 max-sm:grow max-w-[628px]';
  tabsContainer.appendChild(
    createTabs({
      items: tabItems,
      variant: 'plain',
      hasContent: false,
      selectedId: tabItems[0]?.id,
      background: backgroundColor,
      disabled: false,
      onTabSelected: selectTab,
    })
  );

  controlsContainer.appendChild(tabsContainer);

  const buttonContainerDesktop = document.createElement('div');
  buttonContainerDesktop.className = 'basis-1/4 max-lg:basis-1/2 max-sm:hidden';
  if (tertiaryButtonLabel) {
    buttonContainerDesktop.appendChild(
      createButtonCTA({
        variant: ButtonCTAVariant.TERTIARY,
        nested: false,
        disabled: false,
        label: tertiaryButtonLabel,
        icon: 'arrowRight',
        onClick: onTertiaryButtonClick,
      })
    );
  }

  controlsContainer.appendChild(buttonContainerDesktop);
  headlineContainer.appendChild(controlsContainer);
  container.appendChild(headlineContainer);

  const elementContainer = document.createElement('div');
  elementContainer.className = 'element-container w-full flex mx-auto';
  elementContainer.appendChild(
    createHorizontalScroller({
      elements,
      currentPage: 1,
      showControls: true,
      horizontalScrollContainerPadding: '32px',
    })
  );

  container.appendChild(elementContainer);

  const buttonContainerMobile = document.createElement('div');
  buttonContainerMobile.className = 'w-full px-8 sm:hidden';
  if (tertiaryButtonLabel) {
    buttonContainerMobile.appendChild(
      createButtonCTA({
        variant: ButtonCTAVariant.TERTIARY,
        nested: false,
        disabled: false,
        label: tertiaryButtonLabel,
        icon: 'arrowRight',
        classNames: 'w-full',
        onClick: onTertiaryButtonClick,
      })
    );
  }

  container.appendChild(buttonContainerMobile);

  return container;
};
