import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { motion } from "framer-motion"
import SteelBird from "../assets/SteelBird.webp"
import GujarBhawan from "../assets/gujarBhawan.jpg"
import complexes from "../assets/complexes.jpg"
import flats from "../assets/flats.jpg"
import columbus from "../assets/columbus.jpg"
import alliance from "../assets/alliance.jpg"
import prosperity from "../assets/prosperity.jpg"
import milestone from "../assets/milestone.jpg"
import cipla from "../assets/cipla.png"
import animation from "../animation"

const Projects = () => {
  return (
    <motion.div
      style={{ paddingTop: "95px" }}
      className="px-2"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
    >
      <p className="bg-gray-100 mx-6 py-6 text-center my-4 text-highlight text-2xl lg:text-4xl">
        Industrial Projects
      </p>
      <VerticalTimeline lineColor="#71B706">
        <VerticalTimelineElement
          contentStyle={{ borderRadius: "10px", maxWidth: "40rem" }}
          iconStyle={{ background: "#ffffff" }}
          icon={
            <FontAwesomeIcon
              icon={faCircle}
              size="xs"
              style={{ color: "#74C0FC" }}
            />
          }
        >
          <div className="overflow-hidden rounded-md">
            <img
              src={SteelBird}
              className="hover:scale-110 transition-all duration-500 w-full"
              alt="SteelBird Helmets"
            />
          </div>
          <p style={{ fontSize: "1.3rem", fontWeight: 400, color: "#fc6f03" }}>
            SteelBird Helmets
          </p>
          <p style={{ marginTop: "-4px", color: "lightgrey" }}>Baddi</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ borderRadius: "10px", maxWidth: "40rem" }}
          iconStyle={{ background: "#ffffff", color: "#fff" }}
          icon={
            <FontAwesomeIcon
              icon={faCircle}
              size="xs"
              style={{ color: "#74C0FC" }}
            />
          }
        >
          <div className="overflow-hidden rounded-xl">
            <img
              src={cipla}
              className="hover:scale-110 transition-all duration-700 w-full"
              alt="SteelBird Helmets"
            />
          </div>
          <p style={{ fontSize: "1.3rem", fontWeight: 400, color: "#fc6f03" }}>
            Cipla Pharma
          </p>
          <p style={{ marginTop: "-4px", color: "lightgrey" }}>Baddi</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ borderRadius: "10px", maxWidth: "40rem" }}
          iconStyle={{ background: "#ffffff", color: "#fff" }}
          icon={
            <FontAwesomeIcon
              icon={faCircle}
              size="xs"
              style={{ color: "#74C0FC" }}
            />
          }
        >
          <div className="overflow-hidden rounded-xl">
            <img
              src={columbus}
              className="hover:scale-110 transition-all duration-700 w-full"
              alt="Columbus Shoes"
            />
          </div>
          <p style={{ fontSize: "1.3rem", fontWeight: 400, color: "#fc6f03" }}>
            Columbus Shoes
          </p>
          <p style={{ marginTop: "-4px", color: "lightgrey" }}>Baddi</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ borderRadius: "10px", maxWidth: "40rem" }}
          iconStyle={{ background: "#ffffff", color: "#fff" }}
          icon={
            <FontAwesomeIcon
              icon={faCircle}
              size="xs"
              style={{ color: "#74C0FC" }}
            />
          }
        >
          <div className="overflow-hidden rounded-xl">
            <img
              src={alliance}
              className="hover:scale-110 transition-all duration-700 lg:h-[25rem] w-full"
              alt="Alliance biotech"
            />
          </div>
          <p style={{ fontSize: "1.3rem", fontWeight: 400, color: "#fc6f03" }}>
            Alliance Biotech
          </p>
          <p style={{ marginTop: "-4px", color: "lightgrey" }}>Baddi</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ borderRadius: "10px", maxWidth: "40rem" }}
          iconStyle={{ background: "#ffffff", color: "#fff" }}
          icon={
            <FontAwesomeIcon
              icon={faCircle}
              size="xs"
              style={{ color: "#74C0FC" }}
            />
          }
        >
          <div className="overflow-hidden rounded-xl">
            <img
              src={prosperity}
              className="hover:scale-110 transition-all duration-700 lg:h-[25rem] w-full"
              alt="Prosperity 6 Pharma"
            />
          </div>
          <p style={{ fontSize: "1.3rem", fontWeight: 400, color: "#fc6f03" }}>
            Prosperity 6 Pharma
          </p>
          <p style={{ marginTop: "-4px", color: "lightgrey" }}>Baddi</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ borderRadius: "10px", maxWidth: "40rem" }}
          iconStyle={{ background: "#ffffff", color: "#fff" }}
          icon={
            <FontAwesomeIcon
              icon={faCircle}
              size="xs"
              style={{ color: "#74C0FC" }}
            />
          }
        >
          <div className="overflow-hidden rounded-xl">
            <img
              src={milestone}
              className="hover:scale-110 transition-all duration-700 h-[13rem] lg:h-[20rem] w-full"
              alt="Milestone Gears"
            />
          </div>
          <p style={{ fontSize: "1.3rem", fontWeight: 400, color: "#fc6f03" }}>
            Milestone Gears
          </p>
          <p style={{ marginTop: "-4px", color: "lightgrey" }}>Baddi</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <p className="bg-gray-100 mx-6 py-6 text-center my-20 lg:my-36 text-highlight text-2xl lg:text-4xl ">
        Residential / Commercial Projects
      </p>
      <VerticalTimeline lineColor="#71B706">
        <VerticalTimelineElement
          contentStyle={{ borderRadius: "10px", maxWidth: "40rem" }}
          //   contentArrowStyle={{ borderRight: "10px solid grey" }}
          iconStyle={{ background: "#ffffff" }}
          icon={
            <FontAwesomeIcon
              icon={faCircle}
              size="xs"
              style={{ color: "#74C0FC" }}
            />
          }
        >
          <div className="overflow-hidden rounded-xl">
            <img
              src={GujarBhawan}
              className="hover:scale-110 transition-all duration-700 lg:h-[30rem] w-full"
              alt="Gurjar Bhawan"
            />
          </div>
          <p style={{ fontSize: "1.3rem", fontWeight: 400, color: "#fc6f03" }}>
            Gurjar Bhawan
          </p>
          <p style={{ marginTop: "-4px", color: "lightgrey" }}>Panchkula</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ borderRadius: "10px", maxWidth: "40rem" }}
          iconStyle={{ background: "#ffffff", color: "#fff" }}
          icon={
            <FontAwesomeIcon
              icon={faCircle}
              size="xs"
              style={{ color: "#74C0FC" }}
            />
          }
        >
          <div className="overflow-hidden rounded-xl">
            <img
              src={complexes}
              className="hover:scale-110 transition-all duration-700 lg:h-[35rem] w-full"
              alt="Condominium developments"
            />
          </div>
          <p style={{ fontSize: "1.3rem", fontWeight: 400, color: "#fc6f03" }}>
            Condominium developments
          </p>
          <p style={{ marginTop: "-4px", color: "lightgrey" }}>Noida</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ borderRadius: "10px", maxWidth: "40rem" }}
          iconStyle={{ background: "#ffffff", color: "#fff" }}
          icon={
            <FontAwesomeIcon
              icon={faCircle}
              size="xs"
              style={{ color: "#74C0FC" }}
            />
          }
        >
          <div className="overflow-hidden rounded-xl">
            <img
              src={flats}
              className="hover:scale-110 transition-all duration-700 lg:h-[35rem] w-full"
              alt="Apartments"
            />
          </div>
          <p style={{ fontSize: "1.3rem", fontWeight: 400, color: "#fc6f03" }}>
            Apartments
          </p>
          <p style={{ marginTop: "-4px", color: "lightgrey" }}>Noida</p>
        </VerticalTimelineElement>
      </VerticalTimeline>

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
    </motion.div>
  )
}

export default animation(Projects)
