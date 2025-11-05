import { sidebarAtom } from '@/libraries/jotai/atoms';
import { useAtom } from 'jotai';

export const useSidebar = () => {
  const [sidebar, setSidebar] = useAtom(sidebarAtom);

  return { sidebar, setSidebar };
};
