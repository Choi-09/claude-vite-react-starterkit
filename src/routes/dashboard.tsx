import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { BarChart3, TrendingUp, Users, Activity } from 'lucide-react'

function DashboardPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`폼 제출됨:\n${JSON.stringify(formData, null, 2)}`)
    setFormData({ name: '', email: '', message: '' })
  }

  const stats = [
    {
      title: '총 사용자',
      value: '1,234',
      icon: Users,
      color: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400',
    },
    {
      title: '활성 세션',
      value: '567',
      icon: Activity,
      color: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400',
    },
    {
      title: '매출',
      value: '$45,231',
      icon: TrendingUp,
      color: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400',
    },
    {
      title: '전환율',
      value: '12.5%',
      icon: BarChart3,
      color: 'bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400',
    },
  ]

  return (
    <div className="container mx-auto max-w-7xl px-4 py-20">
      {/* 제목 */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">대시보드</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          UI 컴포넌트 실제 사용 예제
        </p>
      </div>

      {/* 통계 카드 */}
      <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <div className={`h-8 w-8 rounded-lg ${stat.color} flex items-center justify-center`}>
                  <Icon className="h-4 w-4" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  지난달 대비 +12.5%
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* 폼 섹션 */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* 폼 */}
        <Card>
          <CardHeader>
            <CardTitle>피드백 폼</CardTitle>
            <CardDescription>
              의견을 남겨주세요. 더 나은 서비스를 위해 소중한 피드백을 기다립니다.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 이름 */}
              <div className="space-y-2">
                <Label htmlFor="name">이름</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="이름을 입력하세요"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* 이메일 */}
              <div className="space-y-2">
                <Label htmlFor="email">이메일</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="이메일을 입력하세요"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* 메시지 */}
              <div className="space-y-2">
                <Label htmlFor="message">메시지</Label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="메시지를 입력하세요"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-900 dark:placeholder-gray-400 dark:focus:border-blue-400 dark:focus:ring-blue-400"
                  rows={4}
                  required
                />
              </div>

              {/* 버튼 */}
              <Button type="submit" className="w-full">
                전송
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* 정보 카드 */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Input 컴포넌트</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
              <p>
                <strong>특징:</strong>
              </p>
              <ul className="list-inside list-disc space-y-2">
                <li>포커스 시 파란색 아웃라인</li>
                <li>다크 모드 자동 지원</li>
                <li>접근성 라벨 포함</li>
                <li>플레이스홀더 텍스트</li>
                <li>비활성화 상태 지원</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Label 컴포넌트</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
              <p>
                <strong>특징:</strong>
              </p>
              <ul className="list-inside list-disc space-y-2">
                <li>htmlFor 속성으로 input과 연결</li>
                <li>접근성 자동 보장</li>
                <li>스크린 리더 지원</li>
                <li>다크 모드 색상 자동 조정</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export const Route = createFileRoute('/dashboard')({
  component: DashboardPage,
})
