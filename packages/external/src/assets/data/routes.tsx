import {
  Bell,
  Home,
  ListTodo,
  LucideIcon,
  MessagesSquare,
  Settings,
  Users,
} from 'lucide-react';

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
        title: 'Home',
        url: '/home',
        icon: Home,
      },
      {
        title: 'Members',
        url: '/members',
        icon: Users,
      },
      {
        title: 'Notifications',
        url: '/notifications',
        icon: Bell,
      },
      {
        title: 'Chat',
        url: '/chats',
        icon: MessagesSquare,
      },
      {
        title: 'Issues',
        url: '/issues',
        icon: ListTodo,
      },
      {
        title: 'Settings',
        url: '/settings',
        icon: Settings,
        sidebar: true,
      },
    ],
  },
];
