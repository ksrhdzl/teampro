'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search as SearchIcon } from 'lucide-react';
// import { COMPONENTS_LINKS, GETTING_STARTED_LINKS } from '@/data/sidebar-links';

import { Button } from '@/components/button';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/command';

export default function Search() {
  const DOCS_LINKS = [
    {
      heading: 'Getting started',
      // links: [...GETTING_STARTED_LINKS],
      links: [],
    },
    {
      heading: 'Components',
      // links: [...COMPONENTS_LINKS],
      links: [],
    },
  ];

  const router = useRouter();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const runCommand = useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="shadow-nav dark:shadow-navDark bg-secondary-background relative h-9 w-9 shrink-0 px-3 pr-3 text-base hover:translate-x-[4px]! hover:translate-y-[4px]! hover:shadow-none xl:w-[unset] xl:pr-16 dark:text-white dark:hover:shadow-none"
      >
        <span className="flex items-center gap-1 text-sm">
          <SearchIcon className="!size-5 shrink-0 xl:!size-4" />
          <span className="hidden xl:inline">Search</span>
        </span>

        <span className="rounded-base bg-main absolute top-1 right-2 hidden h-6 items-center justify-center border border-black px-1 text-xs text-black xl:flex">
          ⌘ K
        </span>
      </Button>
      <CommandDialog
        title="Search documentation"
        open={open}
        onOpenChange={setOpen}
      >
        <CommandInput placeholder="Search documentation..." />
        <CommandList className="command-scrollbar **:data-[slot=command-item]:py-1.5!">
          <CommandEmpty>No results found.</CommandEmpty>
          {DOCS_LINKS.map(({ heading, links }, i) => {
            return (
              <React.Fragment key={heading}>
                <CommandGroup heading={heading}>
                  {links.map(({ text, href }) => {
                    return (
                      <CommandItem
                        value={text}
                        onSelect={() => {
                          runCommand(() => router.push(href));
                        }}
                        key={href}
                      >
                        {text}
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
                {i < 2 && <CommandSeparator />}
              </React.Fragment>
            );
          })}
        </CommandList>
      </CommandDialog>
    </>
  );
}
