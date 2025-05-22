// app/page.tsx
import Link from 'next/link'
import { posts } from '@/data/posts'

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold text-purple-600">Mini Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
