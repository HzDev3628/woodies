export const getURL = () => {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'development')
    return 'http://localhost:3000'
  else return `https://${process.env.NEXTAUTH_URL}`
}
