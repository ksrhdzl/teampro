'use client';

import { Modaler } from '@/features/modaler';

import { useEditIssueModal } from '../hooks/use-edit-issue-modal';
import { EditIssueFormWrapper } from './edit-issue-form-wrapper';

export const EditIssueModal = () => {
  const { modal, setModal } = useEditIssueModal();

  return (
    <Modaler modal={!!modal} setModal={setModal}>
      {modal && (
        <EditIssueFormWrapper id={modal} onCancel={() => setModal(null)} />
      )}
    </Modaler>
  );
};
