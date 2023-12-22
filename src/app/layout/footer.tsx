'use client'
import { usePathname } from 'next/navigation'
import { SVG_STYLE_HOVER, VALUELINKS } from '../_constants'

export const Footer = () => {
  const pathname = usePathname()
  return (
    <footer className={`relative z-10 ${pathname === '/' ? 'flex' : 'hidden'} h-[72px] items-center justify-between px-5 text-footer`}>
      <div className="flex flex-col justify-center">
        <span className="font-nunito text-xs font-normal leading-[8px]">
          Powered by
        </span>
        <p className="font-cherry text-[35px] leading-[24px] text-footer">
          Woodies
        </p>
      </div>
      <div className="font-nunito text-base font-bold leading-[14px]">
        © 2024. All rights reserved
      </div>
      <div className="flex w-[134px] items-center justify-between">
        {VALUELINKS.map(({ ImageSVG, href }, index) => (
          <a key={index} href={href} target="_blank" rel="noreferrer">
            <ImageSVG className={SVG_STYLE_HOVER} />
          </a>
        ))}
      </div>
    </footer>
  )
}
