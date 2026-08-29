"use client"

import React, { useEffect } from "react";
import { createSmoothScroll } from "@/lib/motion/lenis";

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
  }) {
  useEffect(() => {
    const lenis = createSmoothScroll();
    return () => lenis?.destroy();
  }, []);

  return <>{ children }</>
}
