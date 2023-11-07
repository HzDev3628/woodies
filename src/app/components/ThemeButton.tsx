'use client'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export const ThemeButton = () => {
  const [isStateTheme, setIsStateTheme] = useState<string>()
  const { setTheme } = useTheme()

  useEffect(() => {
    const stateTheme = localStorage.getItem('theme')
    if (stateTheme) setIsStateTheme(stateTheme)
  }, [])

  const toggleTheme = () => {
    if (isStateTheme === 'dark') {
      setTheme('light')
      setIsStateTheme('light')
    }
    if (isStateTheme === 'light') {
      setTheme('dark')
      setIsStateTheme('dark')
    }
  }
  return (
    <button
      className="ml-[20px] hover:text-text-hover"
      onClick={() => toggleTheme()}
    >
      {isStateTheme === 'light' ? <Sun size={30} /> : <Moon size={30} />}
    </button>
  )
}
