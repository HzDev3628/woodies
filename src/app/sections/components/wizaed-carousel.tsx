'use client'
import anime from 'animejs'
import type { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import { useEffect } from 'react'
import { useWizard } from 'react-use-wizard'

import { SVG_STYLE_HOVER } from '@/app/_constants'
import { Arrow } from '@/components/ui/icons'

export const WizardCarousel = ({ items }: { items: string | StaticImport }) => {
  const STYLE = 'h-1 w-10 mr-5 rounded'
  const { nextStep, previousStep, activeStep } = useWizard()

  useEffect(() => {
    anime({
      targets: '#image-animation',
      opacity: [0, 1],
      duration: 6000
    })
  }, [activeStep])

  return (
    <div className="mt-[60px]">
      <Image
        src={items}
        alt=""
        id="image-animation"
        style={{ borderRadius: '20px' }}
      />
      <div className="mt-5 flex w-full items-center justify-center">
        <Arrow
          className={`mr-5 rotate-180 ${SVG_STYLE_HOVER}`}
          onClick={() => previousStep()}
        />
        <div
          className={`${
            activeStep === 0 ? 'bg-buttons' : 'bg-primary'
          } ${STYLE}`}
        />
        <div
          className={`${
            activeStep === 1 ? 'bg-buttons' : 'bg-primary'
          } ${STYLE}`}
        />
        <div
          className={`${
            activeStep === 2 ? 'bg-buttons' : 'bg-primary'
          } ${STYLE}`}
        />
        <div
          className={`${
            activeStep === 3 ? 'bg-buttons' : 'bg-primary'
          } ${STYLE}`}
        />
        <Arrow onClick={() => nextStep()} className={SVG_STYLE_HOVER} />
      </div>
    </div>
  )
}
