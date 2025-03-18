import './navigation.css'
import { createFlyout, LinkItem } from './Flyout/Flyout';
import { createSearch, SearchArgs } from '@/components/Form/Search/Search';
import { create } from 'domain';
import { ButtonCTAVariant, createButtonCTA } from '../Button/CTA/ButtonCTA';
import { IconCategory, IconRegistry } from '@/stories/assets/icons';

export type NavigationItem = {
    label: string;
    href: string;
    target: '_blank' | '_self' | '_parent' | '_top';
}

export type NavigationArgs = {
    logoSrc: string;
    logoAltText: string;
    hasFlyoutLinks: boolean;
    has2LinesNavigation: boolean;
    flyoutLabel: string;
    flyoutItems: LinkItem[];
    navigationItems: NavigationItem[];
    hasSearch: boolean;
    searchProps?: SearchArgs;
    loginButtonText: string;
    loginButtonIcon: string;
    onClickLoginButton: () => void;
    cartButtonText: string;
    cartButtonIcon: string;
    onClickCartButton: () => void;
};

export const createNavigation = ({ logoSrc, logoAltText, hasFlyoutLinks, has2LinesNavigation, flyoutLabel, flyoutItems, navigationItems, hasSearch, searchProps, loginButtonText, loginButtonIcon, cartButtonText, cartButtonIcon, onClickLoginButton, onClickCartButton }: NavigationArgs) => {

    /** ---------------------------------------- DESKTOP ---------------------------------------- */

    const navigationContainer = document.createElement('div');
    const navigationWrapper = document.createElement('div');
    const contentWrapper = document.createElement('div');
    const linksWrapper = document.createElement('div');
    const rightWrapper = document.createElement('div');

    navigationContainer.className = `w-full max-w-[90rem] fixed top-0 left-1/2 -translate-x-1/2 bg-transparent px-4 py-4 mx-auto transition-all duration-300 ease-in-out`;
    navigationWrapper.className = `h-18 rounded-t-lg rounded-b-lg w-full bg-neutral-100 shadow mx-auto flex items-center pl-4`;
    contentWrapper.className = `w-full h-full flex items-center justify-between`;
    linksWrapper.className = `h-full flex items-center z-50`;
    rightWrapper.className = `h-full flex items-center z-50`;

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

    if (hasFlyoutLinks) {
        const flyout = createFlyout({
            variant: 'sublinks',
            triggerLabel: flyoutLabel,
            linkItems: flyoutItems,
        })
        linksWrapper.appendChild(flyout)
    }

    navigationItems.forEach((item) => {
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
        `
        linksWrapper.appendChild(itemButton)
    })

    if (hasSearch) {
        const searchContainer = createSearch({ placeholder: searchProps.placeholder, results: searchProps.results, emptyText: searchProps.emptyText, classNames: 'mx-6' })
        rightWrapper.appendChild(searchContainer)
    }

    const ctaContainer = document.createElement('div');
    ctaContainer.className = 'flex items-center h-full overflow-hidden w-fit min-w-fit rounded-se-lg rounded-ee-lg'

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
