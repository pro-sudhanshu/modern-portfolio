import { BsEyeFill, BsGithub } from "react-icons/bs"

const ProjectSet = ({ title, description, image, tags, source, visit }) => {
  return (
    <div className="w-full flex flex-col sm:flex-row justify-between gap-4 bg-[var(--bg-primary-light)] rounded-md p-3 overflow-hidden">
      {/* image */}
      <div className="w-full sm:w-[30%] h-full rounded-md overflow-hidden">
        <img
          className="w-full h-full object-cover bg-center"
          src={image}
          alt={title}
        />
      </div>

      {/* content */}
      <div className="flex flex-col justify-between gap-5 flex-1 rounded-md min-h-24 h-full">
        <div className="flex flex-col flex-1 gap-2 text-center sm:text-left">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <p className="text-sm text-[var(--text-gray-dark)]">{description}</p>
        </div>

        <div className="flex items-center gap-2 self-center sm:self-start">
          <button className="flex gap-2 items-center btn-secondary">
            <BsEyeFill size={15} />
            <p className="text-base font-bold">Preview</p>
          </button>

          <button className="flex gap-2 items-center btn-secondary">
            <BsGithub size={15} />
            <p className="text-base font-bold">Github</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectSet
