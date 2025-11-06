import { parseAsString, useQueryState } from 'nuqs';

export const useEditIssueModal = () => {
  const [modal, setModal] = useQueryState(
    'edit-issue',
    parseAsString.withOptions({ clearOnDefault: true }),
  );

  return {
    modal,
    setModal,
  };
};
