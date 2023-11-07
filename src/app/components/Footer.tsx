import Image from 'next/image'

import DiscordImage from '../../../public/footer/discord.svg'
import WhitepaperImage from '../../../public/footer/paper.svg'
import TwitterImage from '../../../public/footer/twitter_x.svg'

const VALUELINKS = [
  {
    image: WhitepaperImage,
    alt: 'Whitepaper',
    href: 'https://woodies.gitbook.io/woodies/'
  },
  {
    image: TwitterImage,
    alt: 'Twitter',
    href: '#'
  },
  {
    image: DiscordImage,
    alt: 'Discord',
    href: 'https://discord.gg/YMfydA6kTG'
  }
]

export const Footer = () => {
  return (
    <footer className="flex h-[59px] items-center justify-between border-t-2 border-solid border-card-border px-[75px]">
      <div className="flex flex-col justify-center">
        <span className="text-xs font-normal leading-[8px]">Powered by</span>
        <p className="font-cherry text-[35px] leading-[24px] text-primary dark:text-text-main">
          Woodies
        </p>
      </div>
      <div className="text-xl font-medium leading-[14px] text-primary dark:text-text-main">
        © 2023. All rights reserved
      </div>
      <div className="flex w-[134px] items-center justify-between">
        {VALUELINKS.map(({ image, alt, href }, index) => (
          <a key={index} href={href}>
            <Image src={image} width={30} height={30} alt={alt} />
          </a>
        ))}
      </div>
    </footer>
  )
}
