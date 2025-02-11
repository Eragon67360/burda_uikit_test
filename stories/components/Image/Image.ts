export type ImageArgs = {
    src: string;
    ratio: '1:1' | '4:3' | '16:9';
    alt?: string;
};

const ratioClasses = {
    '1:1': 'aspect-square',
    '4:3': 'aspect-4/3',
    '16:9': 'aspect-video'
};

export const createImage = ({ src, ratio, alt = '' }: ImageArgs) => {
    const container = document.createElement('div');
    container.className = 'flex gap-4 w-full';

    const imageWrapper = document.createElement('div');
    imageWrapper.className = `h-48 ${ratioClasses[ratio]}`;

    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.className = 'w-full h-full object-cover rounded-lg';

    imageWrapper.appendChild(img);

    const ratioBox = document.createElement('div');
    ratioBox.className = ` ${ratioClasses[ratio]} h-48 bg-secondary-interaction rounded-lg flex items-center justify-center text-white font-medium`;
    ratioBox.textContent = ratio;

    container.appendChild(imageWrapper);
    container.appendChild(ratioBox);

    return container;
};