"use client"

import { useEffect, useState } from "react"

export default function BackgroundImage() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Check on initial load
    checkIfMobile()

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile)

    // Clean up
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  return (
    <div
      className="absolute bottom-0 left-0 right-0 sm:w-full h-[30vh] md:h-[300px]"
      style={{
        backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/food.illustration-fEca683BWwsUAamFOVYmpyagMOr25W.png')`,
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
        backgroundSize: isMobile ? "cover" : "contain",
        backgroundOrigin: "content-box",
        paddingBottom: "0",
      }}
    />
  )
}

