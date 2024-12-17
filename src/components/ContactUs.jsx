import animation from "../animation"
import { ReactLenis } from "lenis/dist/lenis-react"
import { Marker, MapContainer, TileLayer, Popup } from "react-leaflet"
import { useState } from "react"
import Swal from "sweetalert2"
import "leaflet/dist/leaflet.css"
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Icon } from "leaflet"

import emailjs from "emailjs-com"

const ContactUs = () => {
  return (
    <div className="bg-bgClr flex flex-col gap-6">
      <ReactLenis
        root
        options={{
          lerp: 0.05,
          // infinite: true,
          syncTouch: true,
        }}
      >
        <ContactAndMap />
      </ReactLenis>
    </div>
  )
}

// Form
const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
  })

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage("")

    const serviceID = import.meta.env.VITE_serviceID
    const templateID = import.meta.env.VITE_templateID
    const userID = import.meta.env.VITE_publicValue

    console.log(userID)

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(
        (response) => {
          setLoading(true)
          setMessage("Email sent successfully!")
          Swal.fire({
            icon: "success",
            text: `${message}`,
            footer: "<b>We will contact you real soon!</b>",
          })
          console.log("SUCCESS!", response.status, response.text)
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            number: "",
          })
        },
        (err) => {
          setLoading(false)
          setMessage("Failed to send email.")
          Swal.fire({
            icon: "error",
            text: `${message}`,
            footer: "You can contact us through call if it happens again",
          })
          console.error("FAILED...", err)
        }
      )
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div className="flex flex-col gap-6 md:gap-12 px-4 md:ml-12 lg:ml-24 py-12">
      <h2 className="text-5xl font-Kalina">Get in touch</h2>
      <p className="text-lg lg:text-3xl max-w-[32ch] md:max-w-[35ch] text-neutral-500">
        We're here to help. Connect with us with an query and we'd be happy to
        discuss it !
      </p>
      <form
        className="w-full md:w-fit flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col sm:flex-row gap-2 md:gap-12">
          <div className="flex flex-col">
            <label className="lg:text-lg">First Name</label>
            <input
              className="border-2 border-neutral-400 rounded-lg outline-none capitalize px-2 py-1 text-center text-neutral-700"
              placeholder="abc"
              autoComplete="off"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="lg:text-lg">Last Name</label>
            <input
              className="border-2 border-neutral-400 rounded-lg outline-none capitalize px-2 py-1 text-center text-neutra-700"
              placeholder="xyz"
              autoComplete="off"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="lg:text-lg">Email</label>
          <input
            className="border-2 border-neutral-400 rounded-lg outline-none px-2 py-1 text-center text-neutra-700"
            placeholder="you@email.com"
            autoComplete="off"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="lg:text-lg">Phone Number</label>
          <input
            className="border-2 border-neutral-400 rounded-lg outline-none px-2 py-1 text-center text-neutra-700"
            placeholder="+91 9876543210"
            autoComplete="off"
            type="tel"
            name="number"
            value={formData.number}
            onChange={handleChange}
            required
          />
        </div>
        <button
          className="cursor-pointer w-full text-center py-2 mt-2 rounded-full text-white bg-blue-500 hover:bg-blue-900 transition-all duration-300"
          type="submit"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  )
}

// Map section
const Map = () => {
  const position = [30.77517, 76.89569]
  return (
    <MapContainer
      style={{ height: "40rem", zIndex: "100" }}
      center={[30.77517, 76.89569]}
      zoom={15}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright"></a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={position}
        icon={
          new Icon({
            iconUrl: markerIconPng,
            iconSize: [25, 41],
          })
        }
      >
        <Popup>
          <span className="lg:text-xl font-semibold">S.R. Constructions</span>
          <br />{" "}
          <a
            className="no-underline hover:underline"
            href="https://maps.app.goo.gl/4VkJsiMQbHH9ceYV9"
          >
            House no. 253, Amravati Enclave, Surajpur, Shimla-Kalka Highway
          </a>
        </Popup>
      </Marker>
    </MapContainer>
  )
}

// Parent Component
const ContactAndMap = () => {
  return (
    <div
      style={{ marginTop: "75px" }}
      className="flex flex-col-reverse lg:flex-row lg:justify-center gap-2 bg-white"
    >
      <div className="flex-1">
        <ContactForm />
      </div>
      <div className="flex-1">
        <Map />
      </div>
    </div>
  )
}

export default animation(ContactUs)
