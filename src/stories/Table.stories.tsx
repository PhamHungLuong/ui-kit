import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '../components/Table/Table';
import { useTablePagination } from '../components/Table/hooks/useTablePagination';

type Person = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  subRows?: Person[];
};

const makeData = (len: number): Person[] => {
  return Array.from({ length: len }).map((_, i) => ({
    id: i.toString(),
    firstName: `User ${i}`,
    lastName: `Name ${i}`,
    age: Math.floor(Math.random() * 40),
    visits: Math.floor(Math.random() * 1000),
    status: Math.random() > 0.5 ? 'Active' : 'Inactive',
    subRows: Math.random() < 0.2 ? [{
      id: `${i}.1`,
      firstName: `Sub User ${i}.1`,
      lastName: `Sub Name ${i}.1`,
      age: 10,
      visits: 10,
      status: 'Sub',
    }] : undefined,
  }));
};

const defaultColumns = [
  {
    header: 'First Name',
    size: 150,
    accessorKey: 'firstName'
  },
  {
    header: 'Last Name',
    size: 300,
    accessorKey: 'lastName',
  },
  {
    header: 'Age',
    size: 150,
    accessorKey: 'age',
  },
  {
    header: 'Visits',
    accessorKey: 'visits',
    size: 400,
  },
  {
    header: 'Status',
    accessorKey: 'status',
    size: 400,
  },
];

const meta = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    data: { control: 'object' },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

// --- 4. Các Stories ---

export const Primary: Story = {
  args: {
    id: 'table-1',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    columns: defaultColumns as any,
    manualPagination: true,
    data: makeData(100),
  },
};

export const LargeDataset: Story = {
  args: {
    id: 'table-2',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    columns: defaultColumns as any,
    data: makeData(1000),
  },
};

export const ClientSidePagination: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { pagination, onPaginationChange } = useTablePagination({ 
        initialSize: 10 
    });

    return (
      <Table
        {...args}
        pagination={{
          pageCount: Math.ceil(100 / pagination.pageSize),
          pagination: pagination,
          onPaginationChange: onPaginationChange
        }}
      />
    );
  },
  args: {
    id: 'table-4',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    columns: defaultColumns as any,
    data: makeData(100), // 100 dòng data có sẵn
    height: '400px',
  },
};

export const Empty: Story = {
  args: {
    id: 'table-3',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    columns: defaultColumns as any,
    data: [],
  },
};

export const LoadingState: Story = {
  args: {
    id: 'table-5',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    columns: defaultColumns as any,
    data: [],
    isLoading: true,
    skeletonRowCount: 7,
  },
};

export const PinningLeftTable: Story = {
  args: {
    id: 'table-6',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    columns: defaultColumns as any,
    manualPagination: true,
    data: makeData(100),
    columnPinning: { left: ['firstName', 'age'] },
  },
};