// TablePagination.tsx
import { useTableContext } from '../TableContext';

import styles from './index.module.scss';

export function TablePagination() {
  const { table, pagination } = useTableContext();
  const optionList = pagination?.optionList || [10, 20, 30, 40, 50];

  // Check if not have rows or pages, don't render pagination
  if (!table.getRowModel().rows.length && !table.getPageCount()) return null;

  return (
    <div className={styles.paginationWrapper}>
      {/* Select rows per page */}
      <div className={styles.pageSizeSelector}>
        <span>Rows per page:</span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={e => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {optionList.map((pageSize : number) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>
      </div>

      {/* Current page */}
      <div className={styles.pageInfo}>
        Page {" "}
        <strong>
          {table.getState().pagination.pageIndex + 1} of {table.getPageCount().toLocaleString()}
        </strong>
      </div>

      {/* Button */}
      <div className={styles.navigationButtons}>
        <button
          className={styles.navBtn}
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
          title="First Page"
        >
          {'<<'}
        </button>
        <button
          className={styles.navBtn}
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          title="Previous Page"
        >
          {'<'}
        </button>
        <button
          className={styles.navBtn}
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          title="Next Page"
        >
          {'>'}
        </button>
        <button
          className={styles.navBtn}
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
          title="Last Page"
        >
          {'>>'}
        </button>
      </div>

      {/* Go to page which is choosed */}
      <div className={styles.jumpToPage}>
          <span>Go to:</span>
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className={styles.pageInput}
          />
      </div>
    </div>
  );
}