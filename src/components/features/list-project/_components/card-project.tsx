'use client'
import Link from 'next/link'
import Image from 'next/image'
import { FilePenLine } from 'lucide-react'
import { ProjectDto } from '@/schemas/project-schema'
import { DeleteModal } from '../../create-and-edit-project/_components/delete-modal'

export default function CardProject({
  id,
  name,
  description,
  bannerUrl,
}: ProjectDto) {
  return (
    <div className="relative flex h-40 w-36 flex-col items-start justify-center gap-4 overflow-hidden rounded-xl bg-accent p-2 shadow-xl md:w-60">
      <div className="absolute right-2 top-2 flex flex-col items-center justify-center space-y-4">
        <Link href={`edit/${id}`}>
          <FilePenLine className="size-5 text-gray-400 transition-all hover:text-primary" />
        </Link>
        <DeleteModal projectId={id as string} />
      </div>
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
        <p className="w-32 truncate text-muted-foreground md:w-52">
          {description}
        </p>
      </div>
    </div>
  )
}
