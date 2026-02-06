import type { ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export interface CodeExample {
  id: string
  title: string
  description: string
  code: string
  language: string
  component: ReactNode
}

// 버튼 Variants 데모
const ButtonVariantsDemo = () => (
  <div className="flex flex-wrap gap-4">
    <Button variant="default">Default</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="destructive">Destructive</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="link">Link</Button>
  </div>
)

// 버튼 크기 데모
const ButtonSizesDemo = () => (
  <div className="flex flex-wrap items-center gap-4">
    <Button size="sm">Small</Button>
    <Button size="default">Default</Button>
    <Button size="lg">Large</Button>
  </div>
)

// 카드 레이아웃 데모
const CardLayoutDemo = () => (
  <Card className="w-full max-w-sm">
    <CardHeader>
      <CardTitle>카드 제목</CardTitle>
      <CardDescription>카드 설명 텍스트입니다</CardDescription>
    </CardHeader>
    <CardContent>
      <p>카드 콘텐츠 영역입니다. 원하는 어떤 요소도 여기에 배치할 수 있습니다.</p>
    </CardContent>
  </Card>
)

// 폼 입력 데모
const FormInputDemo = () => (
  <div className="w-full max-w-sm space-y-4">
    <div className="space-y-2">
      <Label htmlFor="name">이름</Label>
      <Input id="name" placeholder="이름을 입력하세요" type="text" />
    </div>
    <div className="space-y-2">
      <Label htmlFor="email">이메일</Label>
      <Input id="email" placeholder="이메일을 입력하세요" type="email" />
    </div>
    <Button className="w-full">제출</Button>
  </div>
)

// 카드 그리드 데모
const CardGridDemo = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
    <Card>
      <CardHeader>
        <CardTitle className="text-base">기능 1</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          첫 번째 기능에 대한 설명입니다.
        </p>
      </CardContent>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle className="text-base">기능 2</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          두 번째 기능에 대한 설명입니다.
        </p>
      </CardContent>
    </Card>
  </div>
)

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
