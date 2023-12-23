import {
  IntroductionOne,
  IntroductionThree,
  IntroductionTwo
} from '../sections/assets/index'
import { DiscordURL } from './links'

export const ECOSYSTEM = {
  title: 'Explore our ecosystem',
  content:
    'Woodies is a community driven collection of 3333 cute forest creatures based on Solana Blockchain. We are focused on pushing more creativity and uniqueness to web3 t. Our ecosystem is based on art, community and utility.',
  button: 'Join the movement',
  buttonURL: DiscordURL,
  images: [
    {
      src: IntroductionOne,
      style:
        'w-32 h-40 xl:w-48 xl:h-60 absolute -top-2 xl:-top-12 xl:left-0 z-30 xl:ml-10',
    },
    {
      src: IntroductionTwo,
      style:
        'w-32 h-36 xl:w-48 xl:h-[215px] absolute left-[135px] top-5 xl:-top-4 xl:left-56 z-30 xl:ml-10',
    },
    {
      src: IntroductionThree,
      style:
        'w-[120px] h-[120px] xl:h-48 xl:w-48 absolute left-[70px] top-28 xl:left-24 xl:top-24 z-40 xl:ml-10',
    },
  ],
}
