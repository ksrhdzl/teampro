'use client';

import { Modaler } from '@/features/modaler';
import { EditIssueFormWrapper } from './edit-issue-form-wrapper';
import { useEditIssueModal } from '../hooks/use-edit-issue-modal';

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
