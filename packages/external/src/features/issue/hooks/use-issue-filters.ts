import { parseAsString, useQueryStates } from 'nuqs';

export const useIssueFilters = () => {
  return useQueryStates({
    projectId: parseAsString,
    memberId: parseAsString,
    // search: parseAsString,
    // status: parseAsStringEnum(Object.values(TaskStatus)),
    // dueDate: parseAsString,
  });
};
