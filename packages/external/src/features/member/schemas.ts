import { MemberRoleEnum } from '@/libraries/graphql';
import { z } from 'zod';

export const memberSchema = z.object({
  name: z.string().trim().min(3),
});

export const createMemberSchema = z.object({
  workspaceId: z.string().trim().min(1),
  name: z.string().trim().min(3),
  slug: z.string().trim().min(3),
  email: z.string().email().trim(),
  role: z.nativeEnum(MemberRoleEnum, { required_error: 'Required' }),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .refine((v) => /[a-z]/.test(v), {
      message: 'Password must contain at least one lowercase letter',
    })
    .refine((v) => /[A-Z]/.test(v), {
      message: 'Password must contain at least one uppercase letter',
    })
    .refine((v) => /[0-9]/.test(v), {
      message: 'Password must contain at least one number',
    })
    .refine((v) => /[^a-zA-Z0-9]/.test(v), {
      message: 'Password must contain at least one symbol',
    }),
});

export const updateMemberSchema = createMemberSchema.pick({
  name: true,
  slug: true,
  email: true,
  role: true,
});

export type Member = z.infer<typeof memberSchema>;
export type CreateMember = z.infer<typeof createMemberSchema>;
export type UpdateMember = z.infer<typeof updateMemberSchema>;
