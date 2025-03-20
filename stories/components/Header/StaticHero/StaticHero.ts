export interface StaticHeroArgs {
  image: string;
  href: string;
  altText?: string;
}

export const createStaticHero = ({
  image,
  href,
  altText,
}: StaticHeroArgs) => {
  return `
    <div class="w-full">
      <a href="${href}">
        <img src="${image}" alt="${altText}" />
      </a>
    </div>
  `;
};
