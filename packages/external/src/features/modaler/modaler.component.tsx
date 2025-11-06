import { Dialog, DialogContent } from '@/components/dialog';
import { Drawer, DrawerContent } from '@/components/drawer';
import { useIsMobile } from '@/libraries/hooks';

export const Modaler = ({
  modal,
  setModal,
  children,
}: {
  modal: boolean;
  setModal: (modal: any) => void;
  children?: React.ReactNode;
}) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <Drawer open={modal} onOpenChange={setModal}>
        <DrawerContent
          onInteractOutside={(event) => event.preventDefault()}
          onEscapeKeyDown={(event) => event.preventDefault()}
          onPointerDownOutside={(event) => event.preventDefault()}
        >
          <div className="hide-scrollbar max-h-[85vh] overflow-y-auto">
            {children}
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent
        onInteractOutside={(event) => event.preventDefault()}
        onEscapeKeyDown={(event) => event.preventDefault()}
        onPointerDownOutside={(event) => event.preventDefault()}
        className="hide-scrollbar max-h-[80vh] w-full overflow-y-auto border-none p-0 sm:max-w-md"
      >
        {children}
      </DialogContent>
    </Dialog>
  );
};
