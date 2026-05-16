import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const researchAreas = [
  {
    title: "Medical Image Analysis",
    description: "Using deep learning to analyze X-rays, MRIs, and CT scans for early disease detection and diagnosis assistance.",
    tags: ["Deep Learning", "Computer Vision", "Radiology"],
    status: "Active",
  },
  {
    title: "Wearable Health Monitors",
    description: "Developing smart wearable devices that continuously monitor vital signs and predict health anomalies.",
    tags: ["IoT", "Signal Processing", "Embedded Systems"],
    status: "Active",
  },
  {
    title: "Natural Language Processing for EHR",
    description: "Extracting insights from electronic health records using NLP to improve patient care and clinical decisions.",
    tags: ["NLP", "Text Mining", "Healthcare Data"],
    status: "Active",
  },
  {
    title: "Surgical Robotics",
    description: "Exploring AI-assisted surgical planning and robotic systems for minimally invasive procedures.",
    tags: ["Robotics", "AI Planning", "Surgery"],
    status: "Planning",
  },
  {
    title: "Drug Discovery AI",
    description: "Applying machine learning to accelerate drug discovery and predict molecular interactions.",
    tags: ["Bioinformatics", "ML", "Chemistry"],
    status: "Recruiting",
  },
  {
    title: "Predictive Analytics",
    description: "Building models to predict patient outcomes, hospital readmissions, and resource allocation needs.",
    tags: ["Statistics", "ML", "Healthcare Management"],
    status: "Active",
  },
]

export function ResearchSection() {
  return (
    <section id="research" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Research Areas</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Our Current Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our ongoing research initiatives where students collaborate on real-world healthcare challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchAreas.map((area) => (
            <Card key={area.title} className="bg-card hover:border-primary/50 transition-colors group cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {area.title}
                  </CardTitle>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <Badge
                  variant={area.status === "Active" ? "default" : "secondary"}
                  className="w-fit"
                >
                  {area.status}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            Interested in joining a project?
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
