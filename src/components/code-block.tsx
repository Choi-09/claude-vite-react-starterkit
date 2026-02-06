import { useEffect, useState } from 'react'
import { getHighlighter } from '@/lib/shiki-config'
import { useTheme } from '@/hooks/use-theme'
import { Badge } from '@/components/ui/badge'
import { Check, Copy, AlertCircle } from 'lucide-react'

interface CodeBlockProps {
  code: string
  language: string
  filename?: string
}

export function CodeBlock({
  code,
  language,
  filename,
}: CodeBlockProps) {
  const { resolvedTheme } = useTheme()
  const [html, setHtml] = useState<string>('')
  const [copied, setCopied] = useState(false)
  const [copyError, setCopyError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const highlight = async () => {
      try {
        const highlighter = await getHighlighter()
        const shikiTheme = resolvedTheme === 'dark' ? 'github-dark' : 'github-light'
        const highlighted = await highlighter.codeToHtml(code, {
          lang: language,
          theme: shikiTheme,
        })
        setHtml(highlighted)
      } catch (error) {
        console.error('[CodeBlock] Failed to highlight code:', error)
        setHtml(`<pre><code>${code}</code></pre>`)
      } finally {
        setIsLoading(false)
      }
    }

    highlight()
  }, [code, language, resolvedTheme])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setCopyError(false)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('[CodeBlock] Failed to copy to clipboard:', error)
      setCopyError(true)
      setTimeout(() => setCopyError(false), 3000)
    }
  }

  return (
    <div className="relative rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden bg-white dark:bg-gray-950">
      {/* 헤더 */}
      <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-900 px-4 py-3 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2">
          {filename && (
            <span className="text-sm text-gray-600 dark:text-gray-400 font-mono">
              {filename}
            </span>
          )}
          <Badge variant="secondary" className="text-xs">
            {language}
          </Badge>
        </div>
        <button
          onClick={handleCopy}
          className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          title={copied ? '복사됨!' : copyError ? '복사 실패' : '복사'}
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-600" />
          ) : copyError ? (
            <AlertCircle className="h-4 w-4 text-red-600" />
          ) : (
            <Copy className="h-4 w-4 text-gray-600 dark:text-gray-400" />
          )}
        </button>
      </div>

      {/* 코드 블록 */}
      <div className="overflow-x-auto">
        {isLoading ? (
          <div className="p-4 text-gray-500 dark:text-gray-400">로딩중...</div>
        ) : (
          <div
            className="shiki-block [&_pre]:bg-transparent [&_pre]:p-4 [&_pre]:m-0 [&_code]:text-sm"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        )}
      </div>
    </div>
  )
}
