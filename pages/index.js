import Contact from "../components/Contact";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Skill from "../components/Skill";
import Work from "../components/Work";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fannn Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hero />
      <Skill />
      <Work />
      <Education />
      <Experience />
      <Contact />
    </>
  );
}
