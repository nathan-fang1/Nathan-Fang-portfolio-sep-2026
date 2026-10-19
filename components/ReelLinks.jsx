"use client";
import { useEffect } from "react";

// Screenshots with a data-href open the original reel in a new tab
// (even when they sit inside a card that links to a case study).
export default function ReelLinks() {
  useEffect(() => {
    const onClick = (e) => {
      const el = e.target.closest && e.target.closest("[data-href]");
      if (!el) return;
      e.preventDefault();
      e.stopPropagation();
      window.open(el.getAttribute("data-href"), "_blank", "noopener");
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);
  return null;
}
