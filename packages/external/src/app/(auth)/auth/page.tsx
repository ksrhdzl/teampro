import { AuthScreen } from '@/features/auth/components';
import { verifySession } from '@/libraries/utilities';
import { redirect, RedirectType } from 'next/navigation';

export default async function Page() {
  const session = await verifySession();
  if (session) redirect('/', RedirectType.replace);

  return <AuthScreen />;
}
