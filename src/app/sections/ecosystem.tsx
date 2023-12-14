import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { H2Gradient } from '@/components/ui/text-gradient'

import {
  IntroductionOne,
  IntroductionThree,
  IntroductionTwo
} from './assets/index'

export const Ecosystem = () => {
  return (
    <div className="relative z-30 mb-[370px] mt-[300px] flex justify-between px-24">
      <div className="flex w-[600px] flex-col gap-10">
        <H2Gradient>Explore our ecosystem</H2Gradient>
        <p>
          Woodies is community driven collection of 3333 cute forest creatures
          based on Solana Blockchain. We are focused on pushing more creativity
          and uniqueness to web3 space. Our ecosystem is based on art, community
          and utility.
        </p>
        <Button>Join the movement</Button>
      </div>
      <div className="relative w-2/5">
        <Image
          className="absolute -top-12 left-0 z-30 ml-10"
          src={IntroductionOne}
          alt="IntroductionOne"
        />
        <Image
          className="absolute -top-4 left-56 z-30 ml-10"
          src={IntroductionTwo}
          alt="IntroductionTwo"
        />
        <Image
          className="absolute left-24 top-24 z-40 ml-10"
          src={IntroductionThree}
          alt="IntroductionThree"
        />
      </div>
    </div>
  )
}
