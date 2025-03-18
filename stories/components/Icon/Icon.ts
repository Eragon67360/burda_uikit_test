// components/Icon/Icon.ts

import { IconRegistry, IconCategory } from "@/assets/icons";

export type IconProps = {
    name: keyof typeof IconRegistry[IconCategory.SYSTEM];
    size?: number;
    className?: string;
};

export const createIcon = ({ name, size = 20, className = '' }: IconProps) => {
    const iconSvg = IconRegistry[IconCategory.SYSTEM][name];

    const parser = new DOMParser();
    const doc = parser.parseFromString(iconSvg, 'image/svg+xml');
    const svg = doc.documentElement;

    svg.setAttribute('width', `${size}`);
    svg.setAttribute('height', `${size}`);

    if (className) {
        svg.setAttribute('class', className);
    }

    return svg.outerHTML;
};
