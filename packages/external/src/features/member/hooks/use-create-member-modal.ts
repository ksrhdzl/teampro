import { useQueryState, parseAsBoolean } from 'nuqs';

export const useCreateMemberModal = () => {
  const [modal, setModal] = useQueryState(
    'create-member',
    parseAsBoolean.withDefault(false).withOptions({ clearOnDefault: true }),
  );

  return {
    modal,
    setModal,
  };
};
