import Contact from "./sections/Contact"
import FollowMe from "./sections/FollowMe"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"

function App() {
  return (
    <main className="flex flex-col gap-4 w-full sm:max-w-2xl mx-auto px-3 sm:px-6">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <FollowMe />
      <Footer />
    </main>
  )
}

export default App
