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

      <div className="relative flex h-40 w-36 animate-fade-right flex-col items-start justify-center gap-4 overflow-hidden rounded-xl bg-accent p-2 shadow-xl md:w-60">
        <div className="absolute right-2 top-2 flex flex-col items-center justify-center space-y-4">
          <CardIconDropdown openModal={openModal} id={id as string} />
        </div>
        <figure>
          <Image
            src={bannerUrl}
            alt={name}
            width={150}
            height={150}
            className="size-10 rounded-xl object-cover shadow-md md:size-16"
          />
        </figure>
        <div className="flex flex-col items-start justify-center">
          <h2 className="text-sm font-bold text-primary md:text-base">
            {name}
          </h2>
          <p className="w-32 truncate text-xs text-muted-foreground md:w-52">
            {description}
          </p>
        </div>
      </div>
    </>
  )
}
