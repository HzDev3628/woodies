export const H1Gradient = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1
      className="font-montserrat text-3xl sm:text-4xl lg:text-6xl"
      style={{
        background: 'linear-gradient(91deg, #CCC 7.61%, #78CF5B 103.96%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}
    >
      {children}
    </h1>
  )
}

export const H2Gradient = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2
      className="font-montserrat text-2xl md:text-3xl xl:text-5xl font-extrabold leading-tight w-max"
      style={{
        background: 'linear-gradient(90deg, #CCC 7.61%, #78CF5B 103.96%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}
    >
      {children}
    </h2>
  )
}
