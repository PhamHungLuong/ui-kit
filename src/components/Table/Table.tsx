import React, { useEffect, useMemo, useState } from 'react';
import {
    getCoreRowModel,
    getPaginationRowModel,
    useReactTable,
} from '@tanstack/react-table';
import type { DataTableProps } from './type';
import { TableHeader } from './Header';
import { TableBody } from './TableBody';
import { TableProvider } from './TableContext';
import { TablePagination } from './TablePagination';

import styles from './Table.module.scss'

export function Table<TData>({
    id,
    data,
    columns,
    enableDragAndDrop = false,
    enableColumnResizing = true,
    enableSorting = false,
    height = '500px',
    manualPagination = false,
    pagination,
    isLoading = false,
    skeletonRowCount = 10,
    columnPinning = { left: [], right: [] },
    sortingProps,
}: DataTableProps<TData>) {
    const [itemState, setItemState] = useState<TData[]>(data);
    const [columnSizing, setColumnSizing] = useState({});

    useEffect(() => {
        if (enableDragAndDrop) {
            setItemState(data);
        }
    }, [data, enableDragAndDrop]);

    const tableColumns = useMemo(() => {
        return columns.map((col: any) => {
            if (col.CustomCellRender && typeof col.CustomCellRender === 'function') {
                return {
                    ...col,
                    cell: ({ row, renderValue, column: { columnDef }, ...rest } : any) => {
                        const cellData = renderValue();
                        const { original: rowData } = row;
                        return col.CustomCellRender(
                            cellData,
                            columnDef,
                            row,
                            rowData,
                            rest
                        );
                    },
                };
            }
            return col;
        });
    }, [columns]);

    const table = useReactTable({
        data: itemState,
        columns: tableColumns,
        state: {
            columnSizing,
            columnPinning,
            pagination: pagination?.pagination || {
                pageIndex: 0,
                pageSize: data.length,
            },
        },
        // Pinning tables
        enablePinning: true,

        // set up for pagination
        manualPagination: manualPagination,
        pageCount: pagination?.pageCount,
        onPaginationChange: pagination?.onPaginationChange,
        getPaginationRowModel: manualPagination ? undefined : getPaginationRowModel(),

        // set up for resizing
        enableColumnResizing: enableColumnResizing,
        onColumnSizingChange: setColumnSizing,
        getCoreRowModel: getCoreRowModel(),
        columnResizeMode: 'onChange',
    });

    const valueProvider = {
        table,
        height,
        isLoading,
        data: itemState,
        skeletonRowCount,
        enableDragAndDrop,
        enableSorting,
        sortingProps,
    }

    return (
        <TableProvider value={valueProvider}>
            <div id={id} className={styles.wrapper}>
                <div className={styles.container}>
                    <div
                        className={styles.tableGrid}
                        style={{
                            width: '100%',
                            minWidth: table.getTotalSize(),
                        }}
                    >
                        <TableHeader />
                        <TableBody />
                    </div>
                </div>
                {pagination && <TablePagination />}
            </div>
        </TableProvider>
    );
}