'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function QuizSuccessPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        <h1 className="text-4xl font-extrabold text-[#a52a2a] drop-shadow-md mb-4">
          🎉 Congratulations! You Solved the Quiz!
        </h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          You've proven yourself to be truly Legendarian! Your knowledge and persistence are impressive.
        </p>
        <div className="bg-[#a52a2a]/10 p-6 rounded-lg border border-[#a52a2a]/20 shadow-lg">
          <h2 className="text-2xl font-semibold text-[#a52a2a] mb-4">
            A Special Message for Quiz Solvers
          </h2>
          <p className="text-gray-300 italic">
            "Discovering a hidden clue is intelligence, but knowing where it fits is wisdom." — Ian Jiang
          </p>
        </div>
        <Link
          href="/"
          className="inline-flex items-center px-5 py-3 text-lg border border-[#a52a2a] text-[#a52a2a] rounded-lg hover:bg-[#a52a2a] hover:text-white transition-all duration-300 ease-in-out"
          aria-label="Back to Home"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Home
        </Link>
      </div>
    </div>
  )
}

