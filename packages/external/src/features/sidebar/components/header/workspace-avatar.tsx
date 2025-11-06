'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { cva, type VariantProps } from 'class-variance-authority';
import { Layers3Icon } from 'lucide-react';
import { cn } from '@/libraries/utilities';
import { getStorageURL } from '@/libraries/utilities/envs.utility';

const avatarVariants = cva(
  'flex aspect-square items-center justify-center overflow-hidden',
  {
    variants: {
      variant: {
        large:
          'size-8 rounded-sm bg-sidebar-primary text-sidebar-primary-foreground',
        sm: 'size-6 rounded-sm text-sidebar-primary',
      },
    },
    defaultVariants: {
      variant: 'sm',
    },
  },
);

export function WorkspaceAvatar({
  workspaceImageKey,
  variant,
}: {
  workspaceImageKey?: string | null;
} & VariantProps<typeof avatarVariants>) {
  const [avatarSrc, setAvatarSrc] = useState<string | null>(null);
  const [hasError, setHasError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    let active = true;

    if (workspaceImageKey) {
      getStorageURL()
        .then((url) => {
          if (active) {
            setAvatarSrc(`${url}${workspaceImageKey}`);
            setHasError(false);
          }
        })
        .catch(() => {
          if (active) setHasError(true);
        });
    } else {
      setAvatarSrc(null);
    }

    return () => {
      active = false;
    };
  }, [workspaceImageKey]);

  return (
    <div
      className={cn(
        avatarVariants({ variant }),
        imageLoaded ? 'border-none' : variant == 'sm' && 'border',
      )}
    >
      {avatarSrc && !hasError ? (
        <Image
          src={avatarSrc}
          alt="Workspace avatar"
          className="size-8 object-cover"
          width={128}
          height={128}
          onError={() => setHasError(true)}
          onLoadingComplete={() => setImageLoaded(true)}
        />
      ) : (
        <Layers3Icon
          className={cn(
            'shrink-0',
            variant === 'sm' && 'size-3',
            variant === 'large' && 'size-4',
          )}
        />
      )}
    </div>
  );
}
