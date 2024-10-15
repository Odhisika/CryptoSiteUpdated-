"use client"

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-background shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              CryptoExchange
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/trading" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Trading</Link>
              <Link href="/gift-cards" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Gift Cards</Link>
              <Link href="/bill-payments" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Bill Payments</Link>
              <Link href="/airtime" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Airtime</Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Button asChild className="mr-2">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/signup">Sign Up</Link>
            </Button>
            <ModeToggle />
          </div>
          <div className="md:hidden flex items-center">
            <ModeToggle />
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/trading" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Trading</Link>
            <Link href="/gift-cards" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Gift Cards</Link>
            <Link href="/bill-payments" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Bill Payments</Link>
            <Link href="/airtime" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Airtime</Link>
            <Link href="/login" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Login</Link>
            <Link href="/signup" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Sign Up</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar