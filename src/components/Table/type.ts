import type {
  CellContext,
  ColumnDefTemplate,
} from "@tanstack/react-table";
import type { ReactNode } from "react";

export interface DataTableProps<TData> {
  columns: UnifiedColumnDef<TData>[];
  data: TData[];
  enableDragAndDrop?: boolean;
  enableColumnResizing?: boolean;
  height?: string
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
