import { useSetAtom } from 'jotai';
import { breadcrumbAtom } from '@/libraries/jotai/atoms';
import {
  notFound,
  redirect,
  useParams,
  usePathname,
  useRouter,
} from 'next/navigation';
import { ProjectAvatar } from './project-avatar';
import { Button } from '@/components/button';
import { SettingsIcon } from 'lucide-react';
import { TaskViewSwitcher } from '@/features/issue/components/task-view-switcher';
import { useProjectQuery } from '@/libraries/graphql';
import { useEffect } from 'react';
import { CreateIssueModal } from '@/features/issue/components/create-issue-modal';
import { EditIssueModal } from '@/features/issue/components/edit-issue-modal';

export const Screen = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { workspace, project }: { workspace: string; project: string } =
    useParams();

  const {
    data: dataProject,
    loading: loadingProject,
    error: errorProject,
  } = useProjectQuery({
    variables: { projectId: project },
  });

  const setBreadcrumb = useSetAtom(breadcrumbAtom);
  useEffect(() => {
    setBreadcrumb([
      { title: 'Home', url: '#' },
      { title: 'Projects', url: '#' },
      { title: dataProject?.project.name!, url: '#' },
    ]);
  }, [setBreadcrumb]);

  if (loadingProject) return <></>;
  if (errorProject) notFound();

  return (
    <>
      <CreateIssueModal />
      <EditIssueModal />
      <div className="bg-muted/40 flex min-h-screen w-full flex-col">
        <div className="flex flex-col">
          <header className="bg-background flex h-16 items-center gap-4 border-b px-4 sm:px-6">
            <div className="flex flex-1 flex-row items-center justify-start gap-2">
              <ProjectAvatar
                name={dataProject?.project.name!}
                // image={project.imageUrl}
                className="size-8"
              />
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold">
                  {dataProject?.project.name}
                </h1>
                <p className="text-secondary-foreground text-xs">
                  with us you will win !
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                onClick={() => {
                  router.push(
                    `/workspaces/${workspace}/projects/${project}/settings`,
                  );
                }}
                variant="outline"
                size="sm"
              >
                <SettingsIcon className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </div>
          </header>
        </div>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          {/* {analytics ? <Analytics data={analytics} /> : null} */}
          <TaskViewSwitcher hideProjectFilter />
        </main>
      </div>
    </>
  );
};
