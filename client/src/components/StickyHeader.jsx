// StickyHeader.jsx

import React, { useState, useEffect } from "react";

const StickyHeader = ({ children }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const threshold = 100;
      setIsSticky(offset > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full shadow-lg transition-all duration-300 ${
        isSticky ? "h-12" : "h-16"
      }`}
    >
      {children}
    </header>
  );
};

export default StickyHeader;
