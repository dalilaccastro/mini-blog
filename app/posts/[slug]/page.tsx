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

  if (!post) return <p>Post não encontrado. Tente novamente</p>

  return (
    <article className={styles.post}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  )
}
