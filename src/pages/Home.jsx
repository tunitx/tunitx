import { Footer } from "../Common/Footer";
import { NavBar } from "../Common/NavBar";
import { About } from "../components/About";
import { Banner } from "../components/Banner";
import Donate from "../components/Donate";
import { ProjectsCarousel } from "../components/Projects";
import { TechStacks } from "../components/TechStacks";

export function Home() {
  return (
    <div>
      <NavBar />
      <Banner />
      <About />
      <TechStacks />
      <ProjectsCarousel />
      <Donate />
      <Footer />
    </div>
  );
}
