import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <header className="fixed top-0 flex h-20 w-full items-center justify-between bg-secondary p-2 px-4">
      <div className="size-14 rounded-full bg-slate-400"></div>

      <div className="flex items-center gap-4">
        <nav>
          <ul className="flex items-center justify-center gap-4">
            <li>
              <Link href="/new-project">Novo projeto</Link>
            </li>
            <li>
              <Link href="/list-projects">Lista de projetos</Link>
            </li>
          </ul>
        </nav>

        <div className="size-10 rounded-full bg-slate-400"></div>
        <p className="hidden md:flex">Wildemberg</p>
      </div>
    </header>
  )
}
