import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

export function CustomersSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Principal Architect",
      company: "Chen & Associates",
      content:
        "The parametric tools have revolutionized our design process. We can now explore unlimited possibilities and deliver bespoke solutions to every client.",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "Design Director",
      company: "Urban Dynamics",
      content:
        "Incredible efficiency gains and creative freedom. Our team can now prototype complex architectural elements in minutes rather than days.",
      rating: 5,
    },
    {
      name: "Dr. Elena Kowalski",
      role: "Research Lead",
      company: "Future Architecture Lab",
      content:
        "The flexibility and precision of these tools are unmatched. Perfect for our experimental architectural research projects.",
      rating: 5,
    },
  ]

  const partners = [
    "Architectural Digest",
    "Design Bureau",
    "Modern Architecture",
    "Urban Planning Institute",
    "Sustainable Design Council",
    "Innovation Lab",
  ]

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Trusted by Industry Leaders</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Join hundreds of architects and designers who have transformed their creative process with our parametric
              design tools.
            </p>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-background border-border">
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-4 italic">"{testimonial.content}"</blockquote>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Partner Logos */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-8 text-muted-foreground">Partnered with leading organizations</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {partners.map((partner, index) => (
                <div key={index} className="text-center">
                  <div className="bg-background border border-border rounded-lg p-4 h-16 flex items-center justify-center">
                    <span className="text-sm font-medium text-muted-foreground">{partner}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
