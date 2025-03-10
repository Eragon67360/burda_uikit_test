import { IconCategory, IconRegistry } from '../../assets/icons';
import { getSizedIcon } from '../../utils/iconUtils';
import { ButtonCTAVariant, createButtonCTA } from '../Button/CTA/ButtonCTA';
import './subscriptionPlan.css';

export type SubscriptionPlanArgs = {
    image: string;
    title: string;
    subtitle: string;
    characteristics: string[];
    secondaryCTALabel: string;
    primaryCTALabel: string;
    onSecondaryClick: () => void;
    onPrimaryClick: () => void;
};

export const createSubscriptionPlan = ({
    image,
    title,
    subtitle,
    characteristics,
    secondaryCTALabel,
    primaryCTALabel,
    onSecondaryClick,
    onPrimaryClick,
}: SubscriptionPlanArgs) => {
    const container = document.createElement('div');
    container.className = 'flex flex-col bg-transparent rounded-b-xl overflow-hidden max-w-[28rem]';

    const imageContainer = document.createElement('div');
    imageContainer.className = 'bg-transparent px-8 bg-gradient-to-b from-transparent from-[86.43%] to-black/20 to-100% z-20 mx-8 '

    // Image
    const imageElement = document.createElement('img');
    imageElement.src = image;
    imageElement.alt = title;
    imageElement.className = 'w-[20rem] h-auto';
    imageContainer.appendChild(imageElement)
    container.appendChild(imageContainer);

    const contentContainer = document.createElement('div');
    contentContainer.className = 'bg-base-white gap-12 pt-8';
    const contentTextContainer = document.createElement('div');
    contentTextContainer.className = 'flex flex-col justify-end items-start gap-12 self-stretch';
    const contentTextTitleContainer = document.createElement('div');
    contentTextTitleContainer.className = 'flex px-8 flex-col items-center gap-[1.8125rem] self-stretch';

    // Title
    const titleElement = document.createElement('h3');
    titleElement.textContent = title;
    titleElement.className = 'text-subscription-default-desktop uppercase font-roboto-serif';

    // Subtitle
    const subtitleElement = document.createElement('p');
    subtitleElement.textContent = subtitle;
    subtitleElement.className = 'text-subhead3-desktop text-center';

    // Characteristics list
    const listElement = document.createElement('ul');
    listElement.className = 'flex flex-col items-start gap-5 self-stretch px-8';


    characteristics.forEach(characteristic => {
        const listItem = document.createElement('li');
        listItem.className = 'flex items-center gap-2';
        const icon = document.createElement('span');
        icon.innerHTML = IconRegistry[IconCategory.SYSTEM].success;
        const textElement = document.createTextNode(characteristic);
        listItem.appendChild(icon);
        listItem.appendChild(textElement);
        listElement.appendChild(listItem);
    });

    contentTextTitleContainer.appendChild(titleElement);
    contentTextTitleContainer.appendChild(subtitleElement);

    contentTextContainer.appendChild(contentTextTitleContainer);
    contentTextContainer.appendChild(listElement);
    contentContainer.appendChild(contentTextContainer)
    container.appendChild(contentContainer)
    // CTAs container
    const ctaContainer = document.createElement('div');
    ctaContainer.className = 'flex flex-col gap-4 mt-auto';

    // Secondary CTA
    const secondaryCTA = createButtonCTA({
        variant: ButtonCTAVariant.SECONDARY,
        label: secondaryCTALabel,
        onClick: onSecondaryClick,
        disabled: false,
        nested: false,
        icon: null,
        iconLeft: false,
    });

    // Primary CTA
    const primaryCTA = createButtonCTA({
        variant: ButtonCTAVariant.LARGE_SUBSCRIPTION,
        label: primaryCTALabel,
        onClick: onPrimaryClick,
        disabled: false,
        nested: false,
        icon: null,
        iconLeft: false,
    });

    ctaContainer.appendChild(secondaryCTA);
    ctaContainer.appendChild(primaryCTA);
    container.appendChild(ctaContainer);

    return container;
};
