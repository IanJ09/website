'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function SupaSecretPage() {
  const [answer, setAnswer] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (answer.toLowerCase() === 'legendarian') {
      router.push('/quiz-success')
    } else {
      // Redirect to Rick Roll video
      window.location.href = 'https://www.youtube.com/watch?v=xm3YgoEiEDc'
    }
  }

  return (
    <div className="min-h-screen  bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        <h1 className="text-4xl font-extrabold text-[#a52a2a] drop-shadow-md mb-4 p-16">
          🤫 Shhh... You Found the SUPA Secret Page!
        </h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Wow! You're really good at finding secrets! This is the most secret of all secret pages. Congratulations on making it this far!
        </p>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Now I challenge you to solve this quiz!!!
        </p>
        <div className="bg-[#a52a2a]/10 p-6 rounded-lg border border-[#a52a2a]/20 shadow-lg">
          <h2 className="text-2xl font-semibold text-[#a52a2a] mb-4">
            Ultra Secret Quiz
          </h2>
          <p className="text-gray-300 italic mb-4">
            "What's the word that describes someone who is truly extraordinary, as mentioned in the random facts?"
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="w-full p-2 bg-black border border-[#a52a2a] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#a52a2a]"
              placeholder="Enter your answer"
            />
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              className="px-5 py-3 text-lg border border-[#a52a2a] text-[#a52a2a] rounded-lg hover:bg-[#a52a2a] hover:text-white transition-all duration-300 ease-in-out"
            >
              Submit Answer
            </button>
          </form>
        </div>
       <div className="group bg-[#a52a2a]/10  rounded-lg border border-[#a52a2a]/20 shadow-lg transition-all duration-300 ease-in-out">
  <h2 className="text-2xl font-semibold text-transparent mb-4 group-hover:text-[#a52a2a] transition-all duration-300 ease-in-out">
    Ultra Secret Message
  </h2>
  <p className="text-transparent italic group-hover:text-gray-300 transition-all duration-300 ease-in-out">
    "Sometimes the best secrets are hidden in plain sight, but you were clever enough to find this one!" — Ian Jiang
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

