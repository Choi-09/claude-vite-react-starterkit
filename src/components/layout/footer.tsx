export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* 브랜드 */}
          <div>
            <h3 className="font-bold text-lg">Studio</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              React + TypeScript + Vite 기반의 모던 웹 스타터킷
            </p>
          </div>

          {/* 링크 */}
          <div>
            <h4 className="font-semibold">네비게이션</h4>
            <ul className="mt-2 space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <a href="/" className="hover:text-gray-900 dark:hover:text-white">
                  홈
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-900 dark:hover:text-white">
                  소개
                </a>
              </li>
              <li>
                <a href="/dashboard" className="hover:text-gray-900 dark:hover:text-white">
                  대시보드
                </a>
              </li>
            </ul>
          </div>

          {/* 기술 스택 */}
          <div>
            <h4 className="font-semibold">기술 스택</h4>
            <ul className="mt-2 space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>React 19</li>
              <li>TypeScript</li>
              <li>Vite 7</li>
              <li>TailwindCSS v4</li>
            </ul>
          </div>
        </div>

        {/* 저작권 */}
        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-600 dark:border-gray-800 dark:text-gray-400">
          <p>&copy; {currentYear} Studio. 모든 권리 보유.</p>
        </div>
      </div>
    </footer>
  )
}
