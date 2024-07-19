import type { Metadata } from 'next'
import Header from '@/components/features/header/_components/header'

const APP_NAME = 'PortSync'
const APP_DESCRIPTION = 'PortSync - Sistema de Gerenciamento para portfolio.'

export const metadata: Metadata = {
  title: {
    default: APP_NAME,
    template: `%s : ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
}

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
