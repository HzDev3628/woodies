'use client'
import { useSession } from 'next-auth/react'

import { WalletNotConnected } from '../components/WalletNotConnected'
import { ControlBar } from './components/ControlBar'

const Staking = () => {
  const { data: session } = useSession()
  if (!session) return <WalletNotConnected />
  return (
    <div className="m-auto w-[90%]">
      <ControlBar />
    </div>
  )
}

export default Staking
