'use server';

import 'server-only';

import { redirect } from 'next/navigation';

export default async function Page() {
  redirect('/settings/general');
}
