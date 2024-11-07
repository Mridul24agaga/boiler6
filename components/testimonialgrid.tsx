"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'

const testimonials = [
  {
    quote: "Really easy to use. The tutorials are really useful and explains how everything works. Hope to ship my next project really fast!",
    name: "Marc Lou",
    username: "@marclou",
    avatar: "/placeholder.svg?height=80&width=80"
  },
  {
    quote: "Setting up everything from the ground up is a really hard, and time consuming process. What you pay for will save your time for sure.",
    name: "Naveen",
    username: "@the_mcnaveen",
    initial: "N"
  },
  {
    quote: "Easily saves 15+ hrs for me setting up trivial stuff. Now, I can directly focus on shipping features rather than hours of setting up the same technologies from scratch. Feels like a super power! :D",
    name: "Wahab Shaikh",
    username: "@wahab",
    initial: "W"
  }
]

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 2000) // Change testimonial every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
          212 makers are already shipping faster!
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          Don't take our word for it. Here's what they have to say about ShipFast.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-gray-100 p-6 rounded-lg transition-opacity duration-500 ${
                index === currentTestimonial ? 'opacity-100' : 'opacity-50'
              }`}
            >
              <p className="text-gray-800 mb-4">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="flex-grow">
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.username}</p>
                </div>
                {testimonial.avatar ? (
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                ) : (
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-semibold">
                    {testimonial.initial}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}