'use client'
import { SessionProvider } from 'next-auth/react'
import React from 'react'

export interface AuthContextProps {
  children: React.ReactNode
}

require('@solana/wallet-adapter-react-ui/styles.css')

export default function Web3ProviderSolana({ children }: AuthContextProps) {
  return <SessionProvider>{children}</SessionProvider>
}
