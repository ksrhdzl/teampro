'use client';

import {
  MemberConversationSortFields,
  MessageSortFields,
  SortDirection,
  useConversationQuery,
  useMemberConversationsQuery,
  useMessagesQuery,
} from '@/libraries/graphql';
import { Loader2Icon, TriangleAlertIcon } from 'lucide-react';
import { useParams } from 'next/navigation';
import { Header } from './header';
import { Input } from './input';
import { Messages } from './messages';

export default function Page() {
  const {
    workspace,
    type,
    slug,
  }: { workspace: string; type: string; slug: string } = useParams();

  const {
    data: dataMemberConversations,
    loading: loadingMemberConversations,
    error: errorMemberConversations,
  } = useMemberConversationsQuery({
    variables: {
      filter: {
        conversationId: { eq: +slug },
      },
      paging: { limit: 99, offset: 0 },
      sorting: {
        direction: SortDirection.Desc,
        field: MemberConversationSortFields.CreatedAt,
      },
    },
  });

  const {
    data: dataConversation,
    loading: loadingConversation,
    error: errorConversation,
  } = useConversationQuery({ variables: { conversationId: slug } });

  const {
    data: dataMessages,
    loading: loadingMessages,
    error: errorMessages,
    fetchMore: fetchMoreMessages,
  } = useMessagesQuery({
    variables: {
      filter: { conversations: { id: { eq: slug } } },
      paging: { first: 10 },
      sorting: {
        direction: SortDirection.Desc,
        field: MessageSortFields.CreatedAt,
      },
    },
  });

  if (loadingMemberConversations || loadingConversation || loadingMessages) {
    return (
      <div className="flex h-full flex-1 items-center justify-center">
        <Loader2Icon className="text-muted-foreground size-5 animate-spin" />
      </div>
    );
  }

  if (errorConversation || !dataConversation?.conversation.id) {
    return (
      <div className="flex h-full flex-1 flex-col items-center justify-center gap-y-2">
        <TriangleAlertIcon className="text-muted-foreground size-5" />
        <span className="text-muted-foreground text-sm">Channel not found</span>
      </div>
    );
  }

  console.log(1, dataMessages);

  return (
    <div className="flex h-full flex-col">
      <Header name={dataConversation.conversation.name!} />
      <div className="messages-scrollbar flex flex-1 flex-col-reverse overflow-y-auto pb-4"></div>

      <Messages
        name={dataConversation.conversation.name!}
        creationTime={dataConversation.conversation.createdAt!}
        data={dataMessages?.messages.edges}
        // loadMore={loadMore}
        isLoadingMore={status === 'LoadingMore'}
        canLoadMore={status === 'CanLoadMore'}
      />
      <Input placeholder={`Message # ${dataConversation.conversation.name}`} />
    </div>
  );
}
