'use client';

import { useState } from 'react';
import {
  Cog,
  Database,
  GitBranch,
  Globe,
  Key,
  Shield,
  Users,
  Webhook,
} from 'lucide-react';
import { Button } from '@/components/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/card';
import { Input } from '@/components/input';
import { Label } from '@/components/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/select';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from '@/components/sidebar';
import { Switch } from '@/components/switch';

export const Screen = () => {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div className="flex min-h-screen flex-col bg-muted/40">
      <SidebarProvider>
        <div className="flex flex-1">
          <Sidebar
            className="hidden w-64 border-r md:flex"
            variant="sidebar"
            collapsible="none"
          >
            <SidebarHeader className="flex h-16 items-start gap-4 border-b bg-background px-4">
              <div className="flex flex-1 flex-col items-start justify-center">
                <h1 className="text-lg font-semibold">Workspace Settings</h1>
              </div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        isActive={activeTab === 'general'}
                        onClick={() => setActiveTab('general')}
                      >
                        <Cog className="h-4 w-4" />
                        <span>General</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        isActive={activeTab === 'domains'}
                        onClick={() => setActiveTab('domains')}
                      >
                        <Globe className="h-4 w-4" />
                        <span>Domains</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        isActive={activeTab === 'environment'}
                        onClick={() => setActiveTab('environment')}
                      >
                        <Key className="h-4 w-4" />
                        <span>Environment Variables</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        isActive={activeTab === 'git'}
                        onClick={() => setActiveTab('git')}
                      >
                        <GitBranch className="h-4 w-4" />
                        <span>Git</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        isActive={activeTab === 'team'}
                        onClick={() => setActiveTab('team')}
                      >
                        <Users className="h-4 w-4" />
                        <span>Team Members</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        isActive={activeTab === 'webhooks'}
                        onClick={() => setActiveTab('webhooks')}
                      >
                        <Webhook className="h-4 w-4" />
                        <span>Webhooks</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        isActive={activeTab === 'database'}
                        onClick={() => setActiveTab('database')}
                      >
                        <Database className="h-4 w-4" />
                        <span>Database</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        isActive={activeTab === 'security'}
                        onClick={() => setActiveTab('security')}
                      >
                        <Shield className="h-4 w-4" />
                        <span>Security</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>

          <SidebarInset className="flex-1">
            <div className="">
              {activeTab === 'general' && (
                <div className="space-y-4">
                  <header className="flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
                    <div className="flex flex-1 flex-col items-start justify-center">
                      <h1 className="text-lg font-semibold">
                        General Settings
                      </h1>
                      <p className="text-xs text-secondary-foreground">
                        Manage your issues here
                      </p>
                    </div>
                    <div className="flex items-center gap-2"></div>
                  </header>
                  <div className="flex flex-col space-y-4 px-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Project Name</CardTitle>
                        <CardDescription>
                          This is the name of your project shown in the
                          dashboard.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <Label htmlFor="project-name">Name</Label>
                          <Input
                            id="project-name"
                            placeholder="My Project"
                            defaultValue="Acme Dashboard"
                          />
                        </div>
                      </CardContent>
                      <CardFooter className="border-t px-6 py-4">
                        <Button>Save Changes</Button>
                      </CardFooter>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Framework</CardTitle>
                        <CardDescription>
                          The framework your project is using.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <Label htmlFor="framework">Framework</Label>
                          <Select defaultValue="nextjs">
                            <SelectTrigger id="framework">
                              <SelectValue placeholder="Select framework" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="nextjs">Next.js</SelectItem>
                              <SelectItem value="react">React</SelectItem>
                              <SelectItem value="vue">Vue</SelectItem>
                              <SelectItem value="svelte">Svelte</SelectItem>
                              <SelectItem value="astro">Astro</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </CardContent>
                      <CardFooter className="border-t px-6 py-4">
                        <Button>Save Changes</Button>
                      </CardFooter>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Build Settings</CardTitle>
                        <CardDescription>
                          Configure how your project is built.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label htmlFor="prioritize-builds">
                                Prioritize Production Builds
                              </Label>
                              <p className="text-sm text-muted-foreground">
                                Give production builds priority over preview
                                builds.
                              </p>
                            </div>
                            <Switch id="prioritize-builds" defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label htmlFor="concurrent-builds">
                                On-demand Concurrent Builds
                              </Label>
                              <p className="text-sm text-muted-foreground">
                                Allow multiple builds to run at the same time.
                              </p>
                            </div>
                            <Switch id="concurrent-builds" />
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="border-t px-6 py-4">
                        <Button>Save Changes</Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              )}

              {activeTab === 'domains' && (
                <div className="space-y-6">
                  <h1 className="text-2xl font-bold">Domains</h1>
                  <Card>
                    <CardHeader>
                      <CardTitle>Custom Domains</CardTitle>
                      <CardDescription>
                        Add and manage custom domains for your project.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="rounded-md border p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">
                                acme-dashboard.vercel.app
                              </p>
                              <p className="text-sm text-muted-foreground">
                                Default domain
                              </p>
                            </div>
                            <Button variant="outline" size="sm">
                              Copy
                            </Button>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="new-domain">Add Domain</Label>
                          <div className="flex gap-2">
                            <Input
                              id="new-domain"
                              placeholder="example.com"
                              className="flex-1"
                            />
                            <Button>Add</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {activeTab === 'environment' && (
                <div className="space-y-6">
                  <h1 className="text-2xl font-bold">Environment Variables</h1>
                  <Card>
                    <CardHeader>
                      <CardTitle>Environment Variables</CardTitle>
                      <CardDescription>
                        Add and manage environment variables for your project.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="rounded-md border p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">API_KEY</p>
                              <p className="text-sm text-muted-foreground">
                                Production, Preview
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                Edit
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-destructive"
                              >
                                Delete
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="env-key">Key</Label>
                          <Input id="env-key" placeholder="KEY_NAME" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="env-value">Value</Label>
                          <Input id="env-value" placeholder="value" />
                        </div>
                        <div className="space-y-2">
                          <Label>Environments</Label>
                          <div className="flex gap-2">
                            <div className="flex items-center space-x-2">
                              <Switch id="env-production" defaultChecked />
                              <Label htmlFor="env-production">Production</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Switch id="env-preview" defaultChecked />
                              <Label htmlFor="env-preview">Preview</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Switch id="env-development" />
                              <Label htmlFor="env-development">
                                Development
                              </Label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t px-6 py-4">
                      <Button>Add Variable</Button>
                    </CardFooter>
                  </Card>
                </div>
              )}

              {activeTab === 'git' && (
                <div className="space-y-6">
                  <h1 className="text-2xl font-bold">Git Integration</h1>
                  <Card>
                    <CardHeader>
                      <CardTitle>Git Repository</CardTitle>
                      <CardDescription>
                        Connect your project to a Git repository.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="rounded-md border p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">acme/dashboard</p>
                              <p className="text-sm text-muted-foreground">
                                Connected to GitHub
                              </p>
                            </div>
                            <Button variant="outline" size="sm">
                              Disconnect
                            </Button>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label>Production Branch</Label>
                          <Select defaultValue="main">
                            <SelectTrigger>
                              <SelectValue placeholder="Select branch" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="main">main</SelectItem>
                              <SelectItem value="master">master</SelectItem>
                              <SelectItem value="production">
                                production
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t px-6 py-4">
                      <Button>Save Changes</Button>
                    </CardFooter>
                  </Card>
                </div>
              )}

              {activeTab === 'team' && (
                <div className="space-y-6">
                  <h1 className="text-2xl font-bold">Team Members</h1>
                  <Card>
                    <CardHeader>
                      <CardTitle>Team Members</CardTitle>
                      <CardDescription>
                        Manage who has access to this project.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="rounded-md border p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                <span className="font-medium text-primary">
                                  JD
                                </span>
                              </div>
                              <div>
                                <p className="font-medium">John Doe</p>
                                <p className="text-sm text-muted-foreground">
                                  john@example.com
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Select defaultValue="owner">
                                <SelectTrigger className="w-[110px]">
                                  <SelectValue placeholder="Role" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="admin">Manager</SelectItem>
                                  <SelectItem value="member">Member</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="invite-email">
                            Invite Team Member
                          </Label>
                          <div className="flex gap-2">
                            <Input
                              id="invite-email"
                              placeholder="email@example.com"
                              className="flex-1"
                            />
                            <Select defaultValue="member">
                              <SelectTrigger className="w-[110px]">
                                <SelectValue placeholder="Role" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="admin">Admin</SelectItem>
                                <SelectItem value="member">Member</SelectItem>
                              </SelectContent>
                            </Select>
                            <Button>Invite</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {activeTab === 'webhooks' && (
                <div className="space-y-6">
                  <h1 className="text-2xl font-bold">Webhooks</h1>
                  <Card>
                    <CardHeader>
                      <CardTitle>Webhooks</CardTitle>
                      <CardDescription>
                        Configure webhooks to notify external services about
                        events.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="rounded-md border p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">
                                https://api.example.com/webhook
                              </p>
                              <p className="text-sm text-muted-foreground">
                                Deployment events
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                Edit
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-destructive"
                              >
                                Delete
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="webhook-url">Webhook URL</Label>
                          <Input
                            id="webhook-url"
                            placeholder="https://example.com/webhook"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Events</Label>
                          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                            <div className="flex items-center space-x-2">
                              <Switch id="event-deployment" defaultChecked />
                              <Label htmlFor="event-deployment">
                                Deployment
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Switch id="event-build" />
                              <Label htmlFor="event-build">Build</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Switch id="event-domain" />
                              <Label htmlFor="event-domain">Domain</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Switch id="event-integration" />
                              <Label htmlFor="event-integration">
                                Integration
                              </Label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t px-6 py-4">
                      <Button>Add Webhook</Button>
                    </CardFooter>
                  </Card>
                </div>
              )}

              {activeTab === 'database' && (
                <div className="space-y-6">
                  <h1 className="text-2xl font-bold">Database</h1>
                  <Card>
                    <CardHeader>
                      <CardTitle>Database Connection</CardTitle>
                      <CardDescription>
                        Configure your database connection.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="db-type">Database Type</Label>
                          <Select defaultValue="postgres">
                            <SelectTrigger id="db-type">
                              <SelectValue placeholder="Select database type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="postgres">
                                PostgreSQL
                              </SelectItem>
                              <SelectItem value="mysql">MySQL</SelectItem>
                              <SelectItem value="mongodb">MongoDB</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="db-url">Connection URL</Label>
                          <Input
                            id="db-url"
                            placeholder="postgres://user:password@host:port/database"
                            type="password"
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="db-pooling">
                              Connection Pooling
                            </Label>
                            <p className="text-sm text-muted-foreground">
                              Enable connection pooling for better performance.
                            </p>
                          </div>
                          <Switch id="db-pooling" defaultChecked />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t px-6 py-4">
                      <Button>Save Connection</Button>
                    </CardFooter>
                  </Card>
                </div>
              )}

              {activeTab === 'security' && (
                <div className="space-y-6">
                  <h1 className="text-2xl font-bold">Security</h1>
                  <Card>
                    <CardHeader>
                      <CardTitle>Security Settings</CardTitle>
                      <CardDescription>
                        Configure security settings for your project.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="password-protection">
                              Password Protection
                            </Label>
                            <p className="text-sm text-muted-foreground">
                              Require a password to access preview deployments.
                            </p>
                          </div>
                          <Switch id="password-protection" />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="source-protection">
                              Source Protection
                            </Label>
                            <p className="text-sm text-muted-foreground">
                              Prevent access to source maps and original source
                              code.
                            </p>
                          </div>
                          <Switch id="source-protection" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="git-protection">
                              Git Fork Protection
                            </Label>
                            <p className="text-sm text-muted-foreground">
                              Prevent deployments from forked repositories.
                            </p>
                          </div>
                          <Switch id="git-protection" defaultChecked />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t px-6 py-4">
                      <Button>Save Settings</Button>
                    </CardFooter>
                  </Card>
                </div>
              )}
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
};
