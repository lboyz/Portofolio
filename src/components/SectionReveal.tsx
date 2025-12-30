import type { ReactNode } from "react"
import { useEffect, useRef, useState } from "react"

type SectionRevealProps = {
  children: ReactNode
  className?: string
}

export function SectionReveal({ children, className }: SectionRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) {
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "reveal-visible" : ""} ${className ?? ""}`}
    >
      {children}
    </div>
  )
}
