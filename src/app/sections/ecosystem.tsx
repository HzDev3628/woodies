import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { H2Gradient } from '@/components/ui/text-gradient'
import { ECOSYSTEM } from '@/lib/constants'

export const Ecosystem = () => {
  return (
    <div className="relative z-30 mb-[370px] mt-[300px] flex justify-between px-24">
      <div className="flex w-[600px] flex-col gap-10">
        <H2Gradient>{ECOSYSTEM.title}</H2Gradient>
        <p>{ECOSYSTEM.content}</p>
        <Button>{ECOSYSTEM.button}</Button>
      </div>
      <div className="relative w-2/5">
        {ECOSYSTEM.images.map(({ src, style }, index) => (
          <Image key={index} src={src} className={style} alt="" />
        ))}
      </div>
    </div>
  )
}
