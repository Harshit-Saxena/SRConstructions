import { Routes, Route, useLocation } from "react-router-dom"
import "./App.css"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import Home from "./components/Home"
import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"
import Services from "./components/Services"
import { AnimatePresence } from "framer-motion"

export default function App() {
  const location = useLocation()
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}
