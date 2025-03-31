import type { Meta, StoryObj } from '@storybook/html';
import { createModal, ModalArgs } from './Modal';
import { ButtonCTAVariant, createButtonCTA } from "@/components/Button/CTA/ButtonCTA";
import { createTextbox } from '@/components/List/Accordion/Textbox/Textbox';
import { IconCategory, IconRegistry } from '@/assets/icons';
import { createInfoTag } from '@/components/InfoTag/InfoTag';

const meta: Meta<ModalArgs> = {
    title: 'Components (Organisms)/Overlay/Modal',

    parameters: {
        layout: 'padded',
    },
    argTypes: {
        isOpen: {
            control: 'boolean',
            description: 'Controls the visibility of the modal',
        },
        title: {
            control: 'text',
            description: 'Modal title',
        },
        content: {
            control: 'text',
            description: 'Modal content',
        },
        triggerButton: {
            control: 'object',
            description: 'Configuration for the trigger button',
        },
        onClose: {
            action: 'closed',
            description: 'Function called when modal closes',
        },
    },
};

export default meta;
type Story = StoryObj<ModalArgs>;

export const Primary: Story = {
    render: (args) => {
        return createModal({
            ...args,
            onClose: () => console.log('Modal closed'),
        });
    },
    args: {
        isOpen: false,
        title: 'Example Modal',
        content: '<p>This is an example modal content.</p>',
        triggerButton: {
            variant: ButtonCTAVariant.PRIMARY,
            label: 'Open Modal',
        },
    },
};

export const WithSecondaryButton: Story = {
    render: (args) => {
        return createModal({
            ...args,
            onClose: () => console.log('Modal closed'),
        });
    },
    args: {
        isOpen: false,
        title: 'Secondary Button Modal',
        content: '<p>This modal uses a secondary button.</p>',
        triggerButton: {
            variant: ButtonCTAVariant.SECONDARY,
            label: 'Open Modal',
        },
    },
};

export const WithCTA: Story = {
    render: (args) => {
        return createModal({
            ...args,
            actions: {
                primary: {
                    label: 'Confirm',
                    onClick: () => console.log('Primary action clicked'),
                    icon: null
                },
                secondary: {
                    label: 'Cancel',
                    onClick: () => console.log('Secondary action clicked'),
                    icon: null
                },
            },
        });
    },
    args: {
        isOpen: false,
        title: 'Modal with Actions',
        content: '<p>This modal includes call-to-action buttons at the bottom.</p>',
        triggerButton: {
            variant: ButtonCTAVariant.PRIMARY,
            label: 'Open Modal with Actions',
        },
    },
};

export const WithPrimaryActionOnly: Story = {
    render: (args) => {
        return createModal({
            ...args,
            actions: {
                primary: {
                    label: 'Confirm',
                    onClick: () => console.log('Primary action clicked'),
                    icon: null
                },
            },
        });
    },
    args: {
        isOpen: false,
        title: 'Modal with Single Action',
        content: '<p>This modal includes only a primary action button.</p>',
        triggerButton: {
            variant: ButtonCTAVariant.PRIMARY,
            label: 'Open Modal with Single Action',
        },
    },
};

export const Showcase: Story = {
    render: (args) => {
        const modalContent = document.createElement('div');

        const textbox = createTextbox({
            expandText: 'weitere Informationen',
            collapseText: 'weitere Informationen',
            content: `<p class="text-gray-700">
                This is the expandable content. It can contain any HTML content.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>`,
            chevronIcon: IconRegistry[IconCategory.SYSTEM].chevronDown
        });
        textbox.className += ' mt-4 w-full h-fit';

        const button = createInfoTag({
            label: 'Zuzahlung ab 1,00 €'
        });
        const buttonWrapper = document.createElement('div');
        buttonWrapper.className = 'mt-16 mx-auto';
        buttonWrapper.appendChild(button);

        const contentStructure = document.createElement('div');
        contentStructure.className = 'flex gap-4';

        const leftColumn = document.createElement('div');
        leftColumn.className = 'flex flex-col w-1/2 h-full';
        leftColumn.innerHTML = `
            <h2 class="text-h2">Just Vegan Heißluftfritteuse</h2>
            <p class="text-subhead3 mt-5">Artikelnummer AZ72</p>
            <p class="text-copy mt-8">Der Airfryer von Just Vegan bietet eine gesunde Brat- und Backoption mit seiner Heißlufttechnologie, die die herkömmliche Verwendung von Öl beim Frittieren überflüssig macht. Diese Fritteuse ist mit einer einzigartigen keramischen CeraVegan-Antihaftbeschichtung auf Avocadoöl-Basis ausgestattet. Die innovative CERAVEGAN Beschichtung erlaubt nicht nur das Frittieren, sondern auch Braten, Grillen, Aufwärmen, Warmhalten und Auftauen – von knusprigen Pommes bis hin zu köstlichen Gerichten wie Apfelkuchen oder veganen Speisen.</p>
            <p class="text-copy"><br>Merkmale:</p>
        `;

        leftColumn.appendChild(textbox);
        leftColumn.appendChild(buttonWrapper);

        const rightColumn = document.createElement('div');
        rightColumn.className = 'grid grid-cols-2 gap-2 w-1/2';
        rightColumn.innerHTML = `
            <div class="bg-neutral-50 rounded-lg p-4 w-full flex items-center justify-center">
                <img src="/fryer_tipp.png" alt="Product view 1" class="rounded-lg w-[13.625rem]">
            </div>
            <div class="grid grid-cols-2 gap-2 w-full items-start justify-start self-start ">
                <img src="/fryer_1.png" alt="Product view 1" class="rounded-lg w-full">
                <img src="/fryer_1.png" alt="Product view 2" class="rounded-lg w-full">
                <img src="/fryer_1.png" alt="Product view 3" class="rounded-lg w-full">
                <img src="/fryer_2.png" alt="Product view 4" class="rounded-lg w-full">
                <img src="/fryer_4.png" alt="Product view 5" class="rounded-lg w-full">
            </div>
        `;

        contentStructure.appendChild(leftColumn);
        contentStructure.appendChild(rightColumn);
        modalContent.appendChild(contentStructure);

        return createModal({
            ...args,
            actions: {
                primary: {
                    label: 'Prämie auswählen',
                    onClick: () => console.log('Select premium clicked'),
                    icon: 'cart'
                },
                secondary: {
                    label: 'Zum nächsten Schritt',
                    onClick: () => console.log('Next step clicked'),
                    icon: 'arrowRight'
                },
            },
            content: modalContent
        });
    },
    args: {
        isOpen: false,
        title: '',
        triggerButton: {
            variant: ButtonCTAVariant.PRIMARY,
            label: 'Open Showcase Modal',
        },
        onClose: () => console.log('Modal closed'),
    },
};

