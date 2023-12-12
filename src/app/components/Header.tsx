import Image from 'next/image'

import logoWoodies from '../../../public/logo.png'
import { NavigationButton } from './NavigationButton'

export const Header = () => {
  return (
    <header className="flex h-[76px] w-full items-center px-5">
      <Image
        className="rounded-full"
        src={logoWoodies}
        width={36}
        height={36}
        alt="Logo"
      />
      <div className=" ml-[19px] flex w-full items-center justify-between text-xl">
        <div className="flex w-[343px] items-center justify-between">
          <NavigationButton />
        </div>
      </div>
    </header>
  )
}
