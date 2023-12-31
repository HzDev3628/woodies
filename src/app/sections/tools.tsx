import { Button } from '@/components/ui/button'
import { H2Gradient } from '@/components/ui/text-gradient'

import { TOOLS } from '../_constants/tools'
import { Card, CardContent, CardImageFull } from './components/card'

export const Tools = () => {
  return (
    <div className="relative z-30 mb-52 lg:mb-[280px] flex flex-col items-center">
      <H2Gradient>{TOOLS.title}</H2Gradient>
      <div className="mb-10 mt-14 flex-col gap-10 lg:gap-0 lg:flex-row flex w-[98%] lg:w-[95%] items-center lg:justify-between xl:w-[1280px]">
        {TOOLS.card.map(({ text, image }, index) => (
          <Card key={index}>
            <CardImageFull uri={image} />
            <CardContent>{text}</CardContent>
          </Card>
        ))}
      </div>
      <a href={TOOLS.buttonURL} target="_blank" rel="noreferrer">
        <Button>{TOOLS.buttonText}</Button>
      </a>
    </div>
  )
}
