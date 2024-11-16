import { useEffect, useState } from "react"
import { BsPersonWorkspace, BsPlusCircleFill } from "react-icons/bs"
import { CgHome } from "react-icons/cg"
import { FaPhoneVolume } from "react-icons/fa6"
import { GiSkills } from "react-icons/gi"

function Navbar() {
  const [onScroll, setOnScroll] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setOnScroll(true)
      } else {
        setOnScroll(false)
      }
    })
  }, [])

  return (
    <header
      className={`flex items-center justify-between w-full bg-[var(--bg-primary-dark)] px-5 py-3 rounded-b-xl sticky top-0 left-0 z-20 ${
        onScroll ? "smooth shadow-sm shadow-[#BE231B]" : ""
      }`}
    >
      <nav className="nav-list">
        <a
          href="#"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="nav-item"
          title="Home"
        >
          <CgHome size={25} />
        </a>
        <a href="#skills" className="nav-item" title="Skills">
          <GiSkills size={25} />
        </a>
        <a href="#projects" className="nav-item" title="Projects">
          <BsPersonWorkspace size={25} />
        </a>
      </nav>
      <button
        onClick={() => (window.location.href = "/#contact")}
        className="flex gap-2 items-center btn-primary"
      >
        <FaPhoneVolume size={15} />
        <p className="text-base font-bold">Contact</p>
      </button>
    </header>
  )
}

export default Navbar
