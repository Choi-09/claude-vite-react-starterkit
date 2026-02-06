# 모던 웹 스타터킷

React 19 + TypeScript + Vite 7을 기반으로 한 프로덕션 준비 완료 스타터킷입니다. 문서화, 예제, 모범 사례를 포함하여 확장 가능한 웹 애플리케이션을 빠르게 시작할 수 있습니다.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61dafb)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646cff)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06b6d4)](https://tailwindcss.com/)

## 🎯 주요 특징

- **⚡ 빠른 개발**: Vite의 번개 같은 HMR(Hot Module Replacement)
- **🎨 현대적 UI**: TailwindCSS v4 + shadcn/ui 컴포넌트
- **🌓 다크 모드**: 완벽한 라이트/다크 모드 지원
- **📚 내장 문서**: `/docs` 페이지에서 기술 스택 및 가이드 제공
- **🔍 예제 쇼케이스**: `/examples` 페이지에서 인터랙티브 컴포넌트 데모
- **🚀 빠른 설치**: QuickStartDialog로 3가지 설치 옵션 제공
- **♿ 접근성**: Radix UI 기반 WAI-ARIA 표준 준수
- **📱 반응형 디자인**: Mobile-first 접근으로 모든 기기 지원
- **🔐 보안**: localStorage 예외 처리, XSS 방지

## 🚀 빠른 시작

### 설치 옵션

#### 1. StackBlitz (브라우저에서 즉시 실행)
아무 설치 없이 브라우저에서 바로 시작:

```bash
# 프로젝트 열기
https://stackblitz.com/github/your-username/claude-vite-react-starterkit
```

#### 2. Tiged (권장: 로컬 설치)
```bash
# 프로젝트 클론 및 설치
npx tiged your-username/claude-vite-react-starterkit my-app
cd my-app
npm install
npm run dev
```

#### 3. Git Clone (수동 방법)
```bash
# 저장소 클론
git clone https://github.com/your-username/claude-vite-react-starterkit.git
cd claude-vite-react-starterkit

# 의존성 설치
npm install

# 개발 서버 시작
npm run dev
```

## 📦 기술 스택

| 기술 | 버전 | 설명 |
|------|------|------|
| **React** | 19 | UI 라이브러리 |
| **TypeScript** | 5.7 | 타입 안전성 |
| **Vite** | 7 | 빌드 도구 |
| **TailwindCSS** | 4 | Utility-first CSS |
| **TanStack Router** | 1.x | 파일 기반 라우팅 |
| **shadcn/ui** | 최신 | 접근성 있는 UI 컴포넌트 |
| **Radix UI** | 최신 | 헤드리스 컴포넌트 프리미티브 |
| **Shiki** | 최신 | VS Code 수준의 코드 강조 |
| **Lucide React** | 최신 | 5000+ SVG 아이콘 |

## 📋 사용 가능한 명령어

```bash
# 개발 서버 시작 (http://localhost:5175)
npm run dev

# 프로덕션 빌드
npm run build

# 린팅
npm run lint

# 빌드된 앱을 로컬에서 미리보기
npm run preview
```

## 📂 프로젝트 구조

```
src/
├── components/
│   ├── ui/                      # shadcn/ui 컴포넌트
│   ├── examples/                # 데모 컴포넌트
│   ├── layout/                  # Header, Footer 등
│   ├── code-block.tsx           # 구문 강조 코드 블록
│   ├── component-demo.tsx       # 데모 컨테이너
│   ├── quick-start-dialog.tsx   # 설치 옵션 다이얼로그
│   ├── theme-toggle.tsx         # 다크 모드 토글
│   └── theme-provider.tsx       # 테마 Context Provider
├── routes/                      # 파일 기반 라우트 (TanStack Router)
│   ├── __root.tsx              # 루트 레이아웃
│   ├── index.tsx               # 홈페이지
│   ├── examples.tsx            # 컴포넌트 예제 쇼케이스
│   ├── docs.tsx                # 기술 가이드
│   ├── about.tsx               # 소개 페이지
│   └── dashboard.tsx           # 대시보드
├── lib/
│   ├── utils.ts                # 클래스 병합 유틸리티
│   ├── shiki-config.ts         # 코드 강조 설정
│   ├── code-examples.tsx       # 컴포넌트 예제 데이터
│   └── tech-stack.ts           # 기술 스택 정보
├── hooks/
│   └── use-theme.ts            # 테마 Context 훅
├── contexts/
│   └── theme-context.ts        # 테마 상태 관리
├── main.tsx                    # 앱 엔트리 포인트
├── index.css                   # 전역 스타일
└── routeTree.gen.ts            # 자동 생성된 라우트 트리

public/
└── favicon.ico

dist/                           # 빌드 출력 (자동 생성)
```

## 🎨 주요 페이지

### 🏠 홈페이지 (`/`)
- 히어로 섹션
- 기능 쇼케이스
- 시작하기, 예제, 문서 링크
- QuickStartDialog를 통한 3가지 설치 옵션

### 📚 문서 페이지 (`/docs`)
- 기술 스택 소개
- 시작 가이드
- 프로젝트 구조 설명
- 스타일링 가이드
- 라우팅 패턴
- 컴포넌트 사용법

### 🎨 예제 페이지 (`/examples`)
- 버튼 Variants와 크기
- 카드 레이아웃
- 폼 입력 필드
- 카드 그리드 레이아웃
- 각 예제마다 라이브 데모 + 복사 가능한 코드

### ℹ️ 소개 페이지 (`/about`)
- 프로젝트 개요
- 주요 기능 설명
- 기술 스택 상세 정보

### 📊 대시보드 (`/dashboard`)
- 미리 구성된 대시보드 레이아웃
- 탐색용 예제 페이지

## 🌓 다크 모드

완벽한 라이트/다크 모드 지원:

```tsx
import { useTheme } from '@/hooks/use-theme'

function MyComponent() {
  const { theme, setTheme, resolvedTheme } = useTheme()

  return (
    <div className="bg-white dark:bg-gray-950">
      현재 테마: {resolvedTheme}
    </div>
  )
}
```

- **light**: 라이트 모드
- **dark**: 다크 모드
- **system**: 시스템 설정 따르기 (기본값)

## 🛣️ 라우팅 시스템

파일 기반 라우팅으로 직관적인 라우트 관리:

```tsx
// src/routes/my-page.tsx
import { createFileRoute } from '@tanstack/react-router'

function MyPage() {
  return <div>My Page</div>
}

export const Route = createFileRoute('/my-page')({
  component: MyPage,
})
```

자동으로 `/my-page` 라우트가 생성됩니다.

## 🎨 스타일링

### TailwindCSS Utility-first 접근

```tsx
<div className="bg-white dark:bg-gray-950 rounded-lg shadow-md">
  반응형 다크 모드 지원 요소
</div>
```

### CSS 변수를 사용한 테마 토큰

```css
/* 색상 정의 */
--background: 0 0% 100%;
--foreground: 0 0% 3.6%;
--primary: 0 0% 9%;
--primary-foreground: 0 0% 98%;
```

## 🧩 UI 컴포넌트

shadcn/ui를 통한 접근성 있는 컴포넌트:

```tsx
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

export function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>제목</CardTitle>
      </CardHeader>
      <CardContent>
        <Label htmlFor="input">라벨</Label>
        <Input id="input" placeholder="입력하세요" />
        <Badge>태그</Badge>
      </CardContent>
    </Card>
  )
}
```

## 💻 개발 가이드

### 경로 별칭 사용

TypeScript와 import에서 `@/*` 별칭으로 `src/` 접근:

```tsx
// ✅ 권장
import { Button } from '@/components/ui/button'
import { useTheme } from '@/hooks/use-theme'

// ❌ 피하기
import { Button } from '../../../components/ui/button'
```

### 타입 안전성

`verbatimModuleSyntax` 설정으로 타입 전용 import 강제:

```tsx
// ✅ 타입 전용 import
import type { ReactNode } from 'react'
import type { ComponentProps } from 'react'

// ❌ 피하기
import { ReactNode } from 'react'
```

### 코드 작성 규칙

- **변수/함수명**: 영어 사용
- **코드 주석**: 한국어 작성
- **커밋 메시지**: 한국어 작성
- **문서**: 한국어 작성

## 🔧 TypeScript 설정

- **Strict Mode**: 엄격한 타입 검사 활성화
- **ESNext Target**: 최신 JavaScript 기능 지원
- **JSX**: React 19 자동 JSX 변환
- **Module Resolution**: `node` 모듈 해석

## 🚀 배포

### 프로덕션 빌드

```bash
npm run build
```

생성된 `dist/` 디렉토리를 호스팅 서비스에 배포합니다.

### 지원하는 호스팅 서비스

- [Vercel](https://vercel.com) (권장)
- [Netlify](https://netlify.com)
- [GitHub Pages](https://pages.github.com)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- 모든 정적 호스팅

### Vercel 배포 (권장)

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

## 📊 성능 최적화

- ✅ **Vite 7**: 번개 같은 빌드 속도
- ✅ **TailwindCSS v4**: JIT 컴파일로 최소 CSS 번들
- ✅ **Tree-shaking**: 미사용 코드 제거
- ✅ **Code Splitting**: 라우트별 자동 코드 분할
- ✅ **Shiki 캐싱**: 싱글톤 패턴으로 highlighter 재초기화 방지

## 🔐 보안 기능

- ✅ **XSS 방지**: Shiki 출력만 `dangerouslySetInnerHTML` 사용
- ✅ **localStorage 예외 처리**: Safari private mode 대응
- ✅ **외부 링크 보안**: `rel="noopener noreferrer"` 적용
- ✅ **TypeScript Strict Mode**: 런타임 에러 방지

## 📝 커밋 컨벤션

이 프로젝트는 Conventional Commits를 따릅니다:

```
feat: 새 기능 추가
fix: 버그 수정
docs: 문서 수정
refactor: 코드 리팩토링
perf: 성능 개선
test: 테스트 추가
chore: 빌드, 의존성 수정
```

예시:
```bash
git commit -m "feat: 새로운 대시보드 페이지 추가"
git commit -m "fix: 다크 모드 테마 버그 수정"
```

## 📚 추가 학습 자료

- [React 공식 문서](https://react.dev)
- [Vite 가이드](https://vitejs.dev/guide/)
- [TailwindCSS 문서](https://tailwindcss.com/docs)
- [TypeScript 핸드북](https://www.typescriptlang.org/docs/)
- [TanStack Router](https://tanstack.com/router/latest)
- [Radix UI](https://www.radix-ui.com/docs/primitives/overview/introduction)
- [shadcn/ui](https://ui.shadcn.com)

## 🤝 기여하기

개선 사항이나 버그 리포트는 이슈를 통해 제출해주세요.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이센스

이 프로젝트는 MIT 라이센스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 🙋 문제 해결

### 개발 서버가 시작되지 않음
```bash
# 1. node_modules 삭제
rm -rf node_modules

# 2. 의존성 재설치
npm install

# 3. 개발 서버 시작
npm run dev
```

### 빌드 오류
```bash
# TypeScript 컴파일 확인
npm run tsc -- --noEmit

# 린팅 확인
npm run lint
```

### 테마가 적용되지 않음
```bash
# localStorage 확인
localStorage.getItem('theme')

# 브라우저 캐시 삭제 후 새로고침
```

## 💡 팁

- 개발 중 `npm run dev`로 HMR의 이점을 최대한 활용하세요
- `.env` 파일로 환경 변수를 관리하세요
- 컴포넌트는 `src/components/` 디렉토리에 정리하세요
- 공통 유틸리티는 `src/lib/` 디렉토리에 작성하세요
- 커스텀 훅은 `src/hooks/` 디렉토리에 작성하세요

---

**행운을 빕니다! 🚀**

이 스타터킷으로 멋진 웹 애플리케이션을 만들어보세요!
