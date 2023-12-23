import { H2Gradient } from '@/components/ui/text-gradient'
import { PRE_FOOTER_DATA } from '../_constants/pre-footer'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export const PreFooter = () => {
  return (
    <>
      <div className="relative z-30 w-full flex flex-col items-center justify-center gap-10 overflow-hidden h-[800px]">
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
        className="absolute left-0 m-auto right-0 bottom-14 -z-10 opacity-20"
      />
    </>
  )
}
