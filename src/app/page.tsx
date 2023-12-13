import Image from 'next/image'

import HeroImage from '../../public/hero-images.png'
import { Title } from './components/title'

export default function Home() {
  return (
    <main className="relative flex h-max w-full flex-col justify-center pt-[100px]">
      <Title />
      <Image
        className="relative z-10 m-auto mt-32"
        src={HeroImage}
        alt="Hero image"
      />
    </main>
  )
}
