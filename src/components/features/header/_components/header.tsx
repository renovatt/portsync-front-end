import UserNav from './user-nav'
import SheetMenu from './sheet-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Header() {
  return (
    <header className="flex h-20 w-full items-center justify-between px-10 py-2">
      <Avatar>
        <AvatarImage
          src="https://raw.githubusercontent.com/renovatt/portsync/main/public/icon-512x512.png"
          alt="@shadcn"
        />
        <AvatarFallback>PS</AvatarFallback>
      </Avatar>
      <section className="relative flex items-center gap-4">
        <div className="ml-auto flex items-center space-x-4">
          <SheetMenu />
          <UserNav />
        </div>
      </section>
    </header>
  )
}
