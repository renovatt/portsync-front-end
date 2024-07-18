import { Loader as Loader2 } from 'lucide-react'

export default function Loader() {
  return (
    <section className="mt-40 flex size-full flex-col items-center justify-center gap-2">
      <Loader2 className="animate-spin" />
      <p>Carregando..</p>
    </section>
  )
}
