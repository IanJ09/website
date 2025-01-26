'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function SuperSecretPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        <h1 className="text-4xl font-extrabold text-[#a52a2a] drop-shadow-md mb-4">
          🤫 Shh... This is Top Secret!
        </h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Congratulations on finding the super secret page! This is where I keep all my deepest, darkest secrets... Just kidding! But seriously, you're pretty good at this.
        </p>
        <div className="bg-[#a52a2a]/10 p-6 rounded-lg border border-[#a52a2a]/20 shadow-lg">
          <h2 className="text-2xl font-semibold text-[#a52a2a] mb-4">
            A Message Just for You
          </h2>
          <p className="text-gray-300 italic">
            "The greatest secrets are always hidden in the most unlikely places." — Roald Dahl
          </p>
        </div>
        <Link
          href="/hidden"
          className="inline-flex items-center px-5 py-3 text-lg border border-[#a52a2a] text-[#a52a2a] rounded-lg hover:bg-[#a52a2a] hover:text-white transition-all duration-300 ease-in-out"
          aria-label="Back to Hidden Page"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Hidden Page
        </Link>
      </div>
    </div>
  )
}

