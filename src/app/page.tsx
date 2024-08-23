import Navbar from "./components/navbar";
import HomePage from "./components/homepage";
import About from "./components/about";
import Skills from "./components/skills";
import Contact from "./components/contact";

export default function Home() {
  return (
    <>
      <Navbar/>
      <div className="flex flex-col">
        <HomePage />
        <About />
        <Skills />
        <Contact />
      </div>
    </>
  );
}
