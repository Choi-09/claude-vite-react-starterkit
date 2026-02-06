import { useLayoutEffect, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { ThemeContext } from '@/contexts/theme-context'
import type { Theme } from '@/contexts/theme-context'

export { ThemeContext }

// 편의상 테마 타입 재내보내기
export type { Theme }

const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') return 'system'
  const stored = localStorage.getItem('theme') as Theme | null
  return stored || 'system'
}

const getResolvedTheme = (t: Theme): 'light' | 'dark' => {
  if (t === 'system') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  return t
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme)

  const resolvedTheme = getResolvedTheme(theme)

  // 동기적으로 초기 테마 적용 (깜빡임 방지)
  useLayoutEffect(() => {
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(resolvedTheme)
  }, [resolvedTheme])

  // 시스템 설정 변경 감지 (system 모드일 때만)
  useEffect(() => {
    if (theme !== 'system') return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = () => {
      const root = document.documentElement
      const newResolved = getResolvedTheme('system')
      root.classList.remove('light', 'dark')
      root.classList.add(newResolved)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [theme])

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

