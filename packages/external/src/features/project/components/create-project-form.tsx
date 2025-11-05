'use client';

import 'client-only';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';

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

import { CreateProject, createProjectSchema } from '../schemas';
import { cn } from '@/libraries/utilities';
import slugify from '@/libraries/utilities/slugify.utility';
import {
  MemberProjectsDocument,
  ProjectsDocument,
  useCreateProjectMutation,
  useWorkspaceQuery,
} from '@/libraries/graphql';

interface CreateProjectFormProps {
  onCancel?: () => void;
}

export const CreateProjectForm = ({ onCancel }: CreateProjectFormProps) => {
  const router = useRouter();
  const params = useParams();

  const {
    data: workspace,
    loading: loadingWorkspace,
    error: errorWorkspace,
  } = useWorkspaceQuery({
    variables: { workspaceId: params.workspace as string },
  });

  const [
    createProjectMutation,
    { data: project, loading: loadingProject, error: errorProject },
  ] = useCreateProjectMutation();

  // const inputRef = useRef<HTMLInputElement>(null);

  const form = useForm<CreateProject>({
    resolver: zodResolver(createProjectSchema),
    defaultValues: {
      name: '',
      slug: '',
      description: '',
      workspaceId: undefined,
    },
  });

  const nameValue = form.watch('name');
  useEffect(() => {
    const timeout = setTimeout(() => {
      const slugifiedValue = slugify(nameValue);
      form.setValue('slug', slugifiedValue);
    }, 300);
    return () => clearTimeout(timeout);
  }, [nameValue, form]);

  if (loadingWorkspace || errorWorkspace) return <></>;

  const onSubmit = (values: CreateProject) => {
    createProjectMutation({
      variables: {
        input: {
          project: { ...values, workspaceId: +workspace?.workspace.id! },
        },
      },
      onCompleted(data, clientOptions) {
        form.reset();
        router.push(
          `/workspaces/${params.workspace}/projects/${data.createProject.id}`,
        );
      },
      refetchQueries: [ProjectsDocument, MemberProjectsDocument],
    });
  };

  // const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (file) {
  //     form.setValue("image", file);
  //   }
  // };

  return (
    <Card className="w-full border-none">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          Create a new project
        </CardTitle>
      </CardHeader>
      <div className="h-px w-full bg-black/10" />
      <CardContent className="py-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-y-4">
              <div className="flex w-full items-center justify-center gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Project Name</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Enter project name" />
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
                      <FormLabel>Project Slug</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Enter project slug" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project summary</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter project summary" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <div className="flex flex-col gap-y-2">
                    <div className="flex items-center gap-x-5">
                      {field.value ? (
                        <div className="relative size-[72px] overflow-hidden rounded-md">
                          <Image
                            alt="Logo"
                            fill
                            className="object-cover"
                            src={
                              field.value instanceof File
                                ? URL.createObjectURL(field.value)
                                : field.value
                            }
                          />
                        </div>
                      ) : (
                        <Avatar className="size-[72px]">
                          <AvatarFallback>
                            <ImageIcon className="size-[36px] text-neutral-400" />
                          </AvatarFallback>
                        </Avatar>
                      )}
                      <div className="flex flex-col">
                        <p className="text-sm">Project Icon</p>
                        <p className="text-muted-foreground text-sm">
                          JPG, PNG, SVG or JPEG, max 1mb
                        </p>
                        <input
                          className="hidden"
                          type="file"
                          accept=".jpg, .png, .jpeg, .svg"
                          ref={inputRef}
                          onChange={handleImageChange}
                          // disabled={isPending}
                        />
                        {field.value ? (
                          <Button
                            type="button"
                            // disabled={isPending}
                            variant="destructive"
                            // size="xs"
                            className="mt-2 w-fit"
                            onClick={() => {
                              field.onChange(null);
                              if (inputRef.current) {
                                inputRef.current.value = "";
                              }
                            }}
                          >
                            Remove Image
                          </Button>
                        ) : (
                          <Button
                            type="button"
                            // disabled={isPending}
                            // variant="teritary"
                            // size="xs"
                            className="mt-2 w-fit"
                            onClick={() => inputRef.current?.click()}
                          >
                            Upload Image
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              /> */}
            </div>
            <div className="py-6" />
            <div className="flex items-center justify-between">
              <Button
                type="button"
                size="lg"
                variant="secondary"
                onClick={onCancel}
                disabled={loadingProject}
                className={cn(!onCancel && 'invisible')}
              >
                Cancel
              </Button>
              <Button disabled={loadingProject} type="submit" size="lg">
                Create Project
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
