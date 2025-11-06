import { ChevronRightIcon, SettingsIcon } from 'lucide-react';
import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from '@/components/sidebar';
import { useSidebar } from '@/features/sidebar/hooks';

import { Logout } from './logout';
import { Profile } from './profile';

export const Footer = () => {
  const { sidebar, setSidebar } = useSidebar();
  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem className="flex flex-col gap-2">
          <Profile />
          <SidebarSeparator className="mx-0 px-0" />
          <SidebarMenuButton onClick={() => setSidebar('settings')}>
            <SettingsIcon />
            <span>Settings</span>
            <ChevronRightIcon className="ml-auto" />
          </SidebarMenuButton>
          <Logout />
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
};
