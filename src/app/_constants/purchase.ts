import { PurchaseIMG_1, PurchaseIMG_2 } from '../sections/assets'

export const PURCHASE_DATA = {
  title: 'Purchase your Woodie',
  body: 'Every Woodie that you see is unique. By minting Woodies you are buying a piece of smooth rare style. More than 130 traits, 3 characters, a couple of 1/1s made with love. Will you try your luck to mint the rarest one?',
  items: [
    {
      src: PurchaseIMG_1,
      style:
        'w-[100px] h-[100px] md:w-[180px] md:h-[180px] xl:w-80 xl:h-80 absolute right-[10%] mr-16 md:-top-10 md:right-24 xl:-top-36 xl:right-[275px] z-10 md:mr-10',
    },
    {
      src: PurchaseIMG_2,
      style:
        'w-[93px] h-[93px] md:w-40 md:h-40 xl:w-72 xl:h-72 absolute right-[5%] top-16 md:top-16 xl:top-12 xl:right-32 z-20 mr-10',
    },
  ],
}
