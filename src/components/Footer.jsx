import { Link } from "react-router-dom"
// import logo from "../assets/images/BF_logo.png"
// import JD from "../assets/svg/JD.svg"
// import Google from "../assets/svg/Google.svg"
// import Facebook from "../assets/svg/Facebook.svg"
// import Instagram from "../assets/svg/Instagram.svg"
// import Tooltip from "@mui/material/Tooltip"
// import call from "../assets/svg/call.svg"
// import email from "../assets/svg/email.svg"
// import location from "../assets/svg/location.svg"
import { Details } from "./Details"

export const Footer = () => {
  const currentYear = new Date().getFullYear() // for the copyright to update yearly

  const details = [
    {
      //   src: location,
      detail: " ",
      className: "w-6 text-primary-purple",
      href: "https://maps.app.goo.gl/5vvCMqU7K3SHzynB6",
    },
    {
      //   src: email,
      detail: "srConstructions@gmail.com",
      className: "text-primary-purple",
      href: "mailto:srConstructions@gmail.com",
    },
    {
      //   src: call,
      detail: "+91 7087080786",
      className: "text-primary-purple",
      href: "tel:+1234567890",
    },
  ]

  return (
    <footer className="grid grid-cols-1 px-12 py-8 gap-12 bg-bgClr">
      <p className="h-1 bg-boldClr"></p>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 place-items-center">
        {/* left div */}
        <div className="grid grid-cols-1 gap-4">
          <div className="flex flex-col items-center gap-2">
            <Link to={"/"}>
              <img
                loading="lazy"
                className="w-24 lg:w-36"
                // src={logo}
                alt="SR Constructions"
              />
            </Link>
          </div>

          {/* //TODO: Add social links for company */}
          {/* socials */}
          <div className="flex gap-6 justify-between">
            <div className="flex gap-6">
              {/* <Tooltip title="Just Dial" arrow> */}
              <a href="" target="_blank">
                <img loading="lazy" alt="Just Dial" />
              </a>
              {/* </Tooltip> */}
              {/* <Tooltip title="Instagram" arrow> */}
              <a href="" target="_blank">
                <img loading="lazy" alt="Instagram" />
              </a>
              {/* </Tooltip> */}
              {/* <Tooltip title="Facebook" arrow> */}
              <a href="" target="_blank">
                <img loading="lazy" alt="Facebook" />
              </a>
              {/* </Tooltip> */}
              {/* <Tooltip title="Google" arrow> */}
              <a href="" target="_blank">
                <img loading="lazy" alt="Google" />
              </a>
              {/* </Tooltip> */}
            </div>
          </div>
        </div>

        {/* middle div */}
        <div className="grid grid-cols-1 place-items-center gap-4 font-Sora">
          <p className="capitalize text-neutral-800 font-semibold">
            our services
          </p>
          <div className="flex flex-row gap-8 text-neutral-800">
            <ul className="grid grid-cols-1 gap-4">
              <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 place-items-center lg:place-items-start">
                <Link to={"/real_estate"}>
                  <li className="whitespace-nowrap text-sm text-neutral-800">
                    Architectural Design and Planning
                  </li>
                </Link>
                <Link to={"/pvt_loan"}>
                  <li className="whitespace-nowrap text-sm text-neutral-800">
                    Building Permits and Approvals
                  </li>
                </Link>
              </div>
              <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 place-items-center lg:place-items-start">
                <Link to={"/loan_property"}>
                  <li className="whitespace-nowrap text-sm text-neutral-800">
                    Site Preparation and Excavation
                  </li>
                </Link>
                <Link to={"/auto_loan"}>
                  <li className="whitespace-nowrap text-sm text-neutral-800">
                    Foundation and Framing
                  </li>
                </Link>
              </div>
              <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 place-items-center lg:place-items-start">
                <Link to={"/micro_fund"}>
                  <li className="whitespace-nowrap text-sm text-neutral-800">
                    Plumbing and Electrical Work
                  </li>
                </Link>
                <Link to={"/funds"}>
                  <li className="whitespace-nowrap text-sm text-neutral-800">
                    Flooring and Painting
                  </li>
                </Link>
              </div>
              <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 place-items-center lg:place-items-start">
                <Link to={"/loan_gold"}>
                  <li className="whitespace-nowrap text-sm text-neutral-800">
                    Roofing and Siding
                  </li>
                </Link>
                <Link to={"/edu_loan"}>
                  <li className="whitespace-nowrap text-sm text-neutral-800">
                    Landscaping and Fencing
                  </li>
                </Link>
              </div>
            </ul>
          </div>
        </div>

        {/* right div */}
        {/* //TODO: Add company details  */}
        <div className="grid grid-cols-1 place-items-center lg:place-items-start gap-4 font-Sora w-full text-neutral-800">
          <p className="capitalize font-semibold text-center text-neutral-800">
            contact us
          </p>
          {details.map((data, idx) => {
            return (
              <Details
                className={data?.className}
                key={idx}
                src={data?.src}
                detail={data?.detail}
                href={data?.href}
              />
            )
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <hr />

        <div className="flex flex-col-reverse gap-4 text-center lg:flex-row justify-between font-Sora text-neutral-800 text-sm lg:text-base">
          <p>{`Copyright ©${currentYear} All rights reserved`}</p>
          <p>
            Designed and Developed By{" "}
            <a
              className="underline font-semibold"
              href="#" //TODO: Add link
              target="_blank"
            >
              UmaServices
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
