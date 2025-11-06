import { z } from 'zod';

export const singInSchema = z.object({
  identifier: z.string().email({ message: 'Email is not valid.' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters.' }),
});

export const singUpSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(3, { message: 'First Name must be at least 3 characters.' }),
  lastName: z
    .string()
    .trim()
    .min(3, { message: 'Last Name must be at least 3 characters.' }),
  identifier: z.string().email({ message: 'Email is not valid.' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters.' }),
  confirmPassword: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters.' }),
});

export type SignIn = z.infer<typeof singInSchema>;
export type SignUp = z.infer<typeof singUpSchema>;
