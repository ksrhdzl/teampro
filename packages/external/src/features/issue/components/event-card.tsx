import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { MemberAvatar } from '@/features/member/components/member-avatar';
import { ProjectAvatar } from '@/features/project/components/project-avatar';
import { cn } from '@/libraries/utilities';

interface EventCardProps {
  title: string;
  assignee: string;
  project: string;
  // status?: TaskStatus;
  id: string;
}

// const statusColorMap: Record<TaskStatus, string> = {
//   [TaskStatus.BACKLOG]: 'border-l-pink-500',
//   [TaskStatus.TODO]: 'border-l-red-500',
//   [TaskStatus.IN_PROGRESS]: 'border-l-yellow-500',
//   [TaskStatus.IN_REVIEW]: 'border-l-blue-500',
//   [TaskStatus.DONE]: 'border-l-emerald-500',
// };

export const EventCard = ({
  title,
  assignee,
  project,
  // status,
  id,
}: EventCardProps) => {
  const { workspace }: { workspace: string; project: string } = useParams();
  const router = useRouter();

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    router.push(`/workspaces/${workspace}/issues/${id}`);
  };

  return (
    <div className="px-2">
      <div
        onClick={onClick}
        className={cn(
          'flex cursor-pointer flex-col gap-y-1.5 rounded-md border border-l-4 bg-white p-1.5 text-xs text-primary transition hover:opacity-75',
          // statusColorMap[status],
        )}
      >
        <p>{title}</p>
        <div className="flex items-center gap-x-1">
          <MemberAvatar name={assignee} />
          <div className="size-1 rounded-full bg-neutral-300" />
          <ProjectAvatar name={project} />
        </div>
      </div>
    </div>
  );
};
