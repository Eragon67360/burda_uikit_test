import './infoTag.css';

export type InfoTagArgs = {
  label: string;
};

export const createInfoTag = ({ label }: InfoTagArgs) => {
  const divElement = document.createElement('div');
  divElement.className = 'rounded-md bg-secondary-extra-light px-5 py-3 flex items-center justify-center';
  const span = document.createElement('span');
  span.className = 'text-subhead3';
  span.textContent = label;
  divElement.appendChild(span);
  return divElement;
};
