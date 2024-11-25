import { useRef, useLayoutEffect } from "react"
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const Services = () => {
  const services = useRef()
  const panel = useRef([])

  panel.current = []

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // causing problems with landing page animation
      //   ScrollTrigger.defaults({
      //     toggleActions: "restart pause resume reset",
      //     scroller: services.current,
      //   })

      gsap.utils.toArray(panel.current).forEach((panel, idx) => {
        gsap.to(panel, {
          backgroundPosition: "-100px",
          duration: 1.4,
          scrollTrigger: {
            trigger: panel,
            toggleActions: "play reverse play reverse",
            scroller: services.current,
          },
        })

        // Bullet scaling animation
        const bullet = document.querySelector(`.bullet-${idx + 1}`)
        if (bullet) {
          gsap.to(bullet, {
            scale: 1.8,
            duration: 0.6,
            scrollTrigger: {
              trigger: panel,
              toggleActions: "play reverse play reverse",
              scroller: services.current, // Ensure scroller is correctly set
            },
          })
        }
      })
    })

    return () => ctx.revert()
  }, [])

  const slides = [
    {
      title: "Architectural Design and Planning",
      color: "text-red-400",
      img: img1,
    },
    {
      title: "Building Permits and Approvals",
      color: "text-orange-400",
      img: img2,
    },
    {
      title: "Site Preparation and Excavation",
      color: "text-blue-400",
      img: img3,
    },
    {
      title: "Foundation and Framing",
      color: "text-green-400",
      img: img4,
    },
    // {
    //   title: "Plumbing and Electrical Work",
    //   color: "text-red-400",
    //   //   img: img_5,
    // },
    // {
    //   title: "Flooring and Painting",
    //   color: "text-red-400",
    //   //   img: img_6,
    // },
    // {
    //   title: "Roofing and Siding",
    //   color: "text-red-400",
    //   //   img: img_7,
    // },
    // {
    //   title: "Landscaping and Fencing",
    //   color: "text-red-400",
    //   //   img: img_8,
    // },
  ]

  const addToRef = (el) => {
    if (el && !panel.current.includes(el)) {
      panel.current.push(el)
    }
  }

  return (
    <div
      ref={services}
      className="max-h-screen lg:mt-24 lg:px-12 overflow-y-scroll snap-y snap-mandatory"
    >
      <div className="absolute w-[10%] gap-12 flex flex-col justify-center h-screen">
        {slides.map((bullet, idx) => {
          return (
            <img
              key={idx}
              src={bullet.img}
              className={`bullet-${
                idx + 1
              } w-12 h-12 rounded-full object-cover`}
              alt="Service Image"
            />
          )
        })}
      </div>

      {slides.map((slide, idx) => {
        return (
          <section key={idx} className="h-screen text-white flex snap-start">
            <div className="w-[40%] leading-8 flex flex-col items-center justify-center h-full">
              <h2 className={`${slide.color} lg:text-[2rem]`}>{slide.title}</h2>
            </div>
            <div className="w-[60%]">
              <div
                ref={addToRef}
                className="mask"
                style={{
                  backgroundImage: `url(${slide.img})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  height: "80%",
                }}
              ></div>
            </div>
          </section>
        )
      })}
    </div>
  )
}
