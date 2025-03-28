export interface StaticHeroArgs {
  desktopImageSrc: string;
  mobileImageSrc?: string;
  href: string;
  altText?: string;
}

export const createStaticHero = ({
  desktopImageSrc,
  mobileImageSrc,
  href,
  altText,
}: StaticHeroArgs) => {
  const wrapper = document.createElement('div');
  wrapper.className = "w-full";

  const link = document.createElement('a');
  link.href = href;

  if (mobileImageSrc) {
    const image = document.createElement('picture');

    const mobileSource = document.createElement('source');
    mobileSource.media = "(max-width: 767px)";
    mobileSource.srcset = mobileImageSrc;

    const desktopSource = document.createElement('source');
    desktopSource.media = "(min-width: 768px)";
    desktopSource.srcset = desktopImageSrc;

    const fallbackImg = document.createElement('img');
    fallbackImg.src = desktopImageSrc;
    fallbackImg.alt = altText || '';
    fallbackImg.className = "w-full h-auto";

    image.appendChild(mobileSource);
    image.appendChild(desktopSource);
    image.appendChild(fallbackImg);

    link.appendChild(image);
  } else {
    const image = document.createElement('img');
    image.src = desktopImageSrc;
    image.alt = altText || '';
    image.className = "w-full h-auto";

    link.appendChild(image);
  }

  wrapper.appendChild(link);

  return wrapper;
};
