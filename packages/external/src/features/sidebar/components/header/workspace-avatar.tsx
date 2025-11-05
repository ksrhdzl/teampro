'use client';

import { Layers3Icon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import Image from 'next/image';
import { cn } from '@/libraries/utilities';
import { getStorageURL } from '@/libraries/utilities/envs.utility';

const avatarVariants = cva(
  'flex aspect-square items-center overflow-hidden justify-center ',
  {
    variants: {
      variant: {
        large:
          'bg-sidebar-primary text-sidebar-primary-foreground size-8 rounded-sm',
        sm: 'size-6 text-sidebar-primary rounded-sm',
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
