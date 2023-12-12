import Image from 'next/image'

import DiscordImage from '../../../public/footer/discord.svg'
import WhitepaperImage from '../../../public/footer/paper.svg'
import TwitterImage from '../../../public/footer/twitter_x.svg'

const VALUELINKS = [
  {
    image: WhitepaperImage,
    alt: 'Whitepaper',
    href: '#'
  },
  {
    image: TwitterImage,
    alt: 'Twitter',
    href: '#'
  },
  {
    image: DiscordImage,
    alt: 'Discord',
    href: '#'
  }
]

export const Footer = () => {
  return (
    <footer className="flex h-[72px] items-center justify-between px-5 text-footer">
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
        {VALUELINKS.map(({ image, alt, href }, index) => (
          <a key={index} href={href} target="_blank">
            <Image
              src={image}
              width={25}
              height={25}
              alt={alt}
              className="transition-all duration-200 hover:invert-[.70]"
            />
          </a>
        ))}
      </div>
    </footer>
  )
}
