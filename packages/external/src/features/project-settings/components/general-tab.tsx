import { Button } from '@/components/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/form';
import { Input } from '@/components/input';
import { Label } from '@/components/label';
import { UpdateProject, updateProjectSchema } from '@/features/project/schemas';
import {
  MemberProjectsDocument,
  ProjectsDocument,
  useDeleteProjectMutation,
  useProjectQuery,
  useUpdateProjectMutation,
} from '@/libraries/graphql';
import { useConfirmDialog } from '@/libraries/hooks/use-confirm';
import slugify from '@/libraries/utilities/slugify.utility';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

export const GeneralTab = () => {
  const router = useRouter();
  const { workspace, project }: { workspace: string; project: string } =
    useParams();

  const [
    deleteProjectMutation,
    {
      data: dataDeleteProject,
      loading: loadingDeleteProject,
      error: errorDeleteProject,
    },
  ] = useDeleteProjectMutation();

  const [ConfirmDialog, confirm] = useConfirmDialog(
    'Delete Project',
    'This action cannot be undone.',
    'destructive',
  );

  const [
    updateProjectMutation,
    {
      data: dataUpdateProject,
      loading: loadingUpdateProject,
      error: errorUpdateProject,
    },
  ] = useUpdateProjectMutation();

  const {
    data: dataProject,
    error: errorProject,
    loading: loadingProject,
  } = useProjectQuery({ variables: { projectId: project } });

  const form = useForm<UpdateProject>({
    resolver: zodResolver(updateProjectSchema),
    defaultValues: {
      name: dataProject?.project.name || undefined,
      slug: dataProject?.project.slug || undefined,
      description: dataProject?.project.description || undefined,
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

  const onSubmit = (values: UpdateProject) => {
    updateProjectMutation({
      variables: {
        input: {
          id: project,
          update: {
            name: values.name,
            slug: values.slug,
            description: values.description,
          },
        },
      },
      refetchQueries: [ProjectsDocument, MemberProjectsDocument],
    });
  };

  const onDelete = async () => {
    const confirmed = await confirm();
    if (confirmed) {
      deleteProjectMutation({
        variables: { input: { id: project } },
        onCompleted(data, clientOptions) {
          toast.success('Project deleted successfully!');
          router.push(`/workspaces/${workspace}/home`);
        },
        onError(error, clientOptions) {
          toast.error('Project deleted unsuccessfully!', {
            description: error.message,
          });
        },
        refetchQueries: [ProjectsDocument, MemberProjectsDocument],
      });
    } else {
      console.log('Action cancelled ❌');
    }
  };
  return (
    <>
      <ConfirmDialog />
      <div className="space-y-4">
        <header className="bg-background z-0 flex h-16 items-center gap-4 border-b px-4 sm:px-6">
          <div className="flex flex-1 flex-col items-start justify-center">
            <h1 className="text-lg font-semibold">General Settings</h1>
            <p className="text-secondary-foreground text-xs">
              Manage your project
            </p>
          </div>
          <div className="flex items-center gap-2"></div>
        </header>
        <div className="flex w-full flex-col space-y-4 px-4">
          <Card className="border shadow-none">
            <CardHeader>
              <CardTitle>Project Name</CardTitle>
              <CardDescription>
                This is the name of your project shown in the dashboard.
              </CardDescription>
            </CardHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <CardContent>
                  <div className="flex flex-col gap-y-4">
                    <div className="flex w-full items-center justify-center gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormLabel>Project Name</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Enter project name"
                              />
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
                              <Input
                                {...field}
                                placeholder="Enter project slug"
                              />
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
                            <Input
                              {...field}
                              placeholder="Enter project summary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
                <div className="py-6" />
                <CardFooter className="w-full justify-end border-t">
                  <Button disabled={loadingUpdateProject} type="submit">
                    Save Changes
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </Card>
          <Card className="border shadow-none">
            <CardHeader>
              <CardTitle className="text-destructive">Danger Zone</CardTitle>
              <CardDescription>
                Deleting a project is irreversible and will remove all
                associated data.
              </CardDescription>
            </CardHeader>

            <CardFooter className="w-full justify-end border-t">
              <Button
                disabled={loadingDeleteProject}
                onClick={onDelete}
                variant={'destructive'}
              >
                Delete Project
                {loadingDeleteProject && <Loader2 className="animate-spin" />}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};
