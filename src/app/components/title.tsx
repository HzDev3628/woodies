export const Title = () => {
  return (
    <div className="relative z-30 flex w-full justify-center">
      <div
        className="absolute -z-10 h-32 w-[700px] opacity-50"
        style={{
          background:
            'radial-gradient(50% 50% at 50% 50%, #525252 0%, #0B0B0B 100%)'
        }}
      />
      <div className="z-30 flex flex-col items-center gap-7">
        <h1
          className="font-montserrat text-6xl"
          style={{
            background: 'linear-gradient(91deg, #CCC 7.61%, #78CF5B 103.96%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Meet the Woodies
        </h1>
        <p className="text-xl font-medium">
          Collection of 3333 NFTs created by mother nature
        </p>
      </div>
    </div>
  )
}
