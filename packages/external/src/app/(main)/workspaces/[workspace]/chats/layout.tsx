'use client';

import { useParams } from 'next/navigation';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/resizable';

import { Sidebaro } from './sidebar';

// import { Thread } from "@/features/messages/components/thread";
// import { Profile } from "@/features/members/components/profile";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {
    workspace,
    channel,
    member,
  }: { workspace: string; channel: string; member: string } = useParams();

  const showRight = !!channel || !!member;

  return (
    <>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={16}>
          <Sidebaro />
        </ResizablePanel>
        <ResizablePanel defaultSize={84}>{children}</ResizablePanel>
        {showRight && (
          <>
            <ResizableHandle withHandle />
            <ResizablePanel minSize={20} defaultSize={29}>
              {/* {parentMessageId ? (
                  <Thread
                    messageId={parentMessageId as Id<"messages">}
                    onClose={onClose}
                  />
                ) : profileMemberId ? (
                  <Profile
                    memberId={profileMemberId as Id<"members">}
                    onClose={onClose}
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <Loader className="size-5 animate-spin text-muted-foreground" />
                  </div>
                )} */}
            </ResizablePanel>
          </>
        )}
      </ResizablePanelGroup>
    </>
  );
}
