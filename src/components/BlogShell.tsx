'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sidebar } from '@/components/Sidebar';
import { Topbar } from '@/components/Topbar';

type BlogShellProps = {
  children: React.ReactNode;
};

export function BlogShell({ children }: BlogShellProps) {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSidebarSelect = (filter: 'all' | 'new' | 'favorite') => {
    if (filter === 'all') {
      router.push('/games');
      return;
    }

    router.push(`/games?filter=${filter}`);
  };

  return (
    <div className="shell">
      <Sidebar active="blog" onSelect={handleSidebarSelect} />
      <Topbar value={query} onChange={setQuery} />
      <main className="main">{children}</main>
    </div>
  );
}
