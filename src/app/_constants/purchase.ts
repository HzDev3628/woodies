import { PurchaseIMG_1, PurchaseIMG_2 } from '../sections/assets'

export const PURCHASE_DATA = {
  title: 'Purchase your Woodie',
  body: 'Every Woodie that you see is unique. By minting Woodies you are buying a piece of smooth rare style. More than 130 traits, 3 characters, a couple of 1/1s made with love. Will you try your luck to mint the rarest one?',
  items: [
    {
      src: PurchaseIMG_1,
      style:
        'w-[180px] h-[180px] xl:w-80 xl:h-80 absolute -top-10 right-24 xl:-top-36 xl:right-[275px] z-10 mr-10',
    },
    {
      src: PurchaseIMG_2,
      style:
        'w-40 h-40 xl:w-72 xl:h-72 absolute right-0 top-16 xl:top-12 xl:right-32 z-20 mr-10',
    },
  ],
}
