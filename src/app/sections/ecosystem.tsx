import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { H2Gradient } from '@/components/ui/text-gradient'

import { ECOSYSTEM } from '../_constants'

export const Ecosystem = () => {
  return (
    <div className="relative z-30 mb-[280px] mt-[260px] flex justify-between px-24">
      <div className="relative flex w-[600px] flex-col gap-7">
        <H2Gradient>{ECOSYSTEM.title}</H2Gradient>
        <p className="font-medium">{ECOSYSTEM.content}</p>
        <a href={ECOSYSTEM.buttonURL} target="_blank" className="w-max">
          <Button>{ECOSYSTEM.button}</Button>
        </a>
      </div>
      <div
        className="absolute -left-20 -top-16 -z-10 h-96 w-[700px] opacity-20"
        style={{
          background:
            'radial-gradient(50% 50% at 50% 50%, #525252 0%, #0B0B0B 100%)'
        }}
      />
      <div className="relative w-2/5">
        {ECOSYSTEM.images.map(({ src, style }, index) => (
          <Image key={index} src={src} className={style} alt="" />
        ))}
      </div>
    </div>
  )
}
