'use server';

import { SidebarInset, SidebarProvider } from '@/components/sidebar';
import { Header } from '@/features/header';
import { SidebarComponent as Sidebar } from '@/features/sidebar/components';

import '@/components/sidebar';

import { redirect, RedirectType } from 'next/navigation';
import { verifySession } from '@/libraries/utilities';

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await verifySession();
  if (!session) redirect('/auth', RedirectType.replace);

  return (
    <div className="flex w-full items-center justify-start">
      <SidebarProvider className="flex-1">
        <Sidebar />
        <SidebarInset>
          <Header />
          {/* <div className="flex h-[calc(100vh-64px)] w-full"> */}
          {children}
          {/* </div> */}
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
