import type {
  CellContext,
  ColumnDefTemplate,
  OnChangeFn,
  PaginationState,
} from "@tanstack/react-table";
import type { ReactNode } from "react";

export interface DataTableProps<TData> {
  id: string;
  columns: UnifiedColumnDef<TData>[];
  data: TData[];
  enableDragAndDrop?: boolean;
  enableColumnResizing?: boolean;
  height?: string
  manualPagination?: boolean;
  isLoading?: boolean;
  skeletonRowCount?: number;
  pagination?: {
    pageCount: number;
    pagination: PaginationState;
    optionList?: number[];
    onPaginationChange: OnChangeFn<PaginationState>; 
  }
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
