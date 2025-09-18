"use client";

import { useEffect, useState } from "react";
import Skiper30Large from "./../components/Gallery/skipper30Large";
import Skiper30Small from "./../components/Gallery/skipper30Small";

const Skiper30 = () => {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsSmall(window.innerWidth < 768);  
    };

    checkSize();
    window.addEventListener("resize", checkSize);

    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return isSmall ? <Skiper30Small /> : <Skiper30Large />;
};

export default Skiper30;
