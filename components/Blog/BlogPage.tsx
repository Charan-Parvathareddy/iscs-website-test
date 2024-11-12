import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    excerpt: "Learn the basics of Next.js and how to set up your first project.",
    date: "2024-06-01"
  },
  {
    id: "2",
    title: "Mastering React Hooks",
    excerpt: "Dive deep into React Hooks and learn how to use them effectively in your projects.",
    date: "2024-06-15"
  },
  {
    id: "3",
    title: "The Power of Server-Side Rendering",
    excerpt: "Explore the benefits of server-side rendering and how to implement it in Next.js.",
    date: "2024-07-01"
  },
  {
    id: "4",
    title: "Building Responsive Layouts with Tailwind CSS",
    excerpt: "Learn how to create beautiful, responsive layouts using Tailwind CSS in your Next.js projects.",
    date: "2024-07-15"
  },
  {
    id: "5",
    title: "Optimizing Performance in Next.js Applications",
    excerpt: "Discover techniques and best practices for optimizing the performance of your Next.js applications.",
    date: "2024-08-01"
  }
]

export  function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
     <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="flex justify-between mt-auto">
              <span className="text-sm text-muted-foreground">{post.date}</span>
              <Button asChild>
                <Link href={`/blog/${post.id}`}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}