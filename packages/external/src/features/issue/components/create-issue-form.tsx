'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '@/libraries/utilities';
import { Input } from '@/components/input';
import { Button } from '@/components/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/select';
import { CreateIssue, createIssueSchema } from '../schemas';
import { useParams } from 'next/navigation';
import { CalendarIcon, Loader2Icon } from 'lucide-react';
import {
  IssuesDocument,
  IssueStatusEnum,
  MemberIssueRoleEnum,
  MemberIssuesDocument,
  MemberSortFields,
  ProjectSortFields,
  SortDirection,
  useCreateIssueMutation,
  useCreateMemberIssueMutation,
  useMembersQuery,
  useProjectsQuery,
} from '@/libraries/graphql';
import { MemberAvatar } from '@/features/member/components/member-avatar';
import { ProjectAvatar } from '@/features/project/components/project-avatar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/popover';
import { Calendar } from '@/components/calendar';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { Textarea } from '@/components/textarea';
import slugify from '@/libraries/utilities/slugify.utility';

export const CreateIssueForm = ({ onCancel }: { onCancel?: () => void }) => {
  const { workspace }: { workspace: string } = useParams();

  const [datePickerStartAt, setDatePickerStartAt] = useState(false);
  const [datePickerEndAt, setDatePickerEndAt] = useState(false);

  const form = useForm<CreateIssue>({
    resolver: zodResolver(createIssueSchema),
    defaultValues: {
      workspaceId: workspace,
      position: 1,
    },
  });

  const [
    createIssueMutation,
    { data: dataIssue, loading: loadingIssue, error: errorIssue },
  ] = useCreateIssueMutation();

  const [createMemberIssueMutation] = useCreateMemberIssueMutation();

  const onSubmit = (values: CreateIssue) => {
    createIssueMutation({
      variables: {
        input: {
          issue: {
            slug: values.slug,
            projectId: +values.projectId,
            workspaceId: +workspace,
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
        if (data?.createIssue.id) {
          createMemberIssueMutation({
            variables: {
              input: {
                memberIssue: {
                  issueId: +data.createIssue.id,
                  memberId: +form.getValues('memberId'),
                  role: MemberIssueRoleEnum.Member,
                },
              },
            },
            refetchQueries: [MemberIssuesDocument],
            onCompleted(data, clientOptions) {
              if (data?.createMemberIssue.id) {
                form.reset();
                if (onCancel) onCancel();
              }
            },
          });
        }
      },
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

  const { data: dataProjects, loading: loadingProjects } = useProjectsQuery({
    variables: {
      filter: { workspaceId: { eq: +workspace } },
      paging: { limit: 10, offset: 0 },
      sorting: {
        direction: SortDirection.Asc,
        field: ProjectSortFields.UpdatedAt,
      },
    },
  });

  const { data: dataMembers, loading: loadingMembers } = useMembersQuery({
    variables: {
      filter: { workspaceId: { eq: +workspace } },
      paging: { limit: 10, offset: 0 },
      sorting: {
        direction: SortDirection.Asc,
        field: MemberSortFields.UpdatedAt,
      },
    },
  });

  const loading = loadingProjects || loadingMembers;

  if (loading) {
    return (
      <Card className="h-[714px] w-full border-none shadow-none">
        <CardContent className="flex h-full items-center justify-center">
          <Loader2Icon className="text-muted-foreground size-5 animate-spin" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-full w-full border-none shadow-none">
      <CardHeader className="gap-0">
        <CardTitle className="text-2xl font-bold">Create a new Issue</CardTitle>
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
                        {dataMembers?.members.nodes.map((member) => (
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
                        {dataProjects?.projects?.nodes.map((project) => (
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
                disabled={loadingIssue}
                className={cn(!onCancel && 'invisible')}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={loadingIssue}
                variant={'default'}
                size="lg"
              >
                Create Workspace
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
