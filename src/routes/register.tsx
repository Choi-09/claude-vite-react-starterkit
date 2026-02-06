import { createFileRoute, Link } from '@tanstack/react-router'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/register')({
  component: RegisterPage,
})

function RegisterPage() {
  return (
    <div className="container mx-auto flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-16">
      <Card className="w-full max-w-md text-center">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl">회원가입</CardTitle>
          <CardDescription>
            준비 중인 페이지입니다.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-gray-600 dark:text-gray-400">
            회원가입 페이지는 곧 오픈될 예정입니다.
          </p>
          <Button asChild className="w-full">
            <Link to="/login">
              로그인 페이지로 돌아가기
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
