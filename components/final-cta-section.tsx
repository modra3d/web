"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function FinalCtaSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-accent/5 via-background to-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              Start Your Bespoke Design Journey
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Transform Your Architectural Vision Into Reality
            </h2>

            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
              Join thousands of architects and designers who have discovered unlimited possibilities with our parametric
              design tools. Experience the future of architectural creation today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg"
              onClick={() => window.open("https://app.modra3d.com", "_blank")}
            >
              Try the Application
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-accent mb-2">14-Day</div>
              <div className="text-sm text-muted-foreground">Free Trial</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Expert Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">∞</div>
              <div className="text-sm text-muted-foreground">Design Possibilities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
