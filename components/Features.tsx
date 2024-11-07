"use client";

import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <div className="w-full max-w-7xl mx-auto bg-white px-4 py-16 sm:px-6 lg:px-8">
      {/* Main Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
          Generative AI{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-red-600">
            Applications
          </span>
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          Easily apply AI to your most challenging use cases with pre-built
          applications that harness the power of customized LLMs.
        </p>
      </div>

      {/* Wobble Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-gradient-to-br from-pink-600 to-purple-700 rounded-3xl shadow-xl overflow-hidden min-h-[400px] lg:min-h-[300px]"
          className="p-8"
        >
          <div className="max-w-xs relative z-10">
            <h2 className="text-left text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Gippity AI powers the entire universe
            </h2>
            <p className="mt-4 text-left text-lg text-pink-100">
              With over 100,000 monthly active bot users, Gippity AI is the most popular AI platform for developers.
            </p>
          </div>
          <Image
            src="https://media.discordapp.net/attachments/1193183717548638301/1289855816752435261/image.png?ex=66fa5757&is=66f905d7&hm=865a8f17cf08da491cd77e5531f706dba9f3463f0ccc1695e64630b02b37ef54&=&format=webp&quality=lossless"
            width={500}
            height={500}
            alt="Gippity AI visualization"
            className="absolute -right-4 lg:-right-[20%] -bottom-10 object-contain rounded-2xl max-w-[60%] lg:max-w-[70%] opacity-80"
          />
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl shadow-xl overflow-hidden min-h-[300px]">
          <div className="p-8">
            <h2 className="max-w-xs text-left text-2xl md:text-3xl font-bold tracking-tight text-white">
              No shirt, no shoes, no weapons.
            </h2>
            <p className="mt-4 max-w-xs text-left text-lg text-blue-100">
              If someone yells "stop!", goes limp, or taps out, the fight is over.
            </p>
          </div>
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-gradient-to-br from-indigo-600 to-blue-700 rounded-3xl shadow-xl overflow-hidden min-h-[400px] lg:min-h-[300px]">
          <div className="p-8 relative z-10">
            <div className="max-w-lg">
              <h2 className="text-left text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                Sign up for blazing-fast cutting-edge Gippity AI wrapper today!
              </h2>
              <p className="mt-4 text-left text-lg text-indigo-100">
                With over 100,000 monthly active bot users, Gippity AI is the most popular AI platform for developers.
              </p>
            </div>
          </div>
          <Image
            src="https://media.discordapp.net/attachments/1193183717548638301/1289856146265473056/image.png?ex=66fa57a5&is=66f90625&hm=61bdc5ed9d2acf7ea8cdd17d30445cf326e3b57f9de4155e900d9c5ad66f7353&=&format=webp&quality=lossless&width=550&height=312"
            width={500}
            height={500}
            alt="Gippity AI dashboard preview"
            className="absolute -right-10 md:-right-[20%] lg:-right-[10%] -bottom-10 object-contain rounded-2xl max-w-[60%] lg:max-w-[50%] opacity-90"
          />
        </WobbleCard>
      </div>
    </div>
  );
}

export default WobbleCardDemo;