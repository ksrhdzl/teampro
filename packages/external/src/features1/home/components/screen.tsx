'use client';

import { Hero } from './hero';
import { Nav } from './nav';

export const HomeScreen = () => {
  return (
    <main className="flex min-h-svh w-full flex-col items-center justify-start">
      <Nav />
      <Hero />
    </main>
  );
};
