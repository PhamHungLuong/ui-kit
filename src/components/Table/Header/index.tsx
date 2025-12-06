// TableHeader.tsx
import React from 'react';
import { flexRender } from '@tanstack/react-table';
import { getColumnWidth } from '../utils/calculateSize';
import styles from './index.module.scss';
import { useTableContext } from '../TableContext';

export function TableHeader() {
  const { table } = useTableContext();
  
  return (
    <div className={styles.header}>
      {table.getHeaderGroups().map((headerGroup) => (
        <div key={headerGroup.id} className={styles.headerRow}>
          {headerGroup.headers.map((header, index) => {
             // Check this column is the last in the row
             const isLastColumn = index === headerGroup.headers.length - 1;
             
             return (
                <div
                  key={header.id}
                  className={styles.headerCell}
                  style={{
                    width: isLastColumn ? 'auto' : getColumnWidth(header.column),
                    flex: isLastColumn ? 1 : 'unset',
                  }}
                >
                  <div className={styles.headerContent}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </div>
                  
                  {/* Chỉ hiện resizer nếu KHÔNG PHẢI cột cuối (để tránh xung đột logic) */}
                  {header.column.getCanResize?.() && !isLastColumn && (
                    <div
                      onMouseDown={header.getResizeHandler()}
                      onTouchStart={header.getResizeHandler()}
                      className={`${styles.resizer} ${
                        header.column.getIsResizing() ? styles.isResizing : ''
                      }`}
                    />
                  )}
                </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}