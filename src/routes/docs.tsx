import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { CodeBlock } from '@/components/code-block'
import { techStack } from '@/lib/tech-stack'
import { ExternalLink } from 'lucide-react'

function DocsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="container mx-auto max-w-4xl px-4 py-20">
        {/* 개요 섹션 */}
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">문서</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            모던 웹 스타터킷 설정 및 사용법에 대한 완벽한 가이드입니다.
          </p>
          <Separator />
        </section>

        {/* 기술 스택 섹션 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">기술 스택</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            이 프로젝트는 최신의 웹 기술들로 구성되어 있습니다. 각 기술의 공식 문서를 방문하여 더 자세한 정보를 얻을 수 있습니다.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {techStack.map((tech) => (
              <Card key={tech.name}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{tech.name}</span>
                    <a
                      href={tech.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                      title="공식 홈페이지 방문"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </CardTitle>
                  <CardDescription>{tech.version}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">{tech.description}</p>
                  <ul className="text-sm space-y-2">
                    {tech.features.map((feature) => (
                      <li key={feature} className="text-gray-600 dark:text-gray-400">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 시작 가이드 섹션 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">시작 가이드</h2>
          <Separator className="mb-6" />

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">설치</h3>
              <CodeBlock
                code="npm install"
                language="bash"
                filename="Terminal"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">개발 서버 실행</h3>
              <CodeBlock
                code="npm run dev"
                language="bash"
                filename="Terminal"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">빌드</h3>
              <CodeBlock
                code="npm run build"
                language="bash"
                filename="Terminal"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">프로덕션 미리보기</h3>
              <CodeBlock
                code="npm run preview"
                language="bash"
                filename="Terminal"
              />
            </div>
          </div>
        </section>

        {/* 프로젝트 구조 섹션 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">프로젝트 구조</h2>
          <Separator className="mb-6" />

          <CodeBlock
            code={`프로젝트
├── src/
│   ├── components/          # React 컴포넌트
│   │   ├── ui/             # shadcn/ui 컴포넌트
│   │   ├── layout/         # 레이아웃 컴포넌트
│   │   └── ...
│   ├── routes/             # TanStack Router 페이지
│   ├── lib/                # 유틸리티 및 설정
│   ├── hooks/              # Custom React 훅
│   ├── App.tsx             # 메인 App 컴포넌트
│   ├── main.tsx            # 엔트리 포인트
│   └── index.css           # 전역 스타일
├── public/                 # 정적 파일
├── vite.config.ts          # Vite 설정
├── tailwind.config.ts      # Tailwind 설정
├── tsconfig.json           # TypeScript 설정
└── package.json            # 프로젝트 의존성`}
            language="bash"
          />
        </section>

        {/* 스타일링 가이드 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">스타일링 가이드</h2>
          <Separator className="mb-6" />

          <p className="text-gray-600 dark:text-gray-400 mb-4">
            이 프로젝트는 Tailwind CSS를 사용하여 스타일링합니다. Utility-first 접근 방식으로 빠르고 일관된 UI를 구축할 수 있습니다.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">기본 사용법</h3>
              <CodeBlock
                code={`<div className="flex items-center justify-between gap-4 p-4 bg-gray-100 rounded-lg">
  <h1 className="text-2xl font-bold">제목</h1>
  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
    버튼
  </button>
</div>`}
                language="tsx"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">다크 모드 지원</h3>
              <CodeBlock
                code={`<div className="bg-white dark:bg-gray-950 text-black dark:text-white">
  다크 모드를 지원합니다
</div>`}
                language="tsx"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">반응형 디자인</h3>
              <CodeBlock
                code={`<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* 모바일: 1열, 태블릿: 2열, 데스크톱: 3열 */}
</div>`}
                language="tsx"
              />
            </div>
          </div>
        </section>

        {/* 라우팅 가이드 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">라우팅 가이드</h2>
          <Separator className="mb-6" />

          <p className="text-gray-600 dark:text-gray-400 mb-4">
            TanStack Router를 사용하여 Type-safe한 라우팅을 구현합니다.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">라우트 정의</h3>
              <CodeBlock
                code={`import { createFileRoute } from '@tanstack/react-router'

function PageComponent() {
  return <div>페이지 콘텐츠</div>
}

export const Route = createFileRoute('/page-path')({
  component: PageComponent,
})`}
                language="tsx"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">네비게이션</h3>
              <CodeBlock
                code={`import { Link } from '@tanstack/react-router'

<Link to="/page-path">
  링크 텍스트
</Link>`}
                language="tsx"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">프로그래매틱 네비게이션</h3>
              <CodeBlock
                code={`import { useNavigate } from '@tanstack/react-router'

function Component() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate({ to: '/page-path' })
  }

  return <button onClick={handleClick}>이동</button>
}`}
                language="tsx"
              />
            </div>
          </div>
        </section>

        {/* 컴포넌트 가이드 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">컴포넌트 가이드</h2>
          <Separator className="mb-6" />

          <p className="text-gray-600 dark:text-gray-400 mb-4">
            shadcn/ui 컴포넌트 사용법에 대한 예제입니다.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Button 컴포넌트</h3>
              <CodeBlock
                code={`import { Button } from '@/components/ui/button'

<Button>기본 버튼</Button>
<Button variant="secondary">보조 버튼</Button>
<Button variant="destructive">위험 버튼</Button>
<Button variant="outline">아웃라인 버튼</Button>
<Button variant="ghost">고스트 버튼</Button>
<Button size="lg">큰 버튼</Button>
<Button size="sm">작은 버튼</Button>`}
                language="tsx"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Card 컴포넌트</h3>
              <CodeBlock
                code={`import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

<Card>
  <CardHeader>
    <CardTitle>카드 제목</CardTitle>
    <CardDescription>카드 설명</CardDescription>
  </CardHeader>
  <CardContent>
    카드 콘텐츠
  </CardContent>
</Card>`}
                language="tsx"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Dialog 컴포넌트</h3>
              <CodeBlock
                code={`import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useState } from 'react'

function Component() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button onClick={() => setOpen(true)}>다이얼로그 열기</button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>제목</DialogTitle>
            <DialogDescription>설명</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}`}
                language="tsx"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export const Route = createFileRoute('/docs')({
  component: DocsPage,
})
