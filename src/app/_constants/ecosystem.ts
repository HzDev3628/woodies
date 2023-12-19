import {
  IntroductionOne,
  IntroductionThree,
  IntroductionTwo
} from '../sections/assets/index'
import { DiscordURL } from './links'

export const ECOSYSTEM = {
  title: 'Explore our ecosystem',
  content:
    'Every Woodie that you see is unique. By minting Woodies you are buying a piece of smooth rare style. More than 130 traits, 3 characters, a couple of 1/1s made with love. Will you try your luck to mint the rarest one?',
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
