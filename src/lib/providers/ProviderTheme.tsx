'use client'
import { ThemeProvider } from 'next-themes'

export const ProviderTheme = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" enableSystem={false} storageKey="themeKey">
      {children}
    </ThemeProvider>
  )
}
