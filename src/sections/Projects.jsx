import Heading from "../components/Heading"
import ProjectSet from "../components/ProjectSet"
import { projects } from "../constants/data.js"

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col gap-10 section">
      {/* top */}
      <Heading headingText={"My Projects"} />

      {/* bottom */}
      <div className="flex flex-col gap-3">
        {projects.map(({ id, title, description, image }) => (
          <ProjectSet
            key={id}
            title={title}
            description={description}
            image={image}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
