import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { motion } from "framer-motion"
import SteelBird from "../assets/SteelBird.webp"
import cipla from "../assets/cipla.png"

export const Projects = () => {
  return (
    <motion.div
      style={{ paddingTop: "75px" }}
      className="px-2"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
    >
      <VerticalTimeline lineColor="#71B706">
        <VerticalTimelineElement
          contentStyle={{ borderRadius: "10px" }}
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
              src={SteelBird}
              className="hover:scale-110 transition-all duration-700"
              alt="SteelBird Helmets"
            />
          </div>
          <p style={{ fontSize: "1.3rem", fontWeight: 400, color: "#fc6f03" }}>
            SteelBird Helmets
          </p>
          <p style={{ marginTop: "-4px", color: "lightgrey" }}>Baddi</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#ffffff", color: "#fff" }}
          icon={
            <FontAwesomeIcon
              icon={faCircle}
              size="xs"
              style={{ color: "#74C0FC" }}
            />
          }
        >
          {/* TODO: Add cipla pharma img */}
          <div className="overflow-hidden rounded-xl">
            <img
              src={cipla}
              className="hover:scale-110 transition-all duration-700"
              alt="SteelBird Helmets"
            />
          </div>
          <p style={{ fontSize: "1.3rem", fontWeight: 400, color: "#fc6f03" }}>
            Cipla Pharma
          </p>
          <p style={{ marginTop: "-4px", color: "lightgrey" }}>Baddi</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#ffffff" }}
          icon={
            <FontAwesomeIcon
              icon={faCircle}
              size="xs"
              style={{ color: "#74C0FC" }}
            />
          }
        >
          <h3 className="font-bold text-xl lg:text-2xl vertical-timeline-element-title">
            Project 3
          </h3>
          <p className="text-lg vertical-timeline-element-subtitle">
            Lorem ipsum dolor sit amet.
          </p>
          <p className="">Lorem ipsum dolor sit amet.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#ffffff" }}
          icon={
            <FontAwesomeIcon
              icon={faCircle}
              size="xs"
              style={{ color: "#74C0FC" }}
            />
          }
        >
          <h3 className="font-bold text-xl lg:text-2xl vertical-timeline-element-title">
            Project 4
          </h3>
          <p className="text-lg vertical-timeline-element-subtitle">
            Lorem ipsum dolor sit amet.
          </p>
          <p className="">College</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#ffffff" }}
          icon={
            <FontAwesomeIcon
              icon={faCircle}
              size="xs"
              style={{ color: "#74C0FC" }}
            />
          }
        >
          <h3 className="font-bold text-xl lg:text-2xl vertical-timeline-element-title">
            Project 5
          </h3>
          <p className="text-lg vertical-timeline-element-subtitle">
            Lorem ipsum dolor sit amet.
          </p>
          <p className="">College</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#ffffff" }}
          icon={
            <FontAwesomeIcon
              icon={faCircle}
              size="xs"
              style={{ color: "#74C0FC" }}
            />
          }
        >
          <h3 className="font-bold text-xl lg:text-2xl vertical-timeline-element-title">
            Project 6
          </h3>
          <p className="text-lg vertical-timeline-element-subtitle">
            Lorem ipsum dolor sit amet.
          </p>
          <p className="">Lorem ipsum dolor sit amet.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#ffffff" }}
          icon={
            <FontAwesomeIcon
              icon={faCircle}
              size="xs"
              style={{ color: "#74C0FC" }}
            />
          }
        >
          <h3 className="font-bold text-xl lg:text-2xl vertical-timeline-element-title">
            Project 7
          </h3>
          <p className="text-lg vertical-timeline-element-subtitle">
            Lorem ipsum dolor sit amet.
          </p>
          <p className="">Lorem ipsum dolor sit amet.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#ffffff", color: "red" }}
          icon={
            <FontAwesomeIcon
              icon={faCircle}
              size="xs"
              style={{ color: "#74C0FC" }}
            />
          }
        >
          <h3 className="font-bold text-xl lg:text-2xl vertical-timeline-element-title">
            Project 8
          </h3>
          <p className="text-lg vertical-timeline-element-subtitle">
            Lorem ipsum dolor sit amet.
          </p>
          <p className="">Lorem ipsum dolor sit amet.</p>
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
