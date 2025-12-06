import React, { useEffect, useState } from 'react';
import {
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table';
import type { DataTableProps } from './type';
import { TableHeader } from './Header';
import { TableBody } from './TableBody';
import { TableProvider } from './TableContext';

import styles from './Table.module.scss'

export function Table<TData>({
    data,
    columns,
    enableDragAndDrop = false,
    enableColumnResizing = true,
    height = '500px'
}: DataTableProps<TData>) {
    const [itemState, setItemState] = useState<TData[]>(data);
    const [columnSizing, setColumnSizing] = useState({});

    console.log('Table Rendered', columnSizing);

    useEffect(() => {
        if (enableDragAndDrop) {
            setItemState(data);
        }
    }, [data, enableDragAndDrop]);

    const table = useReactTable({
        data: itemState,
        state: {
            columnSizing,
        },
        columns,
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
            <div className={styles.wrapper}>
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
                        {/* <TablePagination />/ */}
                    </div>
                </div>
            </div>
        </TableProvider>
    );
}