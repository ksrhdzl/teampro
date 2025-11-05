'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { UpdateMember, updateMemberSchema } from '../schemas';
import { Input } from '@/components/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/select';
import {
  MemberQuery,
  MemberRoleEnum,
  MembersDocument,
  UsersDocument,
  useUpdateMemberMutation,
  useUpdateUserMutation,
} from '@/libraries/graphql';
import { Button } from '@/components/button';
import { cn } from '@/libraries/utilities';
import { toast } from 'sonner';

export const EditMemberForm = ({
  onCancel,
  member,
}: {
  onCancel?: () => void;
  member: MemberQuery;
}) => {
  const [
    updateUserMutation,
    { data: dataUser, loading: loadingUser, error: errorUser },
  ] = useUpdateUserMutation({ refetchQueries: [UsersDocument] });

  const [
    updateMemberMutation,
    { data: dataMember, loading: loadingMember, error: errorMember },
  ] = useUpdateMemberMutation({
    refetchQueries: [MembersDocument],
  });

  const form = useForm<UpdateMember>({
    resolver: zodResolver(updateMemberSchema),
    defaultValues: {
      name: member.member.user?.name || undefined,
      email: member.member.user?.email || undefined,
      slug: member.member.user?.slug || undefined,
      role: member.member.role || undefined,
    },
  });

  const onSubmit = (values: UpdateMember) => {
    updateUserMutation({
      variables: {
        input: {
          id: String(member.member.userId),
          update: { email: values.email, name: values.name, slug: values.slug },
        },
      },
      onCompleted(data, clientOptions) {
        if (data.updateUser.id) {
          updateMemberMutation({
            variables: {
              input: {
                id: member.member.id,
                update: {
                  role: values.role,
                },
              },
            },
            onCompleted(data, clientOptions) {
              toast.success('Update member successfully');
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
        <CardTitle className="text-2xl font-bold">Edit Member</CardTitle>
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
              {/* <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Password{' '}
                      <span className="font-light text-neutral-400">
                        {'(Optional)'}
                      </span>
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
              /> */}
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
                Save Changes
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
