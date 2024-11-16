import { FaEnvelope, FaPhoneAlt } from "react-icons/fa"
import Heading from "../components/Heading"

const Contact = () => {
  return (
    <section id="contact" className="flex flex-col gap-10 section">
      {/* top */}
      <div className="w-full flex items-center justify-between">
        <Heading headingText="Hire Me" />
        <div className="flex items-center gap-2 px-2 py-2 sm:py-0.5 rounded-full sm:rounded-md bg-[var(--bg-green-light)]">
          <div className="h-2 w-2 rounded-full bg-[var(--bg-green-dark)] animate-ping sm:animate-none"></div>
          <span className="text-sm font-bold text-[var(--text-gray-dark)] hidden sm:flex">
            Available For Work
          </span>
        </div>
      </div>

      <div className="w-full flex flex-col gap-10">
        {/* heading */}
        <div className="flex flex-col gap-3 text-center sm:text-start">
          <h2 className="text-white text-3xl sm:text-4xl font-bold">
            Let’s work together.
          </h2>
          <p className="text-[var(--text-gray-dark)] text-base sm:text-lg text-center sm:text-left">
            Crafting seamless user experiences with visually appealing web
            designs.
          </p>
        </div>

        {/* contact details */}
        <div className="w-full flex flex-col gap-3 bg-[var(--bg-primary-light)] p-3 rounded-md">
          {/* phone */}
          <div className="flex items-center gap-3 bg-[var(--bg-primary-dark)] rounded-md py-3 px-4 hover:shadow-sm hover:shadow-[#BE231B] hover:text-[#BE231B] smooth cursor-pointer">
            <div className="h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center rounded-full bg-[var(--bg-primary-light)] flex-shrink-0">
              <FaPhoneAlt size={30} />
            </div>
            <div className="flex flex-col">
              <p className="text-[var(--text-gray-dark)] text-lg font-bold">
                Phone
              </p>
              <p className="text-[var(--text-gray-dark)] text-base">
                +91 9140227518
              </p>
            </div>
          </div>

          {/* email */}
          <div className="flex items-center gap-3 bg-[var(--bg-primary-dark)] rounded-md py-3 px-4 hover:shadow-sm hover:shadow-[#BE231B] hover:text-[#BE231B] smooth cursor-pointer">
            <div className="h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center rounded-full bg-[var(--bg-primary-light)] flex-shrink-0">
              <FaEnvelope size={30} />
            </div>
            <div className="w-full flex flex-col overflow-x-auto">
              <p className="text-[var(--text-gray-dark)] text-lg font-bold">
                Email
              </p>
              <p className="text-[var(--text-gray-dark)] text-base">
                iamsudhanshugupta
                <span className="block sm:inline-block">@gmail.com</span>
              </p>
            </div>
          </div>
        </div>

        {/* contact form */}
        <form className="flex flex-col gap-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Your Name"
              className="sm:w-1/2 rounded-md py-3 px-4 bg-[var(--bg-primary-light)] text-[var(--text-gray-dark)] outline-none"
            />
            <input
              type="text"
              placeholder="Your Email"
              className="sm:w-1/2 rounded-md py-3 px-4 bg-[var(--bg-primary-light)] text-[var(--text-gray-dark)] outline-none"
            />
          </div>
          <textarea
            rows="8"
            placeholder="Enter Your Message"
            className="w-full rounded-md py-3 px-4 bg-[var(--bg-primary-light)] text-[var(--text-gray-dark)] outline-none resize-none"
          />
          <button className="w-full rounded-md py-3 px-4 bg-[var(--bg-primary-light)] text-[var(--text-gray-dark)] outline-none btn-primary text-base font-bold">
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
