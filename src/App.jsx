import Navbar from './sections/Navbar'
import Hero from './sections/Hero';
import About from "./sections/About"
import Projects from "./sections/Projects"
import Footer from "./sections/Footer"
import Experience from './sections/Experience';
import StarsCanvas from './components/Stars';
import Contact from './sections/Contact';


const App = () => {
  return (
    <main className = "max-w-7xl mx-auto relative">
      {/* <StarsCanvas /> */}
      <Navbar />
      <Hero />
      <About/>
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}

export default App;