'use client';

import { Modaler } from '@/features/modaler';

import { CreateWorkspaceForm } from './create-workspace-form';
import { useCreateWorkspaceModal } from '../hooks/use-create-workspace-modal';

export const CreateWorkspaceModal = () => {
  const { modal, setModal } = useCreateWorkspaceModal();

  return (
    <Modaler modal={modal} setModal={setModal}>
      <CreateWorkspaceForm onCancel={() => setModal(false)} />
    </Modaler>
  );
};
