"use client";

import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  const logos = [
    { src: acmeLogo, alt: "Acme Logo" },
    { src: quantumLogo, alt: "Quantum Logo" },
    { src: echoLogo, alt: "Echo Logo" },
    { src: celestialLogo, alt: "Celestial Logo" },
    { src: pulseLogo, alt: "Pulse Logo" },
    { src: apexLogo, alt: "Apex Logo" },
  ];

  return (
    <div className="py-8 md:py-12 flex justify-center items-center bg-white">
      <div className="container max-w-5xl rounded-lg overflow-hidden">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,white,black,white)]">
          <motion.div
            className="flex gap-12 flex-none pr-12"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {logos.map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="logo-ticker-image w-28 h-auto object-contain transition-opacity hover:opacity-75"
                width={112}
                height={56}
              />
            ))}
            {/* second set of logos for animation */}
            {logos.map((logo, index) => (
              <Image
                key={index + logos.length}
                src={logo.src}
                alt={logo.alt}
                className="logo-ticker-image w-28 h-auto object-contain transition-opacity hover:opacity-75"
                width={112}
                height={56}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};