type GetPages = {
  params: { pages: string }
}

export default async function Pages({ params: { pages } }: GetPages) {
  return (
    <main className="min-h-[calc(100vh-140px)]">
      <div className="font-cherry flex w-full justify-center text-[96px] font-normal">
        {pages}
      </div>
    </main>
  )
}
