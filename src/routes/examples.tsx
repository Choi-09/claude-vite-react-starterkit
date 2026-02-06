import { createFileRoute } from '@tanstack/react-router'
import { ComponentDemo } from '@/components/component-demo'
import { codeExamples } from '@/lib/code-examples'

function ExamplesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="container mx-auto max-w-7xl px-4 py-20">
        {/* 헤더 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">컴포넌트 예제</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            실제 사용 가능한 컴포넌트 예제를 확인하고 코드를 복사하세요
          </p>
        </div>

        {/* 예제 그리드 */}
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
          {codeExamples.map((example) => (
            <ComponentDemo
              key={example.id}
              title={example.title}
              description={example.description}
              component={example.component}
              code={example.code}
              language={example.language}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export const Route = createFileRoute('/examples')({
  component: ExamplesPage,
})
