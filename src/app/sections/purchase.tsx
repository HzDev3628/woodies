import Image from 'next/image'

import { H2Gradient } from '@/components/ui/text-gradient'

import { PURCHASE_DATA } from '../_constants/purchase'

export const Purchase = () => {
  return (
    <div className=" relative mb-[300px] flex justify-center">
      <div className="relative w-1/2">
        {PURCHASE_DATA.items.map(({ src, style }, index) => (
          <Image className={style} key={index} src={src} alt="" />
        ))}
      </div>
      <div className="flex w-3/4 flex-col gap-5">
        <H2Gradient>{PURCHASE_DATA.title}</H2Gradient>
        <p className="w-1/2 font-medium">{PURCHASE_DATA.body}</p>
      </div>
      <div
        className="absolute right-20 top-0 -z-10 h-96 w-[700px] opacity-20"
        style={{
          background:
            'radial-gradient(50% 50% at 50% 50%, #525252 0%, #0B0B0B 100%)'
        }}
      />
    </div>
  )
}
