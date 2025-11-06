import { SidebarContent } from '@/components/sidebar';
import { Main } from './main';
import { Workspaces } from './workspaces';

export const Content = () => {
  return (
    <>
      <SidebarContent>
        <Main />
        <Workspaces />
      </SidebarContent>
    </>
  );
};
