import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function CardLayoutDemo() {
  return (
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
}
