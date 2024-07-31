import { CopyPlus, Settings, View } from 'lucide-react'

export const routes = [
  {
    path: '/projects/create',
    name: 'Adicionar projeto',
    icon: CopyPlus,
  },
  {
    path: '/stacks/create',
    name: 'Adicionar habilidade',
    icon: CopyPlus,
  },
  {
    path: '/stacks',
    name: 'Minhas Habilidades',
    icon: View,
  },
  {
    path: '/projects',
    name: 'Meus projetos',
    icon: View,
  },
  {
    path: '/refresh-key',
    name: 'Gerenciar API KEY',
    icon: Settings,
  },
]
