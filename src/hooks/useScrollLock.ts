"use client";

// =============================================================================
// VexiraHub — useScrollLock Hook
// Prevents body scrolling when modals/drawers are open.
// Restores scroll position on unlock to avoid layout shift.
// =============================================================================

import { useEffect, useRef } from "react";

/**
 * Lock/unlock body scroll. Used by MobileDrawer, SearchOverlay, Modal.
 * @param locked — when true, body scroll is disabled
 */
export function useScrollLock(locked: boolean) {
  const scrollY = useRef(0);

  useEffect(() => {
    if (!locked) return;

    // Store current scroll position
    scrollY.current = window.scrollY;

    const originalOverflow = document.body.style.overflow;
    const originalPosition = document.body.style.position;
    const originalTop = document.body.style.top;
    const originalWidth = document.body.style.width;

    // Lock scroll without layout jump
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY.current}px`;
    document.body.style.width = "100%";

    return () => {
      // Restore styles
      document.body.style.overflow = originalOverflow;
      document.body.style.position = originalPosition;
      document.body.style.top = originalTop;
      document.body.style.width = originalWidth;

      // Restore scroll position
      window.scrollTo(0, scrollY.current);
    };
  }, [locked]);
}
