'use client';

import * as React from 'react';
import { Sidebar } from '@/components/sidebar';

import { useSidebar } from '../hooks';
import { Main } from './main';
import { Settings } from './settings';

export const SidebarComponent = ({
  ...props
}: React.ComponentProps<typeof Sidebar>) => {
  const { sidebar } = useSidebar();

  const renderSidebar = () => {
    switch (sidebar) {
      case 'settings':
        return <Settings />;
      default:
        return <Main />;
    }
  };
  return (
    <Sidebar {...props} collapsible="icon">
      {renderSidebar()}
    </Sidebar>
  );
};
