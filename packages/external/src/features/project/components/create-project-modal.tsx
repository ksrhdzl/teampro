'use client';

import { Modaler } from '@/features/modaler';
import { CreateProjectForm } from './create-project-form';
import { useCreateProjectModal } from '../hooks/use-create-project-modal';

export const CreateProjectModal = () => {
  const { modal, setModal } = useCreateProjectModal();

  return (
    <Modaler modal={modal} setModal={setModal}>
      <CreateProjectForm onCancel={() => setModal(false)} />
    </Modaler>
  );
};
