'use client';

import * as React from 'react';
import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  ChevronRightIcon,
  FileTextIcon,
  HomeIcon,
  LandmarkIcon,
  ListTodoIcon,
  MessagesSquareIcon,
  UsersIcon,
} from 'lucide-react';
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from '@/components/sidebar';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/collapsible';

export const Main = () => {
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            isActive={pathname === `/home`}
            tooltip={'Home'}
            asChild
          >
            <Link href={`/home`}>
              <HomeIcon />
              <span>Home</span>
              <ChevronRightIcon className="ml-auto" />
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>

        <SidebarMenuItem>
          <SidebarMenuButton tooltip={'Inbox'} asChild>
            <div>
              <LandmarkIcon />
              <span>Inbox</span>
              <ChevronRightIcon className="ml-auto" />
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>

        <Collapsible
          asChild
          defaultOpen={pathname.startsWith('/members')}
          className="group/collapsible"
        >
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton
                isActive={pathname === `/hr`}
                tooltip={'HR'}
                asChild
              >
                <Link href={'/hr'}>
                  <UsersIcon />
                  <span>Human Resources</span>
                  <ChevronRightIcon className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </Link>
              </SidebarMenuButton>
            </CollapsibleTrigger>

            <CollapsibleContent>
              <SidebarMenuSub>
                {[
                  { url: '/hr/jobs', title: 'Jobs' },
                  { url: '/hr/employees', title: 'Employees' },
                  { url: '/hr/positions', title: 'Positions' },
                ].map((v, i) => (
                  <SidebarMenuSubItem key={i}>
                    <SidebarMenuSubButton
                      isActive={pathname.startsWith(`${v.url}`)}
                      asChild
                    >
                      <Link href={`${v.url}`}>
                        <span>{v.title}</span>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>

        <SidebarMenuItem>
          <SidebarMenuButton
            isActive={pathname === `/chats`}
            tooltip={'Chats'}
            asChild
          >
            <Link href={`/chats`}>
              <MessagesSquareIcon />
              <span>Chats</span>
              <ChevronRightIcon className="ml-auto" />
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>

        <Collapsible
          asChild
          defaultOpen={pathname.startsWith('/members')}
          className="group/collapsible"
        >
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton
                isActive={pathname === `/projects`}
                tooltip={'Projects'}
                asChild
              >
                <Link href={'/projects'}>
                  <UsersIcon />
                  <span>Projects</span>
                  <ChevronRightIcon className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </Link>
              </SidebarMenuButton>
            </CollapsibleTrigger>

            <CollapsibleContent>
              <SidebarMenuSub>
                {[
                  { url: '/projects/jobs', title: 'Jobs' },
                  { url: '/projects/employees', title: 'Employees' },
                  { url: '/projects/positions', title: 'Positions' },
                ].map((v, i) => (
                  <SidebarMenuSubItem key={i}>
                    <SidebarMenuSubButton
                      isActive={pathname.startsWith(`${v.url}`)}
                      asChild
                    >
                      <Link href={`${v.url}`}>
                        <span>{v.title}</span>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>

        <SidebarMenuItem>
          <SidebarMenuButton tooltip={'Financial'} asChild>
            <div>
              <LandmarkIcon />
              <span>Financial</span>
              <ChevronRightIcon className="ml-auto" />
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>

        <SidebarMenuItem>
          <SidebarMenuButton tooltip={'Contents'} asChild>
            <div>
              <FileTextIcon />
              <span>Contents</span>
              <ChevronRightIcon className="ml-auto" />
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
};

// WORKSPACES
//    -WORKSPACE1
//        -PROJECTS1
//            -Issues
//            -Members

// one ORGANIZATION
//    -multiple WORKSPACE
//        -multiple PROJECTS

// POWERFUL AUTHENTICATION AND AUTHORIZATION WITH refresh_token and access_token

// See All chats
// Role manager
// Users of whole of oraganization
// manage members of workspace
// track all of authentication
// sign in daily
// Send notification
// Human Resources :
//      -Add
//      -Jobs
//      -Roles
// TODOist
// INTERNAL NEWS AND MAILS

// INTERNAL

// EXTERNAL
//    WORKSPACE
//    JOBS
//    QA
//    ABOUT
//    CHAT
//    BLOG
