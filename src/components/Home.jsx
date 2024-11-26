import animation from "../animation"
import { ReactLenis } from "lenis/dist/lenis-react"
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion"
import { useRef, useState } from "react"
import centerImage from "../assets/centerImage.jpg"
import { FiArrowUpRight } from "react-icons/fi"

export const Home = () => {
  return (
    <div className="bg-bgClr flex flex-col gap-6">
      <ReactLenis
        root
        options={{
          lerp: 0.05,
          //   infinite: true,
          //   syncTouch: true,
        }}
      >
        <Hero />

        <About />

        <Service />

        <Founder />
      </ReactLenis>
    </div>
  )
}

const isSmallerScreen = window.innerWidth <= 768

const SECTION_HEIGHT = 1500

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterImage />

      <ParallaxImages />

      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  )
}

const CenterImage = () => {
  const { scrollY } = useScroll()

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0])
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100])

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  )
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  )

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage: `url(${centerImage})`,
        backgroundPosition: isSmallerScreen ? "center" : "bottom",
        backgroundRepeat: "no-repeat",
      }}
    />
  )
}

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src="https://images.unsplash.com/photo-1484600899469-230e8d1d59c0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="And example of a space launch"
        start={-200}
        end={200}
        className="w-1/3"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="An example of a space launch"
        start={200}
        end={-250}
        className="mx-auto w-2/3"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Orbiting satellite"
        start={-200}
        end={200}
        className="ml-auto w-1/3"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1494022299300-899b96e49893?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Orbiting satellite"
        start={0}
        end={-500}
        className="ml-24 w-5/12"
      />
    </div>
  )
}

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  })

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85])

  const y = useTransform(scrollYProgress, [0, 1], [start, end])
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  )
}

// About us section
const About = () => {
  // Define variants for container and children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Delay between animations of children
      },
    },
  }

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  }
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col gap-6 px-6 lg:py-24 lg:px-36 lg:max-w-[80%]"
    >
      <h2
        variants={childVariants}
        className="text-sm text-neutral-700 uppercase"
      >
        Who we are
      </h2>

      <span className="font-semibold text-2xl lg:text-5xl border-l-2 border-boldClr pl-2">
        Focused and Future Ready
      </span>
      <motion.div className="lg:text-xl flex flex-col gap-2">
        {[
          "With over 30 years of excellence in the construction industry, we take pride in being a trusted name for industrial, residential, and commercial projects.",
          "At S.R. Constructions, we offer comprehensive services that cover every stage of your project, from design to completion.",
          "Our unwavering commitment to superior craftsmanship, customer satisfaction, and the highest safety standards sets us apart in the field.",
          "At S.R. Constructions, we don't just build structures; we build trust and long-lasting relationships.",
        ].map((text, idx) => (
          <motion.p
            key={idx}
            className="text-neutral-600 last:text-neutral-900 last:font-semibold"
            variants={childVariants}
          >
            {text}
          </motion.p>
        ))}
      </motion.div>

      <motion.q
        className="font-semibold border-l-2 italic border-red-300 pl-4 lg:text-xl"
        variants={childVariants}
      >
        Turning your dreams into reality with expertise you can rely on.
      </motion.q>
    </motion.div>
  )
}

