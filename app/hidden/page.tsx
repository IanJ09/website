'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function HiddenPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      {/* Content Container */}
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-[#a52a2a] drop-shadow-md mb-4 p-16">
          🎉 Congratulations! You Found the Secret Page! {'>'}:)
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Welcome to the hidden corner of Ian's mighty website! You've unlocked an Easter egg that very few have discovered... Are you ready to learn something new about me? Let’s go!
        </p>

        {/* Random Facts Section */}
        <section id="random-facts" className="w-full py-6 md:py-12 lg:py-16">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#a52a2a]">
              Random Facts About Me
            </h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              <p className="text-gray-300 text-lg text-left">Fact 1: I’ve 3D-printed spare parts for my home.</p>
              <p className="text-gray-300 text-lg text-left">Fact 2: At age 15, I ran 21km on a Saturday night just cuz I was curious how far I could possibly run.</p>
              <p className="text-gray-300 text-lg text-left">Fact 3: P.S.(I was told to stop after 21km since they thought it was too much... )</p>
              <p className="text-gray-300 text-lg text-left">Fact 4: I REAAAALLY enjoy cooking!!!</p>
              <p className="text-gray-300 text-lg text-left">Fact 5: Favorite color #a52a2a</p>
              <p className="text-gray-300 text-lg text-left">Fact 6: My pronouns are He/Him :)</p>
              <p className="text-gray-300 text-lg text-left">Fact 7: I wear my watch on my left hand.</p>
              <p className="text-gray-300 text-lg text-left">Fact 8: I've just wasted 2 seconds of your life.</p>
              <p className="text-gray-300 text-lg text-left">Fact 9: I can speak 2.001 languages. (That 0.001 is Spanish, since I only know 1-10)</p>
              <p className="text-gray-300 text-lg text-left">Fact 10: Legendarian</p>
            </div>
          </div>
        </section>

        {/* Inspirational Quotes Section */}
        <section id="inspirational-quotes" className="w-full pt-6 px-4 md:pt-12 md:px-6 lg:pt-16 lg:px-8">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#a52a2a]">
              Quotes That Inspire Me
            </h2>
            <div className="space-y-8 max-w-3xl mx-auto">
              <blockquote className="text-gray-300 text-lg text-left italic">
                "Stay Hungry, Stay Foolish." — <span className="font-semibold">Steve Jobs</span>
              </blockquote>
              <blockquote className="text-gray-300 text-lg text-left italic">
                "Connect the dots looking backwards." — <span className="font-semibold">Steve Jobs</span>
              </blockquote>
              <blockquote className="text-gray-300 text-lg text-left italic">
                "If something is important enough, even if the odds are against you, you should still do it." — <span className="font-semibold">Elon Musk</span>
              </blockquote>
              <blockquote className="text-gray-300 text-lg text-left italic">
                "The only way to do great work is to love what you do." — <span className="font-semibold">Steve Jobs</span>
              </blockquote>
              <blockquote className="text-gray-300 text-lg text-left italic">
                "Education is the most powerful weapon which you can use to change the world." — <span className="font-semibold">Nelson Mandela</span>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Secret Message */}
        <div className="relative p-6 bg-[#a52a2a]/10 rounded-lg border border-transparent flex items-center justify-center">
          <div className="group w-full max-w-lg transition-transform duration-300 ease-in-out hover:scale-105">
            <h2 className="text-xl md:text-2xl font-semibold text-transparent group-hover:text-[#a52a2a] mb-2 md:mb-4 transition-colors duration-300 ease-in-out text-center">
              Secret Message
            </h2>
            <p className="text-transparent text-sm md:text-base italic group-hover:text-gray-300 transition-colors duration-300 ease-in-out text-center">
              "Be Thankful For What You Have, Stay Committed On What You Do!" — Ian Jiang
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="w-full flex justify-between items-center mt-8 relative">
          <div className="w-full flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center px-5 py-3 text-lg border border-[#a52a2a] text-[#a52a2a] rounded-lg hover:bg-[#a52a2a] hover:text-white transition-all duration-300 ease-in-out"
              aria-label="Back to Home"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </div>
          <div className="absolute right-0 bottom-0">
            <Link
              href="/supa-secret"
              className="inline-flex items-center px-5 py-3 text-lg border border-transparent hover:border-[#a52a2a] text-transparent rounded-lg hover:bg-[#a52a2a] hover:text-white transition-all duration-300 ease-in-out"
              aria-label="Supa Secret Page"
            >
              U Saw Nothin'
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

