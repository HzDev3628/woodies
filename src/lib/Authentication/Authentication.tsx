import base58 from 'bs58'
import { getCsrfToken, signIn } from 'next-auth/react'

import { getProvider } from '../hooks/getProvider'
import { Signature } from './Signature'

export const onConnect = async () => {
  try {
    const provider = getProvider()

    if (!provider) {
      window.open('https://phantom.app/', '_blank')
    }

    const resp = await provider.connect()
    console.log('Connect', resp.publicKey.toString())
    const csrf = await getCsrfToken()
    if (resp && csrf) {
      const noneUnit8 = Signature.create(csrf)
      const { signature } = await provider.signMessage(noneUnit8)
      const serializedSignature = base58.encode(signature)
      const message = {
        host: window.location.host,
        publicKey: resp.publicKey.toString(),
        nonce: csrf
      }
      const response = await signIn('credentials', {
        message: JSON.stringify(message),
        signature: serializedSignature,
        redirect: false
      }).then((res: any) => res.json())
      if (response?.error) {
        console.log('Error occured:', response.error)
        return
      }
    } else {
      console.log('Could not connect to wallet')
    }
  } catch (error) {
    console.error(error)
  }
}
