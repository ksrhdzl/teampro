'use client';

import { useRouter } from 'next/navigation';
import { ChevronRight, Loader2, TriangleAlert } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/avatar';
import { SidebarMenuButton } from '@/components/sidebar';
import { useAccountQuery } from '@/libraries/graphql';

export const Profile = () => {
  const {
    data: dataAccount,
    loading: loadingAccount,
    error: errorAccount,
  } = useAccountQuery();

  if (loadingAccount) {
    return (
      <div className="flex h-12 w-full flex-row items-center justify-center gap-2 overflow-hidden rounded-md bg-muted p-2 text-left text-sm">
        <Loader2 className="size-4 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (errorAccount) {
    return (
      <div className="flex h-12 w-full flex-row items-center justify-center gap-2 overflow-hidden rounded-md bg-muted p-2 text-left text-sm">
        <TriangleAlert className="size-4 text-muted-foreground" />
      </div>
    );
  }

  return (
    <>
      <SidebarMenuButton
        size="lg"
        className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
      >
        <Avatar className="h-8 w-8 rounded-full">
          <AvatarFallback className="rounded-lg uppercase">
            {dataAccount?.account.name?.slice(0, 1) || 'X'}
          </AvatarFallback>
        </Avatar>
        <div className="grid flex-1 text-left text-sm leading-tight">
          <span className="truncate font-semibold">
            {dataAccount?.account.name}
          </span>
          <span className="truncate text-xs">{dataAccount?.account.email}</span>
        </div>
        <ChevronRight className="ml-auto size-4" />
      </SidebarMenuButton>
    </>
  );
};
