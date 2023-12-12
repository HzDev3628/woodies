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
    <article className="h-max w-[410px] rounded-[20px] bg-card">
      {children}
    </article>
  )
}

export const CardHeaderWood = ({ children }: PropsCard) => {
  return <div className="grid grid-cols-2 pl-6">{children}</div>
}

export const CardImageFull = ({ uri }: ImageProps) => {
  return (
    <Image src={uri} style={{ width: '100%', height: '220px' }} alt="Content" />
  )
}

export const CardImageWood = ({ uri }: ImageProps) => {
  return <Image width={232} height={232} src={uri} alt="Content" />
}

export const CardContent = ({ children }: PropsCard) => {
  return <div className="p-6">{children}</div>
}
