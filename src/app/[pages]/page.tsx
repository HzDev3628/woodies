import Staking from './staking/page'

type GetPages = {
  params: { pages: string }
}

export default function Pages({ params: { pages } }: GetPages) {
  return (
    <main className="min-h-[calc(100vh-140px)] w-full pt-10">
      <div className="mb-[88px] flex h-max w-full justify-center font-cherry text-[90px] font-normal leading-none">
        {pages}
      </div>
      {pages === 'staking' && <Staking />}
    </main>
  )
}
