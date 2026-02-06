import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

function AboutPage() {
  const techStack = [
    { name: 'React 19', description: '최신 React 기능 및 성능 개선' },
    { name: 'TypeScript', description: '완벽한 타입 안전성' },
    { name: 'Vite 7', description: '초고속 빌드 도구' },
    { name: 'TailwindCSS v4', description: 'CSS 변수 기반 유틸리티 프레임워크' },
    { name: 'TanStack Router', description: '타입 안전한 라우팅 솔루션' },
    { name: 'shadcn/ui', description: 'Radix UI 기반 접근성 컴포넌트' },
    { name: 'Lucide React', description: '아름다운 오픈소스 아이콘 라이브러리' },
    { name: 'CVA', description: '타입 안전한 variant 시스템' },
  ]

  return (
    <div className="container mx-auto max-w-7xl px-4 py-20">
      {/* 제목 */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold md:text-5xl">프로젝트 소개</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          React와 현대적인 웹 기술로 구축한 스타터킷
        </p>
      </div>

      {/* 소개 섹션 */}
      <section className="mb-20">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">모던 웹 스타터킷이란?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              이 스타터킷은 2025년의 최신 웹 개발 표준과 모범 사례를 반영하여 설계되었습니다.
              프로덕션 레디한 프로젝트를 빠르게 시작할 수 있도록 필요한 모든 기본 구성과
              컴포넌트가 포함되어 있습니다.
            </p>
            <p>
              React 19의 최신 기능, TypeScript의 완벽한 타입 안전성, Vite 7의 번개 같은
              개발 경험, TailwindCSS v4의 CSS 변수 기반 스타일링을 기본으로 제공합니다.
            </p>
            <p>
              TanStack Router를 통해 타입 안전한 라우팅을, shadcn/ui와 Radix UI를 통해
              접근성이 보장된 UI 컴포넌트를 사용할 수 있습니다.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* 기술 스택 */}
      <section>
        <h2 className="text-3xl font-bold mb-8">기술 스택</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {techStack.map((tech) => (
            <Card key={tech.name}>
              <CardHeader>
                <CardTitle className="text-lg">{tech.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{tech.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 주요 특징 */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold mb-8">주요 특징</h2>
        <ul className="space-y-4">
          <li className="flex gap-3">
            <span className="flex-shrink-0 text-blue-600 dark:text-blue-400 font-bold">✓</span>
            <span>
              <strong>파일 기반 라우팅:</strong> src/routes 디렉토리 구조로 자동 라우트 생성
            </span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 text-blue-600 dark:text-blue-400 font-bold">✓</span>
            <span>
              <strong>타입 안전한 컴포넌트:</strong> CVA와 TypeScript로 완벽한 타입 안전성
            </span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 text-blue-600 dark:text-blue-400 font-bold">✓</span>
            <span>
              <strong>다크 모드:</strong> CSS 변수 기반 시스템/라이트/다크 3-way 토글
            </span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 text-blue-600 dark:text-blue-400 font-bold">✓</span>
            <span>
              <strong>접근성:</strong> Radix UI 기반으로 WCAG 표준 준수
            </span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 text-blue-600 dark:text-blue-400 font-bold">✓</span>
            <span>
              <strong>반응형 디자인:</strong> 모바일부터 데스크톱까지 완벽 지원
            </span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 text-blue-600 dark:text-blue-400 font-bold">✓</span>
            <span>
              <strong>개발 경험:</strong> 번개 같은 HMR과 빠른 빌드 성능
            </span>
          </li>
        </ul>
      </section>
    </div>
  )
}

export const Route = createFileRoute('/about')({
  component: AboutPage,
})
