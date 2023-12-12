export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-150px)] w-full items-center justify-center">
      <div className="flex flex-col items-center gap-5">
        <h1
          className="text-6xl"
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
    </main>
  )
}
