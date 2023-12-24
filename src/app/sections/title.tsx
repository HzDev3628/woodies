import { H1Gradient } from '@/components/ui/text-gradient'

export const Title = () => {
  return (
    <>
      <p
        className="absolute -z-10 top-8 left-0 right-0 m-auto h-96 w-5/6 max-w-[1400px] opacity-20"
        style={{
          background:
            'radial-gradient(50% 50% at 50% 50%, #525252 0%, #0B0B0B 100%)',
        }}
      />
      <div className="relative z-30 flex w-full justify-center">
        <div className="z-30 flex flex-col items-center gap-7">
          <H1Gradient>Meet the Woodies</H1Gradient>
          <p className="text-sm sm:text-base lg:text-xl font-medium">
            Collection of 3333 NFTs created by mother nature
          </p>
        </div>
      </div>
    </>
  )
}
