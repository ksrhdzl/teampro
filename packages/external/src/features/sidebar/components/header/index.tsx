'use client';

import { ChevronsUpDown, Loader2, Plus } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/dropdown-menu';
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/sidebar';
import { useParams, useRouter } from 'next/navigation';
import {
  SortDirection,
  useWorkspacesQuery,
  WorkspaceSortFields,
} from '@/libraries/graphql';
import { WorkspaceAvatar } from './workspace-avatar';

export const Header = () => {
  const router = useRouter();
  const { workspace }: { workspace: string } = useParams();
  const {
    data: dataWorkspaces,
    loading: loadingWorkspace,
    error: errorWorkspaces,
  } = useWorkspacesQuery({
    variables: {
      filter: {},
      paging: { limit: 10, offset: 0 },
      sorting: {
        field: WorkspaceSortFields.CreatedAt,
        direction: SortDirection.Asc,
      },
    },
  });

  if (loadingWorkspace)
    return (
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size={'lg'}
              className="bg-sidebar-accent items-center justify-center"
            >
              <Loader2 className="animate-spin" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
    );
  if (errorWorkspaces || !dataWorkspaces) return <></>;

  if (dataWorkspaces.workspaces.totalCount == 0) {
    router.push('/workspaces/create');
  }

  const selectedWorkspace = dataWorkspaces.workspaces.nodes.find(
    (w) => w.id === workspace,
  );
  const otherWorkspaces = dataWorkspaces.workspaces.nodes.filter(
    (v) => v.id !== workspace,
  );

  return (
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <WorkspaceAvatar
                  variant={'large'}
                  workspaceImageKey={selectedWorkspace?.image}
                />
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="flex flex-1 items-center justify-start gap-1 truncate font-semibold">
                    <span>{selectedWorkspace?.name}</span>
                  </span>
                  <span className="truncate text-xs">
                    {selectedWorkspace?.description}
                  </span>
                </div>
                <ChevronsUpDown className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
              align="start"
              side={'bottom'}
              sideOffset={4}
            >
              {otherWorkspaces.length > 0 && (
                <>
                  <DropdownMenuLabel className="text-muted-foreground text-xs">
                    Workspaces
                  </DropdownMenuLabel>
                  {otherWorkspaces.map((w, index) => (
                    <DropdownMenuItem
                      key={w.id}
                      onClick={() => router.push(`/workspaces/${w.id}/home`)}
                      className="gap-2 p-2"
                    >
                      <WorkspaceAvatar
                        variant={'sm'}
                        workspaceImageKey={w.image}
                      />
                      <div className="flex flex-1 flex-row items-center justify-start gap-1">
                        <span>{w.name}</span>
                      </div>
                      <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                </>
              )}
              <DropdownMenuItem
                onClick={() => router.push('/workspaces/create')}
                className="gap-2 p-2"
              >
                <div className="bg-background flex size-6 items-center justify-center rounded-sm border">
                  <Plus className="size-4" />
                </div>
                <div className="text-muted-foreground font-medium">
                  Add workspace
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  );
};
