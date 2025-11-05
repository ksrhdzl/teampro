'use client';

import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';

import { Badge } from '@/components/badge';
import { Button } from '@/components/button';
import {
  IssuesDocument,
  MemberIssue,
  MemberIssuesDocument,
  useDeleteIssueMutation,
  useDeleteMemberIssueMutation,
} from '@/libraries/graphql';
import { MemberAvatar } from '@/features/member/components/member-avatar';
import { TaskDate } from './task-date';
import { ProjectAvatar } from '@/features/project/components/project-avatar';
import { useEditIssueModal } from '../hooks/use-edit-issue-modal';
import { useConfirmDialog } from '@/libraries/hooks/use-confirm';
import { toast } from 'sonner';

export const columns: ColumnDef<MemberIssue>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const name = row.original.issue?.name;

      return <p className="line-clamp-1 font-medium">{name}</p>;
    },
  },
  {
    accessorKey: 'project',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Project
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const project = row.original.issue?.project;

      return (
        <div className="flex items-center gap-x-2 text-sm font-medium">
          <ProjectAvatar className="size-6" name={project?.name!} />
          <p className="line-clamp-1">{project?.name}</p>
        </div>
      );
    },
  },
  {
    accessorKey: 'member',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Member
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const assignee = row.original.member?.user?.name;

      return (
        <div className="flex items-center gap-x-2 text-sm font-medium">
          <MemberAvatar
            className="size-6"
            fallbackClassName="text-xs"
            name={assignee!}
          />
          <p className="line-clamp-1">{assignee}</p>
        </div>
      );
    },
  },
  {
    accessorKey: 'endDate',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          End Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const endDate = row.original.issue?.endAt;

      return <TaskDate value={endDate} />;
    },
  },
  {
    accessorKey: 'status',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const status = row.original.issue?.status;

      return <Badge className="uppercase">{status!}</Badge>;
    },
  },
  {
    accessorKey: 'action',
    header: () => <span className="h-8">Actions</span>,
    cell: ({ row }) => {
      const { modal, setModal } = useEditIssueModal();
      const [deleteMemberIssueMutation] = useDeleteMemberIssueMutation();
      const [deleteIssueMutation] = useDeleteIssueMutation();

      const [ConfirmDialog, confirm] = useConfirmDialog(
        'Delete Issue',
        'This action cannot be undone.',
        'destructive',
      );

      const onDelete = async () => {
        const confirmed = await confirm();
        if (confirmed) {
          deleteMemberIssueMutation({
            variables: { input: { id: row.original.id } },
            onCompleted(data, clientOptions) {
              if (data.deleteMemberIssue.id) {
                useDeleteIssueMutation({
                  variables: { input: { id: String(row.original.issueId) } },
                  refetchQueries: [IssuesDocument],
                  onCompleted(data, clientOptions) {
                    toast.success('Member deleted successfully!');
                  },
                });
              }
            },
            refetchQueries: [MemberIssuesDocument],
          });
        } else {
          console.log('Action cancelled ❌');
        }
      };

      return (
        <>
          <ConfirmDialog />
          <div className="flex items-center gap-2">
            <Button className="mx-0 px-0" variant={'link'} size={'sm'}>
              View
            </Button>
            <Button
              onClick={() => setModal(row.original.issue?.id!)}
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
