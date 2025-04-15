import { jsx } from 'storybook/internal/theming';
import './text.css';

export type TextCell = {
  content: string | jsx.JSX.Element;
};

export type TextArgs = {
  rows: TextCell[][];
};

export const createText = ({ rows }: TextArgs) => {
  const getCellStyle = (colIndex: number) => {
    return colIndex === 0 ? 'text-copy font-bold bg-base-white' : 'bg-neutral-100';
  };

  return `
    <table class="w-full border-collapse">
      <tbody>
        ${rows
          .map(
            (row, rowIndex) => `
                    <tr class="${rowIndex !== rows.length - 1 ? 'border-b border-neutral-200' : ''}">
                        ${row
                          .map(
                            (cell, colIndex) => `
                            <td class="p-4 ${getCellStyle(colIndex)}">
                                ${cell.content}
                            </td>
                        `
                          )
                          .join('')}
                    </tr>
                `
          )
          .join('')}
      </tbody>
    </table>
  `;
};
