import React, { useEffect, useState } from "react";

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const calculateScrollProgress = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolledHeight = window.scrollY;
      let progress;

      // Check if scrolling direction is upwards
      if (scrolledHeight < prevScrollPos) {
        progress =
          ((scrollableHeight - scrolledHeight) / scrollableHeight) * 100;
      } else {
        progress = (scrolledHeight / scrollableHeight) * 100;
      }

      setScrollProgress(progress);
      setPrevScrollPos(scrolledHeight);
    };

    window.addEventListener("scroll", calculateScrollProgress);

    return () => {
      window.removeEventListener("scroll", calculateScrollProgress);
    };
  }, [prevScrollPos]);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-white">
      <div
        className="h-full bg-blue-500"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
