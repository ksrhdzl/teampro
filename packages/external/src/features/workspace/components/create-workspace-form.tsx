'use client';

import { useEffect, useRef } from 'react';
import { ImageIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';

import { cn } from '@/libraries/utilities';
import { Input } from '@/components/input';
import { Button } from '@/components/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/form';

import { CreateWorkspace, createWorkspaceSchema } from '../schemas';
import slugify from '@/libraries/utilities/slugify.utility';
import {
  useCreateWorkspaceMutation,
  usePresignedAssetMutation,
} from '@/libraries/graphql';

export const CreateWorkspaceForm = ({
  onCancel,
}: {
  onCancel?: () => void;
}) => {
  const router = useRouter();
  const [createWorkspaceMutation] = useCreateWorkspaceMutation();
  const [presignedAssetMutation] = usePresignedAssetMutation();

  const uploadToStorage = async (file: File): Promise<string> => {
    const { data } = await presignedAssetMutation();
    if (data?.presignedAsset.link && data?.presignedAsset.name) {
      await fetch(data.presignedAsset.link, {
        method: 'PUT',
        headers: { 'Content-Type': file.type },
        body: file,
      });
    }
    return `${data?.presignedAsset.name}`;
  };

  const inputFileRef = useRef<HTMLInputElement | null>(null);

  const form = useForm<CreateWorkspace>({
    resolver: zodResolver(createWorkspaceSchema),
    defaultValues: {
      name: '',
      slug: '',
      description: '',
      image: undefined,
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

  const onSubmit = async (data: CreateWorkspace) => {
    let img: string | null = null;
    if (data.image instanceof File) {
      img = await uploadToStorage(data.image);
    }

    createWorkspaceMutation({
      variables: {
        input: {
          workspace: {
            name: data.name,
            slug: data.slug,
            description: data.description,
            image: img,
          },
        },
      },
      onCompleted(data, clientOptions) {
        if (data.createWorkspace.id) {
          form.reset();
          router.push(`/workspaces/${data.createWorkspace?.id}/home`);
        }
      },
    });
  };

  return (
    <Card className="w-full border-none">
      <CardHeader className="gap-0">
        <CardTitle className="text-2xl font-bold">
          Create a new workspace
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
                      <FormLabel>Workspace Name</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Enter workspace name" />
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
                      <FormLabel>Workspace Slug</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Enter workspace slug" />
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
                    <FormLabel>Workspace summary</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter workspace summary" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center gap-4">
                      <Avatar className="size-20 rounded-lg">
                        {field.value ? (
                          <AvatarImage
                            alt="Logo Workspace"
                            className="rounded-lg object-cover"
                            src={
                              field.value instanceof File
                                ? URL.createObjectURL(field.value)
                                : field.value
                            }
                          />
                        ) : (
                          <AvatarFallback className="rounded-lg">
                            <ImageIcon className="size-10 text-neutral-400" />
                          </AvatarFallback>
                        )}
                      </Avatar>
                      <div className="flex flex-col gap-1">
                        <FormLabel>Workspace Icon</FormLabel>
                        <FormDescription>JPG, PNG, SVG or JPEG</FormDescription>
                        <input
                          className="hidden"
                          type="file"
                          accept=".jpg, .png, .jpeg, .svg"
                          ref={(el) => {
                            inputFileRef.current = el;
                            field.ref(el);
                          }}
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            field.onChange(file);
                          }}
                          // disabled={isPending}
                        />
                        {field.value ? (
                          <Button
                            type="button"
                            // disabled={isPending}
                            variant="destructive"
                            size="sm"
                            onClick={() => {
                              field.onChange(null);
                              if (inputFileRef.current) {
                                inputFileRef.current.value = '';
                              }
                            }}
                          >
                            Remove Image
                          </Button>
                        ) : (
                          <Button
                            type="button"
                            // disabled={isPending}
                            variant="outline"
                            size="sm"
                            onClick={() => inputFileRef.current?.click()}
                          >
                            Upload Image
                          </Button>
                        )}
                        <FormMessage />
                      </div>
                    </div>
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
                // disabled={isPending}
                className={cn(!onCancel && 'invisible')}
              >
                Cancel
              </Button>
              <Button
                //  disabled={isPending}
                type="submit"
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
