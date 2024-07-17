import Link from 'next/link'
import Image from 'next/image'
import { FilePenLine } from 'lucide-react'
import { ProjectDto } from '@/schemas/project-schema'

export default function CardProject({
  id,
  name,
  description,
  bannerUrl,
}: ProjectDto) {
  return (
    <Link key={name} href={`edit-project/${id}`}>
      <div className="relative flex h-40 w-60 cursor-pointer flex-col items-start justify-center gap-4 overflow-hidden rounded-xl bg-accent p-2 shadow-xl transition-all ease-in hover:opacity-75">
        <FilePenLine className="absolute right-2 top-2 size-5" />
        <figure>
          <Image
            src={bannerUrl}
            alt={name}
            width={150}
            height={150}
            className="size-16 rounded-xl object-cover shadow-md"
          />
        </figure>
        <div className="flex flex-col items-start justify-center">
          <h2 className="font-bold text-primary">{name}</h2>
          <p className="w-52 truncate text-muted-foreground">{description}</p>
        </div>
      </div>
    </Link>
  )
}
