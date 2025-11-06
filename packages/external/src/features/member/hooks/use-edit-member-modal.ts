import { parseAsString, useQueryState } from 'nuqs';

export const useEditMemberModal = () => {
  const [modal, setModal] = useQueryState(
    'edit-member',
    parseAsString.withOptions({ clearOnDefault: true }),
  );

  return {
    modal,
    setModal,
  };
};
