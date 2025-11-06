'use client';

import { Header } from './header';
import { Content } from './content';
import { Separator } from './separator';
import { Footer } from './footer';

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
