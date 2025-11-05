import { useQueryState, parseAsBoolean } from 'nuqs';

export const useCreateIssueModal = () => {
  const [modal, setModal] = useQueryState(
    'create-issue',
    parseAsBoolean.withDefault(false).withOptions({ clearOnDefault: true }),
  );

  return {
    modal,
    setModal,
  };
};
