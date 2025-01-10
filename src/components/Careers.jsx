import { useState } from "react"
import { FaHeart } from "react-icons/fa"
import { FaBuilding } from "react-icons/fa"
import { FiArrowUpRight } from "react-icons/fi"
import { FaBriefcase } from "react-icons/fa"
import animation from "../animation"
import Swal from "sweetalert2"
import emailjs from "emailjs-com"
import career from "../assets/career.jpg"

export const Careers = () => {
  const benefits = [
    {
      icon: <FaBriefcase />,
      title: "Your work matters",
      desc: "We offer every competitive salaries and equity, with a culture built around ownership of your work. Every team member is integral to the success of the company.",
    },
    {
      icon: <FaHeart />,
      title: "Health and wellness",
      desc: "We believe wellness fuels greatness, and we're here to support you every step of the way. Together, let's build a workplace where your well-being comes first, always.",
    },
    {
      icon: <FaBuilding />,
      title: "Beautiful workplace",
      desc: "Step into the office and discover a workplace designed to inspire and rejuvenate every day. At S.R. Constructions, beauty isn't just outside—it's the energy and care woven into every corner.",
    },
  ]

  return (
    <section className="">
      <div
        className="relative bg-[url('https://images.unsplash.com/photo-1723107638858-331404b1a09a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-center"
        style={{
          paddingTop: "500px",
        }}
      >
        <div className="w-[90%] lg:w-[60%] flex flex-col gap-6 text-center absolute -bottom-36 left-[50%] -translate-x-[50%] bg-white mx-auto px-6 py-4 lg:py-8 shadow-lg rounded-xl">
          <div className="flex flex-col gap-2 items-center">
            <p className="capitalize text-[10px] md:text-xs text-gray-500 tracking-wider">
              Careers at <span className="">S.R. Constructions</span>
            </p>
            <h3 className="font-bold text-3xl md:text-4xl lg:text-5xl tracking-wider">
              Build what the world{" "}
              <span className="text-boldClr italic">needs</span>.
            </h3>
            <p className="font-light text-xs md:text-sm lg:max-w-[85ch] tracking-wide text-gray-500">
              We are shaping the future of construction. If you are excited by
              the prospect of unlocking the world's potential by building
              beautiful and desired structures, join us.
            </p>

            <p className="text-highlight hover:text-boldClr transition-all cursor-pointer">
              <a href="#form" className="flex items-center gap-1">
                Apply for job <FiArrowUpRight className="animate-pulse" />{" "}
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-1 items-center">
            <h3 className="font-bold text-xl md:text-3xl tracking-wide">
              Supported with exceptional{" "}
              <span className="text-boldClr italic">benefits</span>.
            </h3>
            <p className="font-light text-xs md:text-sm lg:max-w-[85ch]  tracking-wide text-gray-500">
              We appreciate the great work our team does everyday. That's why we
              offer excellent benefits package that ensures each person has what
              they need to succeed inside and outside of the office.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 text-start mt-44 md:w-[90%] lg:w-[60%] mx-auto p-6">
        {benefits.map((benefit, idx) => {
          return (
            <div key={idx} className="flex flex-col gap-4">
              <span className="text-xl lg:text-3xl">{benefit.icon}</span>
              <h4 className="font-semibold text-3xl tracking-wide text-highlight">
                {benefit.title}
              </h4>
              <p className="text-gray-500 text-sm">{benefit.desc}</p>
            </div>
          )
        })}
      </div>

      <div id="form" className="md:w-[60%] mx-auto pb-12 p-4">
        <ContactForm />
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
    </section>
  )
}

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    post: "",
    address: "",
    relocate: "",
    joinTime: "",
    experience: "",
  })

  const posts = [
    "Accountant",
    "Superidendant - Forman",
    "Field Engineer",
    "Field Engineer Intern",
  ]

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
    if (!formData.post) newErrors.post = "Please select a post"

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      console.log(validationErrors)
      return
    }
    setLoading(true)
    setMessage("")

    const serviceID = import.meta.env.VITE_serviceID
    const templateID = import.meta.env.VITE_jobTemplateID
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
          console.log(formData)
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            number: "",
            post: "",
            address: "",
            relocate: "",
            joinTime: "",
            experience: "",
          })
          setErrors({})
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
    <div className="flex flex-col gap-6 w-fit rounded-xl bg-white shadow-2xl overflow-hidden">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col-reverse xl:flex-row-reverse gap-2">
          {/* question div */}
          <div className="flex flex-col gap-4 p-4">
            <div className="flex flex-col lg:flex-row gap-2 md:gap-6">
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
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName}
                  </p>
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
                Job Post <span className="text-red-500">*</span>
              </label>
              <select
                className="border-2 bg-white capitalize border-neutral-200 focus:border-neutral-400 transition-all rounded-lg outline-none px-2 py-1 text-center text-neutra-700 placeholder:text-neutral-300"
                name="post"
                value={formData.post}
                onChange={handleChange}
                id=""
                required
              >
                <option value="" disabled>
                  Select a post
                </option>
                {posts.map((post, idx) => {
                  return (
                    <option key={idx} value={post}>
                      {post}
                    </option>
                  )
                })}
              </select>
              {errors.post && (
                <p className="text-red-500 text-sm mt-1">{errors.post}</p>
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
            <div className="flex flex-col">
              <label className="lg:text-lg">
                Joining Time <span className="text-red-500">*</span>
              </label>
              <input
                className="border-2 border-neutral-200 focus:border-neutral-400 transition-all rounded-lg outline-none px-2 py-1 text-center text-neutra-700 placeholder:text-neutral-300"
                placeholder="Time period in days"
                autoComplete="off"
                type="number"
                name="joinTime"
                value={formData.joinTime}
                onChange={handleChange}
                required
              />
              {errors.joinTime && (
                <p className="text-red-500 text-sm mt-1">{errors.joinTime}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="lg:text-lg">
                Experience <span className="text-red-500">*</span>
              </label>
              <input
                className="border-2 border-neutral-200 focus:border-neutral-400 transition-all rounded-lg outline-none px-2 py-1 text-center text-neutra-700 placeholder:text-neutral-300"
                placeholder="Time period in years"
                autoComplete="off"
                type="number"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
              />
              {errors.experience && (
                <p className="text-red-500 text-sm mt-1">{errors.experience}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="lg:text-lg">
                Address <span className="text-red-500">*</span>
              </label>
              <input
                className="border-2 border-neutral-200 focus:border-neutral-400 transition-all rounded-lg outline-none px-2 py-1 text-center text-neutra-700 placeholder:text-neutral-300"
                placeholder="#1234, Kalka, Haryana"
                autoComplete="off"
                type="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
              {errors.address && (
                <p className="text-red-500 text-sm mt-1">{errors.address}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="lg:text-lg">
                Need to Relocate? <span className="text-red-500">*</span>
              </label>
              <select
                className="border-2 bg-white capitalize border-neutral-200 focus:border-neutral-400 transition-all rounded-lg outline-none px-2 py-1 text-center text-neutra-700 placeholder:text-neutral-300"
                name="relocate"
                value={formData.relocate}
                onChange={handleChange}
                id=""
                required
              >
                <option value="" disabled>
                  Relocation Required?
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              {errors.relocate && (
                <p className="text-red-500 text-sm mt-1">{errors.relocate}</p>
              )}
            </div>
            <button
              className="cursor-pointer w-full outline-none focus:bg-green-900 uppercase font-semibold text-center py-2 mt-2 rounded-full text-white bg-green-600 hover:bg-green-900 transition-all duration-300"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>

          <div className="overflow-hidden">
            <img
              src={career}
              alt="Image"
              className="hover:scale-110 transition-all duration-700 h-full w-full"
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default animation(Careers)
