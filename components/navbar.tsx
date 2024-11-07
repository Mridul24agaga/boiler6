"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const navItems = [
  { name: 'Blog', href: '/blog' },
  { name: 'Documentation', href: '/docs' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
]

const Button = ({ 
  children, 
  className, 
  variant = 'default' 
}: { 
  children: React.ReactNode, 
  className?: string, 
  variant?: 'default' | 'ghost' 
}) => {
  const baseStyles = "px-4 py-2 rounded-md font-medium transition-colors"
  const variantStyles = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    ghost: "text-gray-600 hover:text-blue-600 hover:bg-gray-100"
  }
  
  return (
    <motion.button 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  )
}

export default function Navbar() {
  const [activeItem, setActiveItem] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <motion.header 
      className={`sticky top-0 z-50 w-full ${
        isScrolled ? 'bg-white/80 backdrop-blur-md' : 'bg-white'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-900">makerkit</span>
            </Link>
          </motion.div>

          <nav className="relative">
            <motion.div 
              className={`absolute left-0 right-0 top-1/2 h-10 -translate-y-1/2 rounded-full ${
                isScrolled ? 'bg-gray-100/80' : 'bg-gray-100'
              }`}
              layout
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            ></motion.div>
            
            <ul className="flex space-x-1">
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`relative z-10 block px-4 py-2 text-sm font-medium transition-colors ${
                      activeItem === item.name
                        ? 'text-blue-600'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                    onClick={() => setActiveItem(item.name)}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          <motion.div 
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button variant="ghost">
              Sign In
            </Button>
            <Button>
              Sign Up
            </Button>
          </motion.div>
        </div>
      </div>
      <motion.div 
        className="h-px bg-gray-200 w-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
    </motion.header>
  )
}