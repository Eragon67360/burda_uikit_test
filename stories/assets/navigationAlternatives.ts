import { NavigationArgs } from "../components/Navigation/Navigation";

export const focusNavigation: NavigationArgs = {
    logoSrc: '/burda_logo.png',
    logoAltText: 'Burda Logo',
    has2LinesNavigation: false,
    navigationItems: [
        {
            type: 'flyout',
            order: 1,
            label: 'Zeitschriften',
            flyoutItems: [
                { label: 'FOCUS', href: '/', target: '_blank' },
                { label: 'FOCUS MONEY', href: '/about', target: '_blank' },
                { label: 'FOCUS GESUNDHEIT', href: '/contact', target: '_blank' }
            ]
        },
        {
            type: 'link',
            order: 2,
            label: 'FOCUS+',
            href: '/focus',
            target: '_self'
        },
        {
            type: 'link',
            order: 3,
            label: 'Einzelausgaben',
            href: '/einzelausgaben',
            target: '_self'
        }
    ],
    hasLanguageDropdown: true,
    languageProps: {
        isCompressed: true,
        options: [
            { code: 'de', name: 'Deutsch', icon: 'germany' },
            { code: 'en', name: 'English', icon: 'england' },
            { code: 'fr', name: 'Français', icon: 'france' }
        ],
        selectedLanguage: 'en',
    },
    hasSearch: true,
    searchProps: {
        emptyText: 'Keine Ergebnisse gefunden',
        placeholder: 'Suche',
        results: [
            { label: 'Product 1', href: '/product1' },
            { label: 'Product 2', href: '/product2' },
            { label: 'Product 3', href: '/product3' }
        ],
        isSmall: false
    },
    loginButtonText: 'Kundenservice & Login',
    loginButtonIcon: 'userCircle',
    cartButtonText: 'Warenkorb & Kasse',
    cartButtonIcon: 'cart',
    cartItems: [1, 2],
    onClickLoginButton: () => console.log("Login button has been clicked"),
    onClickCartButton: () => console.log("Cart button has been clicked"),
    mobileBackButtonLabel: "zurück",
    mobileMenuTitle: "Home"
}

export const meinSchoenerGartenNavigation: NavigationArgs = {
    logoSrc: '/msgarten1.png',
    logoAltText: 'Burda Logo',
    logo2Src: '/msgarten2.png',
    logo2AltText: 'Burda Logo',
    has2LinesNavigation: false,
    navigationItems: [
        {
            type: 'link',
            order: 1,
            label: 'Zeitschriften',
            href: '/focus',
            target: '_self'
        },
        {
            type: 'link',
            order: 2,
            label: 'Digital',
            href: '/einzelausgaben',
            target: '_self'
        },
        {
            type: 'link',
            order: 3,
            label: 'Aboarten',
            href: '/focus',
            target: '_self'
        },
        {
            type: 'link',
            order: 4,
            label: 'Prämien',
            href: '/einzelausgaben',
            target: '_self'
        }
    ],
    hasSearch: true,
    searchProps: {
        emptyText: 'Keine Ergebnisse gefunden',
        placeholder: 'Suche',
        results: [
            { label: 'Product 1', href: '/product1' },
            { label: 'Product 2', href: '/product2' },
            { label: 'Product 3', href: '/product3' }
        ],
        isSmall: false
    },
    hasLanguageDropdown: false,

    loginButtonText: '',
    loginButtonIcon: 'userCircle',
    cartButtonText: 'Warenkorb & Kasse',
    cartButtonIcon: 'cart',
    cartItems: [],
    onClickLoginButton: () => console.log("Login button has been clicked"),
    onClickCartButton: () => console.log("Cart button has been clicked"),
    mobileBackButtonLabel: "zurück",
    mobileMenuTitle: "Home"
}

export const autoMotorUndSportNavigation: NavigationArgs = {
    logoSrc: '/automotor_logo.png',
    logoAltText: 'Auto Motor und Sport Logo',
    has2LinesNavigation: true,
    navigationItems: [
        {
            type: 'link',
            order: 1,
            label: 'Heft-Abo',
            href: '/focus',
            target: '_self'
        },
        {
            type: 'link',
            order: 2,
            label: 'Digital-Abo',
            href: '/einzelausgaben',
            target: '_self'
        },
        {
            type: 'link',
            order: 3,
            label: 'Kombi-Abo',
            href: '/focus',
            target: '_self'
        },
        {
            type: 'link',
            order: 4,
            label: 'Einzelhefte & Produkte',
            href: '/einzelausgaben',
            target: '_self'
        },
        {
            type: 'link',
            order: 5,
            label: 'Events',
            href: '/focus',
            target: '_self'
        }
    ],
    hasLanguageDropdown: true,
    languageProps: {
        isCompressed: false,
        options: [
            { code: 'de', name: 'Deutsch', icon: 'germany' },
            { code: 'en', name: 'English', icon: 'england' },
            { code: 'fr', name: 'Français', icon: 'france' }
        ],
        selectedLanguage: 'en',
    },
    hasSearch: true,
    searchProps: {
        emptyText: 'Keine Ergebnisse gefunden',
        placeholder: 'Suche',
        results: [
            { label: 'Product 1', href: '/product1' },
            { label: 'Product 2', href: '/product2' },
            { label: 'Product 3', href: '/product3' }
        ],
        isSmall: false
    },
    loginButtonText: 'Kundenservice & Login',
    loginButtonIcon: 'userCircle',
    cartButtonText: 'Warenkorb & Kasse',
    cartButtonIcon: 'cart',
    cartItems: [],
    onClickLoginButton: () => console.log("Login button has been clicked"),
    onClickCartButton: () => console.log("Cart button has been clicked"),
    mobileBackButtonLabel: "zurück",
    mobileMenuTitle: "Home"
}