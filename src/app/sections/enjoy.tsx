import { H2Gradient } from '@/components/ui/text-gradient'
import { ENJOY_CAROUSEL } from '../_constants'
import { CustomCarousel } from './components/custom-carousel'

export const Enjoy = () => {
  return (
    <div className="relative z-30 mb-52 lg:mb-[300px] flex w-full flex-col items-center">
      <H2Gradient>{ENJOY_CAROUSEL.title}</H2Gradient>
      <CustomCarousel />
      <div
        className="absolute -bottom-16 -z-10 h-80 w-full md:w-[700px] opacity-[0.15]"
        style={{
          background:
            'radial-gradient(50% 50% at 50% 50%, #525252 0%, #0B0B0B 100%)',
        }}
      />
    </div>
  )
}
