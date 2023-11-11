'use client'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import {
  ConnectionProvider,
  WalletProvider
} from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets'
import { SessionProvider } from 'next-auth/react'
import React, { useMemo } from 'react'

export interface AuthContextProps {
  children: React.ReactNode
}

require('@solana/wallet-adapter-react-ui/styles.css')

export default function Web3ProviderSolana({ children }: AuthContextProps) {
  const network = WalletAdapterNetwork.Mainnet
  const endpoint = `https://api.mainnet-beta.solana.com`

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const wallets = useMemo(() => [new PhantomWalletAdapter()], [network])

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <SessionProvider>{children}</SessionProvider>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}
