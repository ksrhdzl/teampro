import { parseAsBoolean, useQueryState } from 'nuqs';

export const useCreateWorkspaceModal = () => {
  const [modal, setModal] = useQueryState(
    'create-workspace',
    parseAsBoolean.withDefault(false).withOptions({ clearOnDefault: true }),
  );

  return {
    modal,
    setModal,
  };
};
