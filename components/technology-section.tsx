import { Card } from "@/components/ui/card"
import { Zap, Settings, Layers, Cpu } from "lucide-react"

export function TechnologySection() {
  return (
    <section id="technology" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Technology That Empowers</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our advanced parametric design system provides the tools and flexibility you need to create extraordinary
              architectural elements with precision and efficiency.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-background border-border text-center">
              <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground">
                Real-time parameter adjustments with instant visual feedback
              </p>
            </Card>

            <Card className="p-6 bg-background border-border text-center">
              <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Settings className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Highly Customizable</h3>
              <p className="text-sm text-muted-foreground">
                Flexible tools that adapt to your unique design requirements
              </p>
            </Card>

            <Card className="p-6 bg-background border-border text-center">
              <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Layers className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Multi-layered Design</h3>
              <p className="text-sm text-muted-foreground">
                Complex architectural elements with sophisticated parameter control
              </p>
            </Card>

            <Card className="p-6 bg-background border-border text-center">
              <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Cpu className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Advanced Engine</h3>
              <p className="text-sm text-muted-foreground">Powered by cutting-edge computational design algorithms</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
