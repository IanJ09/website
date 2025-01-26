'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Gift, ExternalLink } from 'lucide-react'
import { ContactButton } from "../components/ContactButton"
import Link from 'next/link';

export default function Home() {
  return (
    <React.StrictMode>
    <div className="flex flex-col min-h-screen bg-transparent text-white">
      <div className="fixed inset-0 -z-10">
      </div>
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between border-b border-[#a52a2a]/20 bg-black/0 ">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-[#a52a2a] mr-6">Ian Jiang</span>
          <nav className="flex gap-4 sm:gap-6">
            <a className="text-sm font-medium hover:text-[#a52a2a]" href="#about">
              About
            </a>
            <a className="text-sm font-medium hover:text-[#a52a2a]" href="#my-story">
              My Story
            </a>
            <a className="text-sm font-medium hover:text-[#a52a2a]" href="#skills">
              Skills
            </a>
            <a className="text-sm font-medium hover:text-[#a52a2a]" href="#projects">
              Projects
            </a>
            <a className="text-sm font-medium hover:text-[#a52a2a]" href="#3d-printing">
              3D Printing
            </a>
            <a className="text-sm font-medium hover:text-[#a52a2a]" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>
     <main className="flex-1">
       
       <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-black/40 backdrop-blur-sm">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <img
                src="/WechatIMG8.png"
                alt="Ian Jiang at sunset"
                className="rounded-full border-2 border-[#a52a2a] object-cover w-[150px] h-[150px]"
                width={150}
                height={150}
              />
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-[#a52a2a]">
                  Ian Jiang
                </h1>
                <p className="mx-auto max-w-[700px] text-[#a52a2a] md:text-xl">
                  Entrepreneur
                </p>
              </div>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Hello! How ya doin? I'm Ian!!! A passionate entrepreneur and educator that's ready to make a change on the future of education!
              </p>
            </div>
          </div>
        </section>
        
        
        <section id="my-story" className="w-full py-12 md:py-24 lg:py-32 bg-black/40 backdrop-blur-sm">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#a52a2a]">
              My Story
            </h2>
            <div className="max-w-3xl mx-auto space-y-6 text-gray-300">
              <p>
                Ever since I can remember, I've loved creating things. My 3D printing journey started way back when I was four or five, on my birthday. I still remember the excitement when I unwrapped a LEGO set featuring Superman battling a green and purple robot. I eagerly followed the instructions and built the robot, but as soon as it was done, my mind was already buzzing with new ideas.
              </p>
              <p>
                "What if I make something even cooler?" I thought. I took apart the robot and turned its pieces into a futuristic plane with mechanical arms, thanks to its awesome joint parts. The thrill of creating something unique stuck with me. Every time I finished a model, I couldn't wait to take it apart and build something new.
              </p>
              <p>
                Before long, I had an entire container filled with LEGO pieces. I built castles, spaceships, and even weird-looking robots that only made sense in my imagination. At school, my mind was often drifting toward my next creation, dreaming of what I'd build after finishing my homework.
              </p>
              <p>
                Then came what I call the "Mask Era," when life took an unexpected but amazing turn. My dad introduced me to 3D printing with his MakerBot Replicator 2. We would sit together in front of the computer, exploring Thingiverse, where thousands of 3D models were just waiting to be printed. I'd point excitedly at the screen, choosing designs that caught my eye.
              </p>
              <p>
                The real game-changer came when my dad taught me 3D modeling using SolidWorks. Suddenly, my LEGO creations felt like just the beginning. Now, I could imagine something, design it on the computer, and bring it to life with our 3D printer. I still remember the first time I printed one of my own designs — holding something I had imagined and created felt magical.
              </p>
              <p className="text-[#a52a2a] font-bold text-xl">
                That's when I realized something that still drives me today:
              </p>
              <p className="text-[#a52a2a] font-bold text-2xl text-center">
                I can make anything.
              </p>
            </div>
          </div>
        </section>
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-black/40 backdrop-blur-sm">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#a52a2a]">
              Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-[#a52a2a]/10 rounded-lg shadow border border-[#a52a2a]/20">Design Thinking</div>
              <div className="p-4 bg-[#a52a2a]/10 rounded-lg shadow border border-[#a52a2a]/20">3D Modeling</div>
              <div className="p-4 bg-[#a52a2a]/10 rounded-lg shadow border border-[#a52a2a]/20">3D Printing</div>
              <div className="p-4 bg-[#a52a2a]/10 rounded-lg shadow border border-[#a52a2a]/20">Drumming</div>
              <div className="p-4 bg-[#a52a2a]/10 rounded-lg shadow border border-[#a52a2a]/20">Likes Teaching A LOT</div>
              <div className="p-4 bg-[#a52a2a]/10 rounded-lg shadow border border-[#a52a2a]/20">CREATIVE (LIKE REALLY)</div>
            </div>
          </div>
        </section>
        <section id="hobbies" className="w-full py-12 md:py-24 lg:py-32 backdrop-blur-sm">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#a52a2a]">
              Hobbies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#a52a2a]">Music</h3>
                <p className="text-gray-300">
                  As a drummer, I love exploring different rhythms and genres. Music is not just a hobby, but a way to express emotions both good and bad. It's the first thing I think of when i'm having a bad day.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#a52a2a]">3D Printing</h3>
                <p className="text-gray-300">
                  Beyond my professional interest, 3D printing is also a personal passion. I enjoy creating unique objects and pushing the boundaries of what's possible with this technology. Turning what's in my mind into reality has always been facinating to me.
                </p>
              </div>
            </div>
          </div>
        </section>
     <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
  <div className="container px-4 md:px-6">
    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#a52a2a]">
      Projects
    </h2>

    {/* Unified Grid Container */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Project 1 */}
      <div className="border border-[#a52a2a]/20 rounded-lg p-6 bg-black/40 backdrop-blur-sm transition-all duration-300 hover:border-8 hover:border-[#a52a2a]/100">
        <h3 className="text-xl font-bold mb-2 text-[#a52a2a]">Project 1</h3>
        <p className="text-gray-300 mb-4">
         Teaching 3D printing to kids in the Tibetan area - A journey of sharing technology and inspiring creativity in remote areas.
        </p>
        <Button variant="outline" className="border-[#a52a2a] text-[#a52a2a] hover:bg-[#a52a2a] hover:text-white">
          <Link href="/project-1">View Project</Link>
        </Button>
      </div>

      {/* Project 2 */}
      <div className="border border-[#a52a2a]/20 rounded-lg p-6 bg-black/40 backdrop-blur-sm transition-all duration-300 hover:border-8 hover:border-[#a52a2a]/100">
        <h3 className="text-xl font-bold mb-2 text-[#a52a2a]">Project 2</h3>
        <p className="text-gray-300 mb-4">
          Exploring the intersection of technology and education - An innovative approach to learning in the digital age.
        </p>
        <Button variant="outline" className="border-[#a52a2a] text-[#a52a2a] hover:bg-[#a52a2a] hover:text-white">
          <Link href="/project-2">View Project</Link>
        </Button>
      </div>

      {/* Project 3 */}
      <div className="border border-[#a52a2a]/20 rounded-lg p-6 bg-black/40 backdrop-blur-sm transition-all duration-300 hover:border-8 hover:border-[#a52a2a]/100">
        <h3 className="text-xl font-bold mb-2 text-[#a52a2a]">Project 3</h3>
        <p className="text-gray-300 mb-4">
          Making 3D Printed gift - A journey of patience and ultimate craftsmanship.
        </p>
        <Button variant="outline" className="border-[#a52a2a] text-[#a52a2a] hover:bg-[#a52a2a] hover:text-white">
          <Link href="/project-3">View Project</Link>
        </Button>
      </div>

      {/* Project 4 */}
      <div className="border border-[#a52a2a]/20 rounded-lg p-6 bg-black/40 backdrop-blur-sm transition-all duration-300 hover:border-8 hover:border-[#a52a2a]/100">
        <h3 className="text-xl font-bold mb-2 text-[#a52a2a]">Project 4</h3>
        <p className="text-gray-300 mb-4">
          Exploring the intersection of technology and education - An innovative approach to learning in the digital age.
        </p>
        <Button variant="outline" className="border-[#a52a2a] text-[#a52a2a] hover:bg-[#a52a2a] hover:text-white">
          <Link href="/project-4">View Project</Link>
        </Button>
      </div>
    </div>
  </div>
</section>


        <section id="3d-printing" className="w-full py-12 md:py-24 lg:py-32 bg-black/40 backdrop-blur-sm">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#a52a2a]">
              3D Printing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#a52a2a]">My 3D Printing Journey</h3>
                <p className="text-gray-300">
                  As an enthusiast in 3D printing, I've explored various techniques and materials to create unique objects. From functional prototypes to artistic sculptures, 3D printing has allowed me to bring my digital designs into the physical world.
                </p>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Experience with FDM and resin printers</li>
                  <li>Proficient in 3D modeling software</li>
                  <li>Knowledge of different filament types and their properties</li>
                  <li>Post-processing techniques for 3D printed objects</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#a52a2a]">Featured 3D Prints</h3>
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="/placeholder.svg?height=150&width=150"
                    alt="3D Print 1"
                    className="w-full h-auto rounded-lg border border-[#a52a2a]"
                  />
                  <img
                    src="/placeholder.svg?height=150&width=150"
                    alt="3D Print 2"
                    className="w-full h-auto rounded-lg border border-[#a52a2a]"
                  />
                  <img
                    src="/placeholder.svg?height=150&width=150"
                    alt="3D Print 3"
                    className="w-full h-auto rounded-lg border border-[#a52a2a]"
                  />
                  <img
                    src="/placeholder.svg?height=150&width=150"
                    alt="3D Print 4"
                    className="w-full h-auto rounded-lg border border-[#a52a2a]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-black/40 backdrop-blur-sm">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#a52a2a]">
              Get in Touch
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 text-[#b16e5a]">
              <ContactButton icon={<Mail className="w-6 h-6" />} label="Email Me" href="mailto:ian@example.com" />
              <ContactButton icon={<Github className="w-6 h-6" />} label="GitHub" href="https://github.com/ianjiang" />
              <ContactButton icon={<Linkedin className="w-6 h-6" />} label="LinkedIn" href="https://linkedin.com/in/ianjiang" />
            </div>
          </div>
        </section>
        
<style jsx>{`
  .squishy-btn {
    transition: transform 0.7s ease-in-out, opacity 0.05s ease-in-out;
    opacity: 0;
  }

  .squishy-btn:hover {
    animation: growSquish 0.7s ease-in-out forwards;
    opacity: 1;
  }

  .squishy-btn:active {
    animation: reverseSquish 0.7s ease-in-out forwards;
  }

  @keyframes growSquish {
    0% { transform: scale(1); }
    33% { transform: scale(1.2); }
    66% { transform: scale(1.15); }
    100% { transform: scale(1.2); }
  }

  @keyframes reverseSquish {
    0% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }
`}</style>

<section id="easter-egg" className="relative w-full py-6 bg-black/40 backdrop-blur-sm">
  <div className="flex justify-center">
    <a
      href="/hidden"
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-3 rounded-lg bg-[#a52a2a] text-white font-bold shadow-lg squishy-btn"
      aria-label="Hidden Button"
    >
      U Found Me {'>'}:)
    </a>
  </div>
</section>



        
      </main>
      <footer className="flex flex-col gap-1
       sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-[#a52a2a]/20 bg-black/40 backdrop-blur-sm
      ">
        <p className="text-xs text-gray-400">© 2024 Ian Jiang. All rights reserved.</p>
      </footer>
    </div>
    </React.StrictMode>
  )
}

