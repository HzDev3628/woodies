import Image from 'next/image'

import HeroImage from '../../public/hero_page_image.png'
import { Characters } from './sections/characters'
import { Ecosystem, Enjoy, Purchase, Title, Tools } from './sections/index'

export default function Home() {
  return (
    <main className="relative flex h-max w-full flex-col justify-center pt-[100px]">
      <Title />
      <div className="h-max w-full overflow-hidden">
        <Image
          className="relative z-10 m-auto mt-32 block"
          src={HeroImage}
          alt="Hero image"
        />
      </div>
      <Ecosystem />
      <Tools />
      <Enjoy />
      <Purchase />
      <Characters />
    </main>
  )
}
