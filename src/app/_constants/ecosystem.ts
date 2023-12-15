import {
  IntroductionOne,
  IntroductionThree,
  IntroductionTwo
} from '../sections/assets/index'
import { DiscordURL } from './links'

export const ECOSYSTEM = {
  title: 'Explore our ecosystem',
  content: `Woodies is community driven collection of 3333 cute forest creatures
            based on Solana Blockchain. We are focused on pushing more creativity
            and uniqueness to web3 space. Our ecosystem is based on art, community
            and utility.`,
  button: 'Join the movement',
  buttonURL: DiscordURL,
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
