import Heading from "../components/Heading"
import SkillSet from "../components/SkillSet"
import { html, css, js, react, tailwind } from "../assets/assets.js"

const Skills = () => {
  return (
    <section className="flex flex-col gap-10 section" id="skills">
      {/* top */}
      <Heading headingText="My Skills" />

      {/* bottom */}
      <div className="flex flex-col w-full gap-3">
        <SkillSet icon={html} skillPercentage={95} color={"html"} />
        <SkillSet icon={css} skillPercentage={90} color={"css"} />
        <SkillSet icon={js} skillPercentage={80} color={"js"} />
        <SkillSet icon={react} skillPercentage={70} color={"react"} />
        <SkillSet icon={tailwind} skillPercentage={80} color={"tailwind"} />
      </div>
    </section>
  )
}

export default Skills
