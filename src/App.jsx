import "./App.css"
import { Routes, Route, useLocation } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import Home from "./components/Home"
import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"
import Services from "./components/Services"
import Proprietor from "./components/Proprietor"
import Projects  from "./components/Projects"
import Careers from "./components/Careers"

export default function App() {
  const location = useLocation()
  const { pathname } = useLocation()

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 1000)
  }, [pathname])

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/proprietor" element={<Proprietor />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}
