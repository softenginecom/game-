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
        if (window.history.length > 1) {
          router.back();
        } else {
          router.push(fallbackHref);
        }
      }}
    >
      ← Back
    </button>
  );
}