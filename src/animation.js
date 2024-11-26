import { motion } from "framer-motion"
import React from "react"

const animation = (OgComponent) => {
  return () =>
    React.createElement(
      React.Fragment,
      null,
      React.createElement(OgComponent, null),
      React.createElement(motion.div, {
        className: "slide-in z-[999]",
        initial: { scaleX: 0 },
        animate: { scaleX: 0 },
        exit: { scaleX: 1 },
        transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
      }),
      React.createElement(motion.div, {
        className: "slide-out z-[999]",
        initial: { scaleX: 1 },
        animate: { scaleX: 0 },
        exit: { scaleX: 0 },
        transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
      })
    )
}

export default animation
