import Image from 'next/image'

import { H2Gradient } from '@/components/ui/text-gradient'

import { PURCHASE_DATA } from '../_constants/purchase'

export const Purchase = () => {
  return (
    <div className="relative z-30 mb-52 lg:mb-[300px] max-w-[1500px] flex flex-col sm:flex-row gap-5 sm:gap-0 justify-center m-auto">
      <span className="max-sm:flex hidden m-auto">
        <H2Gradient>{PURCHASE_DATA.title}</H2Gradient>
      </span>
      <div className="flex ">
        <div className="relative max-sm:ml-10 w-5/12 sm:w-1/2">
          {PURCHASE_DATA.items.map(({ src, style }, index) => (
            <Image className={style} key={index} src={src} alt="" />
          ))}
        </div>
        <div className="flex w-4/5 max-sm:mr-5 sm:w-[435px] md:w-1/2 flex-col gap-5">
          <span className="max-sm:hidden visible">
            <H2Gradient>{PURCHASE_DATA.title}</H2Gradient>
          </span>
          <p className="w-9/12 xl:w-3/5 ml-auto md:ml-0 font-medium text-sm sm:text-base xl:text-xl">
            {PURCHASE_DATA.body}
          </p>
        </div>
        <div
          className="absolute right-20 -top-5 -z-10 h-96 w-[700px] opacity-20"
          style={{
            background:
              'radial-gradient(50% 50% at 50% 50%, #525252 0%, #0B0B0B 100%)',
          }}
        />
      </div>
    </div>
  )
}
