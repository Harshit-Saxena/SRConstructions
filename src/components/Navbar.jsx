import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import logo from "../assets/logo.svg"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scrolledDown, setScrolledDown] = useState(false)

  const navItems = [
    { id: 1, link: "about us", to: "/about" },
    { id: 2, link: "services", to: "/services" },
    { id: 3, link: "projects", to: "/projects" },
    { id: 4, link: "careers", to: "/careers" },
    { id: 5, link: "propertier", to: "/propertier" },
    { id: 6, link: "contact us", to: "/contact" },
  ]

  useEffect(() => {
    if (location.pathname !== "/") {
      // If not on homepage, keep the styling consistent
      setScrolledDown(true)
      return
    } else {
      setScrolledDown(false)
    }

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 3) {
        setScrolledDown(true)
      } else {
        setScrolledDown(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [location.pathname])

  return (
    <nav
      className={`w-full fixed z-[12000] ${
        scrolledDown ? "bg-white" : "lg:bg-transparent"
      } hover:bg-white bg-white group transition-all duration-500`}
    >
      <div className="md:flex p-4 sm:px-6 items-center justify-center group">
        {/* Logo Div */}
        <div className="flex items-center justify-between mr-6">
          <div className="flex flex-col items-center gap-2">
            <Link className="flex flex-col items-center" to={"/"}>
              <img
                loading="lazy"
                className="w-8 inline"
                src={logo}
                alt="SR Constructions"
              />
              <span
                className={`text-xs whitespace-nowrap lg:text-[12px] font-medium lg:${
                  scrolledDown ? "text-black" : "text-white"
                } lg:group-hover:text-black`}
              >
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
          className={`flex flex-col md:flex-row gap-4 md:items-center bg-white lg:bg-transparent py-6 md:py-0 left-0 px-4 transition-all duration-200 absolute md:static w-full md:w-auto z-[100] ${
            open ? "top-20 opacity-100" : "top-[-490px]"
          } md:opacity-100`}
        >
          {navItems.map((link) => (
            <Link
              to={link.to}
              className={`border-b-2 border-transparent hover:border-b-2 hover:border-highlight transition-all px-2 py-1 text-md whitespace-nowrap hover:text-highlight w-fit capitalize text-black lg:${
                scrolledDown ? "text-black" : "text-white"
              } lg:group-hover:text-black`}
              key={link.id}
              onClick={() => setOpen(false)}
            >
              {link.link}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  )
}
