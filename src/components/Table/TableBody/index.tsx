import React from 'react';
import { flexRender } from '@tanstack/react-table';
import styles from './index.module.scss';
import { getColumnWidth } from '../utils/calculateSize';
import { useTableContext } from '../TableContext';

export function TableBody() {
  const { table, height } = useTableContext();
  return (
    <div 
      className={styles.body}
      style={{
        maxHeight: height,
      }}
    >
      {table.getRowModel().rows.map((row) => (
        <div key={row.id} className={styles.bodyRow}>
          {row.getVisibleCells().map((cell) => (
            <div
              key={cell.id}
              className={styles.bodyCell}
              style={{
                width: getColumnWidth(cell.column)
              }}
            >
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}