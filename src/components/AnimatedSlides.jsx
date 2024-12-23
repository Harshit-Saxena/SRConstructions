import React from "react"
import { motion, AnimatePresence, delay } from "framer-motion"
import video1 from "../assets/videos/video1.mp4"
import video2 from "../assets/videos/video2.mp4"

const slides = [
  {
    id: 1,
    background:
      "https://images.unsplash.com/photo-1694521787162-5373b598945c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "image",
    text: "Turning your dreams into reality with expertise you can rely on.",
    heading: "Our moto",
  },
  {
    id: 2,
    background: video1,
    type: "video",
    text: "To perform the highest level of quality construction services at fair and market competitive prices.",
    heading: "Our vision",
  },
  {
    id: 3,
    background: video2,
    type: "video",
    text: "To ensure the longevity of our company achieved by customer satisfaction in all areas, attention to detail and service-minded attitudes.",
    heading: "Our mission",
  },
]

export default function AnimatedSlides() {
  const [currentSlide, setCurrentSlide] = React.useState(0)

  // Cycle through slides
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full h-screen flex justify-center items-center overflow-hidden relative bg-black">
      <AnimatePresence>
        {slides.map((slide, index) =>
          index === currentSlide ? (
            <motion.div
              key={slide.id}
              className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
              }}
              transition={{ duration: 1 }}
            >
              {/* Conditional Rendering for Background */}
              <div className="absolute top-0 left-0 w-full h-full z-0">
                {slide.type === "image" ? (
                  <motion.div
                    className="w-full h-full bg-cover bg-center relative"
                    style={{
                      backgroundImage: `url(${slide.background})`,
                    }}
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.1 }}
                    exit={{ scale: 1 }}
                    transition={{
                      scale: { duration: 5, ease: "easeInOut" },
                    }}
                  >
                    {/* Gradient Overlay */}
                    <motion.div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  </motion.div>
                ) : (
                  <motion.div className="w-full h-full relative">
                    <motion.video
                      className="w-full h-full object-cover"
                      src={slide.background}
                      autoPlay
                      loop
                      muted
                      initial={{ scale: 1 }}
                      animate={{ scale: 1.1 }}
                      exit={{ scale: 1 }}
                      transition={{
                        scale: { duration: 5, ease: "easeInOut" },
                      }}
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  </motion.div>
                )}
              </div>

              {/* Text Animation (Staggered) */}
              <motion.div
                className="relative flex flex-col gap-4 z-10 ml-6 xl:ml-40 pr-4 text-2xl md:text-4xl font-bold drop-shadow-md"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                transition={{ duration: 1 }}
              >
                <motion.div
                  className="flex items-center lg:flex-row gap-2"
                  variants={{
                    hidden: { y: 30, opacity: 0 },
                    visible: { y: 0, opacity: 1 },
                  }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                >
                  <span className="uppercase order-1 lg:order-2 font-light text-sm md:text-lg lg:text-xl text-gray-100">
                    {slide.heading}
                  </span>

                  <motion.div
                    className="w-56 md:w-80 lg:w-72 order-2 lg:order-1 h-0.5 bg-boldClr"
                    variants={{
                      hidden: { x: "100%", opacity: 0 },
                      visible: { x: "0", opacity: 1 },
                    }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                  ></motion.div>
                </motion.div>

                <motion.p
                  className="text-white text-2xl md:text-3xl font-semibold lg:text-5xl max-w-[30ch]"
                  variants={{
                    hidden: { y: 30, opacity: 0 },
                    visible: { y: 0, opacity: 1 },
                  }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  {slide.text}
                </motion.p>
              </motion.div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>
    </div>
  )
}
