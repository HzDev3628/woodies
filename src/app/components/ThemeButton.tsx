'use client'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useState } from 'react'

export const ThemeButton = () => {
  const { setTheme, resolvedTheme } = useTheme()
  const [isStateTheme, setIsStateTheme] = useState<string>(
    resolvedTheme ?? 'light'
  )

  const toggleTheme = () => {
    if (resolvedTheme === 'dark') {
      setTheme('light')
      setIsStateTheme('light')
    }
    if (resolvedTheme === 'light') {
      setTheme('dark')
      setIsStateTheme('dark')
    }
  }
  return (
    <button
      className="ml-[20px] hover:text-hover-text"
      onClick={() => toggleTheme()}
    >
      {isStateTheme === 'light' ? <Sun size={30} /> : <Moon size={30} />}
    </button>
  )
}
