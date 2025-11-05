'use client';

import { useParams } from 'next/navigation';

export const Screen = () => {
  const {
    workspace,
    channel,
    member,
  }: { workspace: string; channel: string; member: string } = useParams();

  return <></>;
};
