'use client';

import { useEffect, useRef } from 'react';

type AdSlotProps = {
  slot: string;
  label?: string;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  className?: string;
};

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>;
  }
}

const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? '';

export function AdSlot({ slot, label = 'Advertisement', format = 'auto', className = '' }: AdSlotProps) {
  const hasAdsense = ADSENSE_CLIENT.startsWith('ca-pub-');
  const initializedRef = useRef(false);

  useEffect(() => {
    if (!hasAdsense || initializedRef.current) {
      return;
    }

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      initializedRef.current = true;
    } catch {
      initializedRef.current = false;
    }
  }, [hasAdsense]);

  if (!hasAdsense) {
    return (
      <aside className={`ad-slot ad-slot--placeholder ${className}`.trim()} aria-label={label}>
        <span>{label}</span>
      </aside>
    );
  }

  return (
    <aside className={`ad-slot ${className}`.trim()} aria-label={label}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </aside>
  );
}