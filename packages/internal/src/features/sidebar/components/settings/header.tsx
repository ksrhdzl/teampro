import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/sidebar';
import { ChevronLeftIcon, LucideIcon } from 'lucide-react';
import { useSidebar } from '@/features/sidebar/hooks';

export const Header = () => {
  const { sidebar, setSidebar } = useSidebar();

  return (
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" onClick={() => setSidebar('')}>
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg">
              <ChevronLeftIcon className="size-4" />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">
                <span>Settings</span>
              </span>

              <span className="truncate text-xs">
                Don't forget why you started !
              </span>
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  );
};
