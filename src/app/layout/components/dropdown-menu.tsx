'use client'
import { DROPDOWN_MENU } from '@/app/_constants'
import { Button } from '@/components/ui/button'
import {
  DropdownMenuContent,
  DropdownMenu as DropdownMenuShadcn,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { AlignJustify } from '@/components/ui/icons'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export const DropdownMenu = () => {
  const [activePage, setActivePage] = useState<string>()
  useEffect(() => {
    const localValueActivePage = localStorage.getItem('state')
    if (localValueActivePage) {
      setActivePage(localValueActivePage)
    }
  }, [])

  return (
    <DropdownMenuShadcn>
      <DropdownMenuTrigger>
        <AlignJustify className="w-8 h-8" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="flex flex-col w-52 h-[270px] backdrop-blur-md z-50 border-none pl-8 pt-10 gap-5"
        style={{
          background:
            'linear-gradient(90deg, rgba(10, 10, 10, 0.90) 1.39%, rgba(10, 10, 10, 0.10) 50%, rgba(10, 10, 10, 0.90) 98.61%)',
        }}
      >
        {DROPDOWN_MENU.map(({ title, href, Icon }, index) => (
          <Link
            href={href}
            key={index}
            onClick={() => {
              localStorage.setItem('state', index.toString())
              setActivePage(index.toString())
            }}
          >
            <Button
              variant={activePage === index.toString() ? 'active' : 'disabled'}
              size="xl"
            >
              <Icon
                className={`mr-3 h-[18px] w-[18px] ${
                  activePage === index.toString()
                    ? 'fill-green-button-text'
                    : 'fill-primary'
                }`}
              />
              {title}
            </Button>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenuShadcn>
  )
}
