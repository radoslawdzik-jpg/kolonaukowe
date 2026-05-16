import { PortableText } from "@portabletext/react"
import imageUrlBuilder from "@sanity/image-url"
import { createClient } from "next-sanity"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-05-16",
  useCdn: false,
})

const builder = imageUrlBuilder(client)

function urlFor(source: any) {
  return builder.image(source)
}

async function getNews(slug: string) {
  return client.fetch(
    `
    *[_type == "news" && slug.current == $slug][0] {
      title,
      publishedAt,
      excerpt,
      image,
      body
    }
    `,
    { slug }
  )
}

export default async function NewsPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const news = await getNews(slug)

  if (!news) {
    notFound()
  }

  const imageUrl = news.image
    ? urlFor(news.image).width(1200).url()
    : null

  return (
    <main className="min-h-screen bg-background text-foreground py-24">
      <div className="max-w-4xl mx-auto px-6">
        <Link
          href="/#news"
          className="inline-flex items-center text-primary hover:text-primary/80 mb-8"
        >
          ← Back to news
        </Link>

        <p className="text-sm text-muted-foreground mb-4">
          {news.publishedAt
            ? new Date(news.publishedAt).toLocaleDateString("en", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : ""}
        </p>

        <h1 className="text-4xl font-bold mb-6">{news.title}</h1>

        {news.excerpt && (
          <p className="text-xl text-muted-foreground mb-10">
            {news.excerpt}
          </p>
        )}

        {imageUrl && (
          <div className="relative w-full h-[500px] mb-10 rounded-2xl border border-border bg-card">
            <Image
              src={imageUrl}
              alt={news.title}
              fill
              className="object-contain p-4"
              priority
            />
          </div>
        )}

        <article className="prose prose-invert max-w-none">
          {news.body ? <PortableText value={news.body} /> : null}
        </article>
      </div>
    </main>
  )
}