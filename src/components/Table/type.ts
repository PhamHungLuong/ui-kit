import type {
  CellContext,
  ColumnDefTemplate,
  ColumnPinningState,
  OnChangeFn,
  PaginationState,
} from "@tanstack/react-table";
import type { ReactNode } from "react";

export type SortDirection = 'asc' | 'desc';

export interface DataTableProps<TData> {
  id: string;
  columns: UnifiedColumnDef<TData>[];
  data: TData[];
  enableDragAndDrop?: boolean;
  enableColumnResizing?: boolean;
  enableSorting?: boolean;
  height?: string;
  manualPagination?: boolean;
  isLoading?: boolean;
  skeletonRowCount?: number;
  columnPinning?: ColumnPinningState;
  pagination?: {
    pageCount: number;
    pagination: PaginationState;
    optionList?: number[];
    onPaginationChange: OnChangeFn<PaginationState>;
  };
  sortingProps?: {
    sortedColumnIds: { id: string, direction: SortDirection };
    onSortingChange: (data: {id: string, direction: SortDirection}) => void;
    labels?: {
      asc?: string | ReactNode;
      desc?: string | ReactNode;
    };
    icons?: {
      asc?: ReactNode;
      desc?: ReactNode;
    };
  };
}

export interface UnifiedColumnDef<TData> {
  id: string;
  header: string;
  size?: number;
  headerJSX?: (props: unknown) => ReactNode;
  disableSort?: boolean;
  pin?: string;
  truncate?: boolean;
  accessorKey?: string;
  headerAlign?: string;
  cellAlign?: string;
  cell?: ColumnDefTemplate<CellContext<TData, unknown>>;
  // renderer?: (props: RendererProps<TData>) => ReactNode;
  utilColumn?: boolean;
  disabledReorder?: boolean;
  sortLabel?: {
    asc: string;
    desc: string;
  };
}
