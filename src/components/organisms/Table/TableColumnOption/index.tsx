import React from 'react';
import { FaArrowUp, FaArrowDown, FaAngleDown } from "react-icons/fa6";
import Popup from '../../PopUp';
import styles from '../Header/index.module.scss';
import type { SortDirection } from '@tanstack/react-table';

interface ITableColumnSort {
  columnId: string;
  sortingProps?: {
    sortedColumnIds: { id: string, direction: SortDirection };
    onSortingChange: (data: { id: string, direction: SortDirection }) => void;
    labels?: {
      asc?: string | React.ReactNode;
      desc?: string | React.ReactNode;
    };
    icons?: {
      asc?: React.ReactNode;
      desc?: React.ReactNode;
    };
  };
  isSorted: boolean;
  currentDirection: SortDirection | null;
}

export const TableColumnOption = ({ 
  columnId, 
  sortingProps, 
  isSorted, 
  currentDirection 
}: ITableColumnSort) => {
  
  const handleSort = (direction : SortDirection) => {
    sortingProps?.onSortingChange({ id: columnId, direction });
  };

  const IconAsc = sortingProps?.icons?.asc || <FaArrowUp />;
  const IconDesc = sortingProps?.icons?.desc || <FaArrowDown />;
  const LabelAsc = sortingProps?.labels?.asc || 'Sort A-Z';
  const LabelDesc = sortingProps?.labels?.desc || 'Sort Z-A';

  return (
    <Popup
      className={styles.sortPopupContent}
      triggerElement={
        <div className={`${styles.sortTriggerBtn} ${isSorted ? styles.active : ''}`}>
          <FaAngleDown /> 
        </div>
      }
    >
      <div className={styles.sortMenu}>
        <div
          className={`${styles.sortItem} ${isSorted && currentDirection === 'asc' ? styles.active : ''}`}
          onClick={() => handleSort('asc')}
        >
          {IconAsc} <span>{LabelAsc}</span>
        </div>
        <div
          className={`${styles.sortItem} ${isSorted && currentDirection === 'desc' ? styles.active : ''}`}
          onClick={() => handleSort('desc')}
        >
          {IconDesc} <span>{LabelDesc}</span>
        </div>
      </div>
    </Popup>
  );
};