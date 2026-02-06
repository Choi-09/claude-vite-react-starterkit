import type { ReactNode } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CodeBlock } from '@/components/code-block'

interface ComponentDemoProps {
  title: string
  description?: string
  component: ReactNode
  code: string
  language?: string
}

export function ComponentDemo({
  title,
  description,
  component,
  code,
  language = 'tsx',
}: ComponentDemoProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="preview" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="preview">디자인 뷰</TabsTrigger>
            <TabsTrigger value="code">코드 뷰</TabsTrigger>
          </TabsList>

          <TabsContent value="preview" className="mt-6">
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-8 bg-gray-50 dark:bg-gray-950 flex items-center justify-center min-h-[200px]">
              {component}
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-6">
            <CodeBlock code={code} language={language} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
