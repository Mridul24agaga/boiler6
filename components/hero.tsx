'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Component() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-black relative overflow-hidden">
      {/* Grid background */}
      <div 
        className="absolute inset-0 bg-black"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
      
      {/* Radial gradient for a subtle glow effect */}
      <div className="absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_25%,black)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 bg-black bg-opacity-70 rounded-lg shadow-lg backdrop-blur-sm">
        <motion.div
          className="mb-8"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeUpVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="bg-purple-600 text-white text-sm font-medium px-3 py-1 rounded-full inline-flex items-center">
            <span>NextBoilerPlate V1 is now available!</span>
            <span className="ml-1">🚀</span>
          </span>
        </motion.div>

        <motion.p
          className="text-gray-400 mb-6"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeUpVariants}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          The next-generation BoilerPlate for Startup&#39;s
        </motion.p>

        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6 text-white"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeUpVariants}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Launch And Build Your Startup
          <br />
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            In days, Not Weeks
          </span>
        </motion.h1>

        <motion.div
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeUpVariants}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-xl mb-8 text-gray-300">
            Build unlimited SaaS products with any SaaS Starter Kit. Save months of work and focus on building a profitable business. Get lifetime access to all the kits for only $299.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeUpVariants}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Link
            href="#"
            className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-full inline-flex items-center justify-center hover:bg-blue-700 transition-colors text-sm md:text-base"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Get NextBoilerPlate
          </Link>

          <Link
            href="#"
            className="bg-gray-800 text-white font-semibold py-3 px-6 rounded-full inline-flex items-center justify-center hover:bg-gray-700 transition-colors text-sm md:text-base border border-gray-600"
          >
            View Docs
          </Link>
        </motion.div>
      </div>
    </div>
  )
}