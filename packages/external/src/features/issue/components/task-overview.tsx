import { PencilIcon } from 'lucide-react';
import { Badge } from '@/components/badge';
import { Button } from '@/components/button';
import { MemberAvatar } from '@/features/member/components/member-avatar';
import { Issue } from '@/libraries/graphql';

import { OverviewProperty } from './overview-property';
import { TaskDate } from './task-date';

export const TaskOverview = ({ issue }: { issue: Issue }) => {
  // const { open } = useEditTaskModal();

  return (
    <div className="col-span-1 flex flex-col gap-y-4">
      <div className="rounded-lg bg-muted p-4">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold">Overview</p>
          <Button
            onClick={() => {
              // open(issue.id)
            }}
            size="sm"
            variant="secondary"
          >
            <PencilIcon className="mr-2 size-4" />
            Edit
          </Button>
        </div>
        <div className="flex flex-col gap-y-4">
          <OverviewProperty label="Assignee">
            <MemberAvatar name={'kasra'} className="size-6" />
            <p className="text-sm font-medium">Kasra</p>
          </OverviewProperty>
          <OverviewProperty label="Due Date">
            <TaskDate value={issue.endAt} className="text-sm font-medium" />
          </OverviewProperty>
          <OverviewProperty label="Status">
            <Badge>{issue.status}</Badge>
          </OverviewProperty>
        </div>
      </div>
    </div>
  );
};
