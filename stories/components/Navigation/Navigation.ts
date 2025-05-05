import { createSearch, SearchArgs } from '@/components/Form/Search/Search';
import { IconCategory, IconRegistry } from '@/stories/assets/icons';
import { ButtonCTAVariant, ButtonIconVariant, LanguageDropdownArgs } from '@/stories/types';
import { getSizedIcon } from '@/stories/utils/iconUtils';
import { createButtonIcon } from '../Button/ButtonIcon/ButtonIcon';
import { createButtonLink } from '../Button/ButtonLink/ButtonLink';
import { createCartAndPay } from '../Button/CartAndPay/CartAndPay';
import { createButtonCTA } from '../Button/CTA/ButtonCTA';
import { createFlyout, LinkItem } from './Flyout/Flyout';
import { createLanguageDropdown } from './LanguageDropdown/LanguageDropdown';
import './navigation.css';

export type NavigationItemType = 'flyout' | 'link';

export type BaseNavigationItem = {
  type: NavigationItemType;
  order: number;
};

export type LinkNavigationItem = BaseNavigationItem & {
  type: 'link';
  label: string;
  href: string;
  target: '_blank' | '_self' | '_parent' | '_top';
};

export type FlyoutNavigationItem = BaseNavigationItem & {
  type: 'flyout';
  label: string;
  flyoutItems: LinkItem[];
  alwaysFlyout?: boolean;
};

export type NavigationArgs = {
  logoSrc: string;
  logoAltText: string;
  logo2Src?: string;
  logo2AltText?: string;
  has2LinesNavigation: boolean;
  navigationItems: Array<FlyoutNavigationItem>;
  hasSearch: boolean;
  searchProps?: SearchArgs;
  hasLanguageDropdown: boolean;
  languageProps?: LanguageDropdownArgs;
  loginButtonText: string;
  loginButtonIcon: string;
  onClickLoginButton: () => void;
  cartButtonText: string;
  cartButtonIcon: string;
  onClickCartButton: () => void;
  addNavigationItem?: (item: LinkNavigationItem | FlyoutNavigationItem) => void;
  mobileBackButtonLabel?: string;
  mobileMenuTitle?: string;
  cartItems: any[];
};

