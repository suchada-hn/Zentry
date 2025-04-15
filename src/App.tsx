import "./index.css"
import Hero from "./components/Hero"
import About from "./components/About"
import Navbar from "./components/Navbar"
import Features from "./components/Features"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import FloatingImage from "./components/Story"

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <FloatingImage />
      <Contact />
      <Footer />
    </main>
  )
}

export default App