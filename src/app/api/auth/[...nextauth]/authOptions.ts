import type { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { getCsrfToken } from 'next-auth/react'

import { Signature } from '@/lib/Authentication/Signature'
import { getURL } from '@/lib/hooks/getURL'

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'web3-auth',
      credentials: {
        signature: {
          label: 'Signature',
          type: 'text'
        },
        message: {
          label: 'Message',
          type: 'text'
        }
      },
      async authorize(credentials, req) {
        if (!credentials?.message) {
          return null
        }
        const { publicKey, host } = JSON.parse(credentials?.message)

        const nextAuthUrl = new URL(getURL())

        if (host !== nextAuthUrl.host) {
          return null
        }
        const crsf = await getCsrfToken({ req: { ...req, body: null } })

        if (!crsf) {
          return null
        }
        const nonceUnit8 = Signature.create(crsf)

        const isValidate = await Signature.validate(
          {
            signature: credentials?.signature,
            publicKey
          },
          nonceUnit8
        ).then((res) => res.valueOf)

        if (!isValidate) {
          throw new Error('Could not validate the signed message')
        }

        return { id: publicKey }
      }
    })
  ],

  session: { strategy: 'jwt' },

  debug: process.env.NEXT_PUBLIC_VERCEL_ENV === 'development',

  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        session.user.name = token.sub
        session.user.image = `https://ui-avatars.com/api/?name=${token.sub}`
      }
      return session
    }
  }
}
