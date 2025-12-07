import { type Column } from '@tanstack/react-table';
import { type CSSProperties } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getCommonPinningStyles = (column: Column<any>): CSSProperties => {
  const isPinned = column.getIsPinned();

  if (!isPinned) return {};

  return {
    // Calculate left or right positioning
    left: isPinned === 'left' ? `${column.getStart('left')}px` : undefined,
    right: isPinned === 'right' ? `${column.getAfter('right')}px` : undefined,
    position: 'sticky',
    width: column.getSize(),
    zIndex: 1,
    backgroundColor: 'white', 
  };
};