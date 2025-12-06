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
          {headerGroup.headers.map((header) => (
            <div
              key={header.id}
              className={styles.headerCell}
              style={{
                width: getColumnWidth(header.column)
              }}
            >
              <div className={styles.headerContent}>
                {header.isPlaceholder
                  ? null
                  : flexRender(header.column.columnDef.header, header.getContext())}
              </div>
              {header.column.getCanResize?.() &&
                <div
                  onMouseDown={header.getResizeHandler()}
                  onTouchStart={header.getResizeHandler()}
                  className={`${styles.resizer} ${header.column.getIsResizing() ? styles.isResizing : ''
                    }`}
                />}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}