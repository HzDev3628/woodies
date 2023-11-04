'use client'
import { useWallet } from '@solana/wallet-adapter-react'
import { useWalletModal } from '@solana/wallet-adapter-react-ui'
import base58 from 'bs58'
import { getCsrfToken, signIn, useSession } from 'next-auth/react'
import { useEffect } from 'react'

import { SigninMessage } from '../SigninMessage'
import { AuthButton } from './AuthButton'

export const Authentication = () => {
  const { data: session, status } = useSession()

  const wallet = useWallet()
  const walletModal = useWalletModal()

  const handleSignIn = async () => {
    try {
      if (!wallet.connected) {
        walletModal.setVisible(true)
      }

      const csrf = await getCsrfToken()
      if (!wallet.publicKey || !csrf || !wallet.signMessage) return

      const message = new SigninMessage({
        domain: window.location.host,
        publicKey: wallet.publicKey?.toBase58(),
        statement: `Sign this message to sign in to the app.`,
        nonce: csrf
      })

      const data = new TextEncoder().encode(message.prepare())
      const signature = await wallet.signMessage(data)
      const serializedSignature = base58.encode(signature)

      const response = await signIn('credentials', {
        message: JSON.stringify(message),
        redirect: false,
        signature: serializedSignature
      })
      if (response?.error) {
        console.log('Error occured:', response.error)
        return
      } else {
        console.log('Could not connect to wallet')
      }
    } catch (error) {
      console.log(error)
    }
  }

  // useEffect(() => {
  //   if (wallet.connected && status === 'unauthenticated') {
  //     handleSignIn()
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [wallet.connected])
  return <AuthButton session={session} handleSignIn={handleSignIn} />
}
