import React from 'react';
import styles from './index.module.scss';
import { useTableContext } from '../TableContext';

export function TableSkeleton() {
  const { skeletonRowCount = 5 } = useTableContext();

  return (
    <>
      {Array.from({ length: skeletonRowCount }).map((_, rowIndex) => (
        <div 
          key={`skeleton-row-${rowIndex}`} 
          className={styles.bodyRow}
          style={{ width: '100%', display: 'flex' }}
        >
          <div 
            className={styles.bodyCell} 
            style={{ 
               flex: 1, 
               width: '100%', 
               padding: '12px'
            }}
          >
             <div className={styles.skeletonBox} />
          </div>
        </div>
      ))}
    </>
  );
}