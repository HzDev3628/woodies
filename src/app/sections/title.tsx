import { H1Gradient } from '@/components/ui/text-gradient'

export const Title = () => {
  return (
    <div className="relative z-30 flex w-full justify-center">
      <div
        className="absolute -z-10 h-36 w-[700px] opacity-30"
        style={{
          background:
            'radial-gradient(50% 50% at 50% 50%, #525252 0%, #0B0B0B 100%)'
        }}
      />
      <div className="z-30 flex flex-col items-center gap-7">
        <H1Gradient>Meet the Woodies</H1Gradient>
        <p className="text-xl font-medium">
          Collection of 3333 NFTs created by mother nature
        </p>
      </div>
    </div>
  )
}
