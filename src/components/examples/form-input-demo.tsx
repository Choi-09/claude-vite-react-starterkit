import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function FormInputDemo() {
  return (
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
}
