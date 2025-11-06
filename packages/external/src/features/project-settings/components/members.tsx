'use client';

import * as React from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';
import { toast } from 'sonner';
import { Badge } from '@/components/badge';
import { Button } from '@/components/button';
import { Checkbox } from '@/components/checkbox';
import {
  TableBody,
  TableCell,
  Table as TableComponent,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/table';
import {
  Member,
  MemberProject,
  MemberProjectSortFields,
  MembersDocument,
  MemberSortFields,
  SortDirection,
  useDeleteMemberMutation,
  useDeleteMemberProjectMutation,
  useMemberProjectsQuery,
  useMembersQuery,
} from '@/libraries/graphql';
// import { useEditMemberModal } from '../hooks/use-edit-member-modal';
import { useConfirmDialog } from '@/libraries/hooks/use-confirm';

const columns: ColumnDef<MemberProject>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    header: () => <span className="h-8">ID</span>,
    cell: ({ row }) => <div>{row.getValue('id')}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'name',
    header: () => <span className="h-8">Full Name</span>,
    cell: ({ row }) => {
      return (
        <span className="truncate font-medium">
          {row.original.member?.user?.name}
        </span>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: 'email',
    header: () => <span className="h-8">Email</span>,
    cell: ({ row }) => {
      return (
        <span className="truncate font-medium">
          {row.original.member?.user?.email}
        </span>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'role',
    header: () => <span className="h-8">Role</span>,
    cell: ({ row }) => {
      return (
        <Badge variant={'default'} className="truncate">
          {row.original.role}
        </Badge>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'createdAt',
    header: () => <span className="h-8">Created At</span>,
    cell: ({ row }) => <div>{row.getValue('createdAt')}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'action',
    header: () => <span className="h-8">Action</span>,
    cell: ({ row }) => {
      //   const { modal: editMemberModal, setModal: setEditMemberModal } =
      //     useEditMemberModal();

      const [deleteMemberProjectMutation] = useDeleteMemberProjectMutation();

      const [ConfirmDialog, confirm] = useConfirmDialog(
        'Delete Member',
        'This action cannot be undone.',
        'destructive',
      );

      const onDelete = async () => {
        const confirmed = await confirm();
        if (confirmed) {
          deleteMemberProjectMutation({
            variables: { input: { id: row.original.id } },
            onCompleted(data, clientOptions) {
              toast.success('Member deleted form project successfully!');
            },
            refetchQueries: [MembersDocument],
          });
        } else {
          console.log('Action cancelled ❌');
        }
      };

      return (
        <>
          <ConfirmDialog />
          <div className="flex items-center gap-2">
            <Button
              //   onClick={() => setEditMemberModal(row.original.id!)}
              className="mx-0 px-0"
              variant={'link'}
              size={'sm'}
            >
              Edit
            </Button>
            <Button
              onClick={onDelete}
              className="mx-0 px-0"
              variant={'link'}
              size={'sm'}
            >
              Delete
            </Button>
          </div>
        </>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
];

export function Members() {
  const [rowSelection, setRowSelection] = React.useState({});
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data: dataMemberProjects } = useMemberProjectsQuery({
    variables: {
      filter: {},
      paging: {
        limit: pagination.pageSize,
        offset: pagination.pageIndex * pagination.pageSize,
      },
      sorting: {
        direction: SortDirection.Asc,
        field: MemberProjectSortFields.CreatedAt,
      },
    },
  });

  const data = dataMemberProjects?.memberProjects?.nodes ?? [];
  const totalCount = dataMemberProjects?.memberProjects?.totalCount ?? 0;

  const table = useReactTable({
    data: data,
    columns: columns,
    state: {
      rowSelection,
      pagination,
    },
    rowCount: totalCount,
    pageCount: Math.ceil(totalCount / pagination.pageSize),
    manualPagination: true,
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="space-y-4">
      <div className="rounded-lg border bg-background">
        <TableComponent>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </TableComponent>
      </div>
      <div className="flex items-center justify-between px-2">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{' '}
          {table.getRowCount()}
        </div>
        <div className="flex items-center space-x-6 lg:space-x-8">
          <div className="flex w-[100px] items-center justify-center text-sm font-medium">
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              className="hidden h-8 w-8 p-0 lg:flex"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              <span className="sr-only">Go to first page</span>
              <ChevronsLeft />
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <span className="sr-only">Go to previous page</span>
              <ChevronLeft />
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <span className="sr-only">Go to next page</span>
              <ChevronRight />
            </Button>
            <Button
              variant="outline"
              className="hidden h-8 w-8 p-0 lg:flex"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              <span className="sr-only">Go to last page</span>
              <ChevronsRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
