'use client';

import { Modaler } from '@/features/modaler';

import { useCreateProjectModal } from '../hooks/use-create-project-modal';
import { CreateProjectForm } from './create-project-form';

export const CreateProjectModal = () => {
  const { modal, setModal } = useCreateProjectModal();

  return (
    <Modaler modal={modal} setModal={setModal}>
      <CreateProjectForm onCancel={() => setModal(false)} />
    </Modaler>
  );
};
