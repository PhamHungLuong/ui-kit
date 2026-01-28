import type { OnChangeFn, PaginationState } from '@tanstack/react-table';
import { useState, useCallback } from 'react';

interface UseTablePaginationProps {
  initialSize?: number;
  initialPage?: number;
}

export function useTablePagination({ 
    initialSize = 10, 
    initialPage = 0 
}: UseTablePaginationProps = {}) {
  
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: initialPage,
    pageSize: initialSize,
  });

  const onPaginationChange: OnChangeFn<PaginationState> = useCallback(
    (updaterOrValue) => {
      setPagination((old) => {
        const newState =
          typeof updaterOrValue === 'function'
            ? updaterOrValue(old)
            : updaterOrValue;
        
        return newState;
      });
    },
    []
  );

  const resetPagination = useCallback(() => {
    setPagination((prev) => ({ ...prev, pageIndex: 0 }));
  }, []);

  return {
    pagination,
    onPaginationChange,
    resetPagination,
    setPagination, 
    pageIndex: pagination.pageIndex,
    pageSize: pagination.pageSize,
  };
}