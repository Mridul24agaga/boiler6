'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

type FAQItem = {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  { question: "What do I get exactly?", answer: "" },
  { question: "Javascript or Typescript?", answer: "" },
  { question: "/app router or /pages router?", answer: "Both! You can choose once you get access" },
  { question: "My tech stack is different, can I still use it?", answer: "" },
  { question: "Is it a website template?", answer: "" },
  { question: "How is ShipFast better than other boilerplates?", answer: "" },
  { question: "Are there any other costs associated?", answer: "" },
  { question: "How often is ShipFast updated?", answer: "" },
  { question: "Can I get a refund?", answer: "" },
  { question: "Can I use PayPal?", answer: "" },
]

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<number | null>(2)  // Start with the third item open

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white text-black mt-20">
      <div className="flex">
        <div>
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-sm text-gray-600">
            Have another question? Contact me on{" "}
            <a href="#" className="text-blue-600 hover:underline">Twitter</a> or by{" "}
            <a href="#" className="text-blue-600 hover:underline">email</a>.
          </p>
        </div>
        <div className="w-2/3 space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <button
                className="flex justify-between items-center w-full text-left font-medium text-lg"
                onClick={() => setOpenItem(openItem === index ? null : index)}
              >
                <span className={index === 2 ? "text-yellow-500" : ""}>{item.question}</span>
                {openItem === index ? (
                  <Minus className="flex-shrink-0 ml-2" />
                ) : (
                  <Plus className="flex-shrink-0 ml-2" />
                )}
              </button>
              {openItem === index && (
                <p className="mt-2 text-gray-600">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}