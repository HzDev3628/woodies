import Image from 'next/image'

import { H2Gradient } from '@/components/ui/text-gradient'

import { PURCHASE_DATA } from '../_constants/purchase'

export const Purchase = () => {
  return (
    <div className="relative z-30 mb-[300px] max-w-[1500px] flex justify-center m-auto">
      <div className="relative w-1/2">
        {PURCHASE_DATA.items.map(({ src, style }, index) => (
          <Image className={style} key={index} src={src} alt="" />
        ))}
      </div>
      <div className="flex w-1/2 flex-col gap-5">
        <H2Gradient>{PURCHASE_DATA.title}</H2Gradient>
        <p className="w-9/12 xl:w-3/5 font-medium text-base xl:text-xl">{PURCHASE_DATA.body}</p>
      </div>
      <div
        className="absolute right-20 -top-5 -z-10 h-96 w-[700px] opacity-20"
        style={{
          background:
            'radial-gradient(50% 50% at 50% 50%, #525252 0%, #0B0B0B 100%)',
        }}
      />
    </div>
  )
}
