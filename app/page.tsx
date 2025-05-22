import Card from '@/components/Card'
import { posts } from '@/data/posts'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#3f4250] flex flex-col items-center justify-start px-6 py-16 text-white">
      <header className="max-w-4xl mb-12 text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-[#D8973C] drop-shadow-lg">
          Mini Blog Front-end
        </h1>
        <p className="text-lg max-w-xl mx-auto text-[#D8C99B] opacity-90">
          Bem-vindo ao nosso espaço de posts onde compartilhamos conteúdo exclusivo sobre a rotina de uma desenvolvedora front-end.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl">
        {posts.map((post) => (
          <Card
            key={post.slug}
            slug={post.slug}
            title={post.title}
            content={post.content}
          />
        ))}
      </section>
    </main>
  )
}
