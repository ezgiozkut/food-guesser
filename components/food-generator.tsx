"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Utensils } from "lucide-react"
import { getRandomFood } from "@/app/actions"

type DietaryRestriction = "vegetarian" | "vegan" | "lactoVegetarian" | "glutenFree"

function Confetti({ containerRef }: { containerRef: React.RefObject<HTMLDivElement | null> }) {
  const shapes = [
    "clip-path-star",
    "clip-path-triangle",
    "clip-path-square rotate-45",
    "clip-path-line",
    "rounded-full",
  ]

  const colors = [
    "bg-gradient-to-br from-pink-400 to-pink-600",
    "bg-gradient-to-br from-yellow-300 to-yellow-500",
    "bg-gradient-to-br from-purple-400 to-purple-600",
    "bg-gradient-to-br from-blue-400 to-blue-600",
    "bg-gradient-to-br from-green-400 to-green-600",
  ]

  const particles = Array.from({ length: 40 }).map((_, i) => {
    const angle = (i * 360) / 40
    const radius = Math.random() * 150 + 100
    const duration = Math.random() * 0.6 + 0.4
    const size = Math.random() * 8 + 6
    const shape = shapes[Math.floor(Math.random() * shapes.length)]
    const color = colors[Math.floor(Math.random() * colors.length)]

    return (
      <div
        key={i}
        className={`absolute ${shape} ${color}`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: "50%",
          top: "50%",
          animation: `confetti-${i} ${duration}s ease-out forwards`,
        }}
      />
    )
  })

  return (
    <div className="absolute inset-0 pointer-events-none" style={{ margin: "-50px" }}>
      {particles}
      <style jsx>{`
        .clip-path-star {
          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
        }
        .clip-path-triangle {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
        .clip-path-square {
          clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
        }
        .clip-path-line {
          clip-path: polygon(0% 45%, 100% 45%, 100% 55%, 0% 55%);
        }
        ${Array.from({ length: 40 })
          .map((_, i) => {
            const angle = (i * 360) / 40
            const x = Math.cos((angle * Math.PI) / 180) * 150
            const y = Math.sin((angle * Math.PI) / 180) * 150
            return `
            @keyframes confetti-${i} {
              0% {
                transform: translate(-50%, -50%) scale(0.3) rotate(0deg);
                opacity: 1;
              }
              100% {
                transform: translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1) rotate(${Math.random() * 720 - 360}deg);
                opacity: 0;
              }
            }
          `
          })
          .join("\n")}
      `}</style>
    </div>
  )
}

export default function FoodGenerator() {
  const [food, setFood] = useState<string>("")
  const [isSpinning, setIsSpinning] = useState(false)
  const [restrictions, setRestrictions] = useState<DietaryRestriction[]>([])
  const [slotItems, setSlotItems] = useState<string[]>([" "])
  const [showConfetti, setShowConfetti] = useState(false)
  const slotRef = useRef<HTMLDivElement>(null)

  const toggleRestriction = (restriction: DietaryRestriction) => {
    setRestrictions((prev) => {
      if (restriction === "vegan" || restriction === "vegetarian" || restriction === "lactoVegetarian") {
        // Remove all three options
        const withoutDiet = prev.filter((r) => !["vegan", "vegetarian", "lactoVegetarian"].includes(r))
        // If the restriction wasn't already selected, add it
        if (!prev.includes(restriction)) {
          return [...withoutDiet, restriction]
        }
        return withoutDiet
      }

      // Normal toggle behavior for other restrictions
      return prev.includes(restriction) ? prev.filter((r) => r !== restriction) : [...prev, restriction]
    })
  }

  const generateFood = async () => {
    if (isSpinning) return

    setIsSpinning(true)
    setShowConfetti(false)

    const interval = setInterval(() => {
      const placeholders = [
        "Kebap",
        "Kuru Fasülye",
        "Etli Pilav",
        "Fırında Hamsi",
        "Zeytinyağlı Yaprak Sarma",
        "Burger",
        "Salata",
        "Mantı",
        "Kaşarlı Pide",
        "Soğuk Sanviviç",
      ]
      setSlotItems([placeholders[Math.floor(Math.random() * placeholders.length)]])
    }, 80)

    const result = await getRandomFood(restrictions)

    setTimeout(() => {
      clearInterval(interval)
      setSlotItems([result])
      setFood(result)
      setIsSpinning(false)
      setShowConfetti(true)
      // Hide confetti after 1 second
      setTimeout(() => setShowConfetti(false), 1000)
    }, 1500)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-4 pb-4">
          <div className="relative">
            {showConfetti && <Confetti containerRef={slotRef} />}
            <div
              ref={slotRef}
              className="slot-machine h-16 md:h-20 flex items-center justify-center mb-4 overflow-hidden bg-pink-50 rounded-md border-2 border-pink-200"
            >
              <div className={`text-xl font-bold text-center transition-transform ${isSpinning ? "animate-slot" : ""}`}>
                {slotItems.map((item, index) => (
                  <div
                    key={index}
                    className={`py-2 ${item.trim() === "" ? "text-pink-200 font-normal" : "text-pink-600"}`}
                  >
                    {item.trim() === "" ? "Bakalım bugün menüde ne var? :)" : item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Button
            onClick={generateFood}
            disabled={isSpinning}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white mb-4"
            size="lg"
          >
            <Utensils className="mr-2 h-5 w-5" />
            {isSpinning ? "Düşünüyorum" : "Ne Yesem?"}
          </Button>

          <div className="dietary-options">
            <h2 className="font-medium text-pink-600 mb-2">Diyet Kısıtlamaları</h2>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-1">
                <Checkbox
                  id="vegetarian"
                  checked={restrictions.includes("vegetarian")}
                  onCheckedChange={() => toggleRestriction("vegetarian")}
                  className="border-pink-300 text-pink-500 h-3 w-3"
                />
                <Label htmlFor="vegetarian" className=" text-gray-700 text-[14px]">
                  Vejetaryen
                </Label>
              </div>
              <div className="flex items-center space-x-1">
                <Checkbox
                  id="lactoVegetarian"
                  checked={restrictions.includes("lactoVegetarian")}
                  onCheckedChange={() => toggleRestriction("lactoVegetarian")}
                  className="border-pink-300 text-pink-500 h-3 w-3"
                />
                <Label htmlFor="lactoVegetarian" className=" text-gray-700 text-[14px]">
                  Lakto-Vejetaryen
                </Label>
              </div>
              <div className="flex items-center space-x-1">
                <Checkbox
                  id="vegan"
                  checked={restrictions.includes("vegan")}
                  onCheckedChange={() => toggleRestriction("vegan")}
                  className="border-pink-300 text-pink-500 h-3 w-3"
                />
                <Label htmlFor="vegan" className=" text-gray-700 text-[14px]">
                  Vegan
                </Label>
              </div>
              <div className="flex items-center space-x-1">
                <Checkbox
                  id="glutenFree"
                  checked={restrictions.includes("glutenFree")}
                  onCheckedChange={() => toggleRestriction("glutenFree")}
                  className="border-pink-300 text-pink-500 h-3 w-3"
                />
                <Label htmlFor="glutenFree" className=" text-gray-700 text-[14px]">
                  Glutensiz
                </Label>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

