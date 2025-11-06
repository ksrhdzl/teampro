import { Footer } from '@/features1/footer';
import { Header } from '@/features1/header';

export default async function Layout({
  params,
  children,
}: Readonly<{
  params: Promise<{ locale: string }>;
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
