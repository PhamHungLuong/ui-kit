import React, { type ReactNode } from 'react';
import styles from './index.module.scss';

interface TableEmptyProps {
  height?: string;
  content?: ReactNode | string;
}

export function TableEmptyBody({
  height = '200px',
  content,
}: TableEmptyProps) {
  return (
    <div
      className={styles.emptyState}
      style={{ minHeight: height }}
    >
      {
        content ? (
          <div>
            {content}
          </div>
        ) : <>
          <div className={styles.emptyIcon}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
              <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
          </div>
          <div className={styles.emptyText}>
            No Data
          </div>
        </>
      }
    </div>
  );
}