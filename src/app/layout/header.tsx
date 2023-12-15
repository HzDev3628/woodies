import Image from 'next/image'

import logoWoodies from '../../../public/logo.png'
import { NavigationButton } from './components/navigation-button'

export const Header = () => {
  return (
    <header
      className="fixed z-50 flex h-[76px] w-full items-center px-5"
      style={{
        background:
          'linear-gradient(90deg rgba(10, 10, 10, 0.10) 50%, rgba(10, 10, 10, 0.90) 98.61%)',
        backdropFilter: 'blur(12px)'
      }}
    >
      <Image
        className="rounded-full"
        src={logoWoodies}
        width={36}
        height={36}
        alt="Logo"
      />
      <div className=" ml-[19px] flex w-full items-center justify-between text-xl">
        <div className="flex w-[363px] items-center justify-between rounded-xl bg-[#0A0A0A99] px-[10px]">
          <NavigationButton />
        </div>
      </div>
    </header>
  )
}
