'use client'

import { useState } from 'react'
import { Gift } from 'lucide-react'

interface ContactButtonProps {
  icon: React.ReactNode
  label: string
  href: string
}

export function ContactButton({ icon, label, href }: ContactButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href={href}
      className="relative w-40 h-16 flex items-center justify-center rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <div
        className={`absolute inset-0 bg-primary rounded-lg transition-opacity duration-300 text-[#b15e5a] ${
          isHovered ? 'opacity-0' : 'opacity-100'
        } flex items-center justify-center`}
      >
        <Gift className="w-8 h-8 text-red" />
      </div>
      <div
        className={`absolute inset-0 bg-black rounded-lg border-2 border-primary flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="flex items-center text-primary">
          {icon}
          <span className="ml-2">{label}</span>
        </span>
      </div>
    </a>
  )
}

