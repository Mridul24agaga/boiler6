'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5, 
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
}

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
}

const AnimatedFooter = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup logic here
    console.log('Signed up with email:', email)
    setEmail('')
  }

  return (
    <motion.footer 
      className="bg-white text-black py-12"
      initial="hidden"
      animate="visible"
      variants={footerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div variants={childVariants}>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-600">We are a company dedicated to providing innovative solutions for your business needs.</p>
          </motion.div>
          <motion.div variants={childVariants}>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Contact</a></li>
            </ul>
          </motion.div>
          <motion.div variants={childVariants}>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-600">123 Business Street</p>
            <p className="text-gray-600">City, State 12345</p>
            <p className="text-gray-600">Email: info@example.com</p>
            <p className="text-gray-600">Phone: (123) 456-7890</p>
          </motion.div>
          <motion.div variants={childVariants}>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <motion.button
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
        <motion.div 
          className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center"
          variants={childVariants}
        >
          <p className="text-gray-600 text-sm">&copy; 2023 Your Company Name. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <motion.a href="#" className="text-gray-600 hover:text-black" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <FaFacebook size={24} />
              <span className="sr-only">Facebook</span>
            </motion.a>
            <motion.a href="#" className="text-gray-600 hover:text-black" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <FaTwitter size={24} />
              <span className="sr-only">Twitter</span>
            </motion.a>
            <motion.a href="#" className="text-gray-600 hover:text-black" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <FaInstagram size={24} />
              <span className="sr-only">Instagram</span>
            </motion.a>
            <motion.a href="#" className="text-gray-600 hover:text-black" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <FaLinkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default AnimatedFooter