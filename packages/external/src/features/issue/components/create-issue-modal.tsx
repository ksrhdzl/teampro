'use client';

import { Modaler } from '@/features/modaler';

import { useCreateIssueModal } from '../hooks/use-create-issue-modal';
import { CreateIssueForm } from './create-issue-form';

export const CreateIssueModal = () => {
  const { modal, setModal } = useCreateIssueModal();

  return (
    <Modaler modal={modal} setModal={setModal}>
      <CreateIssueForm onCancel={() => setModal(false)} />
    </Modaler>
  );
};
