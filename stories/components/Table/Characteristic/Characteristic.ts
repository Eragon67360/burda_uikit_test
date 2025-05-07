import { TableCharacteristicArgs, TableCharacteristicCell } from '@/stories/types';

/**
 * Creates a characteristic table with headers and rows, supporting both text and icon content
 * @param {CharacteristicArgs} props - The configuration options
 * @param {string[]} props.headers - Array of column header labels
 * @param {CharacteristicCell[][]} props.rows - Two-dimensional array of table cells
 * @returns {HTMLTableElement} The constructed table element
 */
export const createCharacteristic = ({ headers, rows }: TableCharacteristicArgs): HTMLTableElement => {
  const getRowBgColor = (index: number): string => {
    return index % 2 === 1 ? 'bg-base-white' : 'bg-neutral-100';
  };

  const getCellStyle = (rowIndex: number, colIndex: number): string => {
    if (rowIndex === 0) {
      return colIndex === 0 ? 'text-teaser-copy' : 'text-copy font-bold';
    }
    return colIndex === 0 ? 'text-copy font-bold' : '';
  };

  const getAlignment = (colIndex: number): string => {
    return colIndex === 0 ? 'text-left' : 'text-center';
  };

  const createHeaderCell = (header: string, index: number): HTMLTableCellElement => {
    const th = document.createElement('th');
    th.className = `p-4 ${getAlignment(index)} ${getCellStyle(0, index)}`;
    th.textContent = header;
    th.setAttribute('role', 'columnheader');
    th.setAttribute('scope', 'col');
    return th;
  };

  const createCell = (cell: TableCharacteristicCell, colIndex: number, rowIndex: number): HTMLTableCellElement => {
    const td = document.createElement('td');
    td.className = `p-4 ${getAlignment(colIndex)} ${getCellStyle(rowIndex + 1, colIndex)}`;

    if (cell.isIcon) {
      const span = document.createElement('span');
      span.className = 'w-4 h-4 inline-block';
      span.innerHTML = cell.content.toString();
      td.appendChild(span);
    } else {
      td.innerHTML = cell.content.toString();
    }

    return td;
  };

  // Create table element
  const table = document.createElement('table');
  table.className = 'w-full border-collapse';
  table.setAttribute('role', 'table');

  // Create thead
  const thead = document.createElement('thead');
  thead.className = 'bg-base-white';
  thead.setAttribute('role', 'rowgroup');

  // Create header row
  const headerRow = document.createElement('tr');
  headerRow.setAttribute('role', 'row');
  headers.forEach((header, index) => {
    headerRow.appendChild(createHeaderCell(header, index));
  });
  thead.appendChild(headerRow);

  // Create tbody
  const tbody = document.createElement('tbody');
  tbody.setAttribute('role', 'rowgroup');

  // Create data rows
  rows.forEach((row, rowIndex) => {
    const tr = document.createElement('tr');
    tr.className = getRowBgColor(rowIndex);
    tr.setAttribute('role', 'row');

    headers.forEach((_, colIndex) => {
      const cell = row[colIndex] || { content: '' };
      tr.appendChild(createCell(cell, colIndex, rowIndex));
    });

    tbody.appendChild(tr);
  });

  // Assemble table
  table.appendChild(thead);
  table.appendChild(tbody);

  return table;
};
