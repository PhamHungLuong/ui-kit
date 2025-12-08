import { useState, useCallback } from "react";
import type { SortDirection } from "../type";

export interface SortingState {
  id: string;
  direction: SortDirection; // 'asc' | 'desc'
}

interface UseTableSortingProps {
  initialField?: string;
  initialDirection?: SortDirection;
}

export const useTableSorting = ({
  initialField = "",
  initialDirection = "asc",
}: UseTableSortingProps = {}) => {
  const [sorting, setSorting] = useState<SortingState>({
    id: initialField,
    direction: initialDirection,
  });
  
  const onSortingChange = useCallback(
    (payload: SortingState) => {
      setSorting(payload);
    },
    []
  );

  return {
    sorting,
    onSortingChange,
  };
};
