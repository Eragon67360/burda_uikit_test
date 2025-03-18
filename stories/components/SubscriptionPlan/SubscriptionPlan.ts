import { IconCategory, IconRegistry } from '@/assets/icons';
import { ButtonCTAVariant, createButtonCTA } from '@/components/Button/CTA/ButtonCTA';
import { createInfoTag } from '@/components/InfoTag/InfoTag';
import './subscriptionPlan.css';

export type SubscriptionPlanArgs = {
    image: string;
    title: string;
    subtitle: string;
    characteristics: string[];
    infoLabel: string;
    primaryCTALabel: string;
    onPrimaryClick: () => void;
};

export const createSubscriptionPlan = ({
    image,
    title,
    subtitle,
    characteristics,
    infoLabel,
    primaryCTALabel,
    onPrimaryClick,
}: SubscriptionPlanArgs) => {
    const container = document.createElement('div');
    container.className = 'flex flex-col bg-transparent max-w-[28rem] rounded-b-lg h-full w-full';

    const imageContainer = document.createElement('div');
    imageContainer.className = 'bg-transparent px-8 bg-gradient-to-b from-transparent from-[86.43%] to-black/20 to-100% z-20 mx-8'

    // Image
    const imageElement = document.createElement('img');
    imageElement.src = image;
    imageElement.alt = title;
    imageElement.className = 'w-[20rem] h-auto';
    imageContainer.appendChild(imageElement)
    container.appendChild(imageContainer);

    const contentContainer = document.createElement('div');
    contentContainer.className = 'bg-base-white flex flex-col gap-12 pt-8 shadow-[0px_8px_44px_0px_rgba(0,0,0,0.20)] rounded-b-lg relative z-10';

    const contentTextContainer = document.createElement('div');
    contentTextContainer.className = 'flex flex-col justify-end items-start gap-12 self-stretch';

    const contentTextTitleContainer = document.createElement('div');
    contentTextTitleContainer.className = 'flex px-8 flex-col items-center gap-[1.8125rem] self-stretch';

    // Title
    const titleElement = document.createElement('h3');
    titleElement.textContent = title;
    titleElement.className = 'text-subscription-default-desktop uppercase font-roboto-serif text-center';

    // Subtitle
    const subtitleElement = document.createElement('p');
    subtitleElement.textContent = subtitle;
    subtitleElement.className = 'text-subhead3-desktop text-center';

    // Characteristics list
    const listElement = document.createElement('ul');
    listElement.className = 'flex flex-col items-start gap-5 self-stretch px-8';


    characteristics.forEach(characteristic => {
        const listItem = document.createElement('li');
        listItem.className = 'flex items-start gap-4 text-bulletpoint-copy-desktop font-light';
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

    contentContainer.appendChild(contentTextContainer);

    const ctaContainer = document.createElement('div');
    ctaContainer.className = 'flex flex-col gap-4 self-stretch items-center';
    const secondaryCTA = createInfoTag({ label: infoLabel })
    const primaryCTA = createButtonCTA({
        variant: ButtonCTAVariant.LARGE_SUBSCRIPTION,
        label: primaryCTALabel,
        onClick: onPrimaryClick,
        disabled: false,
        nested: false,
        icon: null,
        iconLeft: false,
        classNames: "w-full rounded-b-lg"
    });

    ctaContainer.appendChild(secondaryCTA);
    ctaContainer.appendChild(primaryCTA);
    contentContainer.appendChild(ctaContainer);
    container.appendChild(contentContainer);
    return container;
};
