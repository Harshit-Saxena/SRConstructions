import animation from "../animation"
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
      <ContactAndMap />
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
    service: "",
  })

  const sectors = ["Industrial", "Residential-Commercial"]

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const validate = () => {
    const newErrors = {}

    if (!formData.firstName) newErrors.firstName = "First name is required"
    if (!formData.lastName) newErrors.lastName = "Last name is required"
    if (!formData.email) newErrors.email = "Email is required"
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid"
    if (!formData.number) newErrors.number = "Phone number is required"
    if (
      formData.number &&
      !/^((\+91?)|\+)?[7-9][0-9]{9}$/.test(formData.number)
    )
      newErrors.number = "Phone number is invalid"
    if (!formData.service) newErrors.service = "Please select a service"

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setLoading(true)
    setMessage("")

    const serviceID = import.meta.env.VITE_serviceID
    const templateID = import.meta.env.VITE_templateID
    const userID = import.meta.env.VITE_publicValue

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(
        (response) => {
          setLoading(true)
          setMessage("Email sent successfully!")
          Swal.fire({
            icon: "success",
            html: `
                <div class="flex flex-col gap-4">
                    <p class="text-neutral-500 font-Sora">
                    Your message is stored with us. We will contact you soon.
                    </p>
                    <div class="flex justify-center gap-6">
                        <a class="text-blue-500 hover:text-blue-800 transition-all" href="/services">Our services</a>
                        <a class="text-blue-500 hover:text-blue-800 transition-all" href="/about">Know about us</a>
                    </div>
                </div>
                `,
            showCloseButton: true,
            showCancelButton: false,
            showConfirmButton: false,
          })
          console.log("SUCCESS!", response.status, response.text)
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            number: "",
            service: "",
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
    <div className="flex flex-col gap-6 md:gap-12 px-4 md:ml-12 lg:ml-24 py-12 pt-6 rounded-xl bg-white shadow-2xl">
      <form
        className="w-full md:w-fit flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col sm:flex-row gap-2 md:gap-12">
          <div className="flex flex-col">
            <label className="lg:text-lg">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              className="border-2 border-neutral-200 focus:border-neutral-400 transition-all rounded-lg outline-none capitalize px-2 py-1 text-center text-neutral-700 placeholder:text-neutral-300"
              placeholder="abc"
              autoComplete="off"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="lg:text-lg">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              className="border-2 border-neutral-200 focus:border-neutral-400 transition-all rounded-lg outline-none capitalize px-2 py-1 text-center text-neutra-700 placeholder:text-neutral-300"
              placeholder="xyz"
              autoComplete="off"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <label className="lg:text-lg">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            className="border-2 border-neutral-200 focus:border-neutral-400 transition-all rounded-lg outline-none px-2 py-1 text-center text-neutra-700 placeholder:text-neutral-300"
            placeholder="you@email.com"
            autoComplete="off"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div className="flex flex-col">
          <label className="lg:text-lg">
            Service <span className="text-red-500">*</span>
          </label>
          <select
            className="border-2 bg-white capitalize border-neutral-200 focus:border-neutral-400 transition-all rounded-lg outline-none px-2 py-1 text-center text-neutra-700 placeholder:text-neutral-300"
            name="service"
            value={formData.service}
            onChange={handleChange}
            id=""
            required
          >
            <option value="" disabled>
              Select a service
            </option>
            {sectors.map((sector, idx) => {
              return (
                <option key={idx} value={sector}>
                  {sector}
                </option>
              )
            })}
          </select>
          {errors.service && (
            <p className="text-red-500 text-sm mt-1">{errors.service}</p>
          )}
        </div>
        <div className="flex flex-col">
          <label className="lg:text-lg">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            className="border-2 border-neutral-200 focus:border-neutral-400 transition-all rounded-lg outline-none px-2 py-1 text-center text-neutra-700 placeholder:text-neutral-300"
            placeholder="+91 9876543210"
            autoComplete="off"
            type="tel"
            name="number"
            value={formData.number}
            onChange={handleChange}
            required
          />
          {errors.number && (
            <p className="text-red-500 text-sm mt-1">{errors.number}</p>
          )}
        </div>
        <button
          className="cursor-pointer w-full outline-none focus:bg-green-900 uppercase font-semibold text-center py-2 mt-2 rounded-full text-white bg-green-600 hover:bg-green-900 transition-all duration-300"
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
      style={{ height: "35rem", zIndex: "100" }}
      center={[30.77, 76.89569]}
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
    <div style={{ marginTop: "75px" }} className="relative h-screen">
      <div className="grid grid-cols-1 gap-2 place-items-center lg:place-items-start text-center p-8 lg:px-32">
        <p className="text-lg text-primary-purple uppercase font-semibold">
          contact us
        </p>
        <div className="grid grid-cols-1 gap-2 lg:text-start lg:grid-cols-2">
          <h2 className="text-4xl lg:text-7xl font-Kalina text-highlight">
            Get in touch
          </h2>

          <div className="grid grid-cols-1 gap-4 md:max-w-[55ch] lg:max-w-[75ch]">
            <p className="text-xs md:text-base lg:text-lg text-neutral-500">
              Whether you are ready to get started or simply have a question, we
              are here to assist you. Connect with us anytime!
            </p>
          </div>
        </div>
      </div>

      <div className="absolute z-[999] top-[41%] lg:top-[40%] left-[50%] -translate-x-[50%]">
        <ContactForm />
      </div>
      <div className="">
        <Map />
      </div>
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

export default animation(ContactUs)
