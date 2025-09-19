import { Card } from "@/components/ui/card"
import { Users, Target, Lightbulb } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">About Our Vision</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We are a passionate team of architects, designers, and technologists dedicated to revolutionizing the way
              parametric design is approached in architecture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                  <p className="text-muted-foreground">
                    Our multidisciplinary team combines decades of architectural experience with cutting-edge
                    computational design expertise.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Precision Focus</h3>
                  <p className="text-muted-foreground">
                    We focus on creating tools that deliver precise, customizable results while maintaining the creative
                    freedom architects demand.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Lightbulb className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Innovation Driven</h3>
                  <p className="text-muted-foreground">
                    We continuously push the boundaries of what's possible in parametric design, enabling bespoke
                    solutions for every project.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="p-8 bg-card border-border">
                <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">10+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </div>
              </Card>

              <Card className="absolute -bottom-4 -right-4 p-6 bg-accent text-accent-foreground">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">500+</div>
                  <div className="text-sm opacity-90">Projects Completed</div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
