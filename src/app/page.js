import About from "@/component/About";
import Contact from "@/component/Contact";
import Education from "@/component/Education";
import GithubContribution from "@/component/GithubContribution";
import Hero from "@/component/Hero";
import Projects from "@/component/Project";
import Skills from "@/component/Skills";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Skills/>
      <GithubContribution/>
      <Projects/>
      <Education/>
      <Contact/>
    </div>
  );
}
