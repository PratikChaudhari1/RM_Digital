import { Footer } from "./components/layout/footer";
import { Navbar } from "./components/layout/navbar";
import { DotPatternBox } from "./components/magicui/DotPatternBox";
import { About } from "./components/sections/About";
import CaseStudies from "./components/sections/CaseStudies";
import Contact from "./components/sections/Contact";
import Home from "./components/sections/Home";
import Services from "./components/sections/Services";
import Testimonials from "./components/sections/Testrimonial";
import Animated from "./components/ui/Animated";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Home />
      <Animated>
        <DotPatternBox />
      </Animated>
      <About />
      <Services/>
      <CaseStudies/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
