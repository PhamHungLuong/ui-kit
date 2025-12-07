// TableHeader.tsx
import React from 'react';
import { flexRender } from '@tanstack/react-table';
import { getColumnWidth } from '../utils/calculateSize';
import styles from './index.module.scss';
import { useTableContext } from '../TableContext';
import { getCommonPinningStyles } from '../utils/getCommonPinningStyles';

export function TableHeader() {
  const { table } = useTableContext();
  
  return (
    <div className={styles.header}>
      {table.getHeaderGroups().map((headerGroup) => (
        <div key={headerGroup.id} className={styles.headerRow}>
          {headerGroup.headers.map((header, index) => {
             const isLastColumn = index === headerGroup.headers.length - 1;
             const pinStyles = getCommonPinningStyles(header.column);
             
             const width = isLastColumn ? 'auto' : getColumnWidth(header.column);

             return (
                <div
                  key={header.id}
                  className={styles.headerCell}
                  style={{
                    width: width,
                    minWidth: width,
                    flexShrink: 0,
                    flex: isLastColumn ? 1 : 'unset',
                    ...pinStyles,
                    zIndex: pinStyles.position === 'sticky' ? 4 : undefined,
                  }}
                >
                  <div className={styles.headerContent}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </div>
                  
                  {header.column.getCanResize?.() && !isLastColumn && (
                    <div
                      onMouseDown={header.getResizeHandler()}
                      onTouchStart={header.getResizeHandler()}
                      className={`${styles.resizer} ${
                        header.column.getIsResizing() ? styles.isResizing : ''
                      }`}
                      onClick={(e) => e.stopPropagation()} 
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