// Service section
const Service = () => {
  // Data for services
  const services = {
    Permits: {
      image: "path-to-permits-image.jpg",
      title: "Simplifying Permits",
      description:
        "We handle all the paperwork and permits required to get your project moving without delays.",
    },
    Foundation: {
      image: "path-to-foundation-image.jpg",
      title: "Solid Foundations",
      description:
        "Building a strong foundation is crucial, and we ensure it’s done with precision and care.",
    },
    Excavation: {
      image: "path-to-excavation-image.jpg",
      title: "Expert Excavation",
      description:
        "Our excavation services are carried out with advanced equipment and skilled professionals.",
    },
    Landscaping: {
      image: "path-to-landscaping-image.jpg",
      title: "Beautiful Landscaping",
      description:
        "Transform your outdoor spaces with our creative and sustainable landscaping solutions.",
    },
  }

  const [selectedService, setSelectedService] = useState("Permits")

  // Define variants for container and children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Delay between animations of children
      },
    },
  }

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  }
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col gap-6 p-6 lg:px-36 lg:max-w-[80%]"
    >
      <h2
        variants={childVariants}
        className="text-md text-neutral-700 uppercase"
      >
        {" "}
        What we do
      </h2>

      <span className="font-semibold text-2xl lg:text-5xl border-l-2 border-boldClr pl-2">
        We have a vision for the future of construction
      </span>

      <div className="py-6">
        {/* Buttons to change content */}
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:max-w-[50%] gap-6">
            {Object.keys(services).map((service) => (
              <button
                key={service}
                onClick={() => setSelectedService(service)}
                className={`bg-transparent lg:text-lg pb-2 ${
                  selectedService === service
                    ? "text-highlight border-b-2 border-highlight"
                    : "text-neutral-500"
                }`}
              >
                {service}
              </button>
            ))}
          </div>

          <motion.div
            className="flex flex-col lg:flex-row justify-between gap-4 px-6 mt-6"
            initial={{ translateX: "-100vw", opacity: 0 }}
            animate={{ translateX: "0vw", opacity: 1 }}
            transition={{ duration: 0.5 }}
            key={selectedService}
          >
            {/* Image */}
            <motion.img
              src={services[selectedService].image}
              alt={`${selectedService} Image`}
              className="w-full lg:w-1/2 h-auto object-cover rounded"
            />

            {/* Text content */}
            <motion.div className="flex flex-col gap-4 lg:w-1/2">
              <h3 className="text-3xl font-bold">
                {services[selectedService].title}
              </h3>
              <p className="text-lg text-neutral-700">
                {services[selectedService].description}
              </p>
              <button className="rounded bg-neutral-900 px-4 py-1 text-md text-white transition-colors hover:bg-neutral-700 w-fit">
                <a href="/contact">
                  Learn more <FiArrowUpRight className="inline" />
                </a>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

// Founder section
const Founder = () => {
  // Define variants for container and children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Delay between animations of children
      },
    },
  }

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  }
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col gap-6 px-6 lg:py-24 lg:px-36"
    >
      <motion.h2
        variants={childVariants}
        className="text-md text-neutral-700 uppercase"
      >
        {" "}
        Our founder
      </motion.h2>

      <motion.div
        variants={childVariants}
        className="flex flex-col gap-8 lg:gap-24 lg:flex-row"
      >
        <span className="font-semibold text-2xl h-fit lg:text-3xl lg:whitespace-nowrap border-l-2 pl-2 border-boldClr">
          Vision to make dreams come true
        </span>
        <motion.div
          variants={childVariants}
          className="lg:text-md flex flex-col gap-2"
        >
          {[
            "Mr. Rajbeer Singh, the founder, is a distinguished civil engineer who graduated with honors from Roorkee, Uttarakhand, in 1988.",
            "He began his engineering career in 1992 as a Field Engineer with Jaypee Industries, a leading industrial giant of the time.",
            "During his three years with the company, he worked on various projects, including the Lakya Dam in Karnataka, one of the largest earth dams in Asia, which provides irrigation and power to millions.",
          ].map((text, idx) => (
            <motion.p
              variants={childVariants}
              key={idx}
              className="text-neutral-600 last:text-neutral-900 last:font-semibold"
              variants={childVariants}
            >
              {text}
            </motion.p>
          ))}

          <button className="rounded bg-neutral-900 px-4 py-1 text-md text-white transition-colors hover:bg-neutral-700 w-fit">
            <a href="/contact">
              Learn more <FiArrowUpRight className="inline" />
            </a>
          </button>
        </motion.div>
      </motion.div>

      <motion.div className="bg-gray-200 border-2 border-black lg:border-0 rounded-lg overflow-hidden flex flex-col lg:flex-row-reverse gap-6 p-4 lg:py-12 lg:pl-36">
        <motion.img src="" alt="Founder (Rajbeer)" />

        <motion.div className="text-neutral-900 flex flex-col gap-4">
          <h4 className="text-3xl lg:text-4xl font-semibold">Rajbeer Singh</h4>
          <p className="text-xl lg:text-2xl">Founder</p>
          <p className="text-md lg:text-lg lg:max-w-[50%]">
            In 2001, he founded S.R. Constructions, a company embodying his
            vision and core values of quality, innovation, and customer
            satisfaction. Since its inception, he has led the company with
            unwavering dedication and passion, consistently delivering
            exceptional results for clients
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default animation(Home)
