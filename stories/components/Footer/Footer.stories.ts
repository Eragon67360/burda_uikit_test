import type { Meta, StoryObj } from '@storybook/html';
import { createFooter, FooterArgs } from './Footer';
import { IconCategory, IconRegistry } from '../../assets/icons';

const meta: Meta<FooterArgs> = {
    title: 'Components (Organisms)/Footer',
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    render: (args) => createFooter(args)
};

export default meta;
type Story = StoryObj<FooterArgs>;

export const DefaultFooter: Story = {
    args: {
        column1: {
            logo: {
                src: '/burda_logo.png',
                alt: 'Company Logo',
                width: 315
            },
            phone: {
                label: 'Bestell-Hotline',
                number: '07816 39 65 20',
                description: 'Dieser Anruf kostet € 0,20/Verbindung aus allen deutschen Netzen.'
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
    }
};

export const MinimalFooter: Story = {
    args: {
        column1: {
            phone: {
                number: 'Contact Number'
            }
        },
        column2: {
            title: 'Links'
        },
        column3: {
            description: {
                title: 'About'
            }
        }
    }
};
