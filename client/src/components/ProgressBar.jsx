import React, { useEffect, useState } from "react";

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const calculateScrollProgress = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolledHeight = window.scrollY;

      // Calculate progress based on scroll direction
      if (scrolledHeight >= prevScrollPos) {
        // Scrolling down
        const progress = (scrolledHeight / scrollableHeight) * 100;
        setScrollProgress(progress);
      } else {
        // Scrolling up
        const progress =
          ((scrollableHeight - scrolledHeight) / scrollableHeight) * 100;
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
    <div className="fixed top-[81px] left-0 w-full h-1 bg-white">
      <div
        className="h-full bg-pink-500"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
