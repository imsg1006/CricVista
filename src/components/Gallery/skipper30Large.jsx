"use client";

import Footer from "@/pages/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const images = [
  "https://i.pinimg.com/1200x/a5/b4/da/a5b4dab6245d2108e1b3d2edcf48e7d4.jpg",
  "https://i.pinimg.com/736x/94/e2/72/94e272579aa7a5925ebf8aa01afd9ef8.jpg",
  "https://i.pinimg.com/736x/27/10/fd/2710fd65cd6b60e6e8b64b378db71219.jpg",
  "https://i.pinimg.com/736x/bc/04/dc/bc04dc39c14c82109848af989ea63167.jpg",
  "https://i.pinimg.com/736x/ee/93/42/ee9342b26bc0ba385e9b57c0e4d88c94.jpg",
  "https://i.pinimg.com/1200x/b6/03/89/b60389e1099309111ab66c85e36d6101.jpg",
  "https://i.pinimg.com/736x/1a/84/0c/1a840c1a4c799216040b231bf6f40973.jpg",
  "https://i.pinimg.com/736x/4f/27/0e/4f270e4ed04dc594eaf74ba8fcf03844.jpg",
  "https://i.pinimg.com/736x/af/ae/71/afae7157784509d2e8e1b16b75416cba.jpg",  
  "https://i.pinimg.com/736x/9c/be/45/9cbe45284d3209c8900dd930c93f0d28.jpg",
  "https://i.pinimg.com/1200x/92/72/e4/9272e4cb848451f4e3d223a62513ee23.jpg",
  "https://i.pinimg.com/736x/5b/c1/da/5bc1da47dd21bd9bc10d20462f2d7426.jpg",
  "https://i.pinimg.com/736x/47/9f/f6/479ff6664292c39234893419c31a9a43.jpg",
  "https://i.pinimg.com/736x/8b/6b/44/8b6b444a20be448ede2cd70a3230e738.jpg",
  "/Iyer.jpeg"
];

const Skiper30Large = () => {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 1.75]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 2.0]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.75]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 1.75]);
  const y5 = useTransform(scrollYProgress, [0, 1], [0, height * 2.1]);

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <main className="w-full bg-gradient-to-r from-[#1fa793] via-[#00AFC1] to-[#425182] text-black">
      {/* Heading */}
      <div className="flex h-screen items-center justify-center">
        <h2 className="font-['Playfair_Display'] text-6xl text-[#FFFFFF] font-bold uppercase">SnapShots</h2>
      </div>

      {/* Scroll Gallery */}
      <div
        ref={gallery}
        className="relative box-border flex h-[225vh] gap-[2vw] overflow-hidden p-7 justify-center"
      >
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
        <Column images={[images[12], images[13], images[14]]} y={y5} />
      </div>
      <Footer/>
    </main>
    
  );
};

const Column = ({ images, y }) => (
  <motion.div
    className="relative -top-[45%] flex h-full w-1/4 min-w-[250px] flex-col gap-[2vw]"
    style={{ y }}
  >
    {images.map((src, i) => (
      <div
        key={i}
        className="relative h-full w-full overflow-hidden rounded-lg"
      >
        <img
          src={src}
          alt={`Gallery image ${i + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
    ))}
  </motion.div>
);

export default Skiper30Large;
