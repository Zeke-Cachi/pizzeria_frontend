import { useState, useEffect } from "react";

export default function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<string>("");

  useEffect(() => {
    let lastScrollTop = window.scrollY || document.documentElement.scrollTop;

    const handleScroll = () => {
      const currentScroll =
        window.scrollY || document.documentElement.scrollTop;
      if (currentScroll > lastScrollTop) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollDirection;
}
