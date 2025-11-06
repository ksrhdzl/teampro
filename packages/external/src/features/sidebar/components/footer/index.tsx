import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarSeparator,
} from '@/components/sidebar';

import { useSidebarSettings } from '../../hooks';
import { Logout } from './logout';
import { Profile } from './profile';

export const Footer = () => {
  // const { sidebarSettings, setSidebarSettings } = useSidebarSettings();
  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem className="flex flex-col gap-2">
          <Profile />
          <SidebarSeparator className="mx-0 px-0" />
          {/* <SidebarMenuButton disabled onClick={() => setSidebarSettings(true)}>
            <Settings />
            <span>Settings</span>
            <ChevronRight className="ml-auto" />
          </SidebarMenuButton> */}
          <Logout />
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
};
