import { Footer } from "../Common/Footer";
import { NavBar } from "../Common/NavBar";
import { About } from "../components/About";
import { Banner } from "../components/Banner";
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
      <Footer />
    </div>
  );
}
