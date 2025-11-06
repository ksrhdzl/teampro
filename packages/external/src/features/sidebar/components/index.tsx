'use client';

import * as React from 'react';
import { Sidebar, SidebarSeparator } from '@/components/sidebar';

import { useSidebarSettings } from '../hooks';
import { Footer } from './footer';
import { Header } from './header';
import { Main } from './main';
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
