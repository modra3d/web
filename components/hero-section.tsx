"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-card overflow-hidden pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-foreground/20 rotate-45"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-foreground/20 rotate-12"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 border border-foreground/20 -rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border border-foreground/20 rotate-45"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-balance mb-8 leading-tight">
            Creating parametric architectural elements that <span className="text-accent">push the boundaries</span> of
            design
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 text-pretty max-w-3xl mx-auto">
            Unlock unlimited possibilities with our bespoke design tools. Experience creative freedom, efficiency, and
            flexibility for your architectural projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => window.open("https://app.modra3d.com", "_blank")}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg"
            >
              Try the Application
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              onClick={() => window.open("https://www.youtube.com/watch?v=q8l9E0Lb6-M", "_blank")}
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg bg-transparent"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-16 w-3 h-3 bg-accent/60 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-accent/80 rounded-full animate-pulse delay-500"></div>
      </div>
    </section>
  )
}
