import { H2Gradient } from '@/components/ui/text-gradient'
import { PRE_FOOTER_DATA } from '../_constants/pre-footer'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export const PreFooter = () => {
  return (
    <div className="w-full max-w-[1779px] m-auto h-96 sm:h-[612px] max-sm:mb-16 max-sm:mt-28 relative overflow-hidden">
      <div className="relative z-30 w-full flex flex-col items-center justify-center gap-10 overflow-hidden h-96 sm:h-[612px]">
        <H2Gradient>{PRE_FOOTER_DATA.title}</H2Gradient>
        <a
          className="w-max"
          href={PRE_FOOTER_DATA.buttonURL}
          target="_blank"
          rel="noreferrer"
        >
          <Button className="px-12 py-5 font-bold text-lg">
            {PRE_FOOTER_DATA.textButton}
          </Button>
        </a>
      </div>
      <Image
        src={PRE_FOOTER_DATA.img}
        alt=""
        layout="fill"
        objectFit="cover"
        className="absolute left-0 m-auto right-0 bottom-14 -z-10 opacity-20"
      />
    </div>
  )
}
