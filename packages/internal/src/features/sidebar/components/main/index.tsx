'use client';

import { Content } from './content';
import { Footer } from './footer';
import { Header } from './header';
import { Separator } from './separator';

export const Main = () => {
  return (
    <>
      <Header />
      <Content />
      <Separator />
      <Footer />
    </>
  );
};
