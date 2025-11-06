import { parseAsBoolean, useQueryState } from 'nuqs';

export const useSidebar = () => {
  const [sidebar, setSidebar] = useQueryState(
    's',
    parseAsBoolean.withDefault(true).withOptions({ clearOnDefault: true }),
  );

  return { sidebar, setSidebar };
};

export const useSidebarSettings = () => {
  const [sidebarSettings, setSidebarSettings] = useQueryState(
    'ss',
    parseAsBoolean.withDefault(false).withOptions({ clearOnDefault: true }),
  );

  return { sidebarSettings, setSidebarSettings };
};
