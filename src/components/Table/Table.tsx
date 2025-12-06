import React, { useEffect, useState } from 'react';
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
    height = '500px',
    manualPagination = false,
    pagination,
}: DataTableProps<TData>) {
    const [itemState, setItemState] = useState<TData[]>(data);
    const [columnSizing, setColumnSizing] = useState({});

    useEffect(() => {
        if (enableDragAndDrop) {
            setItemState(data);
        }
    }, [data, enableDragAndDrop]);

    const table = useReactTable({
        data: itemState,
        columns,
        state: {
            columnSizing,
            pagination: pagination?.pagination || {
                pageIndex: 0,
                pageSize: data.length,
            },
        },
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
        data: itemState,
        enableDragAndDrop,
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
                <TablePagination />
            </div>
        </TableProvider>
    );
}