import { Loader } from 'lucide-react';
import { Card, CardContent } from '@/components/card';
import { useMemberQuery } from '@/libraries/graphql';

import { EditMemberForm } from './edit-member-form';

export const EditMemberFormWrapper = ({
  onCancel,
  id,
}: {
  onCancel: () => void;
  id: string;
}) => {
  const {
    data: dataMember,
    loading: loadingMember,
    error: errorMember,
  } = useMemberQuery({ variables: { memberId: id } });

  const loading = loadingMember;
  const error = errorMember;

  if (loading) {
    return (
      <Card className="h-[714px] w-full border-none shadow-none">
        <CardContent className="flex h-full items-center justify-center">
          <Loader className="size-5 animate-spin text-muted-foreground" />
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return null;
  }

  return <EditMemberForm onCancel={onCancel} member={dataMember!} />;
};
