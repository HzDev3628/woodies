import Image from 'next/image'

import logoWoodies from '../../../public/logo.png'
import { NavigationButtons, DropdownMenu } from './components/index'

export const Header = () => {
  return (
    <header
      className="fixed z-50 flex h-[76px] w-full items-center px-5"
      style={{
        background: 'rgba(10, 10, 10, 0.60)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)'
      }}
    >
      <Image
        className="rounded-full hidden sm:inline"
        src={logoWoodies}
        width={36}
        height={36}
        alt="Logo"
      />
      <div className="sm:ml-[19px] flex w-full items-center justify-between text-xl">
        <div className="hidden sm:flex w-[263px] items-center justify-between rounded-xl bg-[#0A0A0A99] px-[10px]">
          <NavigationButtons />
        </div>
        <div className="inline-flex sm:hidden">
          <DropdownMenu />
        </div>
      </div>
    </header>
  )
}
