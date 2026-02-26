'use client';

import { useRouter } from 'next/navigation';

type BackButtonProps = {
  fallbackHref?: string;
};

export function BackButton({ fallbackHref = '/games' }: BackButtonProps) {
  const router = useRouter();

  return (
    <button
      type="button"
      className="back-btn"
      onClick={() => {
        router.push(fallbackHref);
      }}
    >
      ← Back
    </button>
  );
}
