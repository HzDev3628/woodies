import Image from 'next/image'

import logoWoodies from '../../../public/logo.png'
import { AuthButton } from './AuthButton'
import { NavigationButton } from './NavigationButton'
import { ThemeButton } from './ThemeButton'

export const Header = () => {
  return (
    <header className="border-lines flex h-[80px] w-full items-center border-b-2 border-solid pl-5 pr-[25px]">
      <Image
        className="rounded-full"
        src={logoWoodies}
        width={35}
        height={35}
        alt="Logo"
      />
      <div className=" ml-[19px] flex w-full items-center justify-between text-xl">
        <div className="flex w-[477px] items-center justify-between">
          <NavigationButton />
        </div>
        <div className="flex w-auto items-center justify-between">
          <AuthButton />
          <ThemeButton />
        </div>
      </div>
    </header>
  )
}
