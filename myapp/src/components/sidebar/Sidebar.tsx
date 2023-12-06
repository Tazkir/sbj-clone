'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import Link from 'next/link';
import { Locate, Menu } from 'lucide-react';
import { useParams, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LevelsProps } from '@/lib/data';
import { getLevel } from '../actions/Actions';

interface Params {
  section: string;
  [key: string]: string;
}

function Sidebar() {
  const params = useParams<Params>();
  const { section } = params;

  const [level, serLevel] = useState<LevelsProps[] | null>(null);

  useEffect(() => {
    const fetchLevel = async () => {
      try {
        const data = await getLevel();

        serLevel(data);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };

    fetchLevel();
  }, []);

  if (!level) {
    return (
      <>
        <div className="cursor-pointer w-7 h-7 flex justify-center items-center border border-black/40 dark:border-white/40 rounded-xl shadow shadow-black/70 dark:shadow-white/70">
          <Menu className="h-4 w-4 text-foreground" />
        </div>
      </>
    );
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="cursor-pointer w-7 h-7 flex justify-center items-center border border-black/40 dark:border-white/40 rounded-xl shadow shadow-black/70 dark:shadow-white/70">
            <Menu className="h-4 w-4 text-primary" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="text-foreground w-40 border-zinc-500/40">
          {level.map((l) => (
            <DropdownMenuSub key={l.id}>
              <DropdownMenuSubTrigger className="gap-2">
                <Locate className="h-4 w-4 text-primary" />
                <span>Level {l.level}</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent className="border-zinc-500/30">
                  <div className="flex items-center justify-start gap-2 p-1">
                    <div className="flex flex-col space-y-0.5 leading-none">
                      <p className="font-medium text-sm ">Level {l.level}</p>
                    </div>
                  </div>
                  <DropdownMenuSeparator className="bg-zinc-500/30" />
                  {l.section.map((s) => (
                    <DropdownMenuItem
                      key={s.id}
                      disabled={section === `${s.section}`}
                      className="gap-2"
                    >
                      <Link href={`/section/${s.section}`}>
                        Section {s.section}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default Sidebar;
