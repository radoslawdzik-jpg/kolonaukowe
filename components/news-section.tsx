import { createClient } from "next-sanity"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-05-16",
  useCdn: false,
})

type NewsItem = {
  title: string
  excerpt: string
  publishedAt: string
  category?: string
}

async function getNews(): Promise<NewsItem[]> {
  return client.fetch(`
    *[_type == "news"] | order(publishedAt desc)[0...6] {
      title,
      excerpt,
      publishedAt,
      "category": "News"
    }
  `)
}

function formatDate(date?: string) {
  if (!date) return ""
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date))
}

export async function NewsSection() {
  const newsItems = await getNews()

  if (!newsItems.length) {
    return null
  }

  return (
    <section id="news" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Latest Updates
            </span>
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
          <Card className="bg-background border-primary/30 lg:row-span-2 hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Badge className="bg-primary text-primary-foreground">
                  {newsItems[0].category || "News"}
                </Badge>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {formatDate(newsItems[0].publishedAt)}
                </span>
              </div>
              <CardTitle className="text-2xl">{newsItems[0].title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">{newsItems[0].excerpt}</p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
              >
                Read more
                <ArrowRight className="w-4 h-4" />
              </Link>
            </CardContent>
          </Card>

          {newsItems.slice(1).map((news) => (
            <Card
              key={news.title}
              className="bg-background hover:border-primary/50 transition-colors group cursor-pointer"
            >
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">{news.category || "News"}</Badge>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatDate(news.publishedAt)}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {news.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {news.excerpt}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}