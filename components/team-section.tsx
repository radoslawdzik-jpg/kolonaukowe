import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Github, Mail } from "lucide-react"
import Link from "next/link"

const teamMembers = [
  {
    name: "Dr. Anna Kowalska",
    role: "Faculty Advisor",
    department: "Biomedical Engineering",
    initials: "AK",
    specialization: "Medical Imaging",
  },
  {
    name: "Michał Nowak",
    role: "President",
    department: "Computer Science",
    initials: "MN",
    specialization: "Deep Learning",
  },
  {
    name: "Katarzyna Wiśniewska",
    role: "Vice President",
    department: "Medicine",
    initials: "KW",
    specialization: "Radiology",
  },
  {
    name: "Tomasz Lewandowski",
    role: "Tech Lead",
    department: "Computer Science",
    initials: "TL",
    specialization: "ML Engineering",
  },
  {
    name: "Marta Zielińska",
    role: "Research Coordinator",
    department: "Biomedical Engineering",
    initials: "MZ",
    specialization: "Clinical Devices",
  },
  {
    name: "Piotr Kamiński",
    role: "Events Manager",
    department: "Computer Science",
    initials: "PK",
    specialization: "Data Science",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Team</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Meet the Leadership
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our dedicated team of students and faculty advisors driving innovation at the intersection of technology and healthcare.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <Avatar className="w-16 h-16 bg-primary/10 border-2 border-primary/20">
                  <AvatarFallback className="bg-primary/10 text-primary text-lg font-semibold">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary text-sm font-medium">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.department}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <Badge variant="secondary" className="text-xs">
                  {member.specialization}
                </Badge>
                <div className="flex items-center gap-2">
                  <Link
                    href="#"
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </Link>
                  <Link
                    href="#"
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <Github className="w-4 h-4" />
                  </Link>
                  <Link
                    href="#"
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
