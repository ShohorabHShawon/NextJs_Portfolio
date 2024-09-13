import { About } from "@/components/About";
import HeroSection from "@/components/HeroSection";
import { Card } from "@/components/Project1";
import { Card2 } from "@/components/Project2";
import { Card3 } from "@/components/project3";
import Image from "next/image";
import SocialButtons from "@/components/SocialButtons";

export default function Home() {
  return (
    <div className="">
      {/* Hero Section */}
      <HeroSection />
      {/* About Section */}
      <section
        id="about"
        className="text-white h-screen flex items-center justify-center bg-zinc-900"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 mt-14">ABOUT</h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <About />
            </div>
            <div className="ml-7 w-full md:w-1/2 flex justify-center">
              <Image
                src="/about.png"
                alt="Profile Picture"
                layout="responsive"
                width={1000}
                height={1000}
                className="rounded-full shadow-lg border-4 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="text-white h-screen flex items-center justify-center bg-zinc-900"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 mt-14">SKILLS</h2>
          <div className="flex flex-col items-center">
            <ul className="text-2xl list-disc list-inside space-y-4">
              <li>
                <strong>Programming Languages:</strong> JavaScript, Python, C++,
                C#
              </li>
              <li>
                <strong>Web Technologies:</strong> HTML, CSS, Next.js 14 /
                React.js, Tailwind CSS, NestJS
              </li>
              <li>
                <strong>Design Tools:</strong> Figma, Adobe XD, Adobe Photoshop,
                Lightroom, Illustrator
              </li>
              <li>
                <strong>Productivity Tools:</strong> MS Word, PowerPoint, Jira
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section
        id="projects"
        className="text-white min-h-screen flex items-center justify-center py-12 bg-zinc-900"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-8 mt-14">MY PROJECTS</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example project items */}

            <div className="">
              <Card />
            </div>
            <div className="">
              <Card2 />
            </div>
            <div className="">
              <Card3 />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="text-white h-screen flex items-center justify-center bg-zinc-900"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Me</h2>

          <div className="flex justify-center items-center m-10">
            <SocialButtons />
          </div>
        </div>
      </section>
    </div>
  );
}
