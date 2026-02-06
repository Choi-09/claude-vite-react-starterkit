import type { ReactNode } from 'react'
import { ButtonVariantsDemo } from '@/components/examples/button-variants-demo'
import { ButtonSizesDemo } from '@/components/examples/button-sizes-demo'
import { CardLayoutDemo } from '@/components/examples/card-layout-demo'
import { FormInputDemo } from '@/components/examples/form-input-demo'
import { CardGridDemo } from '@/components/examples/card-grid-demo'

export interface CodeExample {
  id: string
  title: string
  description: string
  code: string
  language: string
  component: ReactNode
}

export const codeExamples: CodeExample[] = [
  {
    id: 'button-variants',
    title: '버튼 Variants',
    description: '다양한 스타일의 버튼 컴포넌트',
    component: <ButtonVariantsDemo />,
    code: `<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`,
    language: 'tsx',
  },
  {
    id: 'button-sizes',
    title: '버튼 크기',
    description: '버튼의 다양한 크기 옵션',
    component: <ButtonSizesDemo />,
    code: `<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>`,
    language: 'tsx',
  },
  {
    id: 'card-layout',
    title: '카드 컴포넌트',
    description: '기본적인 카드 레이아웃 구성',
    component: <CardLayoutDemo />,
    code: `<Card>
  <CardHeader>
    <CardTitle>카드 제목</CardTitle>
    <CardDescription>카드 설명</CardDescription>
  </CardHeader>
  <CardContent>
    <p>카드 콘텐츠</p>
  </CardContent>
</Card>`,
    language: 'tsx',
  },
  {
    id: 'form-input',
    title: '폼 입력 필드',
    description: 'Label과 Input을 활용한 폼 구성',
    component: <FormInputDemo />,
    code: `<div className="space-y-2">
  <Label htmlFor="name">이름</Label>
  <Input id="name" placeholder="이름을 입력하세요" type="text" />
</div>
<div className="space-y-2">
  <Label htmlFor="email">이메일</Label>
  <Input id="email" placeholder="이메일을 입력하세요" type="email" />
</div>
<Button className="w-full">제출</Button>`,
    language: 'tsx',
  },
  {
    id: 'card-grid',
    title: '카드 그리드 레이아웃',
    description: '여러 카드를 그리드로 배치한 레이아웃',
    component: <CardGridDemo />,
    code: `<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <Card>
    <CardHeader>
      <CardTitle>기능 1</CardTitle>
    </CardHeader>
    <CardContent>
      <p>첫 번째 기능에 대한 설명입니다.</p>
    </CardContent>
  </Card>
  <Card>
    <CardHeader>
      <CardTitle>기능 2</CardTitle>
    </CardHeader>
    <CardContent>
      <p>두 번째 기능에 대한 설명입니다.</p>
    </CardContent>
  </Card>
</div>`,
    language: 'tsx',
  },
]
