"use client"

import { useEffect, useState } from "react"

interface Dot {
  id: number
  x: number
  y: number
  size: number
  blur: number
  speedX: number
  speedY: number
  scaleDirection: number
  blurDirection: number
}

export function AnimatedDots() {
  const [dots, setDots] = useState<Dot[]>([])

  useEffect(() => {
    // Create initial dots
    const initialDots: Dot[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 20 + 10, // 10-30px
      blur: Math.random() * 3 + 1, // 1-4px blur
      speedX: (Math.random() - 0.5) * 0.5, // -0.25 to 0.25 px per frame
      speedY: (Math.random() - 0.5) * 0.5,
      scaleDirection: Math.random() > 0.5 ? 1 : -1,
      blurDirection: Math.random() > 0.5 ? 1 : -1,
    }))
    setDots(initialDots)

    const animationFrame = () => {
      setDots((prevDots) =>
        prevDots.map((dot) => {
          let newX = dot.x + dot.speedX
          let newY = dot.y + dot.speedY
          const newSize = dot.size + dot.scaleDirection * 0.1
          const newBlur = dot.blur + dot.blurDirection * 0.02
          let newScaleDirection = dot.scaleDirection
          let newBlurDirection = dot.blurDirection

          // Wrap around screen edges
          if (newX < -50) newX = window.innerWidth + 50
          if (newX > window.innerWidth + 50) newX = -50
          if (newY < -50) newY = window.innerHeight + 50
          if (newY > window.innerHeight + 50) newY = -50

          // Reverse scale direction at limits
          if (newSize <= 5 || newSize >= 35) {
            newScaleDirection *= -1
          }

          // Reverse blur direction at limits
          if (newBlur <= 0.5 || newBlur >= 4) {
            newBlurDirection *= -1
          }

          return {
            ...dot,
            x: newX,
            y: newY,
            size: newSize,
            blur: newBlur,
            scaleDirection: newScaleDirection,
            blurDirection: newBlurDirection,
          }
        }),
      )
    }

    const interval = setInterval(animationFrame, 16) // ~60fps
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="absolute rounded-full bg-blue-500/20"
          style={{
            left: `${dot.x}px`,
            top: `${dot.y}px`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            filter: `blur(${dot.blur}px)`,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  )
}
