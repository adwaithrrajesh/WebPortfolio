import Navbar from "../components/navbar";
import HomePage from "../components/homepage";
import About from "../components/about";
import Skills from "../components/skills";
import Contact from "../components/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col">
        <section id="home">
          <HomePage />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
}
