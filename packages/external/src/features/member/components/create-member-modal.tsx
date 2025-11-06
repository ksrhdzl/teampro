'use client';

import { Modaler } from '@/features/modaler';

import { useCreateMemberModal } from '../hooks/use-create-member-modal';
import { CreateMemberForm } from './create-member-form';

export const CreateMemberModal = () => {
  const { modal, setModal } = useCreateMemberModal();

  return (
    <Modaler modal={modal} setModal={setModal}>
      <CreateMemberForm onCancel={() => setModal(false)} />
    </Modaler>
  );
};
