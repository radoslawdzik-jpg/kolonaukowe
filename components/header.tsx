"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "News", href: "#news" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-48">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-48 w-48 overflow-hidden rounded-full">
              <Image
              src="/logo.png"
              alt="CE-AI Research Club logo"
              fill
              className="object-cover scale-100"
              priority
              />
            </div>

            <div className="hidden sm:flex flex-col leading-tight">
              <span className="font-bold text-foreground text-xl">
                 CE-AI
              </span>
              <span className="text-muted-foreground text-sm">
                 Research Club
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button asChild className="hidden sm:inline-flex">
              <Link href="#contact">Join Us</Link>
            </Button>

            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="flex flex-col px-4 py-4 gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <Button asChild className="mt-2">
              <Link href="#contact">Join Us</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}