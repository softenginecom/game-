import type { CSSProperties } from 'react';

type GameFrameProps = {
  src: string;
  title: string;
};

export function GameFrame({ src, title }: GameFrameProps) {
  return (
    <div style={frameWrapStyle}>
      <iframe
        src={src}
        title={title}
        loading="lazy"
        allow="autoplay; fullscreen; gamepad"
        style={iframeStyle}
      />
    </div>
  );
}

const frameWrapStyle: CSSProperties = {
  position: 'relative',
  width: '100%',
  paddingTop: '56.25%',
  background: '#0f172a',
  borderRadius: 10,
  overflow: 'hidden'
};

const iframeStyle: CSSProperties = {
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  border: 0
};