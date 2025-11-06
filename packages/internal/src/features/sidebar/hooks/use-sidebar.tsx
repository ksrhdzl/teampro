import { useAtom } from 'jotai';
import { sidebarAtom } from '@/libraries/jotai/atoms';

export const useSidebar = () => {
  const [sidebar, setSidebar] = useAtom(sidebarAtom);

  return { sidebar, setSidebar };
};
