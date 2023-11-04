'use client'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useState } from 'react'

import { Button } from '@/components/ui/button'

const ButtonHeader = [
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
    href: '/raid2earn'
  }
]

export const NavigationButton = () => {
  const { pages } = useParams()
  const [activePage, setActivePage] = useState(
    ButtonHeader.findIndex(({ href }) => href.substring(1) === pages)
  )
  return (
    <>
      {ButtonHeader.map(({ label, href }, index) => (
        <Link
          key={index}
          href={href}
          onClick={() => {
            setActivePage(index)
          }}
        >
          <Button
            variant={activePage == index ? 'active' : 'ghost'}
            size="active"
            className="text-xl"
          >
            <span className="leading-3">{label}</span>
          </Button>
        </Link>
      ))}
    </>
  )
}
