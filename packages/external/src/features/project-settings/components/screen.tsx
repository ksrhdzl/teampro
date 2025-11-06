'use client';

import { useEffect, useState } from 'react';
import { useSetAtom } from 'jotai';
import { Cog, Users } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from '@/components/sidebar';
import { breadcrumbAtom } from '@/libraries/jotai/atoms';

import { GeneralTab } from './general-tab';
import { MembersTab } from './members-tab';

export const Screen = () => {
  const [tab, setTab] = useState('general');

  const setBreadcrumb = useSetAtom(breadcrumbAtom);
  useEffect(() => {
    setBreadcrumb([{ title: 'Home', url: '/' }]);
  }, [setBreadcrumb]);

  return (
    <div className="flex min-h-screen flex-col bg-muted/40">
      <SidebarProvider>
        <div className="flex flex-1">
          <Sidebar
            className="hidden w-64 border-r md:flex"
            variant="sidebar"
            collapsible="none"
          >
            <SidebarHeader className="flex h-16 items-start gap-4 border-b bg-background px-4">
              <div className="flex flex-1 flex-col items-start justify-center">
                <h1 className="text-lg font-semibold">Project Settings</h1>
              </div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        isActive={tab === 'general'}
                        onClick={() => setTab('general')}
                      >
                        <Cog className="h-4 w-4" />
                        <span>General</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        isActive={tab === 'members'}
                        onClick={() => setTab('members')}
                      >
                        <Users className="h-4 w-4" />
                        <span>Members</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>

          <SidebarInset className="flex-1">
            <div>
              {tab === 'general' && <GeneralTab />}
              {tab === 'members' && <MembersTab />}
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
};
