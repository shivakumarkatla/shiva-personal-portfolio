import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Lazily loaded pages may render a few frames after navigation, so keep
// looking for a hash target for up to ~2 seconds.
const MAX_FRAMES = 120;

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      return undefined;
    }

    const targetId = decodeURIComponent(hash.slice(1));
    let frame;
    let attempts = 0;

    function scrollToTarget() {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView();
      } else if (attempts++ < MAX_FRAMES) {
        frame = requestAnimationFrame(scrollToTarget);
      }
    }

    frame = requestAnimationFrame(scrollToTarget);
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}
