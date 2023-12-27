import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { H2Gradient } from '@/components/ui/text-gradient'

import { ECOSYSTEM } from '../_constants'

export const Ecosystem = () => {
  return (
    <div className="relative z-30 mb-52 lg:mb-[280px] mt-52 lg:mt-[260px] flex flex-col sm:flex-row gap-5 sm:gap-0 mx-auto w-11/12 max-w-[1500px] lg:px-24">
      <span className="max-sm:flex hidden">
        <H2Gradient>{ECOSYSTEM.title}</H2Gradient>
      </span>
      <div className="flex w-full justify-between">
        <div className="relative flex w-4/5 sm:w-[370px] xl:w-[600px] flex-col gap-7">
          <span className="max-sm:hidden visible">
            <H2Gradient>{ECOSYSTEM.title}</H2Gradient>
          </span>
          <p className="font-medium text-base xl:text-xl">
            {ECOSYSTEM.content}
          </p>
          <a
            href={ECOSYSTEM.buttonURL}
            target="_blank"
            rel="noreferrer"
            className="w-max"
          >
            <Button>{ECOSYSTEM.button}</Button>
          </a>
        </div>
        <div
          className="absolute -left-20 -top-16 -z-10 h-96 w-full md:w-[700px] opacity-20"
          style={{
            background:
              'radial-gradient(50% 50% at 50% 50%, #525252 0%, #0B0B0B 100%)',
          }}
        />
        <div className="relative ml-5 xl:ml-0 w-2/5 sm:w-36 md:w-64 xl:w-2/5">
          {ECOSYSTEM.images.map(({ src, style }, index) => (
            <Image key={index} src={src} className={style} alt="" />
          ))}
        </div>
      </div>
    </div>
  )
}
