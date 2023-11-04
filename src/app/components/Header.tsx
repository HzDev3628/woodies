import { Sun } from 'lucide-react'
import Image from 'next/image'

import { Authentication } from '@/lib/Authentication/Authentication'

import logoWoodies from '../../../public/logo.svg'
import { NavigationButton } from './NavigationButton'

export const Header = () => {
  return (
    <header className="flex h-[80px] w-full items-center border-b-2 border-solid border-card-border pl-5 pr-[25px]">
      <Image src={logoWoodies} width={35} height={35} alt="Logo" />
      <div className=" ml-[19px] flex w-full items-center justify-between text-xl">
        <div className="flex w-[477px] items-center justify-between">
          <NavigationButton />
        </div>
        <div className="flex w-auto items-center justify-between">
          <Authentication />
          <Sun size={30} className="ml-[20px]" />
        </div>
      </div>
    </header>
  )
}
