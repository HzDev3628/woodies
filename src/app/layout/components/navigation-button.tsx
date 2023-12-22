'use client'
import { useEffect, useState } from 'react'

import { NAVIGATION_BUTTONS } from '@/app/_constants'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const NavigationButton = () => {
  const [activePage, setActivePage] = useState<string>()
  useEffect(() => {
    const localValueActivePage = localStorage.getItem('state')
    if (localValueActivePage) {
      setActivePage(localValueActivePage)
    }
  }, [])

  return (
    <>
      {NAVIGATION_BUTTONS.map(({ label, href }, index) => (
        <Link
          key={index}
          href={href}
          onClick={() => {
            localStorage.setItem('state', index.toString())
            setActivePage(index.toString())
          }}
        >
          <Button
            variant="ghost"
            size="headerButton"
            className={`relative text-base ${
              index.toString() === activePage
                ? 'text-hover drop-shadow-active'
                : ''
            }`}
          >
            <span className="leading-3">{label}</span>
            {index.toString() === activePage && (
              <div className="absolute bottom-0 h-px w-full bg-hover" />
            )}
          </Button>
        </Link>
      ))}
    </>
  )
}
