'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Bell,
  ChevronLeft,
  ChevronLeftIcon,
  ChevronRightIcon,
  Home,
  ListTodo,
  LucideIcon,
  MessagesSquare,
  Settings2Icon,
  Users,
} from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/collapsible';
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/sidebar';

import { useSidebar } from '../../hooks';
import { Header } from './header';

export interface Route {
  title: string;
  url: string;
  icon?: LucideIcon;
  disabled?: boolean;
  sidebar?: boolean;
  breadcrumb?: boolean;
  items?: Route[];
}

export interface Routes {
  name?: string;
  items: Route[];
}

export const routes: Routes[] = [
  {
    items: [
      {
        title: 'General',
        url: '/settings/general',
        icon: Settings2Icon,
      },
    ],
  },
];

export const Settings = () => {
  const pathname = usePathname();
  const { sidebar, setSidebar } = useSidebar();

  useEffect(() => {
    if (pathname && pathname.includes('settings')) {
      setSidebar('settings');
    }
  }, [pathname, sidebar, setSidebar]);

  return (
    <>
      <Header />

      {/* ----------------------- */}

      <SidebarContent>
        {routes.map((group, groupIndex) => (
          <SidebarGroup key={groupIndex}>
            {group.name && <SidebarGroupLabel>{group.name}</SidebarGroupLabel>}
            <SidebarMenu>
              {group.items
                .filter((item) => item.sidebar !== false)
                .map((menuItem, menuIndex) => (
                  <Collapsible
                    key={menuIndex}
                    asChild
                    defaultOpen={pathname.startsWith(menuItem.url)}
                    className="group/collapsible"
                  >
                    <SidebarMenuItem>
                      {menuItem.items ? (
                        <>
                          <CollapsibleTrigger asChild>
                            <SidebarMenuButton
                              isActive={pathname === `${menuItem.url}`}
                              tooltip={menuItem.title}
                              disabled={menuItem.disabled}
                            >
                              {menuItem.icon && <menuItem.icon />}
                              <span>{menuItem.title}</span>
                              <ChevronRightIcon className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                            </SidebarMenuButton>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <SidebarMenuSub>
                              {menuItem.items
                                ?.filter((subItem) => subItem.sidebar !== false)
                                .map((subMenuItem, subMenuIndex) => (
                                  <SidebarMenuSubItem key={subMenuIndex}>
                                    <SidebarMenuSubButton
                                      isActive={pathname.startsWith(
                                        `${subMenuItem.url}`,
                                      )}
                                      asChild
                                    >
                                      <Link href={`${subMenuItem.url}`}>
                                        <span>{subMenuItem.title}</span>
                                      </Link>
                                    </SidebarMenuSubButton>
                                  </SidebarMenuSubItem>
                                ))}
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        </>
                      ) : (
                        <SidebarMenuButton
                          isActive={pathname === `${menuItem.url}`}
                          tooltip={menuItem.title}
                          disabled={menuItem.disabled}
                          asChild
                        >
                          <Link href={`${menuItem.url}`}>
                            {menuItem.icon && <menuItem.icon />}
                            <span>{menuItem.title}</span>
                            <ChevronRightIcon className="ml-auto" />
                          </Link>
                        </SidebarMenuButton>
                      )}
                    </SidebarMenuItem>
                  </Collapsible>
                ))}
            </SidebarMenu>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </>
  );
};
