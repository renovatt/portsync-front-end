import UserNav from './user-nav'
import SheetMenu from './sheet-menu'

export default function Header() {
  return (
    <header className="flex h-20 w-full items-center justify-between p-2 px-4">
      <div className="size-14 rounded-full bg-primary"></div>
      <section className="relative flex items-center gap-4">
        <div className="ml-auto flex items-center space-x-4">
          <SheetMenu />
          <UserNav />
        </div>
      </section>
    </header>
  )
}
