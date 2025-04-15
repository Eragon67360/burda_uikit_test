export const getSizedIcon = (svg: string, size?: number): string => {
  if (!size) return svg;

  const parser = new DOMParser();
  const doc = parser.parseFromString(svg, 'image/svg+xml');
  const svgElement = doc.querySelector('svg');

  if (!svgElement) return svg;

  // const viewBox = svgElement.getAttribute('viewBox');

  svgElement.setAttribute('width', `${size}`);
  svgElement.setAttribute('height', `${size}`);

  return svgElement.outerHTML;
};
