'use client';

import { useParams, useRouter } from 'next/navigation';
import {
  ChevronDown,
  ChevronRight,
  HashIcon,
  PlusCircleIcon,
  PlusIcon,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/avatar';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/collapsible';
import { ScrollArea, ScrollBar } from '@/components/scroll-area';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from '@/components/sidebar';
import {
  MemberConversationSortFields,
  SortDirection,
  useMemberConversationsQuery,
} from '@/libraries/graphql';

export const Sidebaro = () => {
  const router = useRouter();
  const {
    workspace,
    group,
    direct,
  }: { workspace: string; group: string; direct: string } = useParams();

  const {
    data: dataMemberConversations,
    loading: loadingMemberConversations,
    error: errorMemberConversations,
  } = useMemberConversationsQuery({
    variables: {
      filter: { memberId: { eq: 1 } },
      paging: { offset: 0, limit: 10 },
      sorting: {
        direction: SortDirection.Desc,
        field: MemberConversationSortFields.Id,
      },
    },
  });

  // HERE GET GROUPS
  // GET WORKSPACE
  // GET MEMBERS
  // PROFILE ACCOUNT

  // if (workspaceLoading || memberLoading) {
  //     return (
  //       <div className="flex h-full flex-col items-center justify-center bg-[#5E2C5F]">
  //         <Loader2 className="size-5 animate-spin text-white" />
  //       </div>
  //     );
  //   }

  //   if (!workspace || !direct) {
  //     return (
  //       <div className="flex h-full flex-col items-center justify-center gap-y-2 bg-[#5E2C5F]">
  //         <AlertTriangle className="size-5 text-white" />
  //         <p className="text-sm text-white">Workspace not found</p>
  //       </div>
  //     );
  //   }

  return (
    <>
      <Sidebar collapsible="none" className="m-0 w-full border-r p-0">
        <SidebarHeader className="h-16 items-center justify-center border-b">
          <SidebarMenu>
            {/* <SidebarMenuItem>
              <div className="*:data-[slot=avatar]:ring-background flex items-center justify-center -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
                  .slice(0, 9)
                  .map((i) => (
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/evilrabbit.png"
                        alt="@evilrabbit"
                      />
                      <AvatarFallback>ER</AvatarFallback>
                    </Avatar>
                  ))}
              </div>
            </SidebarMenuItem> */}
            <SidebarMenuItem>
              <SidebarMenuButton
                variant={'outline'}
                className="items-center justify-between border hover:cursor-pointer hover:shadow-[0_0_0_1px_hsl(var(--sidebar-border))]"
              >
                <PlusCircleIcon />
                <span>New Chat</span>
                <ChevronRight />
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent className="m-0 p-0">
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroup>
              <SidebarGroupLabel asChild>
                <CollapsibleTrigger>
                  Conversations
                  <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {dataMemberConversations?.memberConversations.nodes.map(
                      (item, index) => {
                        const avatarFallback = item.conversation
                          ?.name!.charAt(0)
                          .toUpperCase();

                        return (
                          <SidebarMenuItem key={index}>
                            <SidebarMenuButton
                              onClick={() =>
                                router.push(
                                  `/workspaces/${workspace}/chats/type/${item.conversationId}`,
                                )
                              }
                            >
                              <Avatar className="mr-1 size-5 rounded-sm">
                                <AvatarFallback className="rounded-sm bg-sky-500 text-xs text-white">
                                  {avatarFallback}
                                </AvatarFallback>
                              </Avatar>
                              <span className="truncate">
                                {item.conversation?.name}
                              </span>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        );
                      },
                    )}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        </SidebarContent>
      </Sidebar>
    </>
  );
};
