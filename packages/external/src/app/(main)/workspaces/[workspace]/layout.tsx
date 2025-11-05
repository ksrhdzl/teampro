'use server';

import { getApolloClient } from '@/libraries/apollo/utilities';
import {
  WorkspaceDocument,
  WorkspaceQuery,
  WorkspaceQueryVariables,
} from '@/libraries/graphql';
import { getBackendURL } from '@/libraries/utilities/envs.utility';
import { notFound } from 'next/navigation';
import 'server-only';

export default async function Layout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ workspace: string }>;
}>) {
  const workspaceId = await (await params).workspace;

  const uri = await getBackendURL();
  const client = getApolloClient(uri!);
  const {
    data: dataWorkspace,
    loading: loadingWorkspace,
    error: errorWorkspace,
  } = await client.query<WorkspaceQuery, WorkspaceQueryVariables>({
    query: WorkspaceDocument,
    variables: { workspaceId: workspaceId },
  });

  if (!dataWorkspace.workspace) return notFound();

  return <>{children}</>;
}
