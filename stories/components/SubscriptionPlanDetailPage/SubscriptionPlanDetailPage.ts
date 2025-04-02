import { IconRegistry, IconCategory } from '@/stories/assets/icons';
import { ButtonCTAVariant, createButtonCTA } from '../Button/CTA/ButtonCTA';
import './subscriptionPlanDetailPage.css'
import { ButtonIconVariant, createButtonIcon } from '../Button/ButtonIcon/ButtonIcon';
import { createTabs, TabItem } from '../Tabs/Tabs';
import { SubscriptionPlanDetailPageItemArgs, createSubscriptionPlanDetailPageItem } from '../SubscriptionPlanDetailPageItem/SubscriptionPlanDetailPageItem';

export type SubscriptionPlanDetailPageArgs = {
  image?: string;
  imageAltText?: string;
  showMoreButtonLabel: string;
  showLessButtonLabel?: string;
  backgroundColor?: 'white' | 'gray';
  iconButtonIcon?: keyof typeof IconRegistry[IconCategory.SYSTEM];
  onIconButtonClick?: () => void;
  tertiaryButtonLabel?: string;
  tertiaryButtonIcon?: string;
  onTertiaryButtonClick?: () => void;
  table?: { title: string; text: string }[];
  tabItems: [TabItem, TabItem];
  elements?: SubscriptionPlanDetailPageItemArgs[];
  elementsForTab1?: SubscriptionPlanDetailPageItemArgs[];
  elementsForTab2?: SubscriptionPlanDetailPageItemArgs[];
};

