'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronLeft, ChevronRightIcon } from 'lucide-react';
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
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/sidebar';

import { useSidebarSettings } from '../../hooks';

export const Settings = () => {
  const pathname = usePathname();
  const { sidebarSettings, setSidebarSettings } = useSidebarSettings();

  useEffect(() => {
    if (pathname.includes('settings')) {
      setSidebarSettings(true);
    }
  }, [pathname]);

  return (
    <>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size={'lg'}
              onClick={() => setSidebarSettings(false)}
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg">
                <ChevronLeft className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Settings</span>
                <span className="truncate text-xs">
                  Don't forget why you started !
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      {/* -------------------------------------------------------------------------------- */}
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
                              isActive={pathname === `/settings${menuItem.url}`}
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
                                        `/settings${subMenuItem.url}`,
                                      )}
                                      asChild
                                    >
                                      <Link
                                        href={`/settings${subMenuItem.url}`}
                                      >
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
                          isActive={pathname === `/settings${menuItem.url}`}
                          tooltip={menuItem.title}
                          disabled={menuItem.disabled}
                          asChild
                        >
                          <Link href={`/settings${menuItem.url}`}>
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
