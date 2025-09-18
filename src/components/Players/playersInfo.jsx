"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hooks/use-outside-click";

export function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      {/* Expanded Card */}
      <AnimatePresence>
        {active && typeof active === "object" ? (
          
          <div className="fixed top-[25%]   left-0 w-full h-full flex items-center justify-center z-[100]">

            {/* Close Button (Mobile) */}
            <motion.button
              key={`button-${active.id}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                transition: { duration: 0.05 },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>

            <motion.div
              layoutId={`card-${active.id}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              {/* Image */}
              <motion.div layoutId={`image-${active.id}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              {/* Content */}
              <div>
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.id}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.id}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                  {active.ctaText && (
                    <motion.a
                      layoutId={`button-${active.id}-${id}`}
                      href={active.ctaLink || "#"}
                      target="_blank"
                      className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                    >
                      {active.ctaText}
                    </motion.a>
                  )}
                </div>

                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* List of Cards */}
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.id}-${id}`}
            key={card.id}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row">
              <motion.div layoutId={`image-${card.id}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div>
                <motion.h3
                  layoutId={`title-${card.id}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.id}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            {card.ctaText && (
              <motion.button
                layoutId={`button-${card.id}-${id}`}
                className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
              >
                {card.ctaText}
              </motion.button>
            )}
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => (
  <motion.svg
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{
      opacity: 0,
      transition: { duration: 0.05 },
    }}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 text-black"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
  </motion.svg>
);

const cards = [
  {
    id: "kohli",
    title: "Virat Kohli",
    description: "Right-handed Batsman",
    src: "/kohli.jpeg",
    content: () => (
      <p>
        Virat Kohli is an Indian international cricketer and the former captain
        of the Indian national cricket team. He is a right-handed batsman and an
        occasional medium-pace bowler. <br />
        He currently represents Royal Challengers Bengaluru in the IPL and Delhi
        in domestic cricket. Kohli is widely regarded as one of the greatest
        limited overs batters of all time.
      </p>
    ),
  },
  {
    id: "dhoni",
    title: "MS Dhoni",
    description: "Right-handed Wk-Batsman",
    src: "https://i.pinimg.com/736x/4c/38/71/4c38712bf6e2d6c5669ba1defa9742b4.jpg",
    content: () => (
      <p>
        MS Dhoni is an Indian professional cricketer who plays as a
        right-handed batter and a wicket-keeper. Widely regarded as one of the
        most prolific wicket-keeper batsmen and captains. <br /> He has led India
        to victory in the 2007 ICC World Twenty20, the 2011 Cricket World Cup,
        and the 2013 ICC Champions Trophy, being the only captain to win three
        different limited overs ICC tournaments.
      </p>
    ),
  },
  {
    id: "sachin",
    title: "Sachin Tendulkar",
    description: "Right-handed Batsman",
    src: "https://i.pinimg.com/736x/2e/d4/b4/2ed4b48821be9e4df5c7bc432f9e3ea3.jpg",
    content: () => (
      <p>
        Sachin Tendulkar is an Indian former international cricketer who
        captained the Indian national team. <br />
        Often dubbed the "God of Cricket" in India, he is widely regarded as one
        of the greatest cricketers of all time.
      </p>
    ),
  },
  {
    id: "rohit",
    title: "Rohit Sharma",
    description: "Right-handed Batsman",
    src: "https://i.pinimg.com/1200x/a7/e6/17/a7e6179145629d4f03cd25bddf2802b3.jpg",
    content: () => (
      <p>
        Rohit Sharma is an Indian international cricketer and the captain of the
        India national team in ODIs. He is also a former captain in Tests and
        T20Is. He is widely regarded as one of the greatest opening batters of
        all time. <br />
        He is a right-handed batsman who plays for Mumbai Indians in IPL and for
        Mumbai in domestic cricket.
      </p>
    ),
  },
  {
    id: "hardik",
    title: "Hardik Pandya",
    description: "Right-handed All-rounder",
    src: "https://i.pinimg.com/736x/88/22/37/8822379bd614a3372f223908c60cbee9.jpg",
    content: () => (
      <p>
        Hardik Pandya is an Indian international cricketer who plays for the
        Indian cricket team. He is an all-rounder who is a right-handed middle
        order batsman and fast-medium bowler. <br /> Pandya has represented
        India in all three formats.
      </p>
    ),
  },
  {
    id: "bhuvi",
    title: "Bhuvneshwar Kumar",
    description: "Right-arm Medium Pace Bowler",
    src: "https://i.pinimg.com/1200x/44/7b/7e/447b7eb509d6a471f316b3f5005af8a7.jpg",
    content: () => (
      <p>
        Bhuvneshwar Kumar is an Indian international cricketer who has played
        for the Indian cricket team in all three formats. <br /> A right-arm
        fast-medium bowler, he is known for his ability to swing the ball both
        ways at will.
      </p>
    ),
  },
  {
    id: "bumrah",
    title: "Jasprit Bumrah",
    description: "Right-arm Medium Pace Bowler",
    src: "https://i.pinimg.com/1200x/ef/09/a5/ef09a5b89a0d8fe7aeb434dc92b32fdf.jpg",
    content: () => (
      <p>
        Jasprit Bumrah is an Indian cricketer who plays for the India national
        team in all formats and has captained India in Tests and T20Is. <br /> He
        is widely regarded as one of the world's best active all-format pace
        bowlers.
      </p>
    ),
  },
   
];
