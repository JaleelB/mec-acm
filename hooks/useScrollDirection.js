import { createContext, useState, useEffect } from "react";

export default function useScrollListener() {
  const [scrollPosition, setScrollPosition] = useState({
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0
  });

  // set up event listeners
  useEffect(() => {
    const handleScroll = () => {

        //sets previous and current scroll direction
      setScrollPosition((last) => {
        return {
          x: window.scrollX,
          y: window.scrollY,
          lastX: last.x,
          lastY: last.y
        };
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    //clean up for scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
}

export const ScrollContext = createContext(null);
