import { inter } from '@/libraries/utilities';
import { Providers } from '@/libraries/providers';
import { Metadata, Viewport } from 'next';
import Document, {
  metadata as metadataDefault,
  viewport as viewportDefault,
} from '@/app/document';

export async function generateMetadata(): Promise<Metadata> {
  return {
    ...metadataDefault,
  };
}

export const viewport: Viewport = {
  ...viewportDefault,
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Document>
      <Providers>{children}</Providers>
    </Document>
  );
}
