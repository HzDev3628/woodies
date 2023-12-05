'use client'
import { useParams } from 'next/navigation'
import { useState } from 'react'

import { Button } from '@/components/ui/button'

const BUTTONHEADER = [
  {
    label: 'Home',
    href: '/',
    disabled: false
  },
  {
    label: 'Staking',
    href: '/staking',
    disabled: true
  },
  {
    label: 'Wheelspins',
    href: '/wheelspins',
    disabled: true
  },
  {
    label: 'Raid2Earn',
    href: '/raid2earn',
    disabled: true
  }
]

export const NavigationButton = () => {
  const { pages } = useParams()
  const initialActivePage = BUTTONHEADER.findIndex(
    ({ href }) => href.substring(1) === pages
  )

  const [activePage, setActivePage] = useState(
    initialActivePage !== -1 ? initialActivePage : 0
  )

  return (
    <>
      {BUTTONHEADER.map(({ label, disabled }, index) => (
        <Button
          key={index}
          disabled={disabled}
          onClick={() => setActivePage(0)}
          className={`text-xl ${activePage == index ? 'text-white' : ''}`}
        >
          <span className="leading-3">{label}</span>
        </Button>
      ))}
    </>
  )
}
