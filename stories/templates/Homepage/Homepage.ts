import { sampleBigImages, sampleSmallImages } from '@/stories/assets/sampleImages';
import { CardArgs } from '@/stories/components/Card/Card';
import { createFooter, FooterArgs } from '@/stories/components/Footer/Footer';
import { createGridItemView } from '@/stories/components/GridItemView/GridItemView';
import { createShowcase } from '@/stories/components/Header/Slideshow/Showcase/Showcase';
import { createStaticHero } from '@/stories/components/Header/StaticHero/StaticHero';
import { createTagGroup } from '@/stories/components/List/Tags/Tag';
import { createNavigation, NavigationArgs } from '@/stories/components/Navigation/Navigation';
import { createFlyout } from '@/stories/components/Overlay/Flyout/Flyout';
import { createSubscriptionPlanStartPage } from '@/stories/components/SubscriptionPlanStartPage/SubscriptionPlanStartPage';
import { setPrimaryColorMode } from '@/stories/utils/colorMode';

export interface HomepageArgs {
  withStaticHero: boolean;
  withSmallSlideshow: boolean;
  staticHeroDesktopImageSrc?: string;
  staticHeroMobileImageSrc?: string;
  staticHeroImageAltText?: string;
  staticHeroHref?: string;
  navigationHas2Lines: boolean;
  navigationArgs?: NavigationArgs;
  footerArgs: FooterArgs;
  isPrimaryColorDark?: boolean;
}

