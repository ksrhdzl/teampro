import Image from 'next/image';
import { Avatar, AvatarFallback } from '@/components/avatar';
import { cn } from '@/libraries/utilities';

interface ProjectAvatarProps {
  image?: string;
  name: string;
  className?: string;
  fallbackClassName?: string;
}

export const ProjectAvatar = ({
  name,
  image,
  className,
  fallbackClassName,
}: ProjectAvatarProps) => {
  if (image) {
    return (
      <div
        className={cn('relative size-5 overflow-hidden rounded-md', className)}
      >
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
    );
  }

  return (
    <Avatar className={cn('size-5 rounded-md', className)}>
      <AvatarFallback
        className={cn(
          'rounded-md bg-blue-600 text-sm font-semibold text-white uppercase',
          fallbackClassName,
        )}
      >
        {name[0]}
      </AvatarFallback>
    </Avatar>
  );
};
