"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Brain, ChevronDown, Drum, Github, GraduationCap, Linkedin, Mail, PrinterIcon as Printer3d, Rocket, Sparkles } from 'lucide-react'
import { motion } from "framer-motion"
import Link from 'next/link'

export default function Portfolio() {
  return (
     
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Enhanced Header with Animation */}
      <header className="sticky top-0 w-full px-4 lg:px-6 h-16 flex items-center border-b border-[#ff8a00]/20 bg-black/90 backdrop-blur-sm z-50">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4"
        >
          <Sparkles className="w-6 h-6 text-[#ff8a00]" />
          <span className="text-2xl font-bold bg-gradient-to-r from-[#ff8a00] to-[#ff4d4d] bg-clip-text text-transparent">
            JIANG Lab
          </span>
          <Link href="/" className="text-sm font-medium text-gray-200 hover:text-[#ff8a00] transition-colors">
            ← Back to Home
          </Link>
        </motion.div>
        <nav className="ml-4 flex gap-4 sm:gap-6">
          {['About', 'Story', 'Skills', 'Projects', 'Contact'].map((item, i) => (
            <motion.a
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-gray-200 hover:text-[#ff8a00] transition-colors"
              href={`#${item.toLowerCase()}`}
            >
              {item}
            </motion.a>
          ))}
        </nav>
      </header>

      {/* Hero Section with Enhanced Animation */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center px-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-[#ff8a00]/5"
        />
        
        <Card className="relative w-full max-w-4xl bg-black/80 border-[#ff8a00]/20 backdrop-blur-sm overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff8a00] to-[#ff4d4d]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          
          <CardContent className="flex flex-col items-center space-y-8 text-center p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-4xl font-bold text-[#ff8a00] mb-2">
                未来联合创新联盟实验室
              </h1>
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#ff8a00] to-[#ff4d4d] bg-clip-text text-transparent">
                Joint Innovation Alliance for the Next Generation
              </h2>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <Badge className="text-lg bg-[#ff8a00]/20 text-[#ff8a00] border-[#ff8a00]/40">
                  Innovation • Education • Future
                </Badge>
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-xl text-gray-200 max-w-2xl"
            >
              Empowering the next generation through innovative education and creative technology
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex gap-4"
            >
              <Button
                className="bg-[#ff8a00] text-white hover:bg-[#ff4d4d] transition-colors duration-300"
                size="lg"
              >
                Explore Projects
              </Button>
              <Button
                variant="outline"
                className="border-[#ff8a00] text-[#ff8a00] hover:bg-[#ff8a00] hover:text-white transition-colors duration-300"
                size="lg"
              >
                Join Our Mission
              </Button>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="pt-8"
            >
              <ChevronDown className="w-8 h-8 text-[#ff8a00]" />
            </motion.div>
          </CardContent>
        </Card>
      </section>

      {/* Story Section */}
     <section id="my-story" className="w-full py-12 md:py-24 lg:py-32 bg-black/40 backdrop-blur-sm">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#ff8a00]">
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
              <p className="text-[#ff8a00] font-bold text-xl">
                That's when I realized something that still drives me today:
              </p>
              <p className="text-[#a52a2a] font-bold text-2xl text-center">
                I can make anything.
              </p>
            </div>
          </div>
        </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4">
        <Card className="max-w-4xl mx-auto bg-black/80 border-[#a52a2a]/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-4xl font-bold tracking-tighter text-center bg-gradient-to-r from-[#ff8a00] to-[#ff4d4d] bg-clip-text text-transparent">
              Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: 'Design Thinking', icon: Brain },
                { name: '3D Modeling', icon: Printer3d },
                { name: '3D Printing', icon: Printer3d },
                { name: 'Drumming', icon: Drum },
                { name: 'Teaching', icon: GraduationCap },
                { name: 'Creativity', icon: Sparkles }
              ].map((skill) => (
                <Card key={skill.name} className="bg-[#2a0f0f] border-[#ff8a00]/20 hover:bg-[#ff8a00] transition-colors duration-300 group">
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <skill.icon className="w-8 h-8 mb-2 text-[#ff8a00] group-hover:text-white transition-colors" />
                    <span className="text-gray-200 group-hover:text-white transition-colors">{skill.name}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tighter text-center mb-12 bg-gradient-to-r from-[#ff8a00] to-[#ff4d4d] bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Teaching in Tibet",
                description: "Teaching 3D printing to kids in the Tibetan area of China"
              },
              {
                title: "EdTech Innovation",
                description: "Exploring the intersection of technology and education"
              }
            ].map((project) => (
              <Card key={project.title} className="bg-black/80 border-[#a52a2a]/20 backdrop-blur-sm hover:bg-[#2a0f0f] transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="text-[#ff8a00]">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300">{project.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" className="border-[#ff8a00] text-[#ff8a00] hover:bg-[#ff8a00] hover:text-white">
                    View Project
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4">
        <Card className="max-w-4xl mx-auto bg-black/80 border-[#a52a2a]/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-4xl font-bold tracking-tighter text-center bg-gradient-to-r from-[#ff8a00] to-[#ff4d4d] bg-clip-text text-transparent">
              Get in Touch
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
              {[
                { icon: Mail, label: "Email", href: "mailto:ian@example.com" },
                { icon: Github, label: "GitHub", href: "https://github.com" },
                { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" }
              ].map((contact) => (
                <Button
                  key={contact.label}
                  variant="outline"
                  className="border-[#ff8a00] text-[#ff8a00] hover:bg-[#ff8a00] hover:text-white w-full md:w-auto"
                  asChild
                >
                  <a href={contact.href} className="flex items-center gap-2">
                    <contact.icon className="w-5 h-5" />
                    {contact.label}
                  </a>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="w-full py-6 px-4 border-t border-[#a52a2a]/20 bg-black/90 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">© 2024 Ian Jiang. All rights reserved.</p>
          <Button
            variant="ghost"
            className="text-gray-400 hover:text-[#ff8a00]"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Back to Top
          </Button>
        </div>
      </footer>
    </div>
  )
}

