// .storybook/manager.ts
import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const burdaTheme = create({
    base: 'light',
    brandTitle: 'FOCUS Abo-Shop UI Kit',
    brandUrl: 'https://focus-abo.de/',
    brandImage: '/burda_logo.png',

    colorPrimary: '#E61F24',
    colorSecondary: '#8ACBBF',
});

addons.setConfig({
    theme: burdaTheme,

    toolbar: {
        title: { hidden: false },
        zoom: { hidden: false },
        eject: { hidden: false },
        copy: { hidden: false },
        fullscreen: { hidden: false },
    },

    enableShortcuts: true,
    showToolbar: true,
    showNav: true,
    showPanel: true,
    panelPosition: 'bottom',
    selectedPanel: 'docs',
});
