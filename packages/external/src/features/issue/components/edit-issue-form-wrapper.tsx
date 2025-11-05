import { Loader } from 'lucide-react';

import { Card, CardContent } from '@/components/card';
import { EditIssueForm } from './edit-issue-form';

import { useParams } from 'next/navigation';
import {
  MemberIssueSortFields,
  MemberSortFields,
  ProjectSortFields,
  SortDirection,
  useIssueQuery,
  useMemberIssuesQuery,
  useMembersQuery,
  useProjectsQuery,
} from '@/libraries/graphql';

export const EditIssueFormWrapper = ({
  onCancel,
  id,
}: {
  onCancel: () => void;
  id: string;
}) => {
  const { workspace }: { workspace: string } = useParams();

  const {
    data: dataIssue,
    loading: loadingIssue,
    error: errorIssue,
  } = useIssueQuery({ variables: { issueId: id } });

  const { data: dataProjects, loading: loadingProjects } = useProjectsQuery({
    variables: {
      filter: { workspaceId: { eq: +workspace } },
      paging: { limit: 10, offset: 0 },
      sorting: {
        direction: SortDirection.Asc,
        field: ProjectSortFields.UpdatedAt,
      },
    },
  });

  const { data: dataMembers, loading: loadingMembers } = useMembersQuery({
    variables: {
      filter: { workspaceId: { eq: +workspace } },
      paging: { limit: 10, offset: 0 },
      sorting: {
        direction: SortDirection.Asc,
        field: MemberSortFields.UpdatedAt,
      },
    },
  });

  const { data: dataMemberIssues, loading: loadingMemberIssues } =
    useMemberIssuesQuery({
      variables: {
        filter: { issueId: { eq: +id } },
        paging: { limit: 10, offset: 0 },
        sorting: {
          direction: SortDirection.Asc,
          field: MemberIssueSortFields.CreatedAt,
        },
      },
    });

  const loading =
    loadingProjects || loadingMembers || loadingIssue || loadingMemberIssues;

  if (loading) {
    return (
      <Card className="h-[714px] w-full border-none shadow-none">
        <CardContent className="flex h-full items-center justify-center">
          <Loader className="text-muted-foreground size-5 animate-spin" />
        </CardContent>
      </Card>
    );
  }

  if (errorIssue) {
    return null;
  }

  return (
    <EditIssueForm
      onCancel={onCancel}
      issue={dataIssue!}
      projects={dataProjects!}
      members={dataMembers!}
      memberIssues={dataMemberIssues!}
    />
  );
};
