import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from '@/components/sidebar';
import { Profile } from './profile';
import { Logout } from './logout';
import { ChevronRightIcon, SettingsIcon } from 'lucide-react';
import { useSidebar } from '@/features/sidebar/hooks';

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
