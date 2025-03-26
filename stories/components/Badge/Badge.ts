export const createBadge = (badgeLabel: string, size: number, color: "primary" | "secondary") => {
    const badgeElement = document.createElement('div');
    badgeElement.className = `absolute top-0 left-0 p-2 min-w-[${size}px] min-h-[${size}px] aspect-square bg-${color}-interaction rounded-full flex items-center justify-center`;

    const badgeTextElement = document.createElement('div');
    badgeTextElement.className = `font-bold text-copy-small`;
    badgeTextElement.textContent = badgeLabel;

    badgeElement.appendChild(badgeTextElement);

    return badgeElement;
}
