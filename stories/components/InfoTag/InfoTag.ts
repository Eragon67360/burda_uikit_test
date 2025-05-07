import { InfoTagArgs } from '@/stories/types';
import './infoTag.css';

/**
 * Creates an information tag component with specified label
 * @param {InfoTagArgs} props - The configuration options
 * @returns {HTMLElement} A div element containing the info tag
 */
export const createInfoTag = ({ label }: InfoTagArgs) => {
  const divElement = document.createElement('div');
  divElement.className = 'rounded-md bg-secondary-extra-light px-5 py-3 flex items-center justify-center';
  divElement.setAttribute('role', 'status');

  const span = document.createElement('span');
  span.className = 'text-subhead3';
  span.textContent = label;

  divElement.appendChild(span);
  return divElement;
};
