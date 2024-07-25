'use client'
import UserNav from './user-nav'
import SheetMenu from './sheet-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { usePathname } from 'next/navigation'
import { routes } from '@/static/routes'

export default function Header() {
  const pathname = usePathname()
  const routeName = routes.find(({ path }) => path === pathname)

  return (
    <header className="flex h-20 w-full items-center justify-between px-4 py-2 md:px-10">
      <section className="flex items-center justify-center gap-2 md:gap-5">
        <Avatar>
          <AvatarImage src="/icon-192x192.png" alt="@portsync" />
          <AvatarFallback>PS</AvatarFallback>
        </Avatar>
        <h2 className="font-bold">{routeName?.name}</h2>
      </section>

      <section className="relative flex items-center gap-4">
        <div className="ml-auto flex items-center space-x-4">
          <SheetMenu />
          <UserNav />
        </div>
      </section>
    </header>
  )
}
