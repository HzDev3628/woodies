import type { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import type { ReactNode } from 'react'

type PropsCard = {
  children: ReactNode
}

type ImageProps = {
  uri: string | StaticImport
}

export const Card = ({ children }: PropsCard) => {
  return (
    <article className="h-max w-80 mr-1 xl:w-[410px] rounded-[20px] bg-card">
      {children}
    </article>
  )
}

export const CardHeaderWood = ({ children }: PropsCard) => {
  return <div className="flex justify-between px-3 pt-3 xl:pl-6">{children}</div>
}

export const CardImageFull = ({ uri }: ImageProps) => {
  return <Image src={uri} className="w-full h-[165px] xl:h-[220px]" alt="Content" />
}

export const CardText = ({ children }: PropsCard) => {
  return (
    <h3 className="text-3xl xl:text-4xl font-montserrat mt-auto w-max">{children}</h3>
  )
}

export const CardImageWood = ({ uri }: ImageProps) => {
  return (
    <Image
      className="xl:w-[232px] w-40 h-40 xl:h-[232px]"
      src={uri}
      alt="Content"
    />
  )
}

export const CardContent = ({ children }: PropsCard) => {
  return (
    <div className="p-3 xl:p-6 text-base xl:text-xl font-medium">
      {children}
    </div>
  )
}
