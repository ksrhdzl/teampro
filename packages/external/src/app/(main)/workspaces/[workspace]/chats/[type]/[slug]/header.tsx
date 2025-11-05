import { Avatar, AvatarFallback } from '@/components/avatar';
import { Button } from '@/components/button';
import { ChevronDown, SettingsIcon } from 'lucide-react';

export const Header = ({ name }: { name: string }) => {
  const avatarFallback = name?.charAt(0).toUpperCase();
  return (
    <div className="flex h-16 flex-row items-center justify-between overflow-hidden border-b bg-white px-4">
      <Button variant="ghost" className="overflow-hidden">
        <Avatar className="size-7 rounded-md">
          {/* <AvatarImage src={memberImage} /> */}
          <AvatarFallback className="rounded-md">
            {avatarFallback}
          </AvatarFallback>
        </Avatar>
        <span className="truncate text-lg font-semibold">{name}</span>
        <ChevronDown className="size-3" />
      </Button>
      <div className="flex items-center gap-2">
        <Button onClick={() => {}} variant="outline" size="sm">
          <SettingsIcon className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </div>
    </div>
  );
};
