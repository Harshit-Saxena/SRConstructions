import animation from "../animation"
import { motion } from "framer-motion"
import { useState } from "react"
import permits from "../assets/permit.webp"
import foundation from "../assets/foundation.jpg"
import excavation from "../assets/excavation.jpg"
import fencing from "../assets/fencing.jpg"
import founder_img from "../assets/Founder.png"
import { FiArrowUpRight } from "react-icons/fi"
import { Number } from "./Number"
import { Link } from "react-router-dom"
import AnimatedSlides from "./AnimatedSlides"

const Home = () => {
  return (
    <div className="bg-bgClr flex flex-col gap-6">

      <AnimatedSlides />

      <About />

      <Stats />

      <Service />

      <Founder />

      <Work />

      <button
        className="fixed bottom-6 right-6 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center z-30 transform hover:scale-110 hover:bg-highlight hover:text-white hover:shadow-2xl transition-all"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }}
      >
        <div className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </div>
      </button>
    </div>
  )
}

// const ShuffleHero = () => {
//   return (
//     <section className="w-full h-auto lg:h-[60vh] px-8 pt-24 mb-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
//       <div>
//         <span className="block mb-4 text-base md:text-lg text-highlight font-medium">
//           Better every day
//         </span>

//         <h3 className="text-5xl md:text-7xl font-semibold text-boldClr">
//           Let's make your dream come true
//         </h3>

//         <p className="text-xl text-slate-700 my-4 md:my-6">
//           We don't just build structures, we build trust and long-lasting
//           relationships
//         </p>

//         <button className="bg-dark hover:bg-blue-500 text-white font-medium py-2 px-4 rounded transition-all active:scale-95">
//           <Link to="/contact">Get in touch</Link>
//         </button>
//       </div>

//       <ShuffleGrid />
//     </section>
//   )
// }

// const shuffle = (array) => {
//   let currentIndex = array.length,
//     randomIndex

//   while (currentIndex != 0) {
//     randomIndex = Math.floor(Math.random() * currentIndex)

//     currentIndex--
//     ;[array[currentIndex], array[randomIndex]] = [
//       array[randomIndex],

//       array[currentIndex],
//     ]
//   }

//   return array
// }

// const squareData = [
//   {
//     id: 1,
//     src: "https://cdn.pixabay.com/photo/2020/01/10/01/46/construction-4754312_640.jpg",
//   },
//   {
//     id: 2,
//     src: "https://cdn.pixabay.com/photo/2019/12/10/20/59/site-4686908_640.jpg",
//   },
//   {
//     id: 3,
//     src: "https://cdn.pixabay.com/photo/2017/08/12/09/51/worker-2633918_640.jpg",
//   },
//   {
//     id: 4,
//     src: "https://cdn.pixabay.com/photo/2016/02/23/19/32/construction-1218349_640.jpg",
//   },
//   {
//     id: 5,
//     src: "https://cdn.pixabay.com/photo/2016/02/05/20/59/construction-1181982_640.jpg",
//   },
//   {
//     id: 6,
//     src: "https://cdn.pixabay.com/photo/2021/08/06/21/26/labor-6527243_640.jpg",
//   },
//   {
//     id: 7,
//     src: "https://cdn.pixabay.com/photo/2021/09/09/07/02/construction-site-6609637_640.jpg",
//   },
//   {
//     id: 8,
//     src: "https://cdn.pixabay.com/photo/2016/08/01/17/53/macon-1561639_640.jpg",
//   },
//   {
//     id: 9,
//     src: "https://cdn.pixabay.com/photo/2021/09/09/07/02/construction-6609633_640.jpg",
//   },
//   {
//     id: 10,
//     src: "https://cdn.pixabay.com/photo/2024/05/02/09/41/construction-8734283_640.png",
//   },
//   {
//     id: 11,
//     src: "https://cdn.pixabay.com/photo/2022/03/18/19/18/construction-site-7077291_640.jpg",
//   },
//   {
//     id: 12,
//     src: "https://cdn.pixabay.com/photo/2022/03/18/19/18/construction-site-7077291_640.jpg",
//   },
//   {
//     id: 13,
//     src: "https://cdn.pixabay.com/photo/2024/09/13/18/26/construction-9045703_640.jpg",
//   },
//   {
//     id: 14,
//     src: "https://cdn.pixabay.com/photo/2019/10/31/21/06/first-mayo-4592881_640.jpg",
//   },
//   {
//     id: 15,
//     src: "https://cdn.pixabay.com/photo/2016/04/28/03/31/migrant-workers-1358036_640.jpg",
//   },
//   {
//     id: 16,
//     src: "https://cdn.pixabay.com/photo/2022/10/17/05/21/building-site-7526687_640.jpg",
//   },
// ]

