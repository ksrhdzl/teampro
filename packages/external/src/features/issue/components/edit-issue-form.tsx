'use client';

import { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/button';
import { Calendar } from '@/components/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/form';
import { Input } from '@/components/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/select';
import { Textarea } from '@/components/textarea';
import { MemberAvatar } from '@/features/member/components/member-avatar';
import { ProjectAvatar } from '@/features/project/components/project-avatar';
import {
  IssueQuery,
  IssuesDocument,
  IssueStatusEnum,
  MemberIssueRoleEnum,
  MemberIssuesDocument,
  MemberIssuesQuery,
  MembersQuery,
  ProjectsQuery,
  useUpdateIssueMutation,
  useUpdateMemberIssueMutation,
} from '@/libraries/graphql';
import { cn } from '@/libraries/utilities';
import slugify from '@/libraries/utilities/slugify.utility';

import { UpdateIssue, updateIssueSchema } from '../schemas';

export const EditIssueForm = ({
  onCancel,
  projects,
  members,
  issue,
  memberIssues,
}: {
  onCancel?: () => void;
  projects: ProjectsQuery;
  members: MembersQuery;
  issue: IssueQuery;
  memberIssues: MemberIssuesQuery;
}) => {
  const [datePickerStartAt, setDatePickerStartAt] = useState(false);
  const [datePickerEndAt, setDatePickerEndAt] = useState(false);

  const [
    updateIssueMutation,
    { data: dataIssue, loading: loadingIssue, error: errorIssue },
  ] = useUpdateIssueMutation({});
  const [
    updateMemberIssueMutation,
    {
      data: dataMemberIssue,
      loading: loadingMemberIssue,
      error: errorMemberIssue,
    },
  ] = useUpdateMemberIssueMutation({});

  const form = useForm<Omit<UpdateIssue, 'workspaceId'>>({
    resolver: zodResolver(updateIssueSchema.omit({ workspaceId: true })),
    defaultValues: {
      name: issue.issue.name || undefined,
      position: issue.issue.position || undefined,
      projectId: String(issue.issue.projectId) || undefined,
      memberId:
        String(memberIssues.memberIssues.nodes[0].memberId) || undefined,
      description: issue.issue.description || undefined,
      slug: issue.issue.slug || undefined,
      status: issue.issue.status || undefined,
      startAt: new Date(issue.issue.endAt) || undefined,
      endAt: new Date(issue.issue.endAt),
    },
  });

  const onSubmit = (values: Omit<UpdateIssue, 'workspaceId'>) => {
    updateIssueMutation({
      variables: {
        input: {
          id: issue.issue.id,
          update: {
            slug: values.slug,
            projectId: +values.projectId,
            name: values.name,
            position: values.position,
            startAt: values.startAt,
            status: values.status,
            endAt: values.endAt,
            description: values.description,
          },
        },
      },
      onCompleted(data, clientOptions) {
        if (data?.updateIssue.id) {
          updateMemberIssueMutation({
            variables: {
              input: {
                id: memberIssues.memberIssues.nodes[0].id,
                update: {
                  // issueId: +data.updateIssue.id,
                  memberId: +form.getValues('memberId'),
                  role: MemberIssueRoleEnum.Member,
                },
              },
            },
            onCompleted(data, clientOptions) {
              if (data?.updateMemberIssue.id) {
                form.reset();
                onCancel?.();
              }
            },
            refetchQueries: [MemberIssuesDocument],
          });
        }
      },
      refetchQueries: [IssuesDocument],
    });
  };

  const nameValue = form.watch('name');
  useEffect(() => {
    const timeout = setTimeout(() => {
      const slugified = slugify(nameValue);
      form.setValue('slug', slugified);
    }, 300);
    return () => clearTimeout(timeout);
  }, [nameValue, form]);

  const loading = loadingIssue || loadingMemberIssue;

  return (
    <Card className="h-full w-full border-none shadow-none">
      <CardHeader className="gap-0">
        <CardTitle className="text-2xl font-bold">Edit Issue</CardTitle>
      </CardHeader>
      <div>
        <div className="h-px w-full bg-neutral-300 px-6" />
      </div>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter issue name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="slug"
                render={({ field }) => (
                  <FormItem className="hidden w-full">
                    <FormLabel>Slug</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter slug" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea {...field} placeholder="Enter description" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="startAt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Start Date</FormLabel>
                    <Popover
                      modal
                      open={datePickerStartAt}
                      onOpenChange={setDatePickerStartAt}
                    >
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={'outline'}
                            className={cn(
                              'w-full pl-3 text-left font-normal',
                              !field.value && 'text-muted-foreground',
                            )}
                          >
                            {field.value ? (
                              format(field.value, 'PPP')
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="center">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={(date) => {
                            field.onChange(date);
                            setDatePickerStartAt(false);
                          }}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="endAt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>End Date</FormLabel>
                    <Popover
                      modal
                      open={datePickerEndAt}
                      onOpenChange={setDatePickerEndAt}
                    >
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={'outline'}
                            className={cn(
                              'w-full pl-3 text-left font-normal',
                              !field.value && 'text-muted-foreground',
                            )}
                          >
                            {field.value ? (
                              format(field.value, 'PPP')
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="center">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={(date) => {
                            field.onChange(date);
                            setDatePickerEndAt(false);
                          }}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="memberId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Member</FormLabel>
                    <Select
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select member" />
                        </SelectTrigger>
                      </FormControl>
                      <FormMessage />
                      <SelectContent>
                        {members?.members.nodes.map((member) => (
                          <SelectItem key={member.id} value={member.id}>
                            <div className="flex items-center gap-x-2">
                              <MemberAvatar
                                className="size-6"
                                name={member.user?.name!}
                              />
                              {member.user?.name}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {(
                          Object.keys(IssueStatusEnum) as Array<
                            keyof typeof IssueStatusEnum
                          >
                        ).map((key, index) => {
                          return (
                            <SelectItem key={index} value={key.toUpperCase()}>
                              {key}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="projectId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project</FormLabel>
                    <Select
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select project" />
                        </SelectTrigger>
                      </FormControl>
                      <FormMessage />
                      <SelectContent>
                        {projects.projects?.nodes.map((project) => (
                          <SelectItem key={project.id} value={project.id}>
                            <div className="flex items-center gap-x-2">
                              <ProjectAvatar
                                className="size-6"
                                name={project.name!}
                                // image={project.imageUrl}
                              />
                              {project.name}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>
            <div className="py-6" />
            <div className="flex items-center justify-between">
              <Button
                type="button"
                size="lg"
                variant="secondary"
                onClick={onCancel}
                disabled={loading}
                className={cn(!onCancel && 'invisible')}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={loading}
                variant={'default'}
                size="lg"
              >
                Save Changes
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
