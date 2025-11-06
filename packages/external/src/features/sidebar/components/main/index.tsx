'use client';

import * as React from 'react';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { useAtom } from 'jotai';
import {
  BellIcon,
  ChevronRightIcon,
  FileTextIcon,
  HomeIcon,
  LandmarkIcon,
  ListTodoIcon,
  MessagesSquareIcon,
  SettingsIcon,
  UsersIcon,
} from 'lucide-react';
import { routes } from '@/assets/data';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/collapsible';
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/sidebar';
import { notificationAtom } from '@/libraries/jotai/atoms';

import { NavProjects } from './nav-projects';

export const Main = () => {
  const pathname = usePathname();
  const { workspace }: { workspace: string } = useParams();
  const [notification, setNotification] = useAtom(notificationAtom);

  return (
    <SidebarContent>
      <SidebarGroup>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              isActive={pathname === `/workspaces/${workspace}/home`}
              tooltip={'Home'}
              asChild
            >
              <Link href={`/workspaces/${workspace}/home`}>
                <HomeIcon />
                <span>Home</span>
                <ChevronRightIcon className="ml-auto" />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              isActive={pathname === `/workspaces/${workspace}/members`}
              tooltip={'Members'}
              asChild
            >
              <Link href={`/workspaces/${workspace}/members`}>
                <UsersIcon />
                <span>Users</span>
                <ChevronRightIcon className="ml-auto" />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip={'Notifications'}
              className="hover:cursor-pointer"
              onClick={() => setNotification(true)}
            >
              <BellIcon />
              <span>Notifications</span>
              <ChevronRightIcon className="ml-auto" />
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              isActive={pathname === `/workspaces/${workspace}/chats`}
              tooltip={'Chats'}
              asChild
            >
              <Link href={`/workspaces/${workspace}/chats`}>
                <MessagesSquareIcon />
                <span>Chats</span>
                <ChevronRightIcon className="ml-auto" />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              isActive={pathname === `/workspaces/${workspace}/issues`}
              tooltip={'Issues'}
              asChild
            >
              <Link href={`/workspaces/${workspace}/issues`}>
                <ListTodoIcon />
                <span>Issues</span>
                <ChevronRightIcon className="ml-auto" />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* <SidebarMenuItem>
            <SidebarMenuButton
              tooltip={'Financial'}
              disabled
              asChild
              className="opacity-30"
            >
              <div>
                <LandmarkIcon />
                <span>Financial</span>
                <ChevronRightIcon className="ml-auto" />
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip={'Contents'}
              disabled
              asChild
              className="opacity-30"
            >
              <div>
                <FileTextIcon />
                <span>Contents</span>
                <ChevronRightIcon className="ml-auto" />
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem> */}

          <SidebarMenuItem>
            <SidebarMenuButton
              isActive={pathname === `/workspaces/${workspace}/settings`}
              tooltip={'Settings'}
              asChild
            >
              <Link href={`/workspaces/${workspace}/settings`}>
                <SettingsIcon />
                <span>Settings</span>
                <ChevronRightIcon className="ml-auto" />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>

      <NavProjects workspace={workspace} />
    </SidebarContent>
  );
};
