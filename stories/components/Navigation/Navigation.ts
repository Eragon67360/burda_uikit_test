import { createSearch, SearchArgs } from '@/components/Form/Search/Search';
import { ButtonCTAVariant, createButtonCTA } from '../Button/CTA/ButtonCTA';
import { createFlyout, LinkItem } from './Flyout/Flyout';
import './navigation.css';
import { createLanguageDropdown, LanguageDropdownArgs } from './LanguageDropdown/LanguageDropdown';

export type NavigationItemType = 'flyout' | 'link';

export type BaseNavigationItem = {
    type: NavigationItemType;
    order: number;
}

export type LinkNavigationItem = BaseNavigationItem & {
    type: 'link';
    label: string;
    href: string;
    target: '_blank' | '_self' | '_parent' | '_top';
}

export type FlyoutNavigationItem = BaseNavigationItem & {
    type: 'flyout';
    label: string;
    flyoutItems: LinkItem[];
}

export type NavigationArgs = {
    logoSrc: string;
    logoAltText: string;
    has2LinesNavigation: boolean;
    navigationItems: Array<LinkNavigationItem | FlyoutNavigationItem>;
    hasSearch: boolean;
    searchProps?: SearchArgs;
    hasLanguageDropdown: boolean;
    languageProps?: LanguageDropdownArgs;
    isLanguageDropdownCompressed: boolean;
    loginButtonText: string;
    loginButtonIcon: string;
    onClickLoginButton: () => void;
    cartButtonText: string;
    cartButtonIcon: string;
    onClickCartButton: () => void;
    addNavigationItem?: (item: LinkNavigationItem | FlyoutNavigationItem) => void;
};

export const createNavigation = ({ logoSrc, logoAltText, has2LinesNavigation, navigationItems, hasSearch, searchProps, hasLanguageDropdown, languageProps, loginButtonText, loginButtonIcon, cartButtonText, cartButtonIcon, onClickLoginButton, onClickCartButton }: NavigationArgs) => {

    /** ---------------------------------------- DESKTOP ---------------------------------------- */
    const sortedNavigationItems = navigationItems.sort((a, b) => a.order - b.order);

    const navigationContainer = document.createElement('div');
    const navigationWrapper = document.createElement('div');
    const contentWrapper = document.createElement('div');
    const linksWrapper = document.createElement('div');
    const rightWrapper = document.createElement('div');

    navigationContainer.className = `w-full max-w-[90rem] fixed top-0 left-1/2 -translate-x-1/2 bg-transparent px-4 py-4 mx-auto transition-all duration-300 ease-in-out z-[999]`;
    navigationWrapper.className = `h-18 ${has2LinesNavigation ? 'h-fit' : 'h-18'} rounded-t-lg rounded-b-lg w-full bg-neutral-100 shadow mx-auto flex items-center pl-4`;
    contentWrapper.className = `w-full h-full flex ${has2LinesNavigation ? 'flex-col items-end' : 'flex-row items-center justify-between'}`;
    linksWrapper.className = ` flex items-center z-[999] ${has2LinesNavigation ? 'order-2 h-[2.8rem]' : 'order-1 h-full'}`;
    rightWrapper.className = `flex items-center z-[999] ${has2LinesNavigation ? 'order-1 h-[3.5rem]' : 'order-2 h-full'}`;

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const viewportHeight = window.innerHeight;

        if (scrollPosition >= viewportHeight) {
            navigationContainer.classList.remove('py-4');
            navigationWrapper.classList.remove('rounded-t-lg');
            ctaContainer.classList.remove('rounded-se-lg');
        } else {
            navigationContainer.classList.add('py-4');
            navigationWrapper.classList.add('rounded-t-lg');
            ctaContainer.classList.add('rounded-se-lg');
        }
    });

    const logoContainer = document.createElement('img');
    logoContainer.src = logoSrc;
    logoContainer.alt = logoAltText;
    logoContainer.className = 'h-[2.8rem] w-auto ml-2 mr-3'

    sortedNavigationItems.forEach((item, index) => {
        if (item.type === 'link') {
            const itemButton = document.createElement('a');
            itemButton.text = item.label;
            itemButton.href = item.href;
            itemButton.target = item.target;
            itemButton.className = `
                flex 
                items-center 
                h-full 
                gap-2 
                px-4 
                py-2 
                text-sm 
                font-semibold 
                rounded-none 
                transition-all 
                duration-300 
                cursor-pointer 
                hover:bg-secondary-light 
                ${(has2LinesNavigation && (index === sortedNavigationItems.length - 1)) && 'rounded-ee-lg'}
            `;
            linksWrapper.appendChild(itemButton);
        } else if (item.type === 'flyout') {
            const flyout = createFlyout({
                variant: 'sublinks',
                triggerLabel: item.label,
                linkItems: item.flyoutItems,
                has2LinesNavigation: has2LinesNavigation
            });
            linksWrapper.appendChild(flyout);
        }
    })

    if (hasSearch && searchProps) {
        const searchContainer = createSearch({ placeholder: searchProps.placeholder, results: searchProps.results, emptyText: searchProps.emptyText, isSmall: searchProps.isSmall })
        rightWrapper.appendChild(searchContainer)
    }

    if (hasLanguageDropdown && languageProps) {
        const languageDropdownContainer = createLanguageDropdown({ label: languageProps.label, options: languageProps.options, isCompressed: languageProps.isCompressed, selectedLanguage: languageProps.selectedLanguage })
        rightWrapper.appendChild(languageDropdownContainer)
    }

    const ctaContainer = document.createElement('div');
    ctaContainer.className = `flex items-center h-full overflow-hidden w-fit min-w-fit rounded-se-lg ${has2LinesNavigation ? '' : 'rounded-ee-lg'}`

    const loginButton = createButtonCTA({ variant: ButtonCTAVariant.LARGE_LOGIN, nested: false, disabled: false, label: loginButtonText, icon: loginButtonIcon, iconLeft: false, onClick: onClickLoginButton })
    const cartButton = createButtonCTA({ variant: ButtonCTAVariant.LARGE_CART_PAY, nested: false, disabled: false, label: cartButtonText, icon: cartButtonIcon, iconLeft: false, onClick: onClickCartButton })

    ctaContainer.appendChild(loginButton);
    ctaContainer.appendChild(cartButton);
    rightWrapper.appendChild(ctaContainer);
    contentWrapper.appendChild(linksWrapper);
    contentWrapper.appendChild(rightWrapper);
    navigationWrapper.appendChild(logoContainer);
    navigationWrapper.appendChild(contentWrapper);
    navigationContainer.appendChild(navigationWrapper);

    return navigationContainer;
}
