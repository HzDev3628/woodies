import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { getCsrfToken } from 'next-auth/react'

import { SigninMessage } from '@/lib/SigninMessage'

const providers = [
  CredentialsProvider({
    name: 'Solana',
    credentials: {
      message: {
        label: 'Message',
        type: 'text'
      },
      signature: {
        label: 'Signature',
        type: 'text'
      }
    },
    async authorize(credentials, req) {
      try {
        const signinMessage = new SigninMessage(
          JSON.parse(credentials?.message || '{}')
        )
        const nextAuthUrl = process.env.NEXTAUTH_URL
        if (signinMessage.domain !== nextAuthUrl) {
          return null
        }

        const csrfToken = await getCsrfToken({ req: { ...req, body: null } })

        if (!csrfToken) {
          return null
        }

        const validationResult = await signinMessage.validate(
          credentials?.signature || ''
        )

        if (!validationResult)
          throw new Error('Could not validate the signed message')

        return {
          id: signinMessage.publicKey
        }
      } catch (e) {
        return null
      }
    }
  })
]

const handler = NextAuth({
  session: {
    strategy: 'jwt'
  },
  providers,
  callbacks: {
    session({ session, token }) {
      if (session.user) {
        session.user.name = token.sub
        session.user.image = `https://ui-avatars.com/api/?name=${token.sub}`
      }
      return session
    }
  }
})
export { handler as GET, handler as POST }
