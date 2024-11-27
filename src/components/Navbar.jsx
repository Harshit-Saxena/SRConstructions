import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../assets/logo.svg"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  const navItems = [
    { id: 1, link: "services", to: "/services" },
    { id: 2, link: "about us", to: "/about" },
    { id: 3, link: "contact us", to: "/contact" },
  ]

  return (
    <nav className="w-full fixed z-[999]">
      <div className="md:flex bg-white p-4 sm:px-6 items-center justify-between">
        {/* Logo DIv */}
        <div className="flex items-center justify-between">
          {/* Icon and title Div */}
          <div className="flex items-center gap-2">
            <Link to={"/"}>
              <img
                loading="lazy"
                className="w-8 lg:w-10 inline"
                src={logo}
                alt="SR Constructions"
              />
              <span className="text-xs font-bold text-black">
                S.R. Constructions
              </span>
            </Link>
          </div>
          {/* Menu Icons */}
          <div
            onClick={() => {
              setOpen(!open)
            }}
            className="md:hidden"
          >
            {open ? (
              <CloseIcon
                className="cursor-pointer text-gray-400 hover:text-black transition-all"
                fontSize="large"
              />
            ) : (
              <MenuIcon
                className="cursor-pointer text-gray-400 hover:text-black transition-all"
                fontSize="large"
              />
            )}
          </div>
        </div>

        {/* Nav Links */}
        <ul
          className={`flex flex-col md:flex-row gap-4 md:gap-6 md:items-center bg-white py-6 md:py-0 left-0 px-4 transition-all duration-200 absolute md:static w-full md:w-auto z-[100] ${
            open ? "top-16 opacity-100" : "top-[-490px]"
          } md:opacity-100`}
        >
          {navItems.map((link) => {
            return (
              <Link
                to={link.to}
                className="hover:translate-x-1 hover:-translate-y-2 transition-all px-2 py-1 text-md lg:text-lg text-neutral-700 hover:text-highlight w-fit capitalize"
                key={link.id}
                onClick={() => setOpen(false)}
              >
                {link.link}
              </Link>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
