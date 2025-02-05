// .storybook/manager.ts
import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

// Create custom theme
const burdaTheme = create({
    base: 'light', // or 'dark'
    brandTitle: 'Burda Component Library',
    brandUrl: 'https://www.burda.com',
    // brandImage: '/burda-logo.png', // Uncomment and add your logo path if needed

    // You can customize colors to match Burda's brand
    colorPrimary: '#0066b3', // Burda blue (adjust if needed)
    colorSecondary: '#585858',
});

addons.setConfig({
    // Apply custom theme
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

    // Optional: Specify which addon panels are shown by default
    selectedPanel: 'docs',
});
