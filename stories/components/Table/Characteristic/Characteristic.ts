import { jsx } from 'storybook/internal/theming';
import './characteristic.css';

export type CharacteristicCell = {
  content: string | jsx.JSX.Element;
  isIcon?: boolean;
};

export type CharacteristicArgs = {
  headers: string[];
  rows: CharacteristicCell[][];
};

export const createCharacteristic = ({ headers, rows }: CharacteristicArgs) => {
  const getRowBgColor = (index: number) => {
    return index % 2 === 1 ? 'bg-base-white' : 'bg-neutral-100';
  };

  const getCellStyle = (rowIndex: number, colIndex: number) => {
    if (rowIndex === 0) {
      return colIndex === 0 ? 'text-teaser-copy' : 'text-copy font-bold';
    }
    return colIndex === 0 ? 'text-copy font-bold' : '';
  };

  const getAlignment = (colIndex: number) => {
    return colIndex === 0 ? 'text-left' : 'text-center';
  };

  return `
    <table class="w-full border-collapse">
      <thead class="bg-base-white">
        <tr>
          ${headers.map((header, index) => `<th class="p-4 ${getAlignment(index)} ${getCellStyle(0, index)}">${header}</th>`).join('')}
        </tr>
      </thead>
      <tbody>
        ${rows
          .map(
            (row, rowIndex) => `
                    <tr class="${getRowBgColor(rowIndex)}">
                        ${headers
                          .map((_, colIndex) => {
                            const cell = row[colIndex] || { content: '' };
                            return `
                                <td class="p-4 ${getAlignment(colIndex)} ${getCellStyle(rowIndex + 1, colIndex)}">
                                    ${cell.isIcon ? `<span class="w-4 h-4 inline-block">${cell.content}</span>` : cell.content}
                                </td>
                            `;
                          })
                          .join('')}
                    </tr>
                    `
          )
          .join('')}
      </tbody>
    </table>
  `;
};
