export default function page() {
  return (
    <aside className="flex size-full flex-col items-center justify-start">
      <ul className="grid w-full grid-cols-1 gap-2 overflow-y-scroll p-2 scrollbar-hide md:max-h-96 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className="flex h-20 w-full cursor-pointer items-center justify-start gap-4 rounded-xl bg-primary p-2 transition-all hover:bg-primary/90"
          >
            <div className="size-16 rounded-xl bg-secondary" />
            <div className="flex flex-col items-start justify-center">
              <h2 className="font-bold text-secondary">
                Project - {index + 1}
              </h2>
              <p className="w-60 truncate text-primary-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, eos
                dolorum. Amet debitis facere deleniti ut aspernatur voluptas
                ullam cum vitae. Magni, aut. Necessitatibus vero maxime
                repellat. Quo, quisquam reiciendis.
              </p>
            </div>
          </div>
        ))}
      </ul>
    </aside>
  )
}
