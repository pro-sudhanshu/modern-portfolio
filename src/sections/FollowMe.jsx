import { FaLinkedin, FaLinkedinIn } from "react-icons/fa"
import Heading from "../components/Heading"
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs"

const FollowMe = () => {
  return (
    <div className="flex items-center justify-between gap-10 section">
      {/* left */}
      <Heading headingText="Follow Me" />

      {/* right */}
      <div className="flex gap-3 sm:gap-5;">
        <a href="#" className="nav-item" title="Home">
          <BsLinkedin size={25} />
        </a>
        <a href="#" className="nav-item" title="Home">
          <BsGithub size={25} />
        </a>
        <a href="#" className="nav-item" title="Home">
          <BsInstagram size={25} />
        </a>
      </div>
    </div>
  )
}

export default FollowMe
