import { Avatar, AvatarFallback } from '@/components/avatar';
import { cn } from '@/libraries/utilities';

export const MemberAvatar = ({
  name,
  className,
  fallbackClassName,
}: {
  name: string;
  className?: string;
  fallbackClassName?: string;
}) => {
  return (
    <Avatar
      className={cn(
        'size-5 rounded-full border border-neutral-300 transition',
        className,
      )}
    >
      <AvatarFallback
        className={cn(
          'flex items-center justify-center bg-neutral-200 font-medium text-neutral-500',
          fallbackClassName,
        )}
      >
        {name.charAt(0).toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
};
