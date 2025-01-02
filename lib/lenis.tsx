"use client";

import { ReactLenis } from 'lenis/react'

export function Lenis({ root, options }: any) {
  return (
    <ReactLenis
      root={root}
      options={{
        ...options,
        prevent: (node) => {
          console.log(node.id);
          return (
            node.nodeName === "VERCEL-LIVE-FEEDBACK" ||
            node.id === "theatrejs-studio-root"
          );
        },
      }}
    />
  );
}
