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
        'w-[89px] h-[107px] md:w-32 md:h-40 xl:w-48 xl:h-60 absolute -top-1 sm:top-6 md:-top-2 xl:-top-12 xl:left-0 z-30 xl:ml-10',
    },
    {
      src: IntroductionTwo,
      style:
        'w-20 h-[91px] md:w-32 md:h-36 xl:w-48 xl:h-[215px] absolute top-16 left-7 sm:top-24 sm:left-14 md:left-[135px] md:top-5 xl:-top-4 xl:left-56 z-30 xl:ml-10',
    },
    {
      src: IntroductionThree,
      style:
        'w-[77px] h-[77px] md:w-[120px] md:h-[120px] xl:h-48 xl:w-48 absolute top-32 sm:top-40 md:left-[70px] md:top-28 xl:left-24 xl:top-24 z-40 xl:ml-10',
    },
  ],
}
