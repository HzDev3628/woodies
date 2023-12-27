import { Characters } from './sections/characters'
import {
  Ecosystem,
  Enjoy,
  Purchase,
  Title,
  Tools,
  HeroImageSection,
} from './sections/index'
import { PreFooter } from './sections/pre-footer'

export default function Home() {
  return (
    <main className="relative flex h-max w-full flex-col justify-center pt-[140px]">
      <Title />
      <HeroImageSection />
      <Ecosystem />
      <Tools />
      <Enjoy />
      <Purchase />
      <Characters />
      <PreFooter />
    </main>
  )
}
