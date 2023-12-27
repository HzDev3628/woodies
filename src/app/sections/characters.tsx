import { H2Gradient } from '@/components/ui/text-gradient'

import { CHARACTERS_DATA } from '../_constants/characters'
import {
  Card,
  CardContent,
  CardHeaderWood,
  CardImageWood,
  CardText,
} from './components/card'

export const Characters = () => {
  return (
    <div className="relative z-30 flex flex-col items-center gap-14 lg:mb-[250px]">
      <H2Gradient>{CHARACTERS_DATA.title}</H2Gradient>
      <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row w-[98%] lg:w-[95%] items-center lg:justify-between xl:w-[1280px]">
        {CHARACTERS_DATA.cards.map(({ title, info, img }, index) => (
          <Card key={index}>
            <CardHeaderWood>
              <CardText>{title}</CardText>
              <CardImageWood uri={img} />
            </CardHeaderWood>
            <CardContent>{info}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