// const generateSquares = () => {
//   return shuffle(squareData).map((sq) => (
//     <motion.div
//       key={sq.id}
//       layout
//       transition={{ duration: 1.5, type: "spring" }}
//       className="w-full h-full"
//       style={{
//         backgroundImage: `url(${sq.src})`,

//         backgroundSize: "cover",
//       }}
//     ></motion.div>
//   ))
// }

// const ShuffleGrid = () => {
//   const timeoutRef = useRef(null)

//   const [squares, setSquares] = useState(generateSquares())

//   useEffect(() => {
//     shuffleSquares()

//     return () => clearTimeout(timeoutRef.current)
//   }, [])

//   const shuffleSquares = () => {
//     setSquares(generateSquares())

//     timeoutRef.current = setTimeout(shuffleSquares, 3000)
//   }

//   return (
//     <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
//       {squares.map((sq) => sq)}
//     </div>
//   )
// }

// Parallax Image code
// const isSmallerScreen = window.innerWidth <= 768

// const SECTION_HEIGHT = 1500

// const Hero = () => {
//   return (
//     <div
//       style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
//       className="relative w-full"
//     >
//       <CenterImage />

//       <ParallaxImages />

//       <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
//     </div>
//   )
// }

// const CenterImage = () => {
//   const { scrollY } = useScroll()

//   const clip1 = useTransform(scrollY, [0, 1500], [25, 0])
//   const clip2 = useTransform(scrollY, [0, 1500], [75, 100])

//   const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`

//   const backgroundSize = useTransform(
//     scrollY,
//     [0, SECTION_HEIGHT + 500],
//     ["170%", "100%"]
//   )
//   const opacity = useTransform(
//     scrollY,
//     [SECTION_HEIGHT, SECTION_HEIGHT + 500],
//     [1, 0]
//   )

//   return (
//     <motion.div
//       className="sticky top-0 h-screen w-full"
//       style={{
//         clipPath,
//         backgroundSize,
//         opacity,
//         backgroundImage: `url(${centerImage})`,
//         backgroundPosition: isSmallerScreen ? "center" : "bottom",
//         backgroundRepeat: "no-repeat",
//       }}
//     />
//   )
// }

// const ParallaxImages = () => {
//   return (
//     <div className="mx-auto max-w-5xl px-4 pt-[200px]">
//       <ParallaxImg
//         src="https://images.unsplash.com/photo-1694521787162-5373b598945c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29uc3RydWN0aW9uJTIwd29ya2Vyc3xlbnwwfHwwfHx8MA%3D%3D"
//         alt="And example of a space launch"
//         start={-200}
//         end={200}
//         className="w-1/3"
//       />
//       <ParallaxImg
//         src="https://images.unsplash.com/photo-1694521788304-1d42378498da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbnN0cnVjdGlvbiUyMHdvcmtlcnN8ZW58MHx8MHx8fDA%3D"
//         alt="An example of a space launch"
//         start={200}
//         end={-250}
//         className="mx-auto w-2/3"
//       />
//       <ParallaxImg
//         src="https://plus.unsplash.com/premium_photo-1682724032935-1d51a298c402?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGNvbnN0cnVjdGlvbiUyMHdvcmtlcnN8ZW58MHx8MHx8fDA%3D"
//         alt="Orbiting satellite"
//         start={-200}
//         end={200}
//         className="ml-auto w-1/3"
//       />
//       <ParallaxImg
//         src="https://images.unsplash.com/photo-1710585761854-57ff6839395c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGNvbnN0cnVjdGlvbiUyMHdvcmtlcnN8ZW58MHx8MHx8fDA%3D"
//         alt="Orbiting satellite"
//         start={0}
//         end={-500}
//         className="ml-24 w-5/12"
//       />
//     </div>
//   )
// }

