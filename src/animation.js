import { motion } from "framer-motion"
import React from "react"

const animation = (OgComponent) => {
  return () =>
    React.createElement(
      React.Fragment,
      null,
      React.createElement(OgComponent, null),
      React.createElement(
        motion.div,
        {
          className:
            "slide-in z-[12001] flex flex-col items-center justify-center",
          initial: { scaleX: 0 },
          animate: { scaleX: 0 },
          exit: { scaleX: 1 },
          transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
        },
        React.createElement("img", {
          src: "https://i.postimg.cc/6pD8LXK6/logo.png",
          alt: "S.R. Construction",
          className: "w-24 h-24 mb-2",
        }),
        React.createElement(
          "span",
          { className: "text-white text-2xl font-semibold" },
          "S.R. Construction"
        )
      ),
      React.createElement(
        motion.div,
        {
          className:
            "slide-out z-[999] flex flex-col items-center justify-center",
          initial: { scaleX: 1 },
          animate: { scaleX: 0 },
          exit: { scaleX: 0 },
          transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
        },
        React.createElement("img", {
          src: "/src/assets/logo.svg",
          alt: "S.R. Construction",
          className: "w-24 h-24 mb-2",
        }),
        React.createElement(
          "span",
          { className: "text-white text-2xl font-semibold" },
          "S.R. Construction"
        )
      )
    )
}

export default animation
