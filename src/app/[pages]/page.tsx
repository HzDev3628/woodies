'use client'
import { useSession } from 'next-auth/react'

import { WalletNotConnected } from './components/WalletNotConnected'

type GetPages = {
  params: { pages: string }
}

export default function Pages({ params: { pages } }: GetPages) {
  const { data: session } = useSession()

  return (
    <main className="min-h-[calc(100vh-140px)] w-full pt-10">
      <div className="flex w-full justify-center font-cherry text-[96px] font-normal leading-none">
        {pages}
      </div>
      <div className="flex h-96 items-center">
        {!session && <WalletNotConnected />}
      </div>
    </main>
  )
}
