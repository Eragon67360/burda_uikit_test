import { Img } from "storybook/internal/components";

export interface StaticHeroArgs {
  imageSrc: string;
  href: string;
  altText?: string;
}

export const createStaticHero = ({
  imageSrc,
  href,
  altText,
}: StaticHeroArgs) => {
  const wrapper = document.createElement('div');
  wrapper.className = "w-full"
  const link = document.createElement('a');
  link.href = href;
  const image = document.createElement('img');
  image.src = imageSrc;
  image.alt = altText;

  link.appendChild(image);
  wrapper.appendChild(link);

  return wrapper;
};
