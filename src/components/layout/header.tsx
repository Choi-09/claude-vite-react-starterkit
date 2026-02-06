import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { ThemeToggle } from '@/components/theme-toggle'
import { QuickStartDialog } from '@/components/quick-start-dialog'
import { Button } from '@/components/ui/button'

export function Header() {
  const [quickStartOpen, setQuickStartOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur dark:border-gray-800 dark:bg-gray-950/95">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* 로고 */}
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600" />
          <span>Studio</span>
        </Link>

        {/* 네비게이션 */}
        <nav className="hidden gap-8 md:flex">
          <Link
            to="/"
            activeProps={{
              className: 'text-blue-600 dark:text-blue-400 font-semibold',
            }}
            inactiveProps={{
              className: 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white',
            }}
          >
            홈
          </Link>
          <Link
            to="/about"
            activeProps={{
              className: 'text-blue-600 dark:text-blue-400 font-semibold',
            }}
            inactiveProps={{
              className: 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white',
            }}
          >
            소개
          </Link>
          <Link
            to="/examples"
            activeProps={{
              className: 'text-blue-600 dark:text-blue-400 font-semibold',
            }}
            inactiveProps={{
              className: 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white',
            }}
          >
            예제
          </Link>
          <Link
            to="/dashboard"
            activeProps={{
              className: 'text-blue-600 dark:text-blue-400 font-semibold',
            }}
            inactiveProps={{
              className: 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white',
            }}
          >
            대시보드
          </Link>
        </nav>

        {/* 테마 토글 및 액션 버튼 */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="default"
            size="sm"
            className="hidden sm:inline-flex"
            onClick={() => setQuickStartOpen(true)}
          >
            시작하기
          </Button>
        </div>

        {/* 빠른 시작 다이얼로그 */}
        <QuickStartDialog open={quickStartOpen} onOpenChange={setQuickStartOpen} />
      </div>
    </header>
  )
}
