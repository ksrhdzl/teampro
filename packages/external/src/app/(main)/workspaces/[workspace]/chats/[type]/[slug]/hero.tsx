'use client';

import { format } from 'date-fns';
import { Avatar, AvatarFallback } from '@/components/avatar';

export const Hero = ({
  name,
  creationTime,
}: {
  name: string;
  creationTime: number;
}) => {
  const avatarFallback = name.charAt(0).toUpperCase();

  return (
    <div className="mx-4 flex flex-col gap-2">
      <div className="flex items-center gap-2 text-2xl font-bold">
        <Avatar className="size-10 rounded-lg">
          <AvatarFallback className="rounded-lg">
            {avatarFallback}
          </AvatarFallback>
        </Avatar>
        {name}
      </div>
      <p className="font-normal">
        This conversation was created on {format(creationTime, 'MMMM do, yyyy')}{' '}
        :)
      </p>
    </div>
  );
};
