import type { Column } from "@tanstack/react-table";

export const getColumnWidth = <TData,>(column: Column<TData, unknown>): string | number => {
  const definedSize = column.columnDef.size as string | number | undefined;
  if (column.getIsResizing()) {
    return `${column.getSize()}px`;
  }
  if (typeof definedSize === 'string') {
    return definedSize;
  }
  return `${column.getSize()}px`;
};