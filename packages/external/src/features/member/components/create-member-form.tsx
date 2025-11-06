'use client';

import { useParams } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
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
import { Input } from '@/components/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/select';
import {
  MemberRoleEnum,
  MembersDocument,
  useCreateMemberMutation,
  useCreateUserMutation,
  UsersDocument,
} from '@/libraries/graphql';
import { cn } from '@/libraries/utilities';

import { CreateMember, createMemberSchema } from '../schemas';

export const CreateMemberForm = ({ onCancel }: { onCancel?: () => void }) => {
  const { workspace }: { workspace: string } = useParams();

  const [
    createUserMutation,
    { data: dataUser, loading: loadingUser, error: errorUser },
  ] = useCreateUserMutation({
    refetchQueries: [UsersDocument],
  });
  const [
    createMemberMutation,
    { data: dataMember, loading: loadingMember, error: errorMember },
  ] = useCreateMemberMutation({
    refetchQueries: [MembersDocument],
  });

  const form = useForm<CreateMember>({
    resolver: zodResolver(createMemberSchema),
    defaultValues: {
      workspaceId: workspace,
    },
  });

  const onSubmit = (value: CreateMember) => {
    createUserMutation({
      variables: {
        input: {
          user: {
            email: value.email,
            name: value.name,
            slug: value.slug,
            password: value.password,
          },
        },
      },
      onCompleted(data, clientOptions) {
        if (data?.createUser.id) {
          createMemberMutation({
            variables: {
              input: {
                member: {
                  userId: +data.createUser.id,
                  workspaceId: +workspace,
                  role: form.getValues().role,
                },
              },
            },
            onCompleted(data, clientOptions) {
              toast.success('Add member successfully!');
              if (onCancel) onCancel();
            },
          });
        }
      },
    });
  };

  return (
    <Card className="h-full w-full border-none shadow-none">
      <CardHeader className="gap-0">
        <CardTitle className="text-2xl font-bold">
          Create a new Member
        </CardTitle>
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
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter full name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="slug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter username" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <Select
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {(
                          Object.keys(MemberRoleEnum) as Array<
                            keyof typeof MemberRoleEnum
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
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Password
                      {/* <span className="font-light text-neutral-400">
                        {'(Optional)'}
                      </span> */}
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="Enter password"
                      />
                    </FormControl>
                    <FormMessage />
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
                className={cn(!onCancel && 'invisible')}
              >
                Cancel
              </Button>
              <Button type="submit" variant={'default'} size="lg">
                Create Workspace
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
