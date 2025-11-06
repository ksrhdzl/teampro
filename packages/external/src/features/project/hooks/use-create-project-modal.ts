import { parseAsBoolean, useQueryState } from 'nuqs';

export const useCreateProjectModal = () => {
  const [modal, setModal] = useQueryState(
    'create-project',
    parseAsBoolean.withDefault(false).withOptions({ clearOnDefault: true }),
  );

  return {
    modal,
    setModal,
  };
};
