import React from 'react';
import { flexRender } from '@tanstack/react-table';
import { getColumnWidth } from '../utils/calculateSize';
import styles from './index.module.scss';
import { useTableContext } from '../TableContext';
import { getCommonPinningStyles } from '../utils/getCommonPinningStyles';
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";
import { TableColumnSort } from '../TableColumnSort';

export function TableHeader() {
  const { table, enableSorting, sortingProps } = useTableContext();

  return (
    <div className={styles.header}>
      {table.getHeaderGroups().map((headerGroup) => (
        <div key={headerGroup.id} className={styles.headerRow}>
          {headerGroup.headers.map((header, index) => {
            const isLastColumn = index === headerGroup.headers.length - 1;
            const pinStyles = getCommonPinningStyles(header.column);
            const width = isLastColumn ? 'auto' : getColumnWidth(header.column);

            const canSort = enableSorting && header.column.getCanSort();
            const isSorted = sortingProps?.sortedColumnIds.id === header.column.id;
            const currentDirection = isSorted ? sortingProps?.sortedColumnIds.direction : null;

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
                  <div className={styles.titleGroup}>
                    <span className={styles.headerText}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </span>

                    {isSorted && (
                       <span className={styles.sortStatusIcon}>
                          {currentDirection === 'asc' 
                            ? (sortingProps?.icons?.asc || <FaArrowUp />) 
                            : (sortingProps?.icons?.desc || <FaArrowDown />)
                          }
                       </span>
                    )}
                  </div>
                  
                  {canSort && (
                    <TableColumnSort 
                      columnId={header.column.id}
                      sortingProps={sortingProps}
                      isSorted={isSorted}
                      currentDirection={currentDirection}
                    />
                  )}
                </div>

                {/* Resizer */}
                {header.column.getCanResize?.() && !isLastColumn && (
                  <div
                    onMouseDown={header.getResizeHandler()}
                    onTouchStart={header.getResizeHandler()}
                    className={`${styles.resizer} ${header.column.getIsResizing() ? styles.isResizing : ''}`}
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