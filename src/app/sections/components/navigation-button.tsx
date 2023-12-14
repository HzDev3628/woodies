'use client'
import { useParams } from 'next/navigation'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { BUTTONHEADER } from '@/lib/constants'

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
          variant="ghost"
          size="headerButton"
          className={`relative text-base ${
            activePage == index ? 'text-hover drop-shadow-active' : ''
          }`}
        >
          <span className="leading-3">{label}</span>
          {activePage == index && (
            <div className="absolute bottom-0 h-px w-full bg-hover" />
          )}
        </Button>
      ))}
    </>
  )
}
