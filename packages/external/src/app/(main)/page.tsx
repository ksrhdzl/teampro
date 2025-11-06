'use server';

import 'server-only';

import { redirect } from 'next/navigation';
import { getApolloClient } from '@/libraries/apollo/utilities';
import {
  SortDirection,
  WorkspacesDocument,
  WorkspaceSortFields,
  WorkspacesQuery,
  WorkspacesQueryVariables,
} from '@/libraries/graphql';
import { getBackendURL } from '@/libraries/utilities/envs.utility';

export default async function Page() {
  const uri = await getBackendURL();
  const client = getApolloClient(uri!);
  const {
    data: dataWorkspaces,
    loading: loadingWorkspace,
    error: errorWorkspaces,
  } = await client.query<WorkspacesQuery, WorkspacesQueryVariables>({
    query: WorkspacesDocument,
    variables: {
      filter: {},
      paging: { limit: 10, offset: 0 },
      sorting: {
        field: WorkspaceSortFields.CreatedAt,
        direction: SortDirection.Asc,
      },
    },
  });

  if (loadingWorkspace || errorWorkspaces) return <></>;

  if (dataWorkspaces.workspaces.totalCount > 0) {
    redirect(`/workspaces/${dataWorkspaces.workspaces.nodes[0].id}/home`);
  } else {
    redirect('/workspaces/create');
  }

  return <></>;
}