export const createNavigation = ({
  logoSrc,
  logoAltText,
  logo2Src,
  logo2AltText,
  has2LinesNavigation,
  navigationItems,
  hasSearch,
  searchProps,
  hasLanguageDropdown,
  languageProps,
  loginButtonText,
  loginButtonIcon,
  cartButtonText,
  cartButtonIcon,
  onClickLoginButton,
  onClickCartButton,
  mobileBackButtonLabel,
  mobileMenuTitle,
  cartItems,
}: NavigationArgs) => {
  const navigationContainer = document.createElement('div');
  let isMobileMenuOpen = false;
  /** ---------------------------------------- DESKTOP ---------------------------------------- */

  const sortedNavigationItems = navigationItems.sort((a, b) => a.order - b.order);
  let currentNavigationLayout = has2LinesNavigation ? 2 : 1;

  const navigationDesktopContainer = document.createElement('div');
  const navigationWrapper = document.createElement('div');
  const contentWrapper = document.createElement('div');
  const firstLineWrapper = document.createElement('div');
  const secondLineWrapper = document.createElement('div');
  const leftWrapper = document.createElement('div');
  const rightWrapper = document.createElement('div');

  navigationDesktopContainer.className = `hidden md:block w-full max-w-[90rem] fixed top-0 left-1/2 -translate-x-1/2 bg-transparent px-4 py-4 mx-auto transition-all duration-300 ease-in-out z-50`;
  navigationWrapper.className = `${
    has2LinesNavigation ? 'h-[6.375rem]' : 'h-18'
  } transition-all duration-300 rounded-t-lg rounded-b-lg w-full bg-neutral-100 shadow mx-auto flex items-center pl-4`;
  contentWrapper.className = ` w-full h-full flex transition-opacity duration-300 ${
    has2LinesNavigation ? 'flex-col items-end' : 'flex-row items-center justify-between'
  }`;

  firstLineWrapper.className = `flex w-full z-50 transition-al duration-300 items-start ${
    has2LinesNavigation ? 'justify-end h-[3.5rem]' : 'justify-between h-full'
  }`;

  leftWrapper.className = `
        mr-auto 
        items-center  
        justify-between 
        z-50 
        flex 
        transition-all duration-300 
        ${
          has2LinesNavigation
            ? 'opacity-0 !w-0 pointer-events-none translate-y-4 !h-full'
            : 'opacity-100 w-fit pointer-events-auto translate-y-0 h-full'
        }
    `;

  rightWrapper.className = `flex items-center ${has2LinesNavigation ? 'h-[3.5rem]' : 'h-full'}`;

  secondLineWrapper.className = `
    justify-start 
    items-center 
    mr-auto 
    w-full 
    z-40 flex
     transition-[opacity,height] duration-300 
    ${
      has2LinesNavigation
        ? 'opacity-100 !h-[2.875rem] pointer-events-auto translate-y-0 w-fit'
        : 'opacity-0 h-0 pointer-events-none translate-y-4 !w-0'
    }
    `;

  const updateNavigationLayout = (forceOneLine = false) => {
    if (forceOneLine || currentNavigationLayout === 2) {
      navigationWrapper.classList.remove('h-[6.375rem]');
      navigationWrapper.classList.add('h-18');

      contentWrapper.classList.remove('flex-col', 'items-end');
      contentWrapper.classList.add('flex-row', 'items-start', 'justify-between', 'h-fit');

      rightWrapper.classList.remove('h-[3.5rem]');
      rightWrapper.classList.add('h-full');

      firstLineWrapper.classList.remove('h-[3.5rem]', 'justify-end');
      firstLineWrapper.classList.add('h-full', 'justify-between');

      secondLineWrapper.classList.add('opacity-0', 'h-0', 'pointer-events-none', 'translate-y-4', '!w-0');
      secondLineWrapper.classList.remove('opacity-100', '!h-[2.875rem]', 'pointer-events-auto', 'translate-y-0', 'w-fit');

      leftWrapper.classList.remove('opacity-0', 'w-0', 'pointer-events-none', 'translate-y-4');
      leftWrapper.classList.add('opacity-100', 'w-fit', 'pointer-events-auto', 'translate-y-0');

      if (has2LinesNavigation) {
        if (hasSearch && searchProps) {
          const searchContainer = createSearch({
            ...searchProps,
            isSmall: true,
            classNames: ' mr-4 ',
          });

          const existingSearch = rightWrapper.querySelector('.search-container');
          if (existingSearch) {
            rightWrapper.replaceChild(searchContainer, existingSearch);
          }
        }

        if (hasLanguageDropdown && languageProps) {
          const languageDropdownContainer = createLanguageDropdown({
            ...languageProps,
            isCompressed: true,
          });

          const existingLanguageDropdown = rightWrapper.querySelector('.language-dropdown');
          if (existingLanguageDropdown) {
            rightWrapper.replaceChild(languageDropdownContainer, existingLanguageDropdown);
          }
        }
      }

      currentNavigationLayout = 1;
    }
  };

  const resetNavigationLayout = () => {
    if (has2LinesNavigation) {
      navigationWrapper.classList.add('h-[6.375rem]');
      navigationWrapper.classList.remove('h-18');

      contentWrapper.classList.add('flex-col', 'items-end');
      contentWrapper.classList.remove('flex-row', 'items-center', 'justify-between');

      rightWrapper.classList.add('h-[3.5rem]');
      rightWrapper.classList.remove('h-full');

      leftWrapper.classList.add('opacity-0', 'w-0', 'pointer-events-none', 'translate-y-4');
      leftWrapper.classList.remove('opacity-100', 'w-fit', 'pointer-events-auto', 'translate-y-0');

      secondLineWrapper.classList.remove('opacity-0', 'h-0', 'pointer-events-none', 'translate-y-4', '!w-0');
      secondLineWrapper.classList.add('opacity-100', '!h-[2.875rem]', 'pointer-events-auto', 'translate-y-0', 'w-fit');

      firstLineWrapper.classList.remove('h-full', 'justify-between');
      firstLineWrapper.classList.add('h-[3.5rem]', 'justify-end');

      if (hasSearch && searchProps) {
        const searchContainer = createSearch({
          ...searchProps,
          isSmall: false,
          classNames: 'mr-4',
        });

        const existingSearch = rightWrapper.querySelector('.search-container');
        if (existingSearch) {
          rightWrapper.replaceChild(searchContainer, existingSearch);
        }
      }

      if (hasLanguageDropdown && languageProps) {
        const languageDropdownContainer = createLanguageDropdown({
          ...languageProps,
          isCompressed: false,
        });

        const existingLanguageDropdown = rightWrapper.querySelector('.language-dropdown');
        if (existingLanguageDropdown) {
          rightWrapper.replaceChild(languageDropdownContainer, existingLanguageDropdown);
        }
      }
      while (leftWrapper.firstChild) {
        leftWrapper.removeChild(leftWrapper.firstChild);
      }
      while (secondLineWrapper.firstChild) {
        secondLineWrapper.removeChild(secondLineWrapper.firstChild);
      }
      sortedNavigationItems.forEach((item) => {
        if (!item.alwaysFlyout) {
          item.flyoutItems.forEach((subItem) => {
            const itemButton = document.createElement('a');
            itemButton.text = subItem.label;
            itemButton.href = subItem.href;
            itemButton.className = `
                        flex 
                        items-center 
                        justify-center 
                        h-full 
                        gap-2 
                        px-4 
                        py-2 
                        w-fit 
                        text-nowrap 
                        flex-nowrap
                        text-center 
                        text-sm 
                        font-semibold 
                        rounded-none 
                        transition-all 
                        duration-300 
                        cursor-pointer 
                        hover:bg-secondary-light 
                    `;

            secondLineWrapper.appendChild(itemButton);
            leftWrapper.appendChild(itemButton.cloneNode(true));
          });
        } else {
          const flyout = createFlyout({
            variant: 'sublinks',
            triggerLabel: item.label,
            linkItems: item.flyoutItems,
            has2LinesNavigation: has2LinesNavigation,
          });

          secondLineWrapper.appendChild(cloneFlyoutWithListeners(flyout));
          leftWrapper.appendChild(cloneFlyoutWithListeners(flyout));
        }
      });

      currentNavigationLayout = 2;
    } else {
      if (hasSearch && searchProps) {
        const searchContainer = createSearch({
          ...searchProps,
          classNames: 'mr-4',
        });

        const existingSearch = rightWrapper.querySelector('.search-container');
        if (existingSearch) {
          rightWrapper.replaceChild(searchContainer, existingSearch);
        }
      }
    }
  };

  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const intersectionThreshold = 150;

    if (scrollPosition >= intersectionThreshold) {
      navigationDesktopContainer.classList.remove('py-4');
      navigationWrapper.classList.remove('rounded-t-lg');
      ctaContainer.classList.remove('rounded-se-lg');
      ctaContainer.classList.add('rounded-ee-lg');
      updateNavigationLayout(true);

      if (has2LinesNavigation) {
        while (leftWrapper.firstChild) {
          leftWrapper.removeChild(leftWrapper.firstChild);
        }
        while (secondLineWrapper.firstChild) {
          secondLineWrapper.removeChild(secondLineWrapper.firstChild);
        }

        sortedNavigationItems.forEach((item) => {
          const shouldConvertToFlyout = !item.alwaysFlyout && item.flyoutItems.length > 1;

          if (shouldConvertToFlyout) {
            const flyout = createFlyout({
              variant: 'sublinks',
              triggerLabel: item.label,
              linkItems: item.flyoutItems,
              has2LinesNavigation: has2LinesNavigation,
            });

            secondLineWrapper.appendChild(cloneFlyoutWithListeners(flyout));
            leftWrapper.appendChild(cloneFlyoutWithListeners(flyout));
          } else {
            item.flyoutItems.forEach((subItem) => {
              const itemButton = document.createElement('a');
              itemButton.text = subItem.label;
              itemButton.href = subItem.href;
              itemButton.className = `
                                flex 
                                items-center 
                                justify-center 
                                h-full 
                                gap-2 
                                px-4 
                                py-2 
                                w-fit 
                                text-nowrap 
                                flex-nowrap
                                text-center 
                                text-sm 
                                font-semibold 
                                rounded-none 
                                transition-all 
                                duration-300 
                                cursor-pointer 
                                hover:bg-secondary-light 
                            `;

              secondLineWrapper.appendChild(itemButton);
              leftWrapper.appendChild(itemButton.cloneNode(true));
            });
          }
        });
      }
    } else {
      navigationDesktopContainer.classList.add('py-4');
      navigationWrapper.classList.add('rounded-t-lg');
      ctaContainer.classList.remove('rounded-ee-lg');
      ctaContainer.classList.add('rounded-se-lg');
      resetNavigationLayout();
    }
  });

  const logoContainer = document.createElement('img');
  logoContainer.src = logoSrc;
  logoContainer.alt = logoAltText;
  logoContainer.className = 'h-[2.8rem] w-auto ml-2 mr-3';

  const logo2Container = document.createElement('img');
  logo2Container.src = logo2Src;
  logo2Container.alt = logo2AltText;
  logo2Container.className = 'h-[2.8rem] w-auto ml-2 mr-3';

  sortedNavigationItems.forEach((item) => {
    if (!has2LinesNavigation) {
      if (item.alwaysFlyout) {
        const flyout = createFlyout({
          variant: 'sublinks',
          triggerLabel: item.label,
          linkItems: item.flyoutItems,
          has2LinesNavigation: has2LinesNavigation,
        });

        leftWrapper.appendChild(cloneFlyoutWithListeners(flyout));
      } else {
        if (item.flyoutItems.length === 1) {
          const itemButton = document.createElement('a');
          itemButton.text = item.flyoutItems[0].label;
          itemButton.href = item.flyoutItems[0].href;
          itemButton.className = `
                    flex 
                    items-center 
                    justify-center 
                    h-full 
                    gap-2 
                    px-4 
                    py-2 
                    w-fit 
                    text-nowrap 
                    flex-nowrap
                    text-center 
                    text-sm 
                    font-semibold 
                    rounded-none 
                    transition-all 
                    duration-300 
                    cursor-pointer 
                    hover:bg-secondary-light 
                `;

          leftWrapper.appendChild(itemButton);
        } else {
          const flyout = createFlyout({
            variant: 'sublinks',
            triggerLabel: item.label,
            linkItems: item.flyoutItems,
            has2LinesNavigation: has2LinesNavigation,
          });

          leftWrapper.appendChild(cloneFlyoutWithListeners(flyout));
        }
      }
    } else {
      const renderAsLinks = !item.alwaysFlyout;

      if (renderAsLinks) {
        item.flyoutItems.forEach((subItem) => {
          const itemButton = document.createElement('a');
          itemButton.text = subItem.label;
          itemButton.href = subItem.href;
          itemButton.className = `
                    flex 
                    items-center 
                    justify-center 
                    h-full 
                    gap-2 
                    px-4 
                    py-2 
                    w-fit 
                    text-nowrap 
                    flex-nowrap
                    text-center 
                    text-sm 
                    font-semibold 
                    rounded-none 
                    transition-all 
                    duration-300 
                    cursor-pointer 
                    hover:bg-secondary-light 
                `;

          secondLineWrapper.appendChild(itemButton);
          leftWrapper.appendChild(itemButton.cloneNode(true));
        });
      } else {
        const flyout = createFlyout({
          variant: 'sublinks',
          triggerLabel: item.label,
          linkItems: item.flyoutItems,
          has2LinesNavigation: has2LinesNavigation,
        });

        secondLineWrapper.appendChild(cloneFlyoutWithListeners(flyout));
        leftWrapper.appendChild(cloneFlyoutWithListeners(flyout));
      }
    }
  });

  if (hasSearch && searchProps) {
    const searchContainer = createSearch({
      placeholder: searchProps.placeholder,
      results: searchProps.results,
      emptyText: searchProps.emptyText,
      isSmall: has2LinesNavigation ? false : searchProps.isSmall,
      classNames: 'mr-4',
    });
    rightWrapper.appendChild(searchContainer);
  }

  if (hasLanguageDropdown && languageProps) {
    const languageDropdownContainer = createLanguageDropdown({
      label: languageProps.label,
      options: languageProps.options,
      isCompressed: has2LinesNavigation ? false : languageProps.isCompressed,
      selectedLanguage: languageProps.selectedLanguage,
    });
    rightWrapper.appendChild(languageDropdownContainer);
  }

  const ctaContainer = document.createElement('div');
  ctaContainer.className = `flex items-center h-full overflow-hidden w-fit min-w-fit rounded-se-lg ${
    has2LinesNavigation ? '' : 'rounded-ee-lg'
  }`;

  const loginButton = createButtonCTA({
    variant: ButtonCTAVariant.LARGE_LOGIN,
    nested: false,
    disabled: false,
    label: loginButtonText,
    icon: loginButtonIcon,
    iconLeft: false,
    onClick: onClickLoginButton,
    classNames: '!h-18',
  });
  const cartButton = createCartAndPay({
    items: cartItems,
    disabled: false,
    label: cartButtonText,
    icon: cartButtonIcon,
    onClick: onClickCartButton,
  });

  if (loginButtonText.length) ctaContainer.appendChild(loginButton);
  ctaContainer.appendChild(cartButton);

  rightWrapper.appendChild(ctaContainer);

  firstLineWrapper.appendChild(leftWrapper);
  firstLineWrapper.appendChild(rightWrapper);
  contentWrapper.appendChild(firstLineWrapper);
  contentWrapper.appendChild(secondLineWrapper);
  navigationWrapper.appendChild(logoContainer);

  if (logo2Src) {
    navigationWrapper.appendChild(logo2Container);
  }

  navigationWrapper.appendChild(contentWrapper);
  navigationDesktopContainer.appendChild(navigationWrapper);

  /** ---------------------------------------- MOBILE ---------------------------------------- */

  const navigationMobileContainer = document.createElement('div');
  navigationMobileContainer.className =
    'flex md:hidden border-b-2 border-brand bg-neutral-50 h-[3.25rem] w-full fixed top-0 left-0 justify-between z-50';

  const mobileLeftTrigger = document.createElement('div');
  mobileLeftTrigger.className = 'flex ';

  const searchTriggerWrapper = document.createElement('div');
  searchTriggerWrapper.className = 'relative w-12 flex items-center justify-center';

  const menuTrigger = document.createElement('button');
  menuTrigger.innerHTML = getSizedIcon(IconRegistry[IconCategory.SYSTEM].menu, 18);
  menuTrigger.className = 'px-4 cursor-pointer';
  menuTrigger.ariaLabel = 'Menu trigger';

  const searchTrigger = document.createElement('button');
  searchTrigger.innerHTML = getSizedIcon(IconRegistry[IconCategory.SYSTEM].search, 18);
  searchTrigger.className = 'absolute top-1/2 left-1/2 -translate-1/2 px-4 cursor-pointer';
  searchTrigger.ariaLabel = 'Search trigger';

  mobileLeftTrigger.appendChild(menuTrigger);
  searchTriggerWrapper.appendChild(searchTrigger);
  mobileLeftTrigger.appendChild(searchTriggerWrapper);

  const mobileMenuContainer = document.createElement('div');
  mobileMenuContainer.className =
    'fixed top-[3.25rem] pt-7 left-0 w-full h-[calc(100dvh-3.25rem)] bg-neutral-100 transform translate-x-[-100%] transition-transform duration-300 ease-in-out z-50';

  const searchWrapper = document.createElement('button');
  const searchInput = document.createElement('input');
  const mobileSearchContainer = document.createElement('div');
  mobileSearchContainer.className = 'flex gap-1 items-center justify-between mx-7';
  const mobileSearchResultsPanel = document.createElement('div');
  if (hasSearch && searchProps) {
    mobileSearchResultsPanel.className = `
        fixed 
        bottom-0 
        left-0 
        w-full 
        bg-white 
        z-[100] 
        shadow-2xl 
        transform 
        translate-y-full 
        transition-transform 
        duration-300 
        ease-in-out 
        h-full 
        max-h-[calc(100dvh-142px)] 
        overflow-y-auto
    `;
    const searchResultsContainer = document.createElement('div');
    searchResultsContainer.className = 'p-4';

    const noResultsMessage = document.createElement('p');
    noResultsMessage.textContent = searchProps.emptyText || 'No results found';
    noResultsMessage.className = 'text-center text-gray-500 hidden';

    searchResultsContainer.appendChild(noResultsMessage);
    if (searchProps.results && searchProps.results.length > 0) {
      searchProps.results.forEach((result) => {
        const searchLinksResult = createButtonLink({ label: result.label, href: result.href, target: result.target });
        searchResultsContainer.appendChild(searchLinksResult);
      });
    } else {
      noResultsMessage.classList.remove('hidden');
    }

    mobileSearchResultsPanel.appendChild(searchResultsContainer);

    searchWrapper.className = 'bg-neutral-200 rounded flex gap-3 transition-all duration-300';
    const iconSpan = document.createElement('span');
    iconSpan.innerHTML = getSizedIcon(IconRegistry[IconCategory.SYSTEM].search, 18);
    iconSpan.className = 'm-4 order-1';

    searchInput.className = 'w-full focus-visible:outline-none order-2 bg-transparent';
    searchInput.placeholder = searchProps.placeholder;
    const trashButton = createButtonIcon({
      variant: ButtonIconVariant.SMALL,
      icon: 'trash',
      onClick: () => {},
      disabled: true,
    });

    searchInput.addEventListener('focus', () => {
      searchWrapper.classList.remove('bg-neutral-200');
      searchWrapper.classList.add('bg-base-white');
      searchWrapper.classList.add('border-b-[5px]', 'border-secondary-dark');
      searchWrapper.classList.remove('border-b-0');

      iconSpan.classList.add('order-2');
      iconSpan.classList.remove('order-1');
      searchInput.classList.remove('order-2');
      searchInput.classList.add('order-1');
      searchInput.classList.add('mx-5');
    });

    searchInput.addEventListener('blur', (event: FocusEvent) => {
      if (event.relatedTarget === trashButton) {
        event.preventDefault();
        return;
      }
      mobileSearchResultsPanel.classList.remove('translate-y-0');
      mobileSearchResultsPanel.classList.add('translate-y-full');
      searchWrapper.classList.add('border-b-0');
      searchWrapper.classList.remove('bg-base-white');
      searchWrapper.classList.remove('border-b-[5px]', 'border-secondary-dark');
      iconSpan.classList.add('order-1');
      iconSpan.classList.remove('order-2');
      searchInput.classList.add('order-2');
      searchInput.classList.remove('order-1');
      searchInput.classList.remove('mx-5');
    });

    mobileSearchResultsPanel.addEventListener('mousedown', (event) => {
      event.preventDefault();
      event.stopPropagation();
    });
    searchWrapper.addEventListener('mousedown', (event) => {
      if (event.target !== trashButton && !trashButton.contains(event.target as Node)) {
        if (event.target !== searchInput && !searchInput.contains(event.target as Node)) {
          event.preventDefault();
          event.stopPropagation();
          searchInput.focus();
        }
      }
    });

    searchInput.addEventListener('input', (event) => {
      trashButton.disabled = searchInput.value.length === 0;
      const inputValue = (event.target as HTMLInputElement).value.trim();

      if (searchProps.onSearch) {
        searchProps.onSearch(inputValue);
      }

      if (inputValue) {
        mobileSearchResultsPanel.classList.remove('translate-y-full');
        mobileSearchResultsPanel.classList.add('translate-y-0');
      } else {
        mobileSearchResultsPanel.classList.remove('translate-y-0');
        mobileSearchResultsPanel.classList.add('translate-y-full');
      }
    });

    searchWrapper.appendChild(iconSpan);
    searchWrapper.appendChild(searchInput);
    mobileSearchContainer.appendChild(searchWrapper);
    mobileSearchContainer.appendChild(trashButton);
    mobileMenuContainer.appendChild(mobileSearchContainer);

    trashButton.addEventListener('click', () => {
      searchInput.value = '';
      searchInput.focus();
      trashButton.disabled = true;
    });
  }

  let backButtonAdded = false;
  const mobileMenuContent = document.createElement('div');
  mobileMenuContent.className = 'flex flex-col gap-3 p-8';
  if (mobileMenuTitle) {
    const mobileMenuSectionTitle = document.createElement('p');
    mobileMenuSectionTitle.className = 'text-offcanvas-level2';
    mobileMenuSectionTitle.textContent = mobileMenuTitle;
    mobileMenuContent.appendChild(mobileMenuSectionTitle);
  }
  const mobileFlyoutContainer = document.createElement('div');

  sortedNavigationItems.forEach((item) => {
    if (!item.alwaysFlyout) {
      if (item.flyoutItems.length === 1) {
        const subItem = item.flyoutItems[0];
        const itemLink = document.createElement('a');
        itemLink.text = subItem.label;
        itemLink.href = subItem.href;
        itemLink.className = `
                flex 
                text-offcanvas-level1 
                hover:bg-gray-100
            `;
        mobileMenuContent.appendChild(itemLink);
      } else if (item.flyoutItems.length > 1) {
        const flyoutContainer = document.createElement('div');
        flyoutContainer.className = 'relative';

        const flyoutTitle = document.createElement('div');
        flyoutTitle.textContent = item.label;
        flyoutTitle.className = `
                text-offcanvas-level1
                cursor-pointer
                flex
                items-center
                justify-between
            `;

        const chevronIcon = document.createElement('span');
        chevronIcon.innerHTML = getSizedIcon(IconRegistry[IconCategory.SYSTEM].chevronRight, 18);
        flyoutTitle.appendChild(chevronIcon);

        mobileFlyoutContainer.className = `
                fixed 
                ${hasSearch ? 'top-36' : 'top-20'}
                p-7 
                left-0 
                w-full 
                h-full 
                bg-neutral-100 
                z-[100] 
                transform 
                -translate-x-full 
                transition-transform 
                duration-500 
                ease-in-out
            `;

        if (!backButtonAdded) {
          const flyoutHeader = document.createElement('button');
          flyoutHeader.className = `
                    flex 
                    items-center 
                    justify-start 
                    gap-3 
                    cursor-pointer 
                `;

          const backButton = document.createElement('span');
          backButton.innerHTML = getSizedIcon(IconRegistry[IconCategory.SYSTEM].chevronLeft, 20);
          backButton.ariaLabel = 'Back';

          const flyoutHeaderTitle = document.createElement('h2');
          flyoutHeaderTitle.textContent = mobileBackButtonLabel;
          flyoutHeaderTitle.className = 'text-offcanvas-level2 text-base-black';

          flyoutHeader.appendChild(backButton);
          flyoutHeader.appendChild(flyoutHeaderTitle);

          mobileFlyoutContainer.appendChild(flyoutHeader);

          flyoutHeader.addEventListener('click', () => {
            mobileFlyoutContainer.classList.remove('translate-x-0');
            mobileFlyoutContainer.classList.add('-translate-x-full');
          });

          backButtonAdded = true;
        }

        const flyoutContent = document.createElement('div');
        flyoutContent.className = 'pl-8 gap-3 flex flex-col';

        item.flyoutItems.forEach((subItem) => {
          const subLink = document.createElement('a');
          subLink.text = subItem.label;
          subLink.href = subItem.href;
          subLink.className = `
                    block 
                    text-offcanvas-level2
                    hover:bg-gray-100
                `;
          flyoutContent.appendChild(subLink);
        });

        mobileFlyoutContainer.appendChild(flyoutContent);

        flyoutTitle.addEventListener('click', () => {
          mobileFlyoutContainer.classList.remove('-translate-x-full');
          mobileFlyoutContainer.classList.add('translate-x-0');
        });

        flyoutContainer.appendChild(flyoutTitle);
        mobileMenuContent.appendChild(flyoutContainer);
        navigationContainer.appendChild(mobileFlyoutContainer);
      }
    } else {
      const flyoutContainer = document.createElement('div');
      flyoutContainer.className = 'relative';

      const flyoutTitle = document.createElement('div');
      flyoutTitle.textContent = item.label;
      flyoutTitle.className = `
                text-offcanvas-level1
                cursor-pointer
                flex
                items-center
                justify-between
            `;

      const chevronIcon = document.createElement('span');
      chevronIcon.innerHTML = getSizedIcon(IconRegistry[IconCategory.SYSTEM].chevronRight, 18);
      flyoutTitle.appendChild(chevronIcon);

      mobileFlyoutContainer.className = `
                fixed 
                ${hasSearch ? 'top-36' : 'top-20'}
                p-7 
                left-0 
                w-full 
                h-full 
                bg-neutral-100 
                z-[100] 
                transform 
                -translate-x-full 
                transition-transform 
                duration-500 
                ease-in-out
            `;

      if (!backButtonAdded) {
        const flyoutHeader = document.createElement('button');
        flyoutHeader.className = `
                    flex 
                    items-center 
                    justify-start 
                    gap-3 
                    cursor-pointer 
                `;

        const backButton = document.createElement('span');
        backButton.innerHTML = getSizedIcon(IconRegistry[IconCategory.SYSTEM].chevronLeft, 20);
        backButton.ariaLabel = 'Back';

        const flyoutHeaderTitle = document.createElement('h2');
        flyoutHeaderTitle.textContent = mobileBackButtonLabel;
        flyoutHeaderTitle.className = 'text-offcanvas-level2 text-base-black';

        flyoutHeader.appendChild(backButton);
        flyoutHeader.appendChild(flyoutHeaderTitle);

        mobileFlyoutContainer.appendChild(flyoutHeader);

        flyoutHeader.addEventListener('click', () => {
          mobileFlyoutContainer.classList.remove('translate-x-0');
          mobileFlyoutContainer.classList.add('-translate-x-full');
        });

        backButtonAdded = true;
      }

      const flyoutContent = document.createElement('div');
      flyoutContent.className = 'pl-8 gap-3 flex flex-col';

      item.flyoutItems.forEach((subItem) => {
        const subLink = document.createElement('a');
        subLink.text = subItem.label;
        subLink.href = subItem.href;
        subLink.className = `
                    block 
                    text-offcanvas-level2
                    hover:bg-gray-100
                `;
        flyoutContent.appendChild(subLink);
      });

      mobileFlyoutContainer.appendChild(flyoutContent);

      flyoutTitle.addEventListener('click', () => {
        mobileFlyoutContainer.classList.remove('-translate-x-full');
        mobileFlyoutContainer.classList.add('translate-x-0');
      });

      flyoutContainer.appendChild(flyoutTitle);
      mobileMenuContent.appendChild(flyoutContainer);
      navigationContainer.appendChild(mobileFlyoutContainer);
    }
  });

  const toggleMobileMenu = (trigger: 'menu' | 'search') => {
    isMobileMenuOpen = !isMobileMenuOpen;

    mobileMenuContainer.classList.toggle('translate-x-[-100%]');

    mobileFlyoutContainer.classList.remove('translate-x-0');
    mobileFlyoutContainer.classList.add('-translate-x-full');
    if (isMobileMenuOpen) {
      menuTrigger.innerHTML = getSizedIcon(IconRegistry[IconCategory.SYSTEM].close, 18);

      searchTrigger.classList.add('animate-search-disappear');
      searchTrigger.classList.remove('animate-search-appear');

      setTimeout(() => {
        searchTrigger.innerHTML = '';
      }, 300);
      if (trigger === 'search') {
        searchInput.focus();
      }
    } else {
      menuTrigger.innerHTML = getSizedIcon(IconRegistry[IconCategory.SYSTEM].menu, 18);

      searchTrigger.innerHTML = getSizedIcon(IconRegistry[IconCategory.SYSTEM].search, 18);
      searchTrigger.classList.remove('animate-search-disappear');
      searchTrigger.classList.add('animate-search-appear');
    }
  };

  menuTrigger.addEventListener('click', () => {
    toggleMobileMenu('menu');
  });
  searchTrigger.addEventListener('click', () => {
    toggleMobileMenu('search');
  });

  const mobileLogoContainer = document.createElement('div');
  mobileLogoContainer.className = 'px-2 py-[0.5625rem] w-fit flex gap-1 items-center w-full ';

  const mobileLogo1Container = document.createElement('img');
  mobileLogo1Container.src = logoSrc;
  mobileLogo1Container.alt = logoAltText;
  mobileLogo1Container.width = logo2Src ? 72 : 93;
  mobileLogo1Container.className = 'h-auto m-auto object-cover';

  mobileLogoContainer.appendChild(mobileLogo1Container);

  if (logo2Src) {
    const mobileLogo2Container = document.createElement('img');
    mobileLogo2Container.src = logo2Src;
    mobileLogo2Container.alt = logo2AltText;
    mobileLogo2Container.width = 72;
    mobileLogo2Container.className = 'h-auto m-auto object-cover';
    mobileLogoContainer.appendChild(mobileLogo2Container);
  }

  const mobileRightTrigger = document.createElement('div');
  mobileRightTrigger.className = 'flex';

  if (loginButtonIcon) {
    const loginTrigger = document.createElement('button');
    loginTrigger.innerHTML = getSizedIcon(IconRegistry[IconCategory.SYSTEM][loginButtonIcon], 18);
    loginTrigger.className = 'px-4 cursor-pointer';
    loginTrigger.ariaLabel = loginButtonText;
    loginTrigger.onclick = onClickLoginButton;
    mobileRightTrigger.appendChild(loginTrigger);
  }

  if (cartButtonIcon) {
    const cartTrigger = document.createElement('button');
    cartTrigger.innerHTML = getSizedIcon(IconRegistry[IconCategory.SYSTEM][cartButtonIcon], 18);
    cartTrigger.className = 'px-4 cursor-pointer';
    cartTrigger.ariaLabel = loginButtonText;
    cartTrigger.onclick = onClickCartButton;
    mobileRightTrigger.appendChild(cartTrigger);
  }

  navigationMobileContainer.appendChild(mobileLeftTrigger);
  navigationMobileContainer.appendChild(mobileLogoContainer);
  navigationMobileContainer.appendChild(mobileRightTrigger);
  mobileMenuContainer.appendChild(mobileMenuContent);
  navigationContainer.appendChild(mobileMenuContainer);
  navigationContainer.appendChild(mobileSearchResultsPanel);
  navigationContainer.appendChild(navigationDesktopContainer);
  navigationContainer.appendChild(navigationMobileContainer);
  return navigationContainer;
};

