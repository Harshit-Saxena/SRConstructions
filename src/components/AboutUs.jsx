import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

gsap.to(".about-text  p", {
  backgroundPositionX: "0%",
  stagger: 2,
  scrollTrigger: {
    trigger: ".about-text  p",
    scrub: 4,
    start: "top center",
    end: "bottom top",
  },
})

export const AboutUs = () => {
  return (
    <div className="mt-12 lg:mt-[25rem] flex flex-col gap-6 items-center lg:px-12">
      <h2 className="text-3xl lg:text-6xl font-bold font-Kalina text-highlight">
        About Us
      </h2>
      <div className="about-text text-lg lg:text-3xl">
        <p>
          With over 30 years of excellence in the construction industry, we take
          pride in being a trusted name for industrial, residential, and
          commercial projects. At S.R. Constructions, we don't just build
          structures; we build trust and long-lasting relationships. Choose us
          to experience unparalleled professionalism and quality that outshines
          the competition.
        </p>
      </div>

      <div className="border-4 border-transparent px-4 py-2 border-l-red-300">
        <q className="text-white text-2xl px-2">
          Turning your dreams into reality with expertise you can rely on.
        </q>
      </div>
    </div>
  )
}
