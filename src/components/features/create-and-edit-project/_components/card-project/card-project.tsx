'use client'
import Image from 'next/image'
import { ProjectDto } from '@/schemas/project-schema'
import CardIconDropdown from './card-icon-dropdown'
import { useToggle } from '@/hooks/use-toggle'
import CardDeleteModal from './card-delete-modal'

export default function CardProject({
  id,
  name,
  description,
  bannerUrl,
}: ProjectDto) {
  const { isOpen, closeModal, openModal } = useToggle()

  return (
    <>
      {isOpen && (
        <CardDeleteModal closeModal={closeModal} projectId={id as string} />
      )}

      <div className="relative flex h-48 w-32 animate-fade-right flex-col items-start justify-center space-y-5 overflow-hidden rounded-xl border px-4 md:w-56">
        <div className="absolute right-4 top-4 flex flex-col items-center justify-center space-y-4">
          <CardIconDropdown openModal={openModal} id={id as string} />
        </div>
        <figure>
          <Image
            src={bannerUrl}
            alt={name}
            width={150}
            height={150}
            className="size-10 rounded-xl object-cover md:size-16"
          />
        </figure>
        <div className="flex flex-col items-start justify-center space-y-2">
          <h2 className="text-sm font-bold text-primary md:text-base">
            {name}
          </h2>
          <p className="w-24 truncate text-xs text-muted-foreground md:w-48">
            {description}
          </p>
        </div>
      </div>
    </>
  )
}
