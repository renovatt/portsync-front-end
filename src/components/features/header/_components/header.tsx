import { SheetMenu } from './sheet-menu'

export const Header = () => {
  return (
    <header className="flex h-20 w-full items-center justify-between p-2 px-4">
      <div className="size-14 rounded-full bg-primary"></div>
      <section className="flex items-center gap-4">
        <p className="hidden md:flex">Wildemberg</p>
        <SheetMenu />
      </section>
    </header>
  )
}
