'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Topbar } from '@/components/Topbar';

type BlogShellProps = {
  children: React.ReactNode;
};

export function BlogShell({ children }: BlogShellProps) {
  const [query, setQuery] = useState('');

  return (
    <div className="shell">
      <Sidebar active="all" onSelect={() => {}} />
      <Topbar value={query} onChange={setQuery} />
      <main className="main">{children}</main>
    </div>
  );
}