'use client';

import * as React from 'react';
import { Sidebar, SidebarSeparator } from '@/components/sidebar';
import { Header } from './header';
import { Footer } from './footer';
import { Main } from './main';
import { useSidebarSettings } from '../hooks';
import { Settings } from './settings';

export const SidebarComponent = ({
  ...props
}: React.ComponentProps<typeof Sidebar>) => {
  const { sidebarSettings, setSidebarSettings } = useSidebarSettings();
  return (
    <Sidebar {...props} collapsible="icon">
      {!sidebarSettings ? (
        <>
          <Header />
          <Main />
          <SidebarSeparator className="mx-0 px-0" />
          <Footer />
        </>
      ) : (
        <>
          <Settings />
        </>
      )}
    </Sidebar>
  );
};
