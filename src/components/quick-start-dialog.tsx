import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { CodeBlock } from '@/components/code-block'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Zap, GitBranch, Copy } from 'lucide-react'

interface QuickStartDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function QuickStartDialog({ open, onOpenChange }: QuickStartDialogProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const handleCopy = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch (error) {
      console.error('복사 실패:', error)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            빠른 시작
          </DialogTitle>
          <DialogDescription>
            몇 가지 방법으로 프로젝트를 시작할 수 있습니다.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-4">
          {/* 옵션 1: StackBlitz */}
          <div>
            <h3 className="font-semibold flex items-center gap-2 mb-3">
              <Zap className="h-4 w-4" />
              StackBlitz에서 즉시 실행
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              설치 없이 브라우저에서 바로 개발을 시작합니다.
            </p>
            <Button
              asChild
              size="lg"
              className="w-full"
              onClick={() => {
                onOpenChange(false)
              }}
            >
              <a
                href="https://stackblitz.com/github/anthropics/claude-vite-react-starterkit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Zap className="mr-2 h-4 w-4" />
                StackBlitz에서 열기
              </a>
            </Button>
          </div>

          <Separator />

          {/* 옵션 2: Tiged (추천) */}
          <div>
            <h3 className="font-semibold mb-3">Tiged로 설치 (권장)</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              빠른 프로젝트 다운로드 도구를 사용하여 설치합니다.
            </p>
            <div className="relative">
              <CodeBlock
                code={`npx tiged anthropics/claude-vite-react-starterkit my-app
cd my-app
npm install
npm run dev`}
                language="bash"
              />
              <button
                onClick={() =>
                  handleCopy(
                    `npx tiged anthropics/claude-vite-react-starterkit my-app\ncd my-app\nnpm install\nnpm run dev`,
                    1
                  )
                }
                className="absolute top-4 right-4 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                title="복사"
              >
                {copiedIndex === 1 ? (
                  <span className="text-xs text-green-600">복사됨!</span>
                ) : (
                  <Copy className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                )}
              </button>
            </div>
          </div>

          <Separator />

          {/* 옵션 3: Git Clone */}
          <div>
            <h3 className="font-semibold flex items-center gap-2 mb-3">
              <GitBranch className="h-4 w-4" />
              Git Clone
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Git을 사용하여 저장소를 복제합니다.
            </p>
            <div className="relative">
              <CodeBlock
                code={`git clone https://github.com/anthropics/claude-vite-react-starterkit.git
cd claude-vite-react-starterkit
npm install
npm run dev`}
                language="bash"
              />
              <button
                onClick={() =>
                  handleCopy(
                    `git clone https://github.com/anthropics/claude-vite-react-starterkit.git\ncd claude-vite-react-starterkit\nnpm install\nnpm run dev`,
                    2
                  )
                }
                className="absolute top-4 right-4 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                title="복사"
              >
                {copiedIndex === 2 ? (
                  <span className="text-xs text-green-600">복사됨!</span>
                ) : (
                  <Copy className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                )}
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
