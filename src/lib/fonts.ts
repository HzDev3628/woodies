import { Cherry_Bomb_One, Montserrat, Nunito } from 'next/font/google'

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['800'],
  style: 'normal',
  variable: '--font-montserrat'
})

export const nunito = Nunito({
  weight: ['400', '500'],
  subsets: ['latin'],
  style: 'normal',
  variable: '--font-nunito'
})

export const cherry = Cherry_Bomb_One({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  style: 'normal',
  variable: '--font-cherry'
})
