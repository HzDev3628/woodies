import { Discord, Twitter, Whitepaper } from '@/app/layout/assets'

import {
  IntroductionOne,
  IntroductionThree,
  IntroductionTwo
} from '../app/sections/assets/index'

// Navigate button
export const BUTTONHEADER = [
  {
    label: 'Home',
    href: '/',
    disabled: false
  },
  {
    label: 'Staking',
    href: '/staking',
    disabled: true
  },
  {
    label: 'Wheelspins',
    href: '/wheelspins',
    disabled: true
  },
  {
    label: 'Raid2Earn',
    href: '/raid2earn',
    disabled: true
  }
]

// Footer
export const VALUELINKS = [
  {
    ImageSVG: Whitepaper,
    href: 'https://woodies.gitbook.io'
  },
  {
    ImageSVG: Twitter,
    href: '#'
  },
  {
    ImageSVG: Discord,
    href: 'https://discord.gg/hGR8JsXp4n'
  }
]

// Ecosystem
export const ECOSYSTEM = {
  title: 'Explore our ecosystem',
  content: `Woodies is community driven collection of 3333 cute forest creatures
            based on Solana Blockchain. We are focused on pushing more creativity
            and uniqueness to web3 space. Our ecosystem is based on art, community
            and utility.`,
  button: 'Join the movement',
  images: [
    {
      src: IntroductionOne,
      style: 'absolute -top-12 left-0 z-30 ml-10'
    },
    {
      src: IntroductionTwo,
      style: 'absolute -top-4 left-56 z-30 ml-10'
    },
    {
      src: IntroductionThree,
      style: 'absolute left-24 top-24 z-40 ml-10'
    }
  ]
}
