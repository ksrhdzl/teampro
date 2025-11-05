// import { toast } from 'sonner';

// import { useMutation, useQueryClient } from '@tanstack/react-query';

// export const useJoinWorkspace = () => {
//   const query = useQueryClient();

//   return useMutation({
//     mutationFn: async ({ param, json }: any) => {
//       return {};
//     },
//     onSuccess: (data) => {
//       //   toast.success("Joined workspace");
//       //   query.invalidateQueries({ queryKey: ["workspaces"] });
//       //   query.invalidateQueries({ queryKey: ["workspace", data.$id] });
//     },
//     onError: () => {
//       toast.error('Failed to join workspace');
//     },
//   });
// };
