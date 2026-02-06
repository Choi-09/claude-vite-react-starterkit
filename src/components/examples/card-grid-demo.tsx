import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function CardGridDemo() {
  return (
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
}
