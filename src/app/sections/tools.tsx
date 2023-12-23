import { Button } from '@/components/ui/button'
import { H2Gradient } from '@/components/ui/text-gradient'

import { TOOLS } from '../_constants/tools'
import { Card, CardContent, CardImageFull } from './components/card'

export const Tools = () => {
  return (
    <div className="relative z-30 mb-[280px] flex flex-col items-center">
      <H2Gradient>{TOOLS.title}</H2Gradient>
      <div className="mb-10 mt-14 flex w-11/12 justify-between xl:w-[1280px]">
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
