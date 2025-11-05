'use client';

import { useState } from 'react';
import {
  Bell,
  Calendar,
  Check,
  Clock,
  MoreHorizontal,
  Search,
  Star,
  Trash2,
  UserPlus,
  X,
} from 'lucide-react';
import { Button } from '@/components/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/card';
import { Input } from '@/components/input';
import { Badge } from '@/components/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/dropdown-menu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/tabs';
import { cn } from '@/libraries/utilities';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/tooltip';
import { Separator } from '@/components/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/avatar';

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

export function CrmErpNotificationPage() {
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
        return <Check className="h-4 w-4" />;
      case 'project':
        return <Star className="h-4 w-4" />;
      case 'client':
        return <UserPlus className="h-4 w-4" />;
      case 'team':
        return <UserPlus className="h-4 w-4" />;
      case 'system':
        return <Bell className="h-4 w-4" />;
      default:
        return <Bell className="h-4 w-4" />;
    }
  };

  const getTypeBadge = (type: NotificationType) => {
    switch (type) {
      case 'task':
        return (
          <Badge
            variant="secondary"
            className="bg-blue-100 text-blue-800 hover:bg-blue-100"
          >
            Task
          </Badge>
        );
      case 'project':
        return (
          <Badge
            variant="secondary"
            className="bg-purple-100 text-purple-800 hover:bg-purple-100"
          >
            Project
          </Badge>
        );
      case 'client':
        return (
          <Badge
            variant="secondary"
            className="bg-green-100 text-green-800 hover:bg-green-100"
          >
            Client
          </Badge>
        );
      case 'team':
        return (
          <Badge
            variant="secondary"
            className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
          >
            Team
          </Badge>
        );
      case 'system':
        return (
          <Badge
            variant="secondary"
            className="bg-gray-100 text-gray-800 hover:bg-gray-100"
          >
            System
          </Badge>
        );
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const getPriorityBadge = (priority: PriorityLevel) => {
    switch (priority) {
      case 'low':
        return (
          <Badge
            variant="secondary"
            className="bg-green-100 text-green-800 hover:bg-green-100"
          >
            Low
          </Badge>
        );
      case 'medium':
        return (
          <Badge
            variant="secondary"
            className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
          >
            Medium
          </Badge>
        );
      case 'high':
        return (
          <Badge
            variant="secondary"
            className="bg-orange-100 text-orange-800 hover:bg-orange-100"
          >
            High
          </Badge>
        );
      case 'urgent':
        return (
          <Badge
            variant="secondary"
            className="bg-red-100 text-red-800 hover:bg-red-100"
          >
            Urgent
          </Badge>
        );
      default:
        return <Badge variant="secondary">Unknown</Badge>;
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
    <Card className="w-full">
      <CardHeader className="flex flex-col space-y-4 pb-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <CardTitle className="text-2xl font-bold">Notifications</CardTitle>
          <div className="flex items-center gap-2">
            {selectedNotifications.length > 0 ? (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={deleteSelected}
                  className="flex items-center gap-1"
                >
                  <Trash2 className="h-4 w-4" />
                  <span className="hidden sm:inline">Delete Selected</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedNotifications([])}
                >
                  Cancel
                </Button>
              </>
            ) : (
              <>
                {unreadCount > 0 && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={markAllAsRead}
                    className="flex items-center gap-1"
                  >
                    <Check className="h-4 w-4" />
                    <span className="hidden sm:inline">Mark all as read</span>
                  </Button>
                )}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">More options</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Options</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem onClick={selectAllNotifications}>
                        <Check className="mr-2 h-4 w-4" />
                        <span>Select All</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={markAllAsRead}
                        disabled={unreadCount === 0}
                      >
                        <Check className="mr-2 h-4 w-4" />
                        <span>Mark All as Read</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>Notification Settings</span>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="text-muted-foreground absolute top-2.5 left-2.5 h-4 w-4" />
            <Input
              placeholder="Search notifications..."
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-1 right-1 h-7 w-7"
                onClick={() => setSearchQuery('')}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Clear search</span>
              </Button>
            )}
          </div>
          <div className="flex gap-2">
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-[130px]">
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
              <SelectTrigger className="w-[130px]">
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
              <SelectTrigger className="w-[130px]">
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
      </CardHeader>
      <CardContent>
        <Tabs
          defaultValue="all"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <TabsList className="mb-4 grid w-full grid-cols-2">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="unread">
              Unread
              {unreadCount > 0 && (
                <span className="bg-primary text-primary-foreground ml-2 rounded-full px-2 py-0.5 text-xs">
                  {unreadCount}
                </span>
              )}
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-0">
            {Object.keys(groupedNotifications).length > 0 ? (
              Object.entries(groupedNotifications).map(([date, items]) => (
                <div key={date} className="mb-6 last:mb-0">
                  <div className="mb-2 flex items-center">
                    <h3 className="text-muted-foreground text-sm font-medium">
                      {date}
                    </h3>
                    <Separator className="ml-4 flex-1" />
                  </div>
                  <div className="space-y-3">
                    {items.map((notification) => (
                      <div
                        key={notification.id}
                        className={cn(
                          'hover:bg-accent flex items-start gap-4 rounded-lg border p-4 transition-colors',
                          !notification.read && 'bg-muted/50',
                          selectedNotifications.includes(notification.id) &&
                            'ring-primary ring-2',
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-5 items-center">
                            <input
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300"
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
                            <Avatar className="h-9 w-9">
                              <AvatarImage
                                src={notification.avatar}
                                alt={notification.source || ''}
                              />
                              <AvatarFallback>
                                {notification.source?.charAt(0) || 'N'}
                              </AvatarFallback>
                            </Avatar>
                          )}
                        </div>
                        <div
                          className="flex-1 cursor-pointer"
                          onClick={() => {
                            markAsRead(notification.id);
                            if (notification.link) {
                              console.log(`Navigate to: ${notification.link}`);
                            }
                          }}
                        >
                          <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                            <div className="flex items-center gap-2">
                              {getTypeIcon(notification.type)}
                              <p className="font-medium">
                                {notification.title}
                              </p>
                              {!notification.read && (
                                <Badge
                                  variant="outline"
                                  className="ml-2 h-5 px-1.5 text-xs font-normal"
                                >
                                  New
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-2">
                              {getTypeBadge(notification.type)}
                              {getPriorityBadge(notification.priority)}
                            </div>
                          </div>
                          <p className="text-muted-foreground mb-2 text-sm">
                            {notification.message}
                          </p>
                          <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
                            <div className="text-muted-foreground flex items-center gap-2 text-xs">
                              <Clock className="h-3 w-3" />
                              <span>{notification.time}</span>
                              {notification.source && (
                                <>
                                  <span>•</span>
                                  <span>{notification.source}</span>
                                </>
                              )}
                            </div>
                            {notification.actions &&
                              notification.actions.length > 0 && (
                                <div className="flex items-center gap-2">
                                  {notification.actions.map((action, index) => (
                                    <Button
                                      key={index}
                                      variant={
                                        index === 0 ? 'default' : 'outline'
                                      }
                                      size="sm"
                                      className="h-7 text-xs"
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
                                  ))}
                                </div>
                              )}
                          </div>
                        </div>
                        <div className="flex flex-col gap-1">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    markAsRead(notification.id);
                                  }}
                                >
                                  <Check className="h-4 w-4" />
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
                                  className="h-8 w-8"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    deleteNotification(notification.id);
                                  }}
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Delete</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <Bell className="text-muted-foreground mb-4 h-12 w-12" />
                <h3 className="mb-2 text-lg font-medium">No notifications</h3>
                <p className="text-muted-foreground text-sm">
                  {searchQuery ||
                  selectedType !== 'all' ||
                  selectedPriority !== 'all' ||
                  selectedTimeframe !== 'all'
                    ? 'No notifications match your filters. Try adjusting your search or filters.'
                    : 'When you receive notifications, they will appear here.'}
                </p>
                {(searchQuery ||
                  selectedType !== 'all' ||
                  selectedPriority !== 'all' ||
                  selectedTimeframe !== 'all') && (
                  <Button
                    variant="outline"
                    className="mt-4"
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
                <div key={date} className="mb-6 last:mb-0">
                  <div className="mb-2 flex items-center">
                    <h3 className="text-muted-foreground text-sm font-medium">
                      {date}
                    </h3>
                    <Separator className="ml-4 flex-1" />
                  </div>
                  <div className="space-y-3">
                    {items
                      .filter((notification) => !notification.read)
                      .map((notification) => (
                        <div
                          key={notification.id}
                          className={cn(
                            'hover:bg-accent bg-muted/50 flex items-start gap-4 rounded-lg border p-4 transition-colors',
                            selectedNotifications.includes(notification.id) &&
                              'ring-primary ring-2',
                          )}
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-5 items-center">
                              <input
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300"
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
                              <Avatar className="h-9 w-9">
                                <AvatarImage
                                  src={notification.avatar}
                                  alt={notification.source || ''}
                                />
                                <AvatarFallback>
                                  {notification.source?.charAt(0) || 'N'}
                                </AvatarFallback>
                              </Avatar>
                            )}
                          </div>
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
                            <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                              <div className="flex items-center gap-2">
                                {getTypeIcon(notification.type)}
                                <p className="font-medium">
                                  {notification.title}
                                </p>
                                <Badge
                                  variant="outline"
                                  className="ml-2 h-5 px-1.5 text-xs font-normal"
                                >
                                  New
                                </Badge>
                              </div>
                              <div className="flex items-center gap-2">
                                {getTypeBadge(notification.type)}
                                {getPriorityBadge(notification.priority)}
                              </div>
                            </div>
                            <p className="text-muted-foreground mb-2 text-sm">
                              {notification.message}
                            </p>
                            <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
                              <div className="text-muted-foreground flex items-center gap-2 text-xs">
                                <Clock className="h-3 w-3" />
                                <span>{notification.time}</span>
                                {notification.source && (
                                  <>
                                    <span>•</span>
                                    <span>{notification.source}</span>
                                  </>
                                )}
                              </div>
                              {notification.actions &&
                                notification.actions.length > 0 && (
                                  <div className="flex items-center gap-2">
                                    {notification.actions.map(
                                      (action, index) => (
                                        <Button
                                          key={index}
                                          variant={
                                            index === 0 ? 'default' : 'outline'
                                          }
                                          size="sm"
                                          className="h-7 text-xs"
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
                          <div className="flex flex-col gap-1">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      markAsRead(notification.id);
                                    }}
                                  >
                                    <Check className="h-4 w-4" />
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
                                    className="h-8 w-8"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      deleteNotification(notification.id);
                                    }}
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Delete</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <Bell className="text-muted-foreground mb-4 h-12 w-12" />
                <h3 className="mb-2 text-lg font-medium">
                  No unread notifications
                </h3>
                <p className="text-muted-foreground text-sm">
                  You're all caught up!
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
