import { useState } from 'react';
import React from 'react';
import { Button, buttonVariants } from '@/components/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/card';
import { Modaler } from '@/features/modaler';
import type { VariantProps } from 'class-variance-authority';

type ButtonVariant = VariantProps<typeof buttonVariants>['variant'];

export const useConfirmDialog = (
  title: string,
  message: string,
  variant: ButtonVariant = 'default',
): [() => React.ReactElement, () => Promise<unknown>] => {
  const [resolver, setResolver] = useState<null | ((value: boolean) => void)>(
    null,
  );

  const confirm = () => {
    return new Promise<boolean>((resolve) => {
      setResolver(() => resolve);
    });
  };

  const handleClose = () => setResolver(null);

  const handleResponse = (response: boolean) => {
    resolver?.(response);
    handleClose();
  };

  const ConfirmationDialog = () => (
    <Modaler modal={resolver !== null} setModal={handleClose}>
      <Card className="gap-2">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{message}</CardDescription>
        </CardHeader>
        <CardFooter>
          <div className="flex w-full flex-col items-center justify-end gap-x-2 gap-y-2 pt-4 lg:flex-row">
            <Button
              onClick={() => handleResponse(false)}
              variant="outline"
              className="w-full lg:w-auto"
            >
              Cancel
            </Button>
            <Button
              onClick={() => handleResponse(true)}
              variant={variant}
              className="w-full lg:w-auto"
            >
              Confirm
            </Button>
          </div>
        </CardFooter>
      </Card>
    </Modaler>
  );

  return [ConfirmationDialog, confirm];
};
