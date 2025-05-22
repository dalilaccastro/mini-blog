// app/posts/[slug]/page.tsx
import { posts } from '@/data/posts'
import styles from '@/styles/Post.module.css'

type Params = {
  params: {
    slug: string
  }
}

export default function PostPage({ params }: Params) {
  const post = posts.find((p) => p.slug === params.slug)

  if (!post) return <p>Post não encontrado</p>

  return (
    <article className="max-w-3xl mx-auto p-6 bg-white/20 backdrop-blur-md rounded-lg shadow-lg mt-10 text-gray-900">
      <h1 className="text-3xl font-bold mb-4 ">{post.title}</h1>
      <p className="text-lg leading-relaxed">{post.content}</p>
    </article>
  )
}

