import { Users, BookOpen, Award, Globe } from "lucide-react"

const stats = [
  { icon: Users, label: "Active Members", value: "50+" },
  { icon: BookOpen, label: "Research Projects", value: "12" },
  { icon: Award, label: "Publications", value: "8" },
  { icon: Globe, label: "Partner Institutions", value: "5" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-6 text-balance">
              Where Technology Meets Medicine
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                The CE-AI Research Club is a student-led initiative that brings together passionate individuals from Information Technology and Medical faculties to explore the intersection of clinical engineering and artificial intelligence.
              </p>
              <p>
                Founded with the vision of fostering interdisciplinary collaboration, we provide a platform for students to engage in cutting-edge research, attend workshops, and develop skills that bridge the gap between healthcare and technology.
              </p>
              <p>
                Our members work on real-world projects ranging from AI-powered diagnostic tools to innovative medical device prototypes, preparing them to become leaders in the rapidly evolving field of healthcare technology.
              </p>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
