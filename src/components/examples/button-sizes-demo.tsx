import { Button } from '@/components/ui/button'

export function ButtonSizesDemo() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  )
}
