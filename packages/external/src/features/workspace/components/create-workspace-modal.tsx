'use client';

import { Modaler } from '@/features/modaler';

import { useCreateWorkspaceModal } from '../hooks/use-create-workspace-modal';
import { CreateWorkspaceForm } from './create-workspace-form';

export const CreateWorkspaceModal = () => {
  const { modal, setModal } = useCreateWorkspaceModal();

  return (
    <Modaler modal={modal} setModal={setModal}>
      <CreateWorkspaceForm onCancel={() => setModal(false)} />
    </Modaler>
  );
};
