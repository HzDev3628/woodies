import Image from 'next/image'

import logoWoodies from '../../../public/logo.png'
import { AuthButton } from './AuthButton'
import { NavigationButton } from './NavigationButton'

export const Header = () => {
  return (
    <header className="flex h-[80px] w-full items-center pl-5 pr-[25px]">
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
        <AuthButton />
      </div>
    </header>
  )
}
