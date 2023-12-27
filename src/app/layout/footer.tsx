'use client'
import { usePathname } from 'next/navigation'
import { SVG_STYLE_HOVER, VALUELINKS } from '../_constants'

export const Footer = () => {
  const pathname = usePathname()
  return (
    <footer
      className={`relative z-10 ${
        pathname === '/' ? 'flex' : 'hidden'
      } h-[72px] items-center justify-between px-5 text-footer`}
    >
      <div className="hidden sm:flex flex-col justify-center">
        <span className="font-nunito text-xs font-normal leading-[8px]">
          Powered by
        </span>
        <p className="font-cherry text-[35px] leading-[24px] text-footer">
          Woodies
        </p>
      </div>
      <div className="hidden sm:inline font-nunito text-base font-bold leading-[14px]">
        © 2024. All rights reserved
      </div>
      <div className="flex w-full max-[400px]:px-2 px-8 sm:px-0 sm:w-[134px] items-center justify-between">
        {VALUELINKS.map(({ ImageSVG, href, title }, index) => (
          <a key={index} href={href} target="_blank" rel="noreferrer" className="flex flex-col items-center">
            <ImageSVG className={SVG_STYLE_HOVER} />
            <span className="inline text-xs font-bold sm:hidden">{title}</span>
          </a>
        ))}
      </div>
    </footer>
  )
}
