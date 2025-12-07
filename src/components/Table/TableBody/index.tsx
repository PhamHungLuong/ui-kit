// TableBody.tsx
import React from 'react';
import { flexRender } from '@tanstack/react-table';
import styles from './index.module.scss';
import { getColumnWidth } from '../utils/calculateSize';
import { useTableContext } from '../TableContext';
import { TableSkeleton } from '../TableSkeleton';
import { TableEmptyBody } from '../TableEmptyBody';
import { getCommonPinningStyles } from '../utils/getCommonPinningStyles'; // Import hàm mới sửa

export function TableBody() {
  const { table, height, isLoading } = useTableContext();

  if (isLoading) return <TableSkeleton />;
  if (table.getRowModel().rows.length === 0) return <TableEmptyBody />;

  return (
    <div className={styles.body} style={{ maxHeight: height }}>
      {table.getRowModel().rows.map((row) => (
        <div key={row.id} className={styles.bodyRow}>
          {row.getVisibleCells().map((cell, index) => {
            const isLastColumn = index === row.getVisibleCells().length - 1;
            const pinStyles = getCommonPinningStyles(cell.column);
            
            const width = isLastColumn ? 'auto' : getColumnWidth(cell.column);

            return (
              <div
                key={cell.id}
                className={styles.bodyCell}
                style={{
                  width: width,
                  minWidth: width, 
                  flexShrink: 0, 
                  flex: isLastColumn ? 1 : 'unset',
                  ...pinStyles, 
                }}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}