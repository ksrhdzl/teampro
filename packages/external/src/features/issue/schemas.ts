import { IssueStatusEnum } from '@/libraries/graphql';
import { z } from 'zod';

export const createIssueSchema = z.object({
  name: z.string().trim().min(3),
  slug: z.string().trim().min(3),
  description: z.string().trim().min(3),
  workspaceId: z.string().trim().min(1),
  position: z.number(),
  memberId: z.string().trim().min(1),
  status: z.nativeEnum(IssueStatusEnum),
  projectId: z.string().trim().min(1),
  startAt: z.coerce.date(),
  endAt: z.coerce.date(),
});

export const updateIssueSchema = z.object({
  name: z.string().trim().min(3),
  slug: z.string().trim().min(3),
  description: z.string().trim().min(3),
  workspaceId: z.string().trim().min(1),
  position: z.number(),
  memberId: z.string().trim().min(1),
  status: z.nativeEnum(IssueStatusEnum),
  projectId: z.string().trim().min(1),
  startAt: z.coerce.date(),
  endAt: z.coerce.date(),
});

export type CreateIssue = z.infer<typeof createIssueSchema>;
export type UpdateIssue = z.infer<typeof updateIssueSchema>;
