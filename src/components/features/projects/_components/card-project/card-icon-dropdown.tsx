'use client'
import {
  DropdownMenuShortcut,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import Link from 'next/link'
import { FilePenLine, Settings, Trash2 } from 'lucide-react'

type CardIconDropdownProps = {
  id: string
  openModal: () => void
}

export default function CardIconDropdown({
  id,
  openModal,
}: CardIconDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Settings className="size-5 cursor-pointer text-muted-foreground transition-all hover:rotate-45" />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="" align="end">
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">Gerenciar</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer">
            <Link href={`/projects/edit/${id}`} className="flex w-full">
              Editar
              <DropdownMenuShortcut>
                <FilePenLine className="size-4" />
              </DropdownMenuShortcut>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer" onClick={openModal}>
            Apagar
            <DropdownMenuShortcut>
              <Trash2 className="size-4" />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