export const createHomepage = ({
  withStaticHero = false,
  withSmallSlideshow = false,
  staticHeroDesktopImageSrc,
  staticHeroMobileImageSrc,
  staticHeroHref,
  staticHeroImageAltText,
  navigationHas2Lines = false,
  navigationArgs,
  footerArgs,
  isPrimaryColorDark,
}: HomepageArgs) => {
  const cardExample: CardArgs = {
    backgroundColor: 'gray',
    image: 'burdaMag',
    title: 'Card ipsum',
    text: 'Als FOCUS Magazin Abonnent erhalten Sie FOCUS digital zum Vorteilspreis! Woche für Woche bereits ab Donnerstag, 16.00 Uhr!',
    buttonLabel: 'zum Angebot',
    onClick: () => console.log('Button clicked'),
  };

  const container = document.createElement('div');
  container.className = `flex flex-col h-full w-full mx-auto px-0`;
  container.style.maxWidth = '90rem';
  setPrimaryColorMode(isPrimaryColorDark);

  const header = document.createElement('header');
  header.className = `w-full max-w-[90rem] ${
    withSmallSlideshow || withStaticHero ? `${navigationHas2Lines ? 'mt-[3.25rem] md:mt-34' : 'p-4 md:p-0 mt-[3.25rem] md:mt-26'}` : ''
  }`;
  header.appendChild(createNavigation(navigationArgs));

  if (withStaticHero) {
    header.appendChild(
      createStaticHero({
        desktopImageSrc: staticHeroDesktopImageSrc,
        mobileImageSrc: staticHeroMobileImageSrc,
        href: staticHeroHref,
        altText: staticHeroImageAltText,
      })
    );
  } else {
    if (withSmallSlideshow) {
      header.appendChild(
        createShowcase({
          isSmall: withSmallSlideshow,
          images: sampleSmallImages,
          duration: 5,
          isPlaying: true,
        }).element
      );
    } else {
      header.appendChild(
        createShowcase({
          isSmall: withSmallSlideshow,
          images: sampleBigImages,
          duration: 5,
          isPlaying: true,
        }).element
      );
    }
  }

  const subscriptionSection = document.createElement('section');
  subscriptionSection.className = 'py-32 w-full max-w-[90rem] mx-auto px-4 flex flex-col gap-8 flex-wrap justify-center';
  const subscriptionHeader = document.createElement('div');
  subscriptionHeader.className = 'flex flex-col items-center';
  subscriptionHeader.innerHTML = `<h1 class="text-h1 text-center hyphens-auto">Unsere Zeitschriften</h1>
          <h2 class="text-subhead2 font-semibold">Print- und Digitalangebote</h2>`;

  const subscriptionPlans = document.createElement('div');
  subscriptionPlans.className = 'w-full max-w-[90rem] mx-auto flex flex-wrap gap-8 justify-center items-end';

  subscriptionPlans.appendChild(
    createSubscriptionPlanStartPage({
      image: '/burda_subscriptions_1.png',
      title: 'FOCUS',
      subtitle: 'Das FOCUS Komplett-Paket aus Print-Heft und digitalen Inhalten',
      characteristics: [
        'FOCUS klassisch als Print-Ausgabe',
        'Das FOCUS Komplett-Paket aus Print-Heft und digitalen Inhalten',
        'FOCUS klassisch als Print-Ausgabe',
        'Das FOCUS Komplett-Paket aus Print-Heft und digitalen Inhalten',
      ],
      infoLabel: 'ab 3,40 € pro Ausgabe',
      primaryCTALabel: 'Abo auswählen',
      onPrimaryClick: () => console.log('Plan 1 Primary clicked'),
    })
  );

  subscriptionPlans.appendChild(
    createSubscriptionPlanStartPage({
      image: '/burda_subscriptions_2.png',
      title: 'FOCUS MONEY',
      subtitle: 'Das FOCUS Komplett-Paket aus Print-Heft und digitalen Inhalten',
      characteristics: [
        'FOCUS klassisch als Print-Ausgabe',
        'Das FOCUS Komplett-Paket aus Print-Heft und digitalen Inhalten',
        'FOCUS klassisch als Print-Ausgabe',
        'Das FOCUS Komplett-Paket aus Print-Heft und digitalen Inhalten',
      ],
      infoLabel: 'ab 3,40 € pro Ausgabe',
      primaryCTALabel: 'Abo auswählen',
      onPrimaryClick: () => console.log('Plan 2 Primary clicked'),
    })
  );

  subscriptionPlans.appendChild(
    createSubscriptionPlanStartPage({
      image: '/burda_subscriptions_3.png',
      title: 'FOCUS+',
      subtitle: 'Das FOCUS Komplett-Paket aus Print-Heft und digitalen Inhalten',
      characteristics: [
        'FOCUS klassisch als Print-Ausgabe',
        'Das FOCUS Komplett-Paket aus Print-Heft und digitalen Inhalten',
        'FOCUS klassisch als Print-Ausgabe',
        'Das FOCUS Komplett-Paket aus Print-Heft und digitalen Inhalten',
      ],
      infoLabel: 'ab 3,40 € pro Ausgabe',
      primaryCTALabel: 'Abo auswählen',
      onPrimaryClick: () => console.log('Plan 3 Primary clicked'),
    })
  );

  subscriptionSection.appendChild(subscriptionHeader);
  subscriptionSection.appendChild(subscriptionPlans);

  const tagsSection = document.createElement('section');
  tagsSection.className = 'bg-neutral-100 px-4 py-32';

  const tags = [
    { text: 'Lorem ipsum dolor sitaemt' },
    { text: 'Lorem ipsum sitaemt' },
    { text: 'Lorem ipsum dolor sitaemt' },
    { text: 'Lorem ipsum dolor sitaemt' },
    { text: 'Lorem dolor sitaemt' },
    { text: 'Lorem ipsum' },
    { text: 'Lorem ipsum dolor sitaemt' },
  ];

  tagsSection.appendChild(createTagGroup(tags));

  const cardsSection = document.createElement('section');
  cardsSection.className = 'py-36 w-full max-w-[90rem] px-4 md:px-12';

  const cards: CardArgs[] = [
    { ...cardExample },
    {
      ...cardExample,
      image: 'emailCheck',
      text: 'Der kostenlose FOCUS-Magazin-Newsletter liefert Ihnen schon freitags die wichtigsten Themen der kommenden Woche.',
    },
    {
      ...cardExample,
      image: 'emailCheck',
      text: 'Der kostenlose FOCUS-Magazin-Newsletter liefert Ihnen schon freitags die wichtigsten Themen der kommenden Woche.',
    },
  ];

  cardsSection.appendChild(createGridItemView({ cards, gridItemType: 'card', centerItems: true, fixedColumnCount: 3 }));

  const footer = document.createElement('footer');
  footer.innerHTML = `${createFooter(footerArgs)}`;

  const flyout = document.createElement('div');
  flyout.appendChild(
    createFlyout({
      label: 'Abo-Vorteile',
      items: [
        {
          icon: 'history',
          title: 'Pünktliche Lieferung',
          description: 'Sie bekommen Ihre Wunschzeitschrift pünktlich nach Hause geliefert.',
        },
        {
          icon: 'laptop',
          title: 'Direkt vom Verlag',
          description: 'Sie erhalten Ihre Wunschzeitschrift direkt vom Verlagshaus, ohne Zwischenhändler.',
        },
        {
          icon: 'documentHand',
          title: 'E-Paper zum Sonderpreis',
          description: 'Die digitale Ausgabe ist günstiger als die Printversion. Sie sparen bei einer Kombination aus Print & Digital.',
        },
      ],
    })
  );

  container.appendChild(header);
  container.appendChild(subscriptionSection);
  container.appendChild(tagsSection);
  container.appendChild(cardsSection);
  container.appendChild(footer);
  container.appendChild(flyout);

  return container;
};
