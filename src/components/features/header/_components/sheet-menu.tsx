import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { routes } from '@/static/routes'

import Link from 'next/link'

export function SheetMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Projetos</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Projetos</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <nav>
            <ul className="flex w-full flex-col items-start justify-center gap-1">
              {routes.map(({ name, path }) => (
                <li key={path} className="w-full">
                  <Link href={path}>
                    <Button variant="outline" className="w-full">
                      {name}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}