export const createSubscriptionPlanDetailPage = ({
  image,
  imageAltText,
  showMoreButtonLabel,
  showLessButtonLabel = showMoreButtonLabel,
  backgroundColor = 'white',
  iconButtonIcon,
  onIconButtonClick,
  tertiaryButtonLabel,
  tertiaryButtonIcon,
  onTertiaryButtonClick,
  table,
  tabItems,
  elements,
  elementsForTab1,
  elementsForTab2,
}: SubscriptionPlanDetailPageArgs) => {
  const primaryElements = elements?.slice(0, 3) ?? [];
  const secondaryElements = elements?.slice(3) ?? [];
  const primaryElementsForTab1 = elementsForTab1?.slice(0, 3) ?? [];
  const secondaryElementsForTab1 = elementsForTab1?.slice(3) ?? [];
  const primaryElementsForTab2 = elementsForTab2?.slice(0, 3) ?? [];
  const secondaryElementsForTab2 = elementsForTab2?.slice(3) ?? [];

  let expanded = false;
  let selectedTab = tabItems ? tabItems[0].id : '';

  const container = document.createElement('div');
  container.className = 'pt-8 flex max-xl:flex-col gap-20 xl:gap-10 max-xl:items-center';

  const infoContainer = document.createElement('div');
  infoContainer.className = `xl:max-w-[256px] flex max-md:flex-col xl:flex-col items-start max-xl:items-center gap-10 max-xl:justify-center ${!tabItems ? 'xl:pt-10' : ''}`;

  if (image) {
    const img = document.createElement('img');
    img.src = image;
    img.alt = imageAltText || '';
    img.className = 'md:min-w-[240px] object-contain';
    infoContainer.appendChild(img);
  }

  const innerInfoContainer = document.createElement('div');
  innerInfoContainer.className = 'w-full flex flex-col max-md:items-center xl:items-center gap-10';

  if (iconButtonIcon || tertiaryButtonLabel) {
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'w-full flex items-center max-md:justify-center xl:justify-center gap-2';

    if (iconButtonIcon) {
      const iconButton = createButtonIcon({
        variant: ButtonIconVariant.BIG,
        icon: iconButtonIcon,
        backgroundColor: 'neutral-200',
        onClick: onIconButtonClick,
        disabled: false,
      });
      buttonContainer.appendChild(iconButton);
    }

    if (tertiaryButtonLabel) {
      const tertiaryButton = createButtonCTA({
        label: tertiaryButtonLabel,
        icon: tertiaryButtonIcon,
        variant: ButtonCTAVariant.TERTIARY,
        iconLeft: false,
        disabled: false,
        nested: false,
        onClick: onTertiaryButtonClick,
      });
      buttonContainer.appendChild(tertiaryButton);
    }

    innerInfoContainer.appendChild(buttonContainer);
  }

  if (table) {
    const tableElement = document.createElement('table');
    
    table.forEach((item, index) => {
      const desktopRow = document.createElement('tr');
      desktopRow.className = `max-md:hidden xl:hidden ${index % 2 === 0 ? 'bg-neutral-50' : 'bg-neutral-100'} ${index > 0 ? 'border-t border-neutral-200' : ''}`;
      
      const titleCell = document.createElement('td');
      titleCell.className = 'px-4 py-3 text-copy font-bold';
      titleCell.textContent = item.title;
      
      const textCell = document.createElement('td');
      textCell.className = 'px-4 py-3 text-copy';
      textCell.textContent = item.text;
      
      desktopRow.appendChild(titleCell);
      desktopRow.appendChild(textCell);
      tableElement.appendChild(desktopRow);

      const mobileTitleRow = document.createElement('tr');
      mobileTitleRow.className = `md:hidden xl:table-row bg-neutral-50 ${index > 0 ? 'border-t border-neutral-200' : ''}`;
      const mobileTitleCell = document.createElement('td');
      mobileTitleCell.className = 'px-4 py-3 text-copy font-bold';
      mobileTitleCell.textContent = item.title;
      mobileTitleRow.appendChild(mobileTitleCell);
      
      const mobileTextRow = document.createElement('tr');
      mobileTextRow.className = 'md:hidden xl:table-row bg-neutral-100';
      const mobileTextCell = document.createElement('td');
      mobileTextCell.className = 'px-4 py-3 text-copy';
      mobileTextCell.textContent = item.text;
      mobileTextRow.appendChild(mobileTextCell);
      
      tableElement.appendChild(mobileTitleRow);
      tableElement.appendChild(mobileTextRow);
    });

    innerInfoContainer.appendChild(tableElement);
  }

  infoContainer.appendChild(innerInfoContainer);
  container.appendChild(infoContainer);

  const mainContentContainer = document.createElement('div');
  mainContentContainer.className = 'grow flex flex-col gap-8 md:gap-6 items-center';

  if (tabItems) {
    const tabsContainer = document.createElement('div');
    tabsContainer.className = 'w-full max-w-[740px] pb-8';
    
    const tabs = createTabs({
      items: tabItems,
      selectedId: tabItems[0].id,
      variant: 'plain',
      color: 'primary',
      hasContent: false,
      background: backgroundColor,
      disabled: false,
      onTabSelected: selectTab,
    });
    
    tabsContainer.appendChild(tabs);
    mainContentContainer.appendChild(tabsContainer);
  }

  const createElementContainer = (elements: SubscriptionPlanDetailPageItemArgs[], isSecondary = false) => {
    const container = document.createElement('div');
    container.className = `w-full flex max-lg:flex-col gap-8 lg:gap-6 justify-center ${isSecondary ? 'flex-wrap' : ''}`;
    const maxWidth = '460px'
    elements.forEach(element => {
      const elementWrapper = document.createElement('div');
      elementWrapper.className = `max-lg:w-full lg:basis-[calc(33%-20px)] grow ${isSecondary ? 'flex-auto' : ''} flex flex-col gap-8`;
      elementWrapper.style.maxWidth = maxWidth;
      
      const elementComponent = createSubscriptionPlanDetailPageItem({
        ...element,
        classNames: isSecondary ? 'h-full' : '',
        maxWidth,
      });
      
      elementWrapper.appendChild(elementComponent);
      container.appendChild(elementWrapper);
    });

    return container;
  };

  const primaryElementsContainer = createElementContainer(primaryElements);
  const secondaryElementsContainer = createElementContainer(secondaryElements, true);
  const primaryElementsForTab1Container = createElementContainer(primaryElementsForTab1);
  const secondaryElementsForTab1Container = createElementContainer(secondaryElementsForTab1, true);
  const primaryElementsForTab2Container = createElementContainer(primaryElementsForTab2);
  const secondaryElementsForTab2Container = createElementContainer(secondaryElementsForTab2, true);

  if (!tabItems) {
    mainContentContainer.appendChild(primaryElementsContainer);
    mainContentContainer.appendChild(secondaryElementsContainer);
    secondaryElementsContainer.classList.add('hidden');
  } else {
    mainContentContainer.appendChild(primaryElementsForTab1Container);
    mainContentContainer.appendChild(secondaryElementsForTab1Container);
    mainContentContainer.appendChild(primaryElementsForTab2Container);
    mainContentContainer.appendChild(secondaryElementsForTab2Container);
    secondaryElementsForTab1Container.classList.add('hidden');
    secondaryElementsForTab2Container.classList.add('hidden');
    if (selectedTab === tabItems[0].id) {
      primaryElementsForTab2Container.classList.add('hidden');
    } else {
      primaryElementsForTab1Container.classList.add('hidden');
    }
  }

  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'w-full flex justify-center pt-10';
  
  const showMoreButton = createButtonCTA({
    label: showMoreButtonLabel,
    onClick: () => toggleExpanded(!expanded),
    disabled: false,
    variant: ButtonCTAVariant.SECONDARY,
    nested: false,
    iconLeft: false,
    icon: 'chevronDown',
  });

  const showLessButton = createButtonCTA({
    label: showLessButtonLabel,
    onClick: () => toggleExpanded(!expanded),
    disabled: false,
    variant: ButtonCTAVariant.SECONDARY,
    nested: false,
    iconLeft: false,
    icon: 'chevronUp',
  });

  buttonContainer.appendChild(showMoreButton);
  buttonContainer.appendChild(showLessButton);
  mainContentContainer.appendChild(buttonContainer);

  container.appendChild(mainContentContainer);

  function getCurrentSecondaryElements () {
    if (!tabItems) return secondaryElements;
    if (selectedTab === tabItems[0].id) return secondaryElementsForTab1;
    return secondaryElementsForTab2;
  }

  function getCurrentPrimaryElementsContainer () {
    if (!tabItems) return primaryElementsContainer;
    if (selectedTab === tabItems[0].id) return primaryElementsForTab1Container;
    return primaryElementsForTab2Container;
  }

  function getCurrentSecondaryElementsContainer () {
    if (!tabItems) return secondaryElementsContainer;
    if (selectedTab === tabItems[0].id) return secondaryElementsForTab1Container;
    return secondaryElementsForTab2Container;
  }

  function selectTab (id?: string) {
    console.log('Selected tab:', id);
    if (!tabItems) return;
    getCurrentPrimaryElementsContainer().classList.add('hidden');
    getCurrentSecondaryElementsContainer().classList.add('hidden');
    selectedTab = id ?? tabItems[0].id;
    getCurrentPrimaryElementsContainer().classList.remove('hidden');
    toggleExpanded(false);
  }

  function toggleExpanded (newVal: boolean) {
    console.log('Toggle expanded:', newVal);
    expanded = newVal;
    getCurrentPrimaryElementsContainer().classList.add(expanded ? 'items-end' : 'items-center');
    getCurrentPrimaryElementsContainer().classList.remove(expanded ? 'items-center' : 'items-end');
    getCurrentSecondaryElementsContainer().classList.toggle('hidden', !expanded);
    setExpandButton();
  }

  function setExpandButton () {
    if (getCurrentSecondaryElements().length === 0) {
      showMoreButton.classList.add('hidden');
      showLessButton.classList.add('hidden');
      return;
    }
    showMoreButton.classList.toggle('hidden', expanded);
    showLessButton.classList.toggle('hidden', !expanded);
  }

  function init () {
    selectTab();
    toggleExpanded(false);
  }

  init();

  return container;
};
