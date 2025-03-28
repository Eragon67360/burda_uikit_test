import { CardArgs, createCard } from '../Card/Card';
import './gridItems1to3View.css'

export type GridItems1to3ViewArgs = {
    cards: Array<CardArgs>;
};

export const createGridItems1to3View = ({
    cards = [],
}) => {
    const container = document.createElement('div');
    const innerContainer = document.createElement('div');

    innerContainer.className = `
    ${cards.length === 1
            ? 'grid grid-cols-1 max-w-full md:max-w-1/2 mx-auto justify-center'
            : cards.length === 2
                ? 'grid grid-cols-1 md:grid-cols-2'
                : 'flex flex-wrap justify-center [&>*]:!max-w-[100%] [&>*]:md:!min-w-[24rem] [&>*:nth-child(3)]:lg:!max-w-[50%]'
        }
    gap-5 
    w-full
`;


    const elements = cards.map(card => createCard(card));

    elements.forEach(element => {
        innerContainer.appendChild(element);
    });

    container.appendChild(innerContainer);
    return container;
}
