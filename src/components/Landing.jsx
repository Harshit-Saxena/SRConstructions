import { useLayoutEffect, useRef } from "react"
import bg from "../assets/bg.jpg"
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

// const bg1 = useRef(null)
// const text1 = useRef(null)
// const text2 = useRef(null)
// const img = useRef(null)
// const img_container = useRef(null)
// const container = useRef(null)

// useLayoutEffect(() => {
//   const isMobile = window.innerWidth <= 768
//   let ctx = gsap.context(() => {
//     ScrollTrigger.create({
//       trigger: bg.current,
//       pin: bg.current,
//       pinSpacing: false,
//       start: "top top",
//       endTrigger: ".last",
//       end: "bottom bottom",
//     })

//     gsap.set(container.current, {
//       marginTop: -container.current.offsetHeight * (isMobile ? 7.5 : 0.5),
//     })

//     gsap
//       .timeline({
//         scrollTrigger: {
//           trigger: img_container.current,
//           pin: img_container.current,
//           scrub: 1,
//           start: "0% 0%",
//         },
//       })
//       .to(img.current, { transform: "translateZ(2900px)" })
//       .to(text1.current, { y: -550 }, 0.02, "<")
//       .to(text2.current, { y: -800, opacity: 0 }, 0.01, "<")
//       .fromTo(
//         container.current,
//         { yPercent: 100, scaleY: 3 },
//         { yPercent: 0, scaleY: 1 }
//       )
//   })

//   gsap.to(".about-text  p", {
//     backgroundPositionX: "0%",
//     stagger: 2,
//     scrollTrigger: {
//       trigger: ".about-text  p",
//       scrub: 1,
//       start: "top center",
//       end: "bottom top",
//     },
//   })

//   return () => ctx && ctx.revert()
// }, [])

export const Landing = () => {
  return (
    <div ref={bg1} className="relative">
      {/* <section>
        <div
          ref={img_container}
          className="img-container perspective flex h-screen items-center justify-center"
        >
          <img ref={img} className="image" src={bg} alt="Background Image" />
          <div className="font-Kalina absolute flex flex-col items-center justify-center">
            <h1
              ref={text1}
              className="text-[40px] text-highlight font-semibold md:text-[130px] text-center z-[999]"
            >
              <span className="text-stroke">SR</span> Constructions
            </h1>
            <p
              ref={text2}
              className="text-desc w-48 text-[10px] md:text-[12px] text-center px-4"
            >
              Building Dreams, Crafting Excellence.
              <button
                disabled
                className="mt-4 text-xs bg-gray-600 px-4 py-2 rounded-full animate-pulse"
              >
                scroll down
              </button>
            </p>
          </div>
        </div>

        <div
          ref={container}
          className="container flex flex-col md:flex-row flex-wrap items-center justify-center md:justify-around gap-8 md:gap-0 px-4"
        >
          <div className="col-1 flex flex-col gap-8 md:gap-16 translate-y-[10%] md:translate-y-[30%] pb-8 md:pb-12">
            <img
              className="w-full md:w-[450px] h-auto md:h-[350px]"
              src={img1}
              alt="Image1"
            />
            <img
              className="w-full md:w-[400px] h-auto md:h-[400px]"
              src={img2}
              alt="Image2"
            />
          </div>
          <div className="col-2 flex flex-col gap-8 md:gap-16 last">
            <img
              className="w-full md:w-[600px] h-auto md:h-[400px]"
              src={img3}
              alt="Image3"
            />
            <img
              className="w-full md:w-[400px] h-auto md:h-[400px]"
              src={img4}
              alt="Image4"
            />
          </div>
        </div>
      </section> */}
    </div>
  )
}
