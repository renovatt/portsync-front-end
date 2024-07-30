'use client'
import UserNav from './user-nav'
import SheetMenu from './sheet-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { usePathname } from 'next/navigation'
import { routes } from '@/static/routes'
import { useAuth } from '@/hooks/use-auth'

export default function Header() {
  const pathname = usePathname()
  const routeName = routes.find(({ path }) => path === pathname)

  const id = pathname.split('/').slice(3)
  const isIdRoute = pathname.includes('projects/edit')

  const isValidPaths =
    pathname === '/projects' ||
    pathname === '/stacks' ||
    pathname.includes('projects/edit')

  const { user } = useAuth()

  return (
    <header className="flex h-20 w-full items-center justify-between px-4 py-2 md:px-10">
      <section className="flex items-center justify-center gap-2 md:gap-5">
        <Avatar>
          <AvatarImage src="/icon-192x192.png" alt="@portsync" />
          <AvatarFallback>PS</AvatarFallback>
        </Avatar>
        <h2 className="font-bold">{routeName?.name}</h2>
        <>
          {isValidPaths && user?.name && (
            <>
              {isIdRoute ? (
                <>
                  <h2 className="font-bold">Editar projeto</h2>
                  <span className="rounded-md border p-2 text-xs">
                    /{user.name}/projects-public/{id}
                  </span>
                </>
              ) : (
                <span className="rounded-md border p-2 text-xs">
                  /{user.name}
                  {pathname}-public
                </span>
              )}
            </>
          )}
        </>
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
