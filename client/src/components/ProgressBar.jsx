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

      if (scrolledHeight > prevScrollPos) {
        // Scrolling down
        progress = (scrolledHeight / scrollableHeight) * 100;
      } else {
        // Scrolling up
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

  //   const calculateScrollProgress = () => {
  //     const scrollableHeight =
  //       document.documentElement.scrollHeight - window.innerHeight;
  //     const scrolledHeight = window.scrollY;

  //     // Calculate progress based on scroll direction
  //     if (scrolledHeight >= prevScrollPos) {
  //       // Scrolling down
  //       const progress = (scrolledHeight / scrollableHeight) * 100;
  //       setScrollProgress(progress);
  //     } else {
  //       // Scrolling up
  //       const progress =
  //         ((scrollableHeight - scrolledHeight) / scrollableHeight) * 100;
  //       setScrollProgress(progress);
  //     }

  //     setPrevScrollPos(scrolledHeight);
  //   };

  //   window.addEventListener("scroll", calculateScrollProgress);

  //   return () => {
  //     window.removeEventListener("scroll", calculateScrollProgress);
  //   };
  // }, [prevScrollPos]);

  return (
    <div className="fixed top-[81px] left-0 w-full h-1 bg-transparent">
      <div
        className="h-full bg-yellow-500"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
