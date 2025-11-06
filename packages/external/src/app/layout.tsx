// import { Metadata, Viewport } from 'next';
// import Document, {
//   metadata as metadataDefault,
//   viewport as viewportDefault,
// } from '@/app/document';
// import { Providers } from '@/libraries/providers';
// import { inter } from '@/libraries/utilities';

// export async function generateMetadata(): Promise<Metadata> {
//   return {
//     ...metadataDefault,
//   };
// }

// export const viewport: Viewport = {
//   ...viewportDefault,
// };

// export default function Layout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <Document language="en">
//       <Providers>{children}</Providers>
//     </Document>
//   );
// }

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