function cloneFlyoutWithListeners(originalFlyout: HTMLElement) {
  const clonedFlyout = originalFlyout.cloneNode(true) as HTMLElement;

  const originalTriggerButton = originalFlyout.querySelector('button');
  const originalFlyoutWrapper = originalFlyout.querySelector('.hidden');

  const clonedTriggerButton = clonedFlyout.querySelector('button');
  const clonedFlyoutWrapper = clonedFlyout.querySelector('.hidden');

  if (clonedTriggerButton && clonedFlyoutWrapper && originalTriggerButton && originalFlyoutWrapper) {
    let isOpen = false;

    clonedTriggerButton.addEventListener('click', () => {
      isOpen = !isOpen;
      clonedFlyoutWrapper.classList.toggle('hidden', !isOpen);

      if (isOpen) {
        clonedTriggerButton.classList.add('bg-base-white', 'border-b-[3px]', 'border-secondary-interaction', 'pb-[0.313rem]');
        clonedTriggerButton.querySelector('div')?.classList.add('scale-y-[-1]');
      } else {
        clonedTriggerButton.classList.remove('bg-base-white', 'border-b-[3px]', 'border-secondary-interaction', 'pb-[0.313rem]');
        clonedTriggerButton.querySelector('div')?.classList.remove('scale-y-[-1]');
      }
    });

    document.addEventListener('click', (event) => {
      if (isOpen && !clonedFlyout.contains(event.target as Node)) {
        clonedFlyoutWrapper.classList.add('hidden');
        clonedTriggerButton.classList.remove('bg-base-white', 'border-b-[3px]', 'border-secondary-interaction');
        clonedTriggerButton.querySelector('div')?.classList.remove('scale-y-[-1]');
        isOpen = false;
      }
    });
  }

  return clonedFlyout;
}
