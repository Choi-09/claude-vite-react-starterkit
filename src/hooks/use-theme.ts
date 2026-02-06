import { useContext } from 'react'
import { ThemeContext } from '@/components/theme-provider'

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme은 ThemeProvider 내에서 사용되어야 합니다')
  }
  return context
}
