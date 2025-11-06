import { z } from 'zod';

export const projectSchema = z.object({
  name: z.string().trim().min(3),
  slug: z.string().trim().min(3),
  description: z.string().trim().min(3),
  workspaceId: z.number().optional(),
});

export const createProjectSchema = projectSchema.pick({
  name: true,
  slug: true,
  description: true,
  workspaceId: true,
});
// .extend({
//   workspaceId: z.string().trim(),
// });

export const updateProjectSchema = projectSchema.pick({
  name: true,
  slug: true,
  description: true,
});

export type Project = z.infer<typeof projectSchema>;
export type CreateProject = z.infer<typeof createProjectSchema>;
export type UpdateProject = z.infer<typeof updateProjectSchema>;
