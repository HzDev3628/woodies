import { VALUELINKS } from '../_constants'

export const Footer = () => {
  return (
    <footer className="relative z-10 flex h-[72px] items-center justify-between px-5 text-footer">
      <div className="flex flex-col justify-center">
        <span className="font-nunito text-xs font-normal leading-[8px]">
          Powered by
        </span>
        <p className="font-cherry text-[35px] leading-[24px] text-footer">
          Woodies
        </p>
      </div>
      <div className="font-nunito text-base font-medium leading-[14px]">
        © 2023. All rights reserved
      </div>
      <div className="flex w-[134px] items-center justify-between">
        {VALUELINKS.map(({ ImageSVG, href }, index) => (
          <a key={index} href={href} target="_blank">
            <ImageSVG className="transition-all duration-200 hover:invert-[.70]" />
          </a>
        ))}
      </div>
    </footer>
  )
}