// const ParallaxImg = ({ className, alt, src, start, end }) => {
//   const ref = useRef(null)

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: [`${start}px end`, `end ${end * -1}px`],
//   })

//   const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0])
//   const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85])

//   const y = useTransform(scrollYProgress, [0, 1], [start, end])
//   const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`

//   return (
//     <motion.img
//       src={src}
//       alt={alt}
//       className={className}
//       ref={ref}
//       style={{ transform, opacity }}
//     />
//   )
// }

// About us section

const About = () => {
  // Define variants for container and children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between animations of children
      },
    },
  }

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col gap-6 px-6 lg:py-24 lg:px-36 lg:max-w-[80%] overflow-hidden"
    >
      <motion.div
        className="flex items-center lg:flex-row gap-2"
        variants={{
          hidden: { y: 30, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
        transition={{ delay: 0.15, duration: 0.4 }}
      >
        <motion.h2
          variants={childVariants}
          className="text-sm text-neutral-700 order-1 lg:order-2 uppercase font-semibold"
        >
          Who we are
        </motion.h2>
        <motion.div
          className="w-56 md:w-80 lg:w-72 order-2 lg:order-1 h-0.5 bg-boldClr"
          variants={{
            hidden: { x: "100%", opacity: 0 },
            visible: { x: "0", opacity: 1 },
          }}
          transition={{ delay: 0.5, duration: 0.4 }}
        ></motion.div>
      </motion.div>

      <span className="font-semibold text-highlight text-2xl lg:text-5xl border-l-2 border-boldClr pl-2">
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

// Stats section
const Stats = () => {
  return (
    <div className="bg-neutral-900 h-screen flex flex-col items-center justify-center gap-12 p-4">
      <h3 className="uppercase text-3xl lg:text-6xl text-center text-highlight">
        our <span className="font-semibold text-white">stats</span>{" "}
        <div
          className="w-56 md:w-80 lg:w-72 h-0.5 bg-highlight mt-2"
          variants={{
            hidden: { x: "100%", opacity: 0 },
            visible: { x: "0", opacity: 1 },
          }}
          transition={{ delay: 0.5, duration: 0.4 }}
        ></div>
      </h3>

      <div className="flex flex-col gap-4 justify-evenly items-center">
        <div className="flex flex-col gap-2 items-center justify-center">
          <Number n={100} extra="+" />
          <p className="pb-2 text-sm lg:text-base text-neutral-300">
            Projects Completed
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center px-8 py-2 lg:w-full">
          <Number n={100} extra="%" />
          <p className="pb-2 text-sm lg:text-base text-neutral-300">
            Clients Statisfied
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center px-8 py-2 lg:w-full">
          <Number n={10} extra="+" />
          <p className="pb-2 text-sm lg:text-base text-neutral-300">
            States covered
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3 items-center cursor-pointer">
        <a href="#work">
          <p className="uppercase bg-gray-100 text-[#00502f] font-light text-xs lg:text-base px-4 py-3 hover:text-gray-100 hover:bg-[#00502f] transition-all duration-300">
            Ready to work together?
          </p>
        </a>
      </div>
    </div>
  )
}

// Service section
const Service = () => {
  // Data for services
  const services = {
    Permits: {
      image: permits,
      title: "Simplifying Permits",
      description:
        "We handle all the paperwork and permits required to get your project moving without delays.",
    },
    Foundation: {
      image: foundation,
      title: "Solid Foundations",
      description:
        "Building a strong foundation is crucial, and we ensure it’s done with precision and care.",
    },
    Excavation: {
      image: excavation,
      title: "Expert Excavation",
      description:
        "Our excavation services are carried out with advanced equipment and skilled professionals.",
    },
    Landscaping: {
      image: fencing,
      title: "Beautiful Landscaping",
      description:
        "Transform your outdoor spaces with our creative and sustainable landscaping solutions.",
    },
  }

  const [selectedService, setSelectedService] = useState("Permits")

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
      className="flex flex-col gap-6 p-6 lg:px-36 overflow-hidden"
    >
      <motion.div
        className="flex items-center lg:flex-row gap-2"
        variants={{
          hidden: { y: 30, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
        transition={{ delay: 0.15, duration: 0.4 }}
      >
        <motion.h2
          variants={childVariants}
          className="text-sm text-neutral-700 order-1 lg:order-2 uppercase font-semibold"
        >
          What we do
        </motion.h2>
        <motion.div
          className="w-56 md:w-80 lg:w-72 order-2 lg:order-1 h-0.5 bg-boldClr"
          variants={{
            hidden: { x: "100%", opacity: 0 },
            visible: { x: "0", opacity: 1 },
          }}
          transition={{ delay: 0.5, duration: 0.4 }}
        ></motion.div>
      </motion.div>

      <span className="font-semibold text-highlight text-2xl lg:text-5xl border-l-2 border-boldClr pl-2">
        We have a vision for the future of construction
      </span>

      <motion.div
        variants={childVariants}
        className="lg:text-xl flex flex-col gap-2 lg:max-w-[80%]"
      >
        {[
          "With hundreds of successfully completed projects across the country, our portfolio includes everything from large industries and office buildings to small apartments",
          "Our satisfied clients stand as a testament to our commitment to quality and professionalism.",
          "We are proud recipients of numerous awards and recognitions from industry associations for our excellence and innovative approach",
        ].map((text, idx) => (
          <motion.p
            key={idx}
            className="text-neutral-600 last:text-neutral-900 last:font-semibold"
            variants={childVariants}
          >
            {text}
          </motion.p>
        ))}

        <motion.q
          className="font-semibold border-l-2 italic border-red-300 pl-4 lg:text-xl"
          variants={childVariants}
        >
          No project is too big or too small for us. We're here to turn your
          dreams into reality.
        </motion.q>
      </motion.div>

      <div className="pt-6">
        {/* Buttons to change content */}
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:max-w-[70%] gap-6">
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
            className="flex flex-col lg:flex-row justify-between gap-2 lg:gap-24 px-6 mt-6"
            initial={{ translateX: "-100vw", opacity: 0 }}
            animate={{ translateX: "0vw", opacity: 1 }}
            transition={{ duration: 0.5 }}
            key={selectedService}
          >
            {/* Image */}
            <motion.img
              src={services[selectedService].image}
              alt={`${selectedService} Image`}
              className="w-full lg:w-1/2 h-[30rem] xl:h-[40rem] object-center rounded"
            />

            {/* Text content */}
            <motion.div className="flex flex-col flex-1 gap-4 lg:w-1/2">
              <h3 className="text-3xl md:text-4xl font-bold">
                {services[selectedService].title}
              </h3>
              <p className="text-lg md:text-xl text-neutral-700">
                {services[selectedService].description}
              </p>
              <button className="rounded bg-highlight hover:text-highlight hover:bg-white hover:border-highlight border-2 border-transparent px-4 py-1 text-md text-white transition-colors w-fit">
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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
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
      className="flex flex-col gap-6 px-6 lg:py-8 lg:px-36 overflow-hidden"
    >
      <motion.div
        className="flex items-center lg:flex-row gap-1"
        variants={{
          hidden: { y: 30, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
        transition={{ delay: 0.15, duration: 0.4 }}
      >
        <motion.h2
          variants={childVariants}
          className="text-neutral-700 order-1 lg:order-2 uppercase font-semibold"
        >
          Our Founder
        </motion.h2>
        <motion.div
          className="w-44 md:w-80 lg:w-72 order-2 lg:order-1 h-0.5 bg-boldClr"
          variants={{
            hidden: { x: "100%", opacity: 0 },
            visible: { x: "0", opacity: 1 },
          }}
          transition={{ delay: 0.5, duration: 0.4 }}
        ></motion.div>
      </motion.div>

      <motion.div
        variants={childVariants}
        className="flex flex-col gap-8 xl:gap-24 xl:flex-row"
      >
        <span className="font-semibold text-highlight text-2xl h-fit lg:text-3xl lg:whitespace-nowrap border-l-2 pl-2 border-boldClr">
          Vision to make dreams come true
        </span>
        <motion.div
          variants={childVariants}
          className="lg:text-md flex flex-col gap-4"
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
            >
              {text}
            </motion.p>
          ))}

          <button className="rounded bg-highlight hover:text-highlight hover:bg-white hover:border-highlight border-2 border-transparent px-4 py-1 text-md text-white transition-colors w-fit">
            <a href="/contact">
              Learn more <FiArrowUpRight className="inline" />
            </a>
          </button>
        </motion.div>
      </motion.div>

      <motion.div className="bg-gray-100 rounded-md overflow-hidden flex flex-col self-center items-center lg:items-stretch lg:justify-evenly lg:flex-row gap-6 px-4 xl:px-0 py-6 md:w-[50%] lg:w-[100%] lg:h-[30rem]">
        <motion.img
          className="max-w-xs order-1 lg:order-2"
          src={founder_img}
          alt="Founder (Rajbeer)"
        />

        <motion.div className="text-neutral-900 flex flex-col items-center lg:items-start gap-4 order-2 lg:order-1 lg:mt-12">
          <h4 className="text-3xl lg:text-4xl font-semibold uppercase">
            Rajbeer Singh
          </h4>
          <p className="text-xl lg:text-2xl lg:tracking-wider">Founder</p>
          <p className="text-md lg:text-xl lg:max-w-[45ch] font-light lg:tracking-wider">
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

// Ready to work together
const Work = () => {
  return (
    <section
      id="work"
      className="flex flex-col items-center justify-center h-screen bg-neutral-950 p-4"
    >
      <div className="text-start flex flex-col gap-6">
        <h3 className="text-white text-5xl lg:text-7xl lg:max-w-[15ch] font-semibold tracking-wider">
          Ready to work together?
        </h3>
        <p className="text-gray-100 text-sm lg:text-xl max-w-[55ch] lg:max-w-[65ch]">
          Whether you have a project in mind and you're looking for a reliable
          construction partner or you're looking to take the next step in your
          career, we want to hear from you!
        </p>
        {/* buttons */}
        <div className="flex flex-col lg:flex-row gap-4">
          <button className="text-[#00502f] bg-gray-50 hover:bg-[#00502f] hover:text-gray-100 transition-all duration-200 px-6 py-3">
            <Link className="uppercase font-medium" to={"/contact"}>
              Build a project with us
            </Link>
          </button>
          <button className="text-[#00502f] bg-gray-50 hover:bg-[#00502f] hover:text-gray-100 transition-all duration-200 px-4 py-3">
            <Link className="uppercase font-medium" to={"/careers"}>
              Build a career with us
            </Link>
          </button>
        </div>
      </div>
    </section>
  )
}

export default animation(Home)
