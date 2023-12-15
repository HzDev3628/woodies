// import { useParams } from 'next/navigation'
// import { useState } from 'react'

import { NAVIGATION_BUTTONS } from '@/app/_constants'
import { Button } from '@/components/ui/button'

export const NavigationButton = () => {
  // const { pages } = useParams()
  // const initialActivePage = NAVIGATION_BUTTONS.findIndex(
  //   ({ href }) => href.substring(1) === pages
  // )

  // const [activePage, setActivePage] = useState(
  //   initialActivePage !== -1 ? initialActivePage : 0
  // )

  return (
    <>
      {NAVIGATION_BUTTONS.map(({ label, disabled }, index) => (
        <Button
          key={index}
          disabled={disabled}
          // onClick={() => setActivePage(0)}
          variant="ghost"
          size="headerButton"
          className={`relative text-base ${
            index == 0 ? 'text-hover drop-shadow-active' : ''
          }`}
        >
          <span className="leading-3">{label}</span>
          {index == 0 && (
            <div className="absolute bottom-0 h-px w-full bg-hover" />
          )}
        </Button>
      ))}
    </>
  )
}
