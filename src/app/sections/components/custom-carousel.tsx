'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ENJOY_CAROUSEL } from '../../_constants'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from '@/components/ui/carousel'

export const CustomCarousel = () => {
  const STYLE = 'h-1 w-10 mr-5 rounded'
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="mt-[60px]">
      <Carousel setApi={setApi}>
        <CarouselPrevious />
        <CarouselContent className="w-full max-w-[1730px] m-auto">
          {ENJOY_CAROUSEL.carousel.map((value, index) => (
            <CarouselItem key={index}>
              <Image src={value} alt="" className="rounded-xl" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
      </Carousel>
      <div className="mt-5 flex w-full items-center justify-center">
        <div
          className={`${current === 1 ? 'bg-buttons' : 'bg-primary'} ${STYLE}`}
        />
        <div
          className={`${current === 2 ? 'bg-buttons' : 'bg-primary'} ${STYLE}`}
        />
        <div
          className={`${current === 3 ? 'bg-buttons' : 'bg-primary'} ${STYLE}`}
        />
        <div
          className={`${current === 4 ? 'bg-buttons' : 'bg-primary'} ${STYLE}`}
        />
      </div>
    </div>
  )
}
