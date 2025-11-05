import { z } from 'zod';

export const settingSchema = z.object({
  key: z.string().trim().min(3),
  value: z.string().trim().min(3),
});

export const updateSettingSchema = settingSchema.pick({
  key: true,
  value: true,
});

export type Setting = z.infer<typeof settingSchema>;
export type UpdateSetting = z.infer<typeof updateSettingSchema>;
