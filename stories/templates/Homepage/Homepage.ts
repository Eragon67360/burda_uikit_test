import { IconCategory, IconRegistry } from '@/stories/assets/icons';
import { CardArgs, createCard } from '@/stories/components/Card/Card';
import { createFooter } from '@/stories/components/Footer/Footer';
import { createDesktopTag } from '@/stories/components/List/Tags/Desktop/Desktop';
import { createMobileTag } from '@/stories/components/List/Tags/Mobile/Mobile';
import { createNavigation } from '@/stories/components/Navigation/Navigation';
import { createFlyout } from '@/stories/components/Overlay/Flyout/Flyout';
import { createShowcase } from '@/stories/components/Slideshow/Showcase/Showcase';
import { createSubscriptionPlan } from '@/stories/components/SubscriptionPlan/SubscriptionPlan';

export interface HomepageArgs { }

export const createHomepage = ({ }: HomepageArgs) => {
  const cardExample: CardArgs = {
    backgroundColor: 'gray',
    image: 'burdaMag',
    title: 'Card ipsum',
    text: 'Als FOCUS Magazin Abonnent erhalten Sie FOCUS digital zum Vorteilspreis! Woche für Woche bereits ab Donnerstag, 16.00 Uhr!',
    buttonLabel: 'zum Angebot',
    onClick: () => console.log('Button clicked'),
  };
  const styledCardText = `
    Bei Fragen rund um das Thema Abo erreichen Sie uns unter:
    <br>
    <span class="py-2 inline-block font-roboto-serif text-base font-semibold">07816 39 65 20**</span>
    <br>
    Bei Fragen rund um das Thema Abo erreichen Sie uns unter: dieser Anruf kostet € 0,20/Verbindung aus allen deutschen Netzen.
  `;

  return `
    <div class="container mx-auto h-full">
      <header class="w-full h-full">
        ${createNavigation({
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
          hasSearch: true,
          searchProps: {
            emptyText: 'Keine Ergebnisse gefunden',
            placeholder: 'Suche',
            results: [
              { label: 'Product 1', href: '/product1' },
              { label: 'Product 2', href: '/product2' },
              { label: 'Product 3', href: '/product3' }
            ]
          },
          loginButtonText: 'Kundenservice & Login',
          loginButtonIcon: 'userCircle',
          cartButtonText: 'Warenkorb & Kasse',
          cartButtonIcon: 'cart',
          onClickLoginButton: () => console.log("Login button has been clicked"),
          onClickCartButton: () => console.log("Cart button has been clicked"),
        }).outerHTML}
        ${createShowcase({
          images: ['/template-homepage-hero.jpg'],
          duration: 5000,
          isPlaying: false,
        }).element.outerHTML}
      </header>
      <section class="bg-base-white px-12 py-32 space-y-16">
        <div class="flex flex-col items-center">
          <h1 class="text-h1-desktop font-roboto-serif">Unsere Zeitschriften</h1>
          <h2 class="text-subhead2-desktop font-semibold">Print- und Digitalangebote</h2>
        </div>
        <div class="flex gap-8 items-end w-full flex-wrap justify-center">
          ${createSubscriptionPlan({
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
          }).outerHTML}
          ${createSubscriptionPlan({
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
          }).outerHTML}
          ${createSubscriptionPlan({
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
          }).outerHTML}
        </div>
      </section>
      <section class="bg-neutral-100 px-12 py-32">
          <div class="flex-wrap justify-center gap-4 hidden md:flex">
            ${createDesktopTag({ text: 'Lorem ipsum dolor sitaemt' })}
            ${createDesktopTag({ text: 'Lorem ipsum sitaemt' })}
            ${createDesktopTag({ text: 'Lorem ipsum dolor sitaemt' })}
            ${createDesktopTag({ text: 'Lorem ipsum dolor sitaemt' })}
            ${createDesktopTag({ text: 'Lorem dolor sitaemt' })}
            ${createDesktopTag({ text: 'Lorem ipsum' })}
            ${createDesktopTag({ text: 'Lorem ipsum dolor sitaemt' })}
          </div>
          <div class="flex flex-wrap justify-center gap-4 md:hidden">
            ${createMobileTag({ text: 'Lorem ipsum dolor sitaemt' })}
            ${createMobileTag({ text: 'Lorem ipsum sitaemt' })}
            ${createMobileTag({ text: 'Lorem ipsum dolor sitaemt' })}
            ${createMobileTag({ text: 'Lorem ipsum dolor sitaemt' })}
            ${createMobileTag({ text: 'Lorem dolor sitaemt' })}
            ${createMobileTag({ text: 'Lorem ipsum' })}
            ${createMobileTag({ text: 'Lorem ipsum dolor sitaemt' })}
          </div>
      </section>
      <section class="px-12 py-32">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          ${createCard(cardExample)}
          ${createCard({ ...cardExample, image: 'emailCheck', text: 'Der kostenlose FOCUS-Magazin-Newsletter liefert Ihnen schon freitags die wichtigsten Themen der kommenden Woche.' })}
          ${createCard({ ...cardExample, image: 'keypad', text: styledCardText, buttonLabel: '' })}
        </div>
      </section>
      ${createFooter({
        column1: {
          logo: {
            src: '/burda_logo.png',
            alt: 'Company Logo',
            width: 315
          },
          phone: {
            label: 'Bestell-Hotline',
            number: '07816 39 65 20',
            description: 'Dieser Anruf kostet € 0,20/Verbindung aus allen deutschen Netzen.',
            extraHint: '**',
          },
          hints: {
            firstHint: {
              text: '* inkl. gesetzl. MwSt. bei Produkten zzgl.',
              linkText: 'Versandkosten',
              linkHref: 'https://example.com'
            },
            secondHint: '** Zum Ortstarif, Mobilfunknetze können abweichen'
          },
          copyright: '© 2024 BurdaVerlag Publishing GmbH'
        },
        column2: {
          title: 'Über den FOCUS Abo-Shop',
          links: [
            { text: 'Impressum', href: '#impressum' },
            { text: 'AGB', href: '#agb' },
            { text: 'Datenschutz', href: '#datenshutz' },
            { text: 'Tracking-Einstellungen', href: '#tracking-einstellungen' },
            { text: 'Versand und Zahlung', href: '#versand-zahlung' },
            { text: 'Widerrufsrecht', href: '#widerrufsrecht' },
            { text: 'Kontakt', href: '#kontakt' },
            { text: 'Verträge hier kündigen', href: '#vertraege' },
          ],
          paymentSection: {
            title: 'Bezahlweisen',
            icons: [
              { src: '/paypal.png', alt: 'PayPal', width: 70 },
              { src: '/rechnung.png', alt: 'Rechung', width: 70 },
              { src: '/bank.png', alt: 'Bank', width: 70 },
              { src: '/visa.png', alt: 'Visa', width: 70 },
              { src: '/mastercard.png', alt: 'Mastercard', width: 70 },
            ]
          },
          qualitySection: {
            title: 'Sicher & Nachhaltig',
            icons: [
              { src: '/ssl.png', alt: 'SSL', width: 80 },
              { src: '/gogreen.png', alt: 'GoGreen', width: 80 },
            ]
          },
          socialSection: {
            title: 'Folgen Sie uns',
            networks: [
              { svg: IconRegistry[IconCategory.SOCIAL].facebook, href: '#facebook', alt: 'Facebook' },
              { svg: IconRegistry[IconCategory.SOCIAL].pinterest, href: '#pinterest', alt: 'Pinterest' },
              { svg: IconRegistry[IconCategory.SOCIAL].instagram, href: '#instagram', alt: 'Instagram' },
            ]
          }
        },
        column3: {
          logo: {
            src: '/burda_verlag.jpg',
            alt: 'Another Logo',
            width: 200
          },
          description: {
            title: 'BurdaVerlag',
            text: 'Entdecken Sie eine interessante Auswahl von weiteren Zeitschriften mit attraktiven Abo-Angeboten und -Prämien:'
          },
          linkColumns: {
            column1: [
              { text: 'BUNTE', href: '#services' },
              { text: 'INSTYLE', href: '#services' },
              { text: 'FREUNDIN', href: '#services' },
              { text: 'ELLE', href: '#services' },
            ],
            column2: [
              { text: 'HARPER\'S BAZAAR', href: '#careers' },
              { text: 'MEIN SCHÖNER GARTEN', href: '#blog' },
              { text: 'TV-SPIELFILM', href: '#blog' },
            ]
          },
          secondSection: {
            title: 'FOCUS Abonnement',
            description: 'Sichern Sie sich jetzt alle Vorteile als Abonnent des Magazins. Keine Ausgabe des FOCUS-Magazins mehr verpassen, pünktliche Lieferung direkt nach Hause und das zum gleichen Preis wie am Kiosk. Zudem können Sie als FOCUS Abonnent aus vielen verschiedenen Prämien auswählen!\nIn dem FOCUS Abo- Shop haben Sie die Möglichkeit, aus verschiedenen Abos zu wählen: '
          },
          specialLinks: [
            { text: 'Jahres-Abo', href: 'http://focus-abo.de/jahres-abo/?hnr=intern.seo-footer.focus.ja' },
            { text: 'Mini-Abo', href: '#offer2' },
            { text: 'Geschenk-Abo', href: '#offer2' },
            { text: 'Studenten-Abo', href: '#offer2' },
            { text: 'Prämien Abo', href: '#offer2' },
            { text: 'FOCUS digital', href: '#offer2' }
          ],
          finalDescription: 'Entscheiden Sie sich jetzt für die Zeitschrift FOCUS mit einem Abo!'
        }
      })}
    ${createFlyout({
      label: 'Abo-Vorteile',
      items: [
        {
          icon: 'history',
          title: 'Pünktliche Lieferung',
          description: 'Sie bekommen Ihre Wunschzeitschrift pünktlich nach Hause geliefert.'
        },
        {
          icon: 'laptop',
          title: 'Direkt vom Verlag',
          description: 'Sie erhalten Ihre Wunschzeitschrift direkt vom Verlagshaus, ohne Zwischenhändler.'
        },
        {
          icon: 'documentHand',
          title: 'E-Paper zum Sonderpreis',
          description: 'Die digitale Ausgabe ist günstiger als die Printversion. Sie sparen bei einer Kombination aus Print & Digital.'
        }
      ]
    }).outerHTML}
    </div>
  `;
};
