import { useState } from 'react'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { QuickStartDialog } from '@/components/quick-start-dialog'
import { Zap, Code2, Palette, Smartphone } from 'lucide-react'

function HomePage() {
  const [quickStartOpen, setQuickStartOpen] = useState(false)
  const navigate = useNavigate()
  return (
    <div>
      {/* 히어로 섹션 */}
      <section className="container mx-auto max-w-7xl px-4 py-20 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold md:text-6xl">
            모던 웹 스타터킷
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 md:text-xl">
            React 19 + TypeScript + Vite 7 + TailwindCSS v4로 구축한
            <br />
            프로덕션 레디 스타터킷
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" onClick={() => setQuickStartOpen(true)}>
              시작하기
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate({ to: '/docs' })}
            >
              문서 보기
            </Button>
          </div>
        </div>
      </section>

      {/* 기능 소개 */}
      <section className="border-t border-gray-200 bg-gray-50 py-20 dark:border-gray-800 dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">주요 기능</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              프로덕션 레디 웹 애플리케이션을 위한 모든 것
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <div className="mb-2 h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-lg">번개 같은 속도</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Vite 7의 즉시 HMR과 빠른 번들링으로 최고의 개발 경험을 제공합니다.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 h-12 w-12 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                  <Code2 className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-lg">타입 안전성</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  TypeScript와 TanStack Router로 완벽한 타입 안전성을 보장합니다.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 h-12 w-12 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center">
                  <Palette className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-lg">다크 모드</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  CSS 변수 기반 다크 모드 시스템으로 완벽한 라이트/다크 지원.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 h-12 w-12 rounded-lg bg-orange-100 dark:bg-orange-900 flex items-center justify-center">
                  <Smartphone className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle className="text-lg">반응형 디자인</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  TailwindCSS v4로 구축한 완벽한 반응형 레이아웃 지원.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 버튼 데모 */}
      <section className="container mx-auto max-w-7xl px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">버튼 컴포넌트 데모</h2>

        <div className="space-y-8">
          {/* Variant 데모 */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-700 dark:text-gray-300">Variant</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>

          {/* Size 데모 */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-700 dark:text-gray-300">Size</h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="xs">Extra Small</Button>
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">🎨</Button>
            </div>
          </div>

          {/* Disabled 상태 */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-700 dark:text-gray-300">Disabled</h3>
            <div className="flex flex-wrap gap-4">
              <Button disabled>Disabled</Button>
              <Button variant="outline" disabled>
                Disabled Outline
              </Button>
            </div>
          </div>
        </div>
      </section>

      <QuickStartDialog
        open={quickStartOpen}
        onOpenChange={setQuickStartOpen}
      />
    </div>
  )
}

export const Route = createFileRoute('/')({
  component: HomePage,
})
