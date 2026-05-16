import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

const newsItems = [
  {
    date: "May 10, 2026",
    category: "Event",
    title: "Annual AI in Healthcare Symposium",
    description: "Join us for our flagship event featuring keynote speakers from leading hospitals and tech companies. Register now for early bird tickets.",
    featured: true,
  },
  {
    date: "May 5, 2026",
    category: "Publication",
    title: "Our Paper Accepted at MICCAI 2026",
    description: "Congratulations to our research team! Our paper on deep learning for cardiac imaging has been accepted at the prestigious MICCAI conference.",
    featured: false,
  },
  {
    date: "April 28, 2026",
    category: "Workshop",
    title: "Introduction to Medical Image Processing",
    description: "A beginner-friendly workshop covering the fundamentals of medical image processing using Python and popular libraries.",
    featured: false,
  },
  {
    date: "April 15, 2026",
    category: "Achievement",
    title: "Team Wins Hackathon",
    description: "Our members secured first place at the Healthcare Innovation Hackathon with their AI-powered triage system prototype.",
    featured: false,
  },
  {
    date: "April 8, 2026",
    category: "Collaboration",
    title: "Partnership with City Hospital",
    description: "We are excited to announce a new research collaboration with the City Hospital radiology department.",
    featured: false,
  },
  {
    date: "March 25, 2026",
    category: "Recruitment",
    title: "Spring Recruitment Open",
    description: "Applications are now open for new members. We are looking for motivated students from IT and Medicine faculties.",
    featured: false,
  },
]

export function NewsSection() {
  return (
    <section id="news" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Latest Updates</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2">
              News & Events
            </h2>
          </div>
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            View all news
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Featured news */}
          <Card className="bg-background border-primary/30 lg:row-span-2 hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Badge className="bg-primary text-primary-foreground">{newsItems[0].category}</Badge>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {newsItems[0].date}
                </span>
              </div>
              <CardTitle className="text-2xl">{newsItems[0].title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">{newsItems[0].description}</p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
              >
                Read more
                <ArrowRight className="w-4 h-4" />
              </Link>
            </CardContent>
          </Card>

          {/* Other news items */}
          {newsItems.slice(1).map((news) => (
            <Card key={news.title} className="bg-background hover:border-primary/50 transition-colors group cursor-pointer">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">{news.category}</Badge>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {news.date}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {news.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{news.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
