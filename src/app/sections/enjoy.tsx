'use client'
import { Wizard } from 'react-use-wizard'

import { H2Gradient } from '@/components/ui/text-gradient'

import { ENJOY_CAROUSEL } from '../_constants'
import { WizardCarousel } from './components/wizaed-carousel'

export const Enjoy = () => {
  return (
    <div className="relative z-30 mb-[300px] flex w-full flex-col items-center">
      <H2Gradient>{ENJOY_CAROUSEL.title}</H2Gradient>
      <Wizard>
        {ENJOY_CAROUSEL.carousel.map((value, index) => (
          <WizardCarousel key={index} items={value} />
        ))}
      </Wizard>
      <div
        className="absolute -bottom-16 -z-10 h-80 w-[700px] opacity-[0.15]"
        style={{
          background:
            'radial-gradient(50% 50% at 50% 50%, #525252 0%, #0B0B0B 100%)'
        }}
      />
    </div>
  )
}
