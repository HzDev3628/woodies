type GetPages = {
  params: { pages: string }
}

export default async function Pages({ params: { pages } }: GetPages) {
  return (
    <main className="min-h-[calc(100vh-140px)]">
      <div className="flex w-full justify-center font-cherry text-[96px] font-normal">
        {pages}
      </div>
    </main>
  )
}
