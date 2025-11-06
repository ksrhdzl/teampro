import { HomeScreen } from '@/features1/home/components/screen';

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <HomeScreen />;
}
