import { BsCloudDownloadFill, BsPlusCircleFill } from "react-icons/bs"
import Heading from "../components/Heading"
import { profile } from "../assets/assets.js"

function Hero() {
  return (
    <section className="flex flex-col gap-10 section">
      {/* top */}
      <div className="flex items-center justify-between">
        <Heading headingText="Front-End Dev" />
        <div className="flex items-center gap-2 px-2 py-2 sm:py-0.5 rounded-full sm:rounded-md bg-[var(--bg-green-light)]">
          <div className="h-2 w-2 rounded-full bg-[var(--bg-green-dark)] animate-ping sm:animate-none"></div>
          <span className="text-sm font-bold text-[var(--text-gray-dark)] hidden sm:flex">
            Available For Work
          </span>
        </div>
      </div>

      {/* bottom */}
      <div className="flex flex-col sm:flex-row-reverse items-center gap-5">
        {/* image */}
        <div className="flex items-center justify-center w-full sm:w-1/2">
          <div className="w-40 sm:w-52 h-40 sm:h-52 rounded-full bg-[var(--bg-primary-dark)] border-[12px] border-[var(--bg-primary-light)]">
            <img
              className="mix-blend-difference object-cover w-full h-full rounded-full"
              src={profile}
              alt="Profile Image"
            />
          </div>
        </div>

        {/* about me */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-3">
            <h2 className="text-white text-4xl font-bold">I'm Sudhanshu</h2>
            <p className="text-[var(--text-gray-dark)] text-lg">
              A front-end enthusiast who is skilled in developing Visually
              Appealing, Modern and Eye-Catching web experiences.
            </p>
          </div>
          <div className="flex justify-center sm:justify-start gap-4">
            <button className="flex gap-2 items-center btn-primary">
              <BsPlusCircleFill size={15} />
              <p className="text-base font-bold">Hire Me</p>
            </button>
            <button className="flex gap-2 items-center btn-primary">
              <BsCloudDownloadFill size={15} />
              <p className="text-base font-bold">Resume</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
