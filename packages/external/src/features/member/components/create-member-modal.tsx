'use client';

import { Modaler } from '@/features/modaler';
import { CreateMemberForm } from './create-member-form';
import { useCreateMemberModal } from '../hooks/use-create-member-modal';

export const CreateMemberModal = () => {
  const { modal, setModal } = useCreateMemberModal();

  return (
    <Modaler modal={modal} setModal={setModal}>
      <CreateMemberForm onCancel={() => setModal(false)} />
    </Modaler>
  );
};
