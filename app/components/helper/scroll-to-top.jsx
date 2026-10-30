"use client";

import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-5 right-5 z-50 border border-white/20 bg-[#090b0a]/90 px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-[#f4efe6] backdrop-blur hover:border-[#d6b48a]"
    >
      Top
    </button>
  );
};

export default ScrollToTop;
