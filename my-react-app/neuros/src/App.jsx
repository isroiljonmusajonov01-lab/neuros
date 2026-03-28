import ApplicationsSection from "./components/ApplicationsSection"
import CtaSection from "./components/CtaSection"
import Demo from "./components/Demo"
import FaqSection from "./components/Faqsection"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Imprave from "./components/Imprave"
import Navbar from "./components/Navbar"
import TestimonialsCarousel from "./components/TestimonialsCarous"

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Hero />
      <Demo />
      <Imprave />
      <TestimonialsCarousel />
      <CtaSection />
      <ApplicationsSection />
      <FaqSection />
      <Footer />
    </div>
  )
}

export default App