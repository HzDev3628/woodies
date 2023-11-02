import Image from 'next/image'

import discordImage from '@/../public/footer/discord.svg'
import whitepaperImage from '@/../public/footer/paper.svg'
import twitterImage from '@/../public/footer/twitter_x.svg'

const valueLinks = [
  {
    image: whitepaperImage,
    alt: 'Whitepaper',
    href: 'https://woodies.gitbook.io/woodies/'
  },
  {
    image: twitterImage,
    alt: 'Twitter',
    href: '#'
  },
  {
    image: discordImage,
    alt: 'Discord',
    href: 'https://discord.gg/YMfydA6kTG'
  }
]

export const Footer = () => {
  return (
    <footer className="flex h-[60px] items-center justify-between border-t-2 border-solid border-card-border px-[75px]">
      <div className="flex flex-col justify-center">
        <span className="text-xs font-normal leading-[8px]">Powered by</span>
        <p className="font-cherry text-[35px] leading-[24px] text-primary">
          Woodies
        </p>
      </div>
      <div className="text-xl font-medium leading-[14px] text-primary">
        © 2023. All rights reserved
      </div>
      <div className="flex w-[134px] items-center justify-between">
        {valueLinks.map(({ image, alt, href }, index) => (
          <a key={index} href={href}>
            <Image src={image} width={30} height={30} alt={alt} />
          </a>
        ))}
      </div>
    </footer>
  )
}
