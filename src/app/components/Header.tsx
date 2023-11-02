'use client'
import { Sun, User2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'

import logoWoodies from '../../../public/logo.svg'

const buttonHeader = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Staking',
    href: '/staking'
  },
  {
    label: 'Wheelspins',
    href: '/wheelspins'
  },
  {
    label: 'Raid2Earn',
    href: 'raid2earn'
  }
]
export const Header = () => {
  const [activePage, setActivePage] = useState<string>()
  useEffect(() => {
    const localValueActivePage = localStorage.getItem('state')
    if (localValueActivePage) {
      setActivePage(localValueActivePage)
    }
  }, [])
  return (
    <header className="flex h-[80px] w-full items-center border-b-2 border-solid border-card-border pl-5 pr-[25px]">
      <Image src={logoWoodies} width={35} height={35} alt="Logo" />
      <div className=" ml-[19px] flex w-full items-center justify-between text-xl">
        <div className="flex w-[477px] items-center justify-between">
          {buttonHeader.map(({ label, href }, index) => (
            <Link
              key={index}
              href={href}
              onClick={() => {
                localStorage.setItem('state', index.toString())
                setActivePage(index.toString())
              }}
            >
              <Button
                variant={activePage === index.toString() ? 'active' : 'ghost'}
                size="active"
                className="text-xl"
              >
                <span className="leading-3">{label}</span>
              </Button>
            </Link>
          ))}
        </div>
        <div className="flex w-[244px] items-center justify-between">
          <Button
            variant="outline"
            className="flex h-[44px] items-center px-[12px] text-xl leading-3"
            size="active"
          >
            <User2 size={20} className="mr-[4px]" />
            <span className="mt-[3px] leading-3">Connect Wallet</span>
          </Button>
          <Sun size={30} />
        </div>
      </div>
    </header>
  )
}
