'use client';

import { useState } from 'react';
import { Loader } from 'lucide-react';
import { differenceInMinutes, format, isToday, isYesterday } from 'date-fns';
import { Message } from './message';
import { Hero } from './hero';
import { MessageEdge } from '@/libraries/graphql';
import { useParams } from 'next/navigation';
import { Badge } from '@/components/badge';

// import { useCurrentMember } from '@/features/members/api/use-current-member';
// import { GetMessagesReturnType } from '@/features/messages/api/use-get-messages';

const TIME_THRESHOLD = 5;

const formatDateLabel = (dateStr: string) => {
  const date = new Date(dateStr);
  if (isToday(date)) return 'Today';
  if (isYesterday(date)) return 'Yesterday';
  return format(date, 'EEEE, MMMM d');
};

export const Messages = ({
  name,
  creationTime,
  data,
  variant = 'channel',
  // loadMore,
  isLoadingMore,
  canLoadMore,
}: {
  name?: string;
  creationTime?: number;
  variant?: 'channel' | 'thread' | 'conversation';
  data: MessageEdge[] | undefined;
  // loadMore: () => void;
  isLoadingMore: boolean;
  canLoadMore: boolean;
}) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const { workspace }: { workspace: string } = useParams();

  // const { data: currentMember } = useCurrentMember({ workspaceId });

  const groupedMessages = data?.reduce(
    (groups, message) => {
      const date = new Date(message.node.createdAt);
      const dateKey = format(date, 'yyyy-MM-dd');
      if (!groups[dateKey]) {
        groups[dateKey] = [];
      }
      groups[dateKey].unshift(message);
      return groups;
    },
    {} as Record<string, typeof data>,
  );

  return (
    <div className="messages-scrollbar flex flex-1 flex-col-reverse overflow-y-auto pb-4">
      {Object.entries(groupedMessages || {}).map(([dateKey, messages]) => (
        <div key={dateKey}>
          <div className="relative my-2 text-center">
            <hr className="absolute top-1/2 right-0 left-0 border-t border-gray-300" />
            <Badge variant={'outline'} className="relative bg-white">
              {formatDateLabel(dateKey)}
            </Badge>
          </div>
          {messages.map((message, index) => {
            const prevMessage = messages[index - 1];
            const isCompact =
              prevMessage &&
              prevMessage.node.memberId === message.node.memberId &&
              differenceInMinutes(
                new Date(message.node.createdAt),
                new Date(prevMessage.node.createdAt),
              ) < TIME_THRESHOLD;

            return (
              <Message
                key={message.node.id}
                id={message.node.id}
                memberId={message.node.memberId!}
                // authorImage={message.user.image}
                authorName={message.node.member?.user?.name!}
                // isAuthor={message.node.memberId === currentMember?._id}
                isAuthor={false}
                // reactions={message.reactions}
                body={message.node.content}
                // image={message.image}
                updatedAt={message.node.updatedAt}
                createdAt={message.node.createdAt}
                isEditing={editingId === message.node.id}
                setEditingId={setEditingId}
                isCompact={isCompact}
                hideThreadButton={variant === 'thread'}
                // threadCount={message.threadCount}
                // threadImage={message.threadImage}
                // threadName={message.threadName}
                // threadTimestamp={message.threadTimestamp}
              />
            );
          })}
        </div>
      ))}
      <div
        className="h-1"
        ref={(el) => {
          if (el) {
            const observer = new IntersectionObserver(
              ([entry]) => {
                if (entry.isIntersecting && canLoadMore) {
                  // loadMore();
                }
              },
              { threshold: 1.0 },
            );

            observer.observe(el);
            return () => observer.disconnect();
          }
        }}
      />
      {isLoadingMore && (
        <div className="relative my-2 text-center">
          <hr className="absolute top-1/2 right-0 left-0 border-t border-gray-300" />
          <span className="relative inline-block rounded-full border border-gray-300 bg-white px-4 py-1 text-xs shadow-sm">
            <Loader className="size-4 animate-spin" />
          </span>
        </div>
      )}
      <Hero name={name!} creationTime={creationTime!} />
    </div>
  );
};
