import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

export function PortfolioSection() {
  const projects = [
    {
      title: "Parametric Facade System",
      description: "Dynamic building envelope with adaptive shading elements",
      category: "Commercial",
      image: "/placeholder-wgk8a.png",
    },
    {
      title: "Organic Pavilion Structure",
      description: "Biomimetic design with flowing parametric curves",
      category: "Cultural",
      image: "/placeholder-w8ngl.png",
    },
    {
      title: "Modular Housing Complex",
      description: "Scalable residential units with parametric optimization",
      category: "Residential",
      image: "/placeholder-rtriy.png",
    },
    {
      title: "Kinetic Bridge Design",
      description: "Adaptive infrastructure with responsive parametric elements",
      category: "Infrastructure",
      image: "/placeholder-qfwc9.png",
    },
    {
      title: "Parametric Interior System",
      description: "Flexible interior partitions with dynamic configurations",
      category: "Interior",
      image: "/placeholder-apz0u.png",
    },
    {
      title: "Sustainable Tower Concept",
      description: "High-rise design with parametric environmental optimization",
      category: "Sustainable",
      image: "/placeholder-smk4p.png",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Portfolio of Possibilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Explore our showcase of innovative parametric designs that demonstrate the unlimited possibilities of our
              bespoke design tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden bg-card border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                      {project.category}
                    </Badge>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Ready to create your own parametric masterpiece?</p>
            <Badge variant="outline" className="text-accent border-accent">
              View Complete Portfolio →
            </Badge>
          </div>
        </div>
      </div>
    </section>
  )
}
