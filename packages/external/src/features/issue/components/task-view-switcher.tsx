'use client';

import { useCallback } from 'react';
// import { useBulkUpdateTasks } from "../api/use-bulk-update-tasks";
import { useParams } from 'next/navigation';
import {
  CalendarRangeIcon,
  Columns3Icon,
  Loader2Icon,
  PlusIcon,
  Rows3Icon,
} from 'lucide-react';
import { parseAsStringEnum, parseAsStringLiteral, useQueryState } from 'nuqs';
import { Button } from '@/components/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/tabs';
import {
  IssueSortFields,
  MemberIssueSortFields,
  SortDirection,
  useIssuesQuery,
  useMemberIssuesQuery,
} from '@/libraries/graphql';

// import { TaskStatus } from "../types";
// import { useGetTasks } from "../api/use-get-tasks";
// import { useTaskFilters } from "../hooks/use-task-filters";
import { useCreateIssueModal } from '../hooks/use-create-issue-modal';
import { useIssueFilters } from '../hooks/use-issue-filters';
// import { DataFilters } from './data-filters';
import { columns } from './columns';
import { DataCalendar } from './data-calendar';
import { DataKanban } from './data-kanban';
import { DataTable } from './data-table';

// const VIEW = ["table", "kanban", "calendar"] as const;

export const TaskViewSwitcher = ({
  hideProjectFilter,
  memberId,
}: {
  hideProjectFilter?: boolean;
  memberId?: number;
}) => {
  const [
    {
      // memberId,
      // projectId,
      //  status,
      //  dueDate
    },
  ] = useIssueFilters();

  const [view, setView] = useQueryState('view', {
    defaultValue: 'table',
  });

  const { workspace, project }: { workspace: string; project: string } =
    useParams();

  const { modal: createIssueModal, setModal: setCreateIssueModal } =
    useCreateIssueModal();

  // const { mutate: bulkUpdate } = useBulkUpdateTasks();
  // const onKanbanChange = useCallback(
  //   (tasks: { $id: string; status: TaskStatus; position: number }[]) => {
  //     bulkUpdate({
  //       json: { tasks },
  //     });
  //   },
  //   [bulkUpdate],
  // );

  const { data: dataMemberIssues, loading: loadingMemberIssues } =
    useMemberIssuesQuery({
      variables: {
        filter: {
          issue: {
            workspaceId: { eq: +workspace },
            ...(project ? { projectId: { eq: +project } } : {}),
          },
          ...(memberId ? { memberId: { eq: +memberId } } : {}),

          //   assigneeId,
          //   status,
          //   dueDate,
        },
        paging: { limit: 50, offset: 0 },
        sorting: {
          direction: SortDirection.Desc,
          field: MemberIssueSortFields.CreatedAt,
        },
      },
    });

  return (
    <Tabs defaultValue={view} onValueChange={setView} className="w-full flex-1">
      <div className="flex h-full flex-col gap-4 overflow-auto">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="table">
              <Rows3Icon />
              Table
            </TabsTrigger>
            <TabsTrigger value="kanban">
              <Columns3Icon />
              Kanban
            </TabsTrigger>
            <TabsTrigger value="calendar">
              <CalendarRangeIcon />
              Calendar
            </TabsTrigger>
          </TabsList>
          <div className="flex items-center gap-2">
            <Button size={'sm'} onClick={() => setCreateIssueModal(true)}>
              <PlusIcon className="mr-2 h-4 w-4" />
              Add Issue
            </Button>
          </div>
        </div>
        {/* <DataFilters hideProjectFilter={hideProjectFilter} /> */}
        {loadingMemberIssues ? (
          <div className="flex h-[200px] w-full flex-col items-center justify-center rounded-lg border">
            <Loader2Icon className="size-5 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <>
            <TabsContent value="table" className="mt-0">
              <DataTable
                columns={columns}
                data={dataMemberIssues?.memberIssues.nodes ?? []}
              />
            </TabsContent>
            <TabsContent value="kanban" className="mt-0">
              <DataKanban
                // onChange={onKanbanChange}
                onChange={() => {}}
                data={dataMemberIssues?.memberIssues.nodes ?? []}
              />
            </TabsContent>
            <TabsContent value="calendar" className="mt-0 h-full pb-4">
              <DataCalendar data={dataMemberIssues?.memberIssues.nodes ?? []} />
            </TabsContent>
          </>
        )}
      </div>
    </Tabs>
  );
};
