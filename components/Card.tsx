import Link from 'next/link'

type CardProps = {
  slug: string
  title: string
  content: string
}

export default function Card({ slug, title, content }: CardProps) {
  return (
     <Link
        href={`/posts/${slug}`}
         className="
            rounded-3xl bg-[#3A2F3F]/40 border border-[#D8973C]/70 backdrop-blur-md p-6 text-white shadow-lg
            block max-h-[160px] overflow-hidden
            outline-none focus:outline-none focus:ring-0 focus:shadow-none
            hover:bg-[#BD632F]/80 hover:shadow-[0_8px_15px_rgba(189,99,47,0.5)] transition duration-300
            "
         >

      <h2 className="text-2xl font-bold mb-2 text-[#D8973C] line-clamp-1 ">{title}</h2>
      <p className="text-sm text-[#D8C99B] opacity-90 line-clamp-1 ">{content}</p>
    </Link>
  )
}
