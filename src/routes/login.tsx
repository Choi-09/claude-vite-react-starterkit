import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Separator } from '@/components/ui/separator'
import { Link } from '@tanstack/react-router'

export const Route = createFileRoute('/login')({
  component: LoginPage,
})

interface FormData {
  email: string
  password: string
  rememberMe: boolean
}

interface FormErrors {
  email: string
  password: string
}

function LoginPage() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    rememberMe: false,
  })

  const [errors, setErrors] = useState<FormErrors>({
    email: '',
    password: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  // 이메일 형식 검증 (간단한 정규식)
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // 입력 필드 변경 처리
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))

    // 입력 시 해당 필드의 에러 초기화
    if (name === 'email' || name === 'password') {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  // 폼 제출 처리
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // 검증
    const newErrors: FormErrors = {
      email: '',
      password: '',
    }

    if (!formData.email.trim()) {
      newErrors.email = '이메일을 입력해주세요'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = '올바른 이메일 형식이 아닙니다'
    }

    if (!formData.password.trim()) {
      newErrors.password = '비밀번호를 입력해주세요'
    } else if (formData.password.length < 6) {
      newErrors.password = '비밀번호는 6자 이상이어야 합니다'
    }

    // 에러가 있으면 표시하고 반환
    if (newErrors.email || newErrors.password) {
      setErrors(newErrors)
      return
    }

    // 로그인 상태 유지 옵션 처리
    if (formData.rememberMe) {
      try {
        localStorage.setItem('rememberEmail', formData.email)
      } catch (err) {
        // Safari private mode 등에서 localStorage 사용 불가 가능
        console.warn('localStorage를 사용할 수 없습니다:', err)
      }
    }

    // 제출 중 상태로 전환
    setIsSubmitting(true)

    // API 호출 시뮬레이션 (2초 지연)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      alert(`로그인 성공!\n이메일: ${formData.email}\n로그인 상태 유지: ${formData.rememberMe ? '활성화' : '비활성화'}`)

      // 실제 구현에서는 여기서 대시보드로 리다이렉트
      // navigate({ to: '/dashboard' })
    } catch (error) {
      alert('로그인에 실패했습니다.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-16">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl">로그인</CardTitle>
          <CardDescription>
            계정에 로그인하여 서비스를 이용하세요.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 이메일 입력 */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                이메일
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="example@mail.com"
                value={formData.email}
                onChange={handleInputChange}
                disabled={isSubmitting}
                aria-invalid={!!errors.email}
                className="h-10"
              />
              {errors.email && (
                <p className="text-sm text-red-600 dark:text-red-400">
                  {errors.email}
                </p>
              )}
            </div>

            {/* 비밀번호 입력 */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-sm font-medium">
                  비밀번호
                </Label>
                <Button
                  asChild
                  variant="link"
                  className="h-auto p-0 text-xs"
                >
                  <Link to="/login">
                    비밀번호 찾기
                  </Link>
                </Button>
              </div>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleInputChange}
                disabled={isSubmitting}
                aria-invalid={!!errors.password}
                className="h-10"
              />
              {errors.password && (
                <p className="text-sm text-red-600 dark:text-red-400">
                  {errors.password}
                </p>
              )}
            </div>

            {/* 로그인 상태 유지 체크박스 */}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onCheckedChange={(checked) =>
                  setFormData(prev => ({
                    ...prev,
                    rememberMe: checked === true,
                  }))
                }
                disabled={isSubmitting}
              />
              <Label
                htmlFor="rememberMe"
                className="text-sm font-normal cursor-pointer"
              >
                로그인 상태 유지
              </Label>
            </div>

            {/* 로그인 버튼 */}
            <Button
              type="submit"
              className="w-full h-10"
              disabled={isSubmitting}
            >
              {isSubmitting ? '로그인 중...' : '로그인하기'}
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col gap-4">
          <Separator />
          <p className="text-sm text-gray-600 dark:text-gray-400">
            아직 계정이 없으신가요?{' '}
            <Button
              asChild
              variant="link"
              className="h-auto p-0"
            >
              <Link to="/register">
                회원가입하기
              </Link>
            </Button>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
