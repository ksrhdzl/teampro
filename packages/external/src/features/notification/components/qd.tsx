'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Bell,
  BellDotIcon,
  Check,
  Clock,
  Search,
  Star,
  UserPlus,
  X,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/avatar';
import { Badge } from '@/components/badge';
import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { Label } from '@/components/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/select';
import { Separator } from '@/components/separator';
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/sidebar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/tooltip';
import { cn } from '@/libraries/utilities';

type NotificationType = 'task' | 'project' | 'client' | 'team' | 'system';
type PriorityLevel = 'low' | 'medium' | 'high' | 'urgent';

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  date: string;
  read: boolean;
  type: NotificationType;
  priority: PriorityLevel;
  source?: string;
  avatar?: string;
  link?: string;
  actions?: Array<{
    label: string;
    action: string;
  }>;
}

export default function CrmErpNotificationPage() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      title: 'New task assigned',
      message:
        "You've been assigned to create a project proposal for client XYZ Corp.",
      time: '5 min ago',
      date: 'Today',
      read: false,
      type: 'task',
      priority: 'high',
      source: 'Project Management',
      avatar: '/placeholder.svg?height=40&width=40',
      link: '/tasks/123',
      actions: [
        { label: 'View Task', action: 'view' },
        { label: 'Start Work', action: 'start' },
      ],
    },
    {
      id: '2',
      title: 'Project milestone reached',
      message:
        "The 'User Authentication' milestone for Project Alpha has been completed.",
      time: '1 hour ago',
      date: 'Today',
      read: false,
      type: 'project',
      priority: 'medium',
      source: 'Project Tracker',
      avatar: '/placeholder.svg?height=40&width=40',
      link: '/projects/456',
      actions: [
        { label: 'View Project', action: 'view' },
        { label: 'Update Status', action: 'update' },
      ],
    },
    {
      id: '3',
      title: 'Client meeting reminder',
      message:
        'You have a meeting with ABC Inc. tomorrow at 2:00 PM to discuss the new marketing strategy.',
      time: '3 hours ago',
      date: 'Today',
      read: false,
      type: 'client',
      priority: 'high',
      source: 'CRM',
      avatar: '/placeholder.svg?height=40&width=40',
      link: '/meetings/789',
      actions: [
        { label: 'View Details', action: 'view' },
        { label: 'Prepare Notes', action: 'prepare' },
      ],
    },
    {
      id: '4',
      title: 'Team member added',
      message: 'Sarah Johnson has been added to your team. Please welcome her!',
      time: '1 day ago',
      date: 'Yesterday',
      read: true,
      type: 'team',
      priority: 'low',
      source: 'HR',
      avatar: '/placeholder.svg?height=40&width=40',
      link: '/team',
      actions: [
        { label: 'Send Welcome', action: 'welcome' },
        { label: 'View Profile', action: 'profile' },
      ],
    },
    {
      id: '5',
      title: 'System maintenance',
      message:
        'The CRM system will be undergoing maintenance on Saturday from 10 PM to 2 AM. Please save your work beforehand.',
      time: '2 days ago',
      date: 'Mar 12, 2025',
      read: true,
      type: 'system',
      priority: 'medium',
      source: 'IT Department',
      avatar: '/placeholder.svg?height=40&width=40',
      actions: [
        { label: 'Set Reminder', action: 'remind' },
        { label: 'Learn More', action: 'info' },
      ],
    },
    {
      id: '6',
      title: 'Sales target achieved',
      message:
        'Congratulations! Your team has achieved 95% of the monthly sales target.',
      time: '3 days ago',
      date: 'Mar 11, 2025',
      read: true,
      type: 'team',
      priority: 'low',
      source: 'Sales Dashboard',
      avatar: '/placeholder.svg?height=40&width=40',
      link: '/sales/dashboard',
      actions: [
        { label: 'View Report', action: 'report' },
        { label: 'Share Success', action: 'share' },
      ],
    },
    {
      id: '7',
      title: 'Urgent: Client contract expiring',
      message:
        'The service contract for DEF Corp is expiring in 7 days. Immediate action required for renewal.',
      time: '4 days ago',
      date: 'Mar 10, 2025',
      read: true,
      type: 'client',
      priority: 'urgent',
      source: 'Contract Management',
      avatar: '/placeholder.svg?height=40&width=40',
      link: '/contracts/101112',
      actions: [
        { label: 'Renew Contract', action: 'renew' },
        { label: 'Contact Client', action: 'contact' },
      ],
    },
  ]);

  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedPriority, setSelectedPriority] = useState<string>('all');
  const [selectedTimeframe, setSelectedTimeframe] = useState<string>('all');
  const [selectedNotifications, setSelectedNotifications] = useState<string[]>(
    [],
  );

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification,
      ),
    );
  };

  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({ ...notification, read: true })),
    );
  };

  const deleteNotification = (id: string) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id),
    );
  };

  const toggleSelectNotification = (id: string) => {
    if (selectedNotifications.includes(id)) {
      setSelectedNotifications(
        selectedNotifications.filter((nId) => nId !== id),
      );
    } else {
      setSelectedNotifications([...selectedNotifications, id]);
    }
  };

  const selectAllNotifications = () => {
    if (selectedNotifications.length === filteredNotifications.length) {
      setSelectedNotifications([]);
    } else {
      setSelectedNotifications(filteredNotifications.map((n) => n.id));
    }
  };

  const deleteSelected = () => {
    setNotifications(
      notifications.filter((n) => !selectedNotifications.includes(n.id)),
    );
    setSelectedNotifications([]);
  };

  const getTypeIcon = (type: NotificationType) => {
    switch (type) {
      case 'task':
        return <Check className="h-3 w-3" />;
      case 'project':
        return <Star className="h-3 w-3" />;
      case 'client':
        return <UserPlus className="h-3 w-3" />;
      case 'team':
        return <UserPlus className="h-3 w-3" />;
      case 'system':
        return <Bell className="h-3 w-3" />;
      default:
        return <Bell className="h-3 w-3" />;
    }
  };

  const getTypeBadge = (type: NotificationType) => {
    switch (type) {
      case 'task':
        return (
          <Badge
            variant="secondary"
            className="h-4 bg-blue-100 px-1 text-[10px] text-blue-800 hover:bg-blue-100"
          >
            Task
          </Badge>
        );
      case 'project':
        return (
          <Badge
            variant="secondary"
            className="h-4 bg-purple-100 px-1 text-[10px] text-purple-800 hover:bg-purple-100"
          >
            Project
          </Badge>
        );
      case 'client':
        return (
          <Badge
            variant="secondary"
            className="h-4 bg-green-100 px-1 text-[10px] text-green-800 hover:bg-green-100"
          >
            Client
          </Badge>
        );
      case 'team':
        return (
          <Badge
            variant="secondary"
            className="h-4 bg-yellow-100 px-1 text-[10px] text-yellow-800 hover:bg-yellow-100"
          >
            Team
          </Badge>
        );
      case 'system':
        return (
          <Badge
            variant="secondary"
            className="h-4 bg-gray-100 px-1 text-[10px] text-gray-800 hover:bg-gray-100"
          >
            System
          </Badge>
        );
      default:
        return (
          <Badge variant="secondary" className="h-4 px-1 text-[10px]">
            Unknown
          </Badge>
        );
    }
  };

  const getPriorityBadge = (priority: PriorityLevel) => {
    switch (priority) {
      case 'low':
        return (
          <Badge
            variant="secondary"
            className="h-4 bg-green-100 px-1 text-[10px] text-green-800 hover:bg-green-100"
          >
            Low
          </Badge>
        );
      case 'medium':
        return (
          <Badge
            variant="secondary"
            className="h-4 bg-yellow-100 px-1 text-[10px] text-yellow-800 hover:bg-yellow-100"
          >
            Medium
          </Badge>
        );
      case 'high':
        return (
          <Badge
            variant="secondary"
            className="h-4 bg-orange-100 px-1 text-[10px] text-orange-800 hover:bg-orange-100"
          >
            High
          </Badge>
        );
      case 'urgent':
        return (
          <Badge
            variant="secondary"
            className="h-4 bg-red-100 px-1 text-[10px] text-red-800 hover:bg-red-100"
          >
            Urgent
          </Badge>
        );
      default:
        return (
          <Badge variant="secondary" className="h-4 px-1 text-[10px]">
            Unknown
          </Badge>
        );
    }
  };

  const filteredNotifications = notifications.filter((notification) => {
    if (activeTab === 'unread' && notification.read) return false;

    if (
      searchQuery &&
      !notification.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !notification.message.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false;

    if (selectedType !== 'all' && notification.type !== selectedType)
      return false;

    if (
      selectedPriority !== 'all' &&
      notification.priority !== selectedPriority
    )
      return false;

    if (selectedTimeframe === 'today' && notification.date !== 'Today')
      return false;
    if (selectedTimeframe === 'yesterday' && notification.date !== 'Yesterday')
      return false;
    if (
      selectedTimeframe === 'thisWeek' &&
      notification.date !== 'Today' &&
      notification.date !== 'Yesterday' &&
      !notification.date.startsWith('Mar')
    )
      return false;

    return true;
  });

  const groupedNotifications = filteredNotifications.reduce<
    Record<string, Notification[]>
  >((groups, notification) => {
    const date = notification.date;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(notification);
    return groups;
  }, {});

  const handleAction = (notificationId: string, action: string) => {
    console.log(`Action ${action} for notification ${notificationId}`);
    // Here you would handle the action, like navigating to a page or performing an operation
    // For now, we'll just mark it as read
    markAsRead(notificationId);
  };

  return (
    <>
      <SidebarHeader className="flex flex-col space-y-3 bg-background">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <BellDotIcon className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Notifications</span>
                  <span className="truncate text-xs">
                    7 notifications unread !
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        {/* <SidebarGroup className="py-0">
          <SidebarGroupContent className="relative">
            <Label htmlFor="search" className="sr-only">
              Search
            </Label>
            <SidebarInput
              id="search"
              placeholder="Search the docs..."
              className="pl-8"
            />
            <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
          </SidebarGroupContent>
        </SidebarGroup> */}

        <div className="flex flex-col gap-2">
          <div className="relative w-full">
            <Search className="absolute top-2 left-2 h-3 w-3 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="h-7 pl-7 text-xs"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-0.5 right-0.5 h-6 w-6"
                onClick={() => setSearchQuery('')}
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Clear search</span>
              </Button>
            )}
          </div>
          <div className="grid grid-cols-3 gap-2">
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="h-7 w-full text-xs">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All types</SelectItem>
                <SelectItem value="task">Task</SelectItem>
                <SelectItem value="project">Project</SelectItem>
                <SelectItem value="client">Client</SelectItem>
                <SelectItem value="team">Team</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={selectedPriority}
              onValueChange={setSelectedPriority}
            >
              <SelectTrigger className="h-7 w-full text-xs">
                <SelectValue placeholder="Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All priorities</SelectItem>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="urgent">Urgent</SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={selectedTimeframe}
              onValueChange={setSelectedTimeframe}
            >
              <SelectTrigger className="h-7 w-full text-xs">
                <SelectValue placeholder="Timeframe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All time</SelectItem>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="yesterday">Yesterday</SelectItem>
                <SelectItem value="thisWeek">This week</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="relative bg-background p-2">
        <Tabs
          defaultValue="all"
          className="z-10 my-0 w-full bg-background"
          onValueChange={setActiveTab}
        >
          <TabsList className="sticky top-0 z-10 mb-2 grid h-8 w-full grid-cols-2">
            <TabsTrigger value="all" className="text-xs">
              All
            </TabsTrigger>
            <TabsTrigger value="unread" className="text-xs">
              Unread
              {unreadCount > 0 && (
                <span className="ml-1 rounded-full bg-primary px-1.5 py-0.5 text-[10px] text-primary-foreground">
                  {unreadCount}
                </span>
              )}
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-0">
            {Object.keys(groupedNotifications).length > 0 ? (
              Object.entries(groupedNotifications).map(([date, items]) => (
                <div key={date} className="mb-3 last:mb-0">
                  <div className="mb-1 flex items-center">
                    <h3 className="text-xs font-medium text-muted-foreground">
                      {date}
                    </h3>
                    <Separator className="ml-2 flex-1" />
                  </div>
                  <div className="space-y-2">
                    {items.map((notification) => (
                      <div
                        key={notification.id}
                        className={cn(
                          'flex flex-col gap-2 rounded-lg border p-2 transition-colors hover:bg-accent',
                          !notification.read && 'bg-muted/50',
                          selectedNotifications.includes(notification.id) &&
                            'ring-2 ring-primary',
                        )}
                      >
                        <div className="flex items-start gap-2">
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              className="h-3 w-3 rounded border-gray-300"
                              checked={selectedNotifications.includes(
                                notification.id,
                              )}
                              onChange={() =>
                                toggleSelectNotification(notification.id)
                              }
                              onClick={(e) => e.stopPropagation()}
                            />
                          </div>
                          {notification.avatar && (
                            <Avatar className="h-6 w-6">
                              <AvatarImage
                                src={notification.avatar}
                                alt={notification.source || ''}
                              />
                              <AvatarFallback className="text-[10px]">
                                {notification.source?.charAt(0) || 'N'}
                              </AvatarFallback>
                            </Avatar>
                          )}
                          <div
                            className="flex-1 cursor-pointer"
                            onClick={() => {
                              markAsRead(notification.id);
                              if (notification.link) {
                                console.log(
                                  `Navigate to: ${notification.link}`,
                                );
                              }
                            }}
                          >
                            <div className="flex flex-col gap-1">
                              <div className="flex items-center gap-1">
                                {getTypeIcon(notification.type)}
                                <p className="line-clamp-1 text-xs font-medium">
                                  {notification.title}
                                </p>
                                {!notification.read && (
                                  <Badge
                                    variant="outline"
                                    className="ml-1 h-4 px-1 text-[10px] font-normal"
                                  >
                                    New
                                  </Badge>
                                )}
                              </div>
                              <div className="flex flex-wrap gap-1">
                                {getTypeBadge(notification.type)}
                                {getPriorityBadge(notification.priority)}
                              </div>
                            </div>
                            <p className="my-1 line-clamp-2 text-[11px] text-muted-foreground">
                              {notification.message}
                            </p>
                            <div className="flex flex-col gap-1">
                              <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                                <Clock className="h-2.5 w-2.5" />
                                <span>{notification.time}</span>
                                {notification.source && (
                                  <>
                                    <span>•</span>
                                    <span className="max-w-[100px] truncate">
                                      {notification.source}
                                    </span>
                                  </>
                                )}
                              </div>
                              {notification.actions &&
                                notification.actions.length > 0 && (
                                  <div className="mt-1 flex flex-wrap items-center gap-1">
                                    {notification.actions.map(
                                      (action, index) => (
                                        <Button
                                          key={index}
                                          variant={
                                            index === 0 ? 'default' : 'outline'
                                          }
                                          size="sm"
                                          className="h-6 px-2 text-[10px]"
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            handleAction(
                                              notification.id,
                                              action.action,
                                            );
                                          }}
                                        >
                                          {action.label}
                                        </Button>
                                      ),
                                    )}
                                  </div>
                                )}
                            </div>
                          </div>
                        </div>
                        {/* <div className="flex justify-end gap-1">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-6 w-6"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    markAsRead(notification.id);
                                  }}
                                >
                                  <Check className="h-3 w-3" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Mark as read</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-6 w-6"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    deleteNotification(notification.id);
                                  }}
                                >
                                  <Trash2 className="h-3 w-3" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Delete</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div> */}
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-6 text-center">
                <Bell className="mb-2 h-8 w-8 text-muted-foreground" />
                <h3 className="mb-1 text-sm font-medium">No notifications</h3>
                <p className="text-xs text-muted-foreground">
                  {searchQuery ||
                  selectedType !== 'all' ||
                  selectedPriority !== 'all' ||
                  selectedTimeframe !== 'all'
                    ? 'No matches found.'
                    : 'When you receive notifications, they will appear here.'}
                </p>
                {(searchQuery ||
                  selectedType !== 'all' ||
                  selectedPriority !== 'all' ||
                  selectedTimeframe !== 'all') && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-2 h-7 text-xs"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedType('all');
                      setSelectedPriority('all');
                      setSelectedTimeframe('all');
                    }}
                  >
                    Clear filters
                  </Button>
                )}
              </div>
            )}
          </TabsContent>
          <TabsContent value="unread" className="mt-0">
            {unreadCount > 0 ? (
              Object.entries(groupedNotifications).map(([date, items]) => (
                <div key={date} className="mb-3 last:mb-0">
                  <div className="mb-1 flex items-center">
                    <h3 className="text-xs font-medium text-muted-foreground">
                      {date}
                    </h3>
                    <Separator className="ml-2 flex-1" />
                  </div>
                  <div className="space-y-2">
                    {items
                      .filter((notification) => !notification.read)
                      .map((notification) => (
                        <div
                          key={notification.id}
                          className={cn(
                            'flex flex-col gap-2 rounded-lg border bg-muted/50 p-2 transition-colors hover:bg-accent',
                            selectedNotifications.includes(notification.id) &&
                              'ring-2 ring-primary',
                          )}
                        >
                          <div className="flex items-start gap-2">
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                className="h-3 w-3 rounded border-gray-300"
                                checked={selectedNotifications.includes(
                                  notification.id,
                                )}
                                onChange={() =>
                                  toggleSelectNotification(notification.id)
                                }
                                onClick={(e) => e.stopPropagation()}
                              />
                            </div>
                            {notification.avatar && (
                              <Avatar className="h-6 w-6">
                                <AvatarImage
                                  src={notification.avatar}
                                  alt={notification.source || ''}
                                />
                                <AvatarFallback className="text-[10px]">
                                  {notification.source?.charAt(0) || 'N'}
                                </AvatarFallback>
                              </Avatar>
                            )}
                            <div
                              className="flex-1 cursor-pointer"
                              onClick={() => {
                                markAsRead(notification.id);
                                if (notification.link) {
                                  console.log(
                                    `Navigate to: ${notification.link}`,
                                  );
                                }
                              }}
                            >
                              <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-1">
                                  {getTypeIcon(notification.type)}
                                  <p className="line-clamp-1 text-xs font-medium">
                                    {notification.title}
                                  </p>
                                  <Badge
                                    variant="outline"
                                    className="ml-1 h-4 px-1 text-[10px] font-normal"
                                  >
                                    New
                                  </Badge>
                                </div>
                                <div className="flex flex-wrap gap-1">
                                  {getTypeBadge(notification.type)}
                                  {getPriorityBadge(notification.priority)}
                                </div>
                              </div>
                              <p className="my-1 line-clamp-2 text-[11px] text-muted-foreground">
                                {notification.message}
                              </p>
                              <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                                  <Clock className="h-2.5 w-2.5" />
                                  <span>{notification.time}</span>
                                  {notification.source && (
                                    <>
                                      <span>•</span>
                                      <span className="max-w-[100px] truncate">
                                        {notification.source}
                                      </span>
                                    </>
                                  )}
                                </div>
                                {notification.actions &&
                                  notification.actions.length > 0 && (
                                    <div className="mt-1 flex flex-wrap items-center gap-1">
                                      {notification.actions.map(
                                        (action, index) => (
                                          <Button
                                            key={index}
                                            variant={
                                              index === 0
                                                ? 'default'
                                                : 'outline'
                                            }
                                            size="sm"
                                            className="h-6 px-2 text-[10px]"
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              handleAction(
                                                notification.id,
                                                action.action,
                                              );
                                            }}
                                          >
                                            {action.label}
                                          </Button>
                                        ),
                                      )}
                                    </div>
                                  )}
                              </div>
                            </div>
                          </div>
                          {/* <div className="flex justify-end gap-1">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-6 w-6"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      markAsRead(notification.id);
                                    }}
                                  >
                                    <Check className="h-3 w-3" />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Mark as read</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-6 w-6"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      deleteNotification(notification.id);
                                    }}
                                  >
                                    <Trash2 className="h-3 w-3" />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Delete</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div> */}
                        </div>
                      ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-6 text-center">
                <Bell className="mb-2 h-8 w-8 text-muted-foreground" />
                <h3 className="mb-1 text-sm font-medium">
                  No unread notifications
                </h3>
                <p className="text-xs text-muted-foreground">
                  You're all caught up!
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </SidebarContent>
    </>
  );
}
