
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
      return;
    }

    const targetId = decodeURIComponent(hash.slice(1));

    requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView();
    });
  }, [pathname, hash]);

  return null;
}
