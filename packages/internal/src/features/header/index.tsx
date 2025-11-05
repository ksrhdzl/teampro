'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/breadcrumb';
import { SidebarTrigger } from '@/components/sidebar';

// import CrmErpNotificationPage from '@/features/notification/components/qd';
import { Fragment } from 'react';
import Link from 'next/link';
import { Button } from '@/components/button';
import { BellIcon } from 'lucide-react';
import { Command } from './command';
import { useAtom, useAtomValue } from 'jotai';
import { breadcrumbAtom, notificationAtom } from '@/libraries/jotai/atoms';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/drawer';

export const Header = () => {
  const breadcrumb = useAtomValue(breadcrumbAtom);
  const [notification, setNotification] = useAtom(notificationAtom);

  return (
    <header className="bg-background sticky top-0 z-10 flex h-16 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex flex-1 items-center gap-2 px-3">
        <SidebarTrigger />
        <div className="bg-border mr-2 h-4 w-px" />
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumb?.map((item, index) => (
              <Fragment key={index}>
                <BreadcrumbItem>
                  {index < breadcrumb.length - 1 ? (
                    <BreadcrumbLink asChild className="line-clamp-1">
                      <Link href={item.url}>{item.title}</Link>
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage className="line-clamp-1">
                      {item.title}
                    </BreadcrumbPage>
                  )}
                </BreadcrumbItem>
                {index < breadcrumb.length - 1 && <BreadcrumbSeparator />}
              </Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="ml-auto flex flex-1 items-center justify-between gap-2 px-3 md:justify-end">
        <div className="w-full flex-1 md:w-auto md:flex-none">
          <Command />
        </div>
        <nav className="flex items-center gap-0.5">
          {/* <Button
            disabled
            variant="ghost"
            className="group/toggle h-8 w-8 px-0"
          >
            <GlobeIcon className="h-7 w-7" />
            <span className="sr-only">Toggle Language</span>
          </Button> */}

          <Drawer
            direction="right"
            open={notification}
            onOpenChange={setNotification}
          >
            <DrawerTrigger asChild>
              <Button variant="ghost" className="group/toggle h-8 w-8 px-0">
                <BellIcon className="h-7 w-7" />
                <span className="sr-only">Toggle Sidebar</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent className="border-none bg-transparent">
              <div
                className="fixed top-0 right-0 bottom-0 z-50 w-full outline-hidden sm:top-2 sm:right-2 sm:bottom-2"
                style={
                  {
                    '--initial-transform': 'calc(100% + 8px)',
                  } as React.CSSProperties
                }
              >
                <div className="bg-background flex h-full w-full flex-col overflow-hidden shadow-sm sm:rounded-2xl">
                  {/* <CrmErpNotificationPage /> */}
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </nav>
      </div>
    </header>
  );
};
