import { TableTextArgs, TableTextCell } from '@/stories/types';
import { jsx } from 'storybook/internal/theming';
import './text.css';

/**
 * Creates a styled table cell with appropriate classes based on column index
 * @param content - Cell content (string or JSX element)
 * @param colIndex - Column index to determine styling
 * @returns HTMLTableCellElement
 */
const createTableCell = (content: string | jsx.JSX.Element, colIndex: number): HTMLTableCellElement => {
  const td = document.createElement('td');
  td.className = `p-4 ${colIndex === 0 ? 'text-copy font-bold bg-base-white' : 'bg-neutral-100'}`;
  td.innerHTML = content.toString();
  return td;
};

/**
 * Creates a table row with cells and appropriate styling
 * @param rowData - Array of cell data for the row
 * @param isLastRow - Boolean indicating if this is the last row
 * @returns HTMLTableRowElement
 */
const createTableRow = (rowData: TableTextCell[], isLastRow: boolean): HTMLTableRowElement => {
  const tr = document.createElement('tr');
  if (!isLastRow) {
    tr.className = 'border-b border-neutral-200';
  }

  rowData.forEach((cell, colIndex) => {
    tr.appendChild(createTableCell(cell.content, colIndex));
  });

  return tr;
};

/**
 * Creates a styled table with the provided data
 * @param {TextArgs} props - The configuration options
 * @returns {HTMLTableElement} A styled table element
 */
export const createText = ({ rows }: TableTextArgs): HTMLTableElement => {
  const table = document.createElement('table');
  table.className = 'w-full border-collapse';

  table.setAttribute('role', 'table');
  table.setAttribute('aria-label', 'Data table');

  const tbody = document.createElement('tbody');
  tbody.setAttribute('role', 'rowgroup');

  rows.forEach((row, rowIndex) => {
    const isLastRow = rowIndex === rows.length - 1;
    const tr = createTableRow(row, isLastRow);
    tr.setAttribute('role', 'row');
    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  return table;
};
