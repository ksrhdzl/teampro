'use client';

import Error from 'next/error';
import Document from '@/app/document';

export default function NotFound() {
  return (
    <Document>
      <Error statusCode={404} />
    </Document>
  );
}
