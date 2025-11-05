import { z } from 'zod';

export const workspaceSchema = z.object({
  name: z.string().trim().min(3),
  slug: z.string().trim().min(3),
  description: z.string().trim().min(3),
  // image: z
  //   .union([
  //     z.instanceof(File),
  //     z.string().transform((value) => (value === '' ? undefined : value)),
  //   ])
  image: z.custom<File>((v) => v instanceof File, {
    message: 'Image is required',
  }),
  invitation: z.string().optional(),
  owner: z.string(),
});

export const createWorkspaceSchema = workspaceSchema.pick({
  name: true,
  slug: true,
  description: true,
  image: true,
});

export const updateWorkspaceSchema = workspaceSchema.pick({
  name: true,
  slug: true,
  description: true,
  // image: true,
});
// .extend({
//   image: workspaceSchema.shape.image.optional(),
// });

export type Workspace = z.infer<typeof workspaceSchema>;
export type CreateWorkspace = z.infer<typeof createWorkspaceSchema>;
export type UpdateWorkspace = z.infer<typeof updateWorkspaceSchema>;
