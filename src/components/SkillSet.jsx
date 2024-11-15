import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import { useState } from "react"

const SkillSet = ({ icon, skillPercentage, color }) => {
  const [progressText, setProgressText] = useState(0)

  const progressRef = useRef(null)

  useGSAP(() => {
    gsap.to(progressRef.current, {
      width: `${skillPercentage}%`,
      duration: 3,
      ease: "power2.out",
    })

    gsap.to(
      { value: 0 },
      {
        value: skillPercentage,
        duration: 3,
        ease: "power2.out",
        onUpdate: function () {
          setProgressText(Math.round(this.targets()[0].value))
        },
      }
    )
  }, [skillPercentage])

  return (
    <div className="w-full h-14 bg-[var(--bg-primary-light)] rounded-md overflow-hidden relative">
      <div
        ref={progressRef}
        className="h-full absolute rounded-md"
        style={{
          width: `0%`,
          backgroundColor: `var(--bg-${color})`,
        }}
      ></div>
      <div className="flex items-center justify-between h-full px-3">
        <div className="w-9 z-10">
          <img src={icon} alt="HTML" />
        </div>
        <span className="text-lg text-[var(--text-gray-dark)] z-10">
          {progressText}%
        </span>
      </div>
    </div>
  )
}

export default SkillSet
