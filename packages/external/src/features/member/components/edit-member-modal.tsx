'use client';

import { useEditMemberModal } from '@/features/member/hooks';
import { Modaler } from '@/features/modaler';

import { EditMemberFormWrapper } from './edit-member-form-wrapper';

export const EditMemberModal = () => {
  const { modal, setModal } = useEditMemberModal();

  return (
    <Modaler modal={!!modal} setModal={setModal}>
      {modal && (
        <EditMemberFormWrapper id={modal} onCancel={() => setModal(null)} />
      )}
    </Modaler>
  );
};
