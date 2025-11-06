import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuSkeleton,
} from '@/components/sidebar';
import {
  ProjectSortFields,
  SortDirection,
  useProjectsQuery,
  useWorkspaceQuery,
} from '@/libraries/graphql';
import { ChevronRightIcon, FolderIcon, PlusIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Workspaces = () => {
  const pathname = usePathname();
  const workspace = 'asd';

  const { data } = useWorkspaceQuery({ variables: { workspaceId: workspace } });

  const {
    data: dataProjects,
    loading: loadingProjects,
    error: errorProjects,
  } = useProjectsQuery({
    variables: {
      filter: { workspaceId: { eq: +workspace } },
      paging: { limit: 10, offset: 0 },
      sorting: {
        direction: SortDirection.Asc,
        field: ProjectSortFields.UpdatedAt,
      },
    },
  });

  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel>Workspaces</SidebarGroupLabel>

        <SidebarMenu>
          {loadingProjects && (
            <>
              {Array(3)
                .fill({})
                .map((v, i) => (
                  <SidebarMenuSkeleton showIcon key={i} />
                ))}
            </>
          )}
          {errorProjects && (
            <div className="h-8 w-full text-center text-sm">Error</div>
          )}
          {!loadingProjects &&
            !errorProjects &&
            dataProjects?.projects?.totalCount == 0 && (
              <div className="h-8 w-full text-center text-sm">No Project</div>
            )}
          {!loadingProjects &&
            !errorProjects &&
            dataProjects?.projects?.nodes
              ?.filter((f) => f.workspaceId == data?.workspace.id)
              ?.map((v, i) => (
                <SidebarMenuButton
                  key={i}
                  isActive={
                    pathname === `/workspaces/${workspace}/projects/${v.id}`
                  }
                  tooltip={v.name!}
                  asChild
                >
                  <Link href={`/workspaces/${workspace}/projects/${v.id}`}>
                    {/* {menuItem.icon && <menuItem.icon />} */}
                    <FolderIcon />
                    <span>{v.name}</span>
                    <ChevronRightIcon className="ml-auto" />
                  </Link>
                </SidebarMenuButton>
              ))}
          <SidebarMenuButton
            variant={'outline'}
            tooltip={'Add workspace'}
            className="border hover:cursor-pointer hover:shadow-[0_0_0_1px_hsl(var(--sidebar-border))]"
            asChild
          >
            <Link href={`/workspaces/${workspace}/projects/create`}>
              {/* {menuItem.icon && <menuItem.icon />} */}
              <PlusIcon />
              <span>Add workspace</span>
              <ChevronRightIcon className="ml-auto" />
            </Link>
          </SidebarMenuButton>
        </SidebarMenu>
      </SidebarGroup>
    </>
  );
};
