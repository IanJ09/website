'use client'

import React from 'react'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Project1() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#1a0505] text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-[#a52a2a]/20 bg-black/80 backdrop-blur-sm">
        <Link href="/" className="text-[#a52a2a] hover:text-neon-blue transition-colors">
         <ArrowLeft className="h-6 w-6 inline-block mr-2" />
          Back to Home
        </Link>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="w-full mb-12">
          <Image
            src="/jiang-lab-logo.png"
            alt="JIANG Lab Logo"
            width={1200}
            height={300}
            className="w-full object-contain"
            priority
          />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-[#a52a2a] mb-8 text-center">
          Bringing 3D Printing to the Tibetan Area of China: A Journey of Creativity and Learning
        </h1>
        
        <section className="mb-12 bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-[#a52a2a]/20">
          <h2 className="text-2xl font-bold text-[#a52a2a] mb-4">1. Introduction</h2>
          <blockquote className="italic font-light text-gray-300 border-l-4 border-[#a52a2a] pl-4 py-2">
            "Have you ever watched someone experience cutting-edge technology for the first time and instantly grasp its possibilities? That's what I witnessed while teaching 3D printing to kids in the remote Tibetan area of China."
          </blockquote>
        </section>

        <section className="mb-12 bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-[#a52a2a]/20">
          <h2 className="text-2xl font-bold text-[#a52a2a] mb-6">2. Project Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 bg-black/40 p-6 rounded-lg">
              <div className="flex items-center space-x-2">
                <span className="text-[#a52a2a] font-bold">Where:</span>
                <span className="text-gray-300">Tibetan area of China</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[#a52a2a] font-bold">When:</span>
                <span className="text-gray-300">October 8-9, 2024 (with continued online lessons afterward)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[#a52a2a] font-bold">What:</span>
                <span className="text-gray-300">Teaching 3D printing and 3D modeling to elementary and middle school kids</span>
              </div>
            </div>
            <div className="bg-[#a52a2a]/10 p-6 rounded-lg border border-[#a52a2a]/20">
              <h3 className="text-xl font-bold text-[#a52a2a] mb-4">Why:</h3>
              <p className="text-gray-300">
                To share cutting-edge technology with different parts of the world and give students in remote areas the tools to express their creativity.
              </p>
              <div className="mt-4 flex justify-center">
                <svg className="w-24 h-24 text-[#a52a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-[#a52a2a]/20">
          <h2 className="text-2xl font-bold text-[#a52a2a] mb-6">3. The Experience</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-[#a52a2a] mb-4">The Two Days in the Mountains</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-black/40 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-[#a52a2a] mb-3">Teaching Process</h4>
                  <p className="text-gray-300">
                    I began with the basics. Through engaging presentations, I explained what 3D printing is and how it can improve our daily lives. Afterward, I introduced the students to simple 3D modeling and guided them through the 3D printing process step by step.
                  </p>
                </div>

                <div className="bg-black/40 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-[#a52a2a] mb-3">Challenges and Breakthroughs</h4>
                  <p className="text-gray-300">
                    Since it was their first time learning about such advanced technology, I knew it wouldn't be a smooth journey. Teaching 3D modeling for the first time was challenging at first, as the concepts were entirely new to them. But as the minutes passed, I saw something incredible — curiosity sparked in their eyes, and great ideas began to take shape.
                  </p>
                </div>

                <div className="bg-black/40 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-[#a52a2a] mb-3">Memorable Moments</h4>
                  <p className="text-gray-300">
                    Despite being completely new to 3D printing, the kids grasped the concepts I taught remarkably well. I was amazed by how quickly they understood and applied what they learned. This experience reminded me that intelligence isn't bound by geography — some of these kids might even be more creative and innovative than students in cities.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center space-y-4 bg-[#a52a2a]/10 p-8 rounded-lg">
              <p className="text-gray-300 text-lg">
                But what they truly lack is opportunity — a stage where they can showcase their talents and shine.
              </p>
              <p className="text-[#a52a2a] font-bold text-2xl">
                And that's what I aim to provide: A stage to shine.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-[#a52a2a]/20">
          <h2 className="text-2xl font-bold text-[#a52a2a] mb-6">4. What I've Learned</h2>
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Education isn't just about sharing knowledge; it's about igniting the spark of curiosity in the hearts of the next generation and creating a world where talent can emerge from even the most remote places.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              This experience deepened my belief that the future belongs to creators. I'm honored to have played a small role in helping unlock that potential in the Tibetan Area of China.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

