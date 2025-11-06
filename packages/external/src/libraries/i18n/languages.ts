export const languages = ['en', 'ar', 'fa', 'ku'] as const;
export const language: (typeof languages)[number] = 'en';

export type Language = (typeof languages)[number];
