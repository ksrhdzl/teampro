import { SidebarMenuButton } from '@/components/sidebar';
import { useLogoutMutation } from '@/libraries/graphql';
import { deleteSession } from '@/libraries/utilities';
import { ChevronRight, Loader2, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

export const Logout = () => {
  const router = useRouter();
  const [
    logoutMutation,
    { data: dataLogout, loading: loadingLogout, error: errorLogout },
  ] = useLogoutMutation();

  return (
    <SidebarMenuButton asChild>
      <button
        disabled={loadingLogout}
        onClick={async () => {
          logoutMutation({
            async onCompleted(data, clientOptions) {
              await deleteSession();
              router.push('/auth');
            },
          });
        }}
      >
        <LogOut />
        <span>Logout</span>
        {loadingLogout ? (
          <Loader2 className="ml-auto" />
        ) : (
          <ChevronRight className="ml-auto" />
        )}
      </button>
    </SidebarMenuButton>
  );
};
