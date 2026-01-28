import { createContext, useContext, type ReactNode } from 'react';
import { type OnChangeFn, type PaginationState, type Table } from '@tanstack/react-table';
import type { SortDirection } from './type';

interface TableContextType<TData> {
    table: Table<TData>;
    data: TData[];
    enableDragAndDrop?: boolean;
    height?: string;
    isLoading?: boolean;
    skeletonRowCount?: number;
    enableSorting?: boolean;
    pagination?: {
        pageCount: number;
        pagination: PaginationState;
        optionList?: number[];
        onPaginationChange: OnChangeFn<PaginationState>;
    }
    sortingProps?: {
        sortedColumnIds: { id: string, direction: SortDirection };
        onSortingChange: (data: { id: string, direction: SortDirection }) => void;
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TableContext = createContext<TableContextType<any> | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useTableContext = <TData,>() => {
    const context = useContext(TableContext);
    if (!context) {
        throw new Error("useTableContext must be used within a TableProvider");
    }
    return context as TableContextType<TData>;
};

export const TableProvider = TableContext.Provider;