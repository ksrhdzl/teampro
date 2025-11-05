'use client';

import { Button } from '@/components/button';
import { TaskDescription } from '@/features/issue/components/task-description';
import { TaskOverview } from '@/features/issue/components/task-overview';
import { ProjectAvatar } from '@/features/project/components/project-avatar';
import { useIssueQuery } from '@/libraries/graphql';
import { breadcrumbAtom } from '@/libraries/jotai/atoms';
import { useSetAtom } from 'jotai';
import { Trash2Icon } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
  const { workspace, issue }: { workspace: string; issue: string } =
    useParams();
  const { data, loading, error } = useIssueQuery({
    variables: { issueId: '49' },
  });

  const setBreadcrumb = useSetAtom(breadcrumbAtom);
  useEffect(() => {
    setBreadcrumb([
      { title: 'Home', url: '/' },
      { title: 'Workspaces', url: `/workspaces/${workspace}/home` },
      {
        title: 'Projects',
        url: `/workspaces/${workspace}/projects/${data?.issue.projectId}`,
      },
      { title: 'Issues', url: `/workspaces/${workspace}/issues` },
      { title: data?.issue.name!, url: `/workspaces/${workspace}/issues` },
    ]);
  }, [data, workspace]);

  if (loading) {
    return <>LOADING</>;
  }

  if (error) {
    return <>ERROR ISSUE NOT FOUND</>;
  }

  return (
    <>
      <div className="bg-muted/40 flex min-h-screen w-full flex-col">
        <div className="flex flex-col">
          <header className="bg-background flex h-16 items-center gap-4 border-b px-4 sm:px-6">
            <div className="flex flex-1 flex-row items-center justify-start gap-2">
              <ProjectAvatar
                name={data?.issue.project?.name!}
                // image={project.imageUrl}
                className="size-8"
              />
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold">{data?.issue.name!}</h1>
                {/* <p className="text-secondary-foreground text-xs">
                  with us you will win !
                </p> */}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Trash2Icon className="mr-2 h-4 w-4" />
                Delete Issue
              </Button>
            </div>
          </header>
        </div>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <TaskOverview issue={data?.issue!} />
          <TaskDescription issue={data?.issue!} />
        </main>
      </div>
    </>
  );
}
