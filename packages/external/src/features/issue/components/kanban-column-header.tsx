import {
  CircleCheckIcon,
  CircleDashedIcon,
  CircleDotDashedIcon,
  CircleDotIcon,
  CircleIcon,
  PlusIcon,
} from 'lucide-react';

import { Button } from '@/components/button';

// import { useCreateTaskModal } from '../hooks/use-create-task-modal';
import { IssueStatusEnum } from '@/libraries/graphql';

interface KanbanColumnHeaderProps {
  board: IssueStatusEnum;
  taskCount: number;
}

const statusIconMap: Record<IssueStatusEnum, React.ReactNode> = {
  [IssueStatusEnum.Backlog]: (
    <CircleDashedIcon className="size-[18px] text-pink-400" />
  ),
  [IssueStatusEnum.Todo]: <CircleIcon className="size-[18px] text-red-400" />,
  [IssueStatusEnum.Inprogress]: (
    <CircleDotDashedIcon className="size-[18px] text-yellow-400" />
  ),
  [IssueStatusEnum.Inreview]: (
    <CircleDotIcon className="size-[18px] text-blue-400" />
  ),
  [IssueStatusEnum.Done]: (
    <CircleCheckIcon className="size-[18px] text-emerald-400" />
  ),
};

export const KanbanColumnHeader = ({
  board,
  taskCount,
}: KanbanColumnHeaderProps) => {
  // const { open } = useCreateTaskModal();

  const icon = statusIconMap[board];

  return (
    <div className="flex items-center justify-between px-2 py-1.5">
      <div className="flex items-center gap-x-2">
        {icon}
        <h2 className="text-sm font-medium uppercase">{board}</h2>
        <div className="flex size-5 items-center justify-center rounded-md bg-neutral-200 text-xs font-medium text-neutral-700">
          {taskCount}
        </div>
      </div>
      <Button variant="ghost" size="icon" className="size-5">
        <PlusIcon className="size-4 text-neutral-500" />
      </Button>
    </div>
  );
};
