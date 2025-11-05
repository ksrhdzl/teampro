'use client';

import Quill from 'quill';
import dynamic from 'next/dynamic';
import { useRef, useState } from 'react';

const Editor = dynamic(() => import('@/components/editor'), { ssr: false });

export const Input = ({ placeholder }: { placeholder: string }) => {
  const [editorKey, setEditorKey] = useState(0);
  const [isPending, setIsPending] = useState(false);
  const editorRef = useRef<Quill | null>(null);

  return (
    <div className="w-full">
      <Editor
        key={editorKey}
        placeholder={placeholder}
        // onSubmit={handleSubmit}
        disabled={isPending}
        innerRef={editorRef}
      />
    </div>
  );
};
