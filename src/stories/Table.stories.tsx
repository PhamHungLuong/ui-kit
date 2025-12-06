import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '../components/Table/Table';

// --- 1. Định nghĩa Type và Mock Data ---
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

// --- 2. Định nghĩa Cột (Columns) ---
const defaultColumns = [
  {
    header: 'First Name',
    size: 350,
    accessorKey: 'firstName'
  },
  {
    header: 'Last Name',
    size: 300,
    accessorKey: 'lastName',
  },
  {
    header: 'Age',
    size: 300,
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
  },
];

// --- 3. Cấu hình Meta ---
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    columns: defaultColumns as any,
    data: makeData(100),
  },
};

export const LargeDataset: Story = {
  args: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    columns: defaultColumns as any,
    data: makeData(1000),
  },
};

export const Empty: Story = {
  args: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    columns: defaultColumns as any,
    data: [],
  },
};