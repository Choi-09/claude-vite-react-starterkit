# CLAUDE.md

이 파일은 Claude Code (claude.ai/code)가 이 저장소의 코드로 작업할 때 제공되는 가이드입니다.

## 프로젝트 개요

모던 웹 기술로 구축된 프로덕션 준비 완료 React 19 스타터 킷입니다. 문서화, 예제, 모범 사례를 포함한 확장 가능한 웹 애플리케이션 구축을 위한 완벽한 기반을 제공합니다.

**기술 스택**: React 19 + TypeScript + Vite 7 + TailwindCSS v4 + TanStack Router + shadcn/ui + Radix UI

## 핵심 아키텍처 패턴

### 1. 파일 기반 라우팅 (TanStack Router)

라우트는 `src/routes/` 디렉토리에서 파일 기반 규칙을 사용하여 정의됩니다:
- 각 라우트 파일은 `.tsx` 파일입니다 (예: `src/routes/index.tsx`, `src/routes/examples.tsx`)
- `createFileRoute()`를 사용하여 타입 안전 라우트를 정의합니다
- 루트 레이아웃은 `src/routes/__root.tsx`에 정의됩니다
- 라우트는 자동으로 `src/routeTree.gen.ts`로 생성됩니다 (수동 편집 금지)
- 라우터 인스턴스는 `src/main.tsx`에서 생성되며 타입 안전성을 위한 자동 모듈 확대가 있습니다

**라우트 패턴 예시**:
```tsx
import { createFileRoute } from '@tanstack/react-router'

function PageComponent() { /* ... */ }

export const Route = createFileRoute('/path')({
  component: PageComponent,
})
```

### 2. 테마 시스템 (라이트/다크 모드)

- **컨텍스트 기반**: `src/contexts/theme-context.ts`는 테마 상태 관리를 제공합니다
- **프로바이더**: `src/components/theme-provider.tsx`는 테마 초기화 및 지속성을 처리합니다
- **저장소**: 테마 설정은 localStorage에 저장됩니다
- **시스템 감지**: 미디어 쿼리 폴백을 포함한 'light' | 'dark' | 'system' 모드를 지원합니다
- **CSS 클래스**: 루트 요소에는 CSS 타겟팅을 위한 'light' 또는 'dark' 클래스가 적용됩니다
- **훅**: `src/hooks/use-theme.ts`의 `useTheme()`을 사용하여 테마 상태에 접근합니다

### 3. UI 컴포넌트 라이브러리 (shadcn/ui)

- 컴포넌트는 `src/components/ui/`에 위치합니다
- Radix UI 프리미티브 기반이며 Tailwind 스타일링으로 구성됩니다
- 모든 컴포넌트는 슬롯 기반 조합 패턴을 사용합니다 (data-slot 속성)
- `src/lib/utils.ts`의 디자인 시스템 유틸리티 (cn() 함수로 클래스 병합)
- CVA (class-variance-authority)를 사용하여 컴포넌트 변형을 정의합니다

### 4. 코드 강조 및 문서화

- **Shiki**: VS Code와 동일한 수준의 코드 강조
- **싱글톤 패턴**: `src/lib/shiki-config.ts`에서 highlighter 인스턴스를 캐시합니다
- **컴포넌트**:
  - `CodeBlock`: 구문 강조된 코드와 복사 버튼을 렌더링합니다
  - `ComponentDemo`: 탭을 사용한 이중 뷰 컴포넌트 (디자인 뷰 + 코드 뷰)
- **코드 예제**: `src/lib/code-examples.tsx`에 JSX로 저장됩니다
- **문서화**: `/docs` 라우트에서 포괄적인 가이드를 제공합니다

## 일반적인 개발 명령어

```bash
# 개발 서버 (http://localhost:5175 또는 다음 사용 가능한 포트에서 실행)
npm run dev

# 프로덕션을 위한 빌드 (TypeScript 검사 + Vite 빌드)
npm run build

# 린팅
npm run lint

# 프로덕션 빌드를 로컬에서 미리보기
npm run preview
```

## TypeScript 설정

- **경로 별칭**: `@/*`은 `src/*`로 해석됩니다 (tsconfig.json 및 vite.config.ts에서 설정)
- **타입 전용 임포트**: `verbatimModuleSyntax` 컴파일러 옵션에 의해 필수입니다
  - 사용: `import type { ReactNode } from 'react'`
  - 사용 금지: `import { ReactNode } from 'react'`
- **JSX**: `.tsx` 파일에서만 작동하며, `.ts` 파일에서는 작동하지 않습니다
- **타겟**: React 19 JSX 변환 (자동 JSX)을 포함한 ES2020

## 코드 조직

```
src/
├── components/
│   ├── ui/               # shadcn/ui 컴포넌트
│   ├── layout/           # Header, Footer, 레이아웃 래퍼
│   ├── code-block.tsx    # Shiki 기반 코드 표시
│   ├── component-demo.tsx # 탭이 있는 데모 컨테이너
│   ├── quick-start-dialog.tsx # 설치 옵션 다이얼로그
│   ├── theme-toggle.tsx
│   ├── theme-provider.tsx
│   └── ...
├── routes/               # 파일 기반 라우트 (TanStack Router)
│   ├── __root.tsx       # 루트 레이아웃
│   ├── index.tsx        # 홈페이지
│   ├── examples.tsx     # 컴포넌트 예제 쇼케이스
│   ├── docs.tsx         # 문서 페이지
│   └── ...
├── lib/
│   ├── utils.ts         # 클래스 병합을 위한 cn() 유틸리티
│   ├── shiki-config.ts  # 코드 highlighter 설정
│   ├── code-examples.tsx # 컴포넌트 예제 데이터
│   ├── tech-stack.ts    # 기술 정보
│   └── ...
├── hooks/               # 커스텀 React 훅
│   └── use-theme.ts     # 테마 컨텍스트 훅
├── contexts/            # React Context 정의
│   └── theme-context.ts
├── main.tsx             # 앱 엔트리 포인트
├── routeTree.gen.ts     # 자동 생성된 라우트 (수동 편집 금지)
└── index.css            # 전역 스타일

```

## 스타일링 가이드라인

- **Tailwind CSS v4**: Utility-first CSS 프레임워크
- **CSS 변수**: 테마 색상 및 디자인 토큰에 사용됩니다
- **다크 모드**: 다크 모드 스타일에는 `dark:` 프리픽스를 사용합니다
- **클래스 병합**: `src/lib/utils.ts`의 `cn()`을 사용하여 안전하게 Tailwind 클래스를 병합합니다
- **컴포넌트 스타일링**: shadcn/ui 컴포넌트는 이미 반응형 및 다크 모드 지원을 포함합니다

**예시**:
```tsx
<div className="bg-white dark:bg-gray-950 text-black dark:text-white">
  반응형 다크 모드 콘텐츠
</div>
```

## 주요 기능 및 페이지

- **홈페이지** (`/`): 히어로 섹션, 기능 카드, 버튼 데모
- **예제** (`/examples`): UI 컴포넌트 미리보기 및 코드 뷰 쇼케이스
- **문서화** (`/docs`): 기술 스택, 설정, 라우팅, 스타일링, 컴포넌트 가이드
- **코드 강조**: 복사 기능이 있는 구문 강조 코드 블록
- **빠른 시작**: 3가지 설치 옵션 (StackBlitz, Tiged, Git)

## 중요한 참고사항

### Shiki 코드 강조

- 비동기 초기화: 사용 전에 항상 `getHighlighter()`를 기다립니다
- 로드된 언어: TypeScript, TSX, JavaScript, JSX, Bash, JSON
- 테마: GitHub light/dark, CSS 변수로 커스터마이징 가능
- `dangerouslySetInnerHTML`을 통해 신뢰할 수 있는 Shiki 출력으로 사용됩니다

### 폼 컴포넌트

- Input 컴포넌트는 `src/components/ui/input.tsx`에 있습니다
- Label 컴포넌트는 `src/components/ui/label.tsx`에 있습니다
- Dialog/Modal은 `src/components/ui/dialog.tsx`에 있습니다
- 모두 표준 HTML 패턴 및 속성을 지원합니다

### Git 워크플로우

- 한국어 메시지로 기능 커밋 (전역 CLAUDE.md 참조)
- 한국어로 코드 주석 작성
- 영어로 변수/함수명 작성
- 일반적인 커밋 형식: `feat:` 또는 `fix:` 프리픽스와 설명

## 성능 최적화

- Shiki highlighter는 재초기화를 방지하기 위해 싱글톤으로 캐시됩니다
- 코드 예제는 정적 JSX이며 런타임 생성이 아닙니다
- Vite는 빠른 HMR 및 최적화된 프로덕션 번들을 제공합니다
- TailwindCSS v4는 최소 CSS 출력을 위해 JIT 컴파일을 수행합니다

## 일반적인 패턴

### 새로운 라우트 생성

1. `src/routes/[name].tsx` 생성
2. `@tanstack/react-router`에서 `createFileRoute` 임포트
3. 컴포넌트를 정의하고 Route를 내보냅니다
4. 파일 저장 시 라우트 트리가 자동 생성됩니다

### UI 컴포넌트 추가

1. `src/components/ui/`에서 기존 컴포넌트 확인
2. shadcn/ui를 사용하여 새 컴포넌트 추가: `npx shadcn@latest add [component-name]`
3. 컴포넌트 props 및 Tailwind 클래스를 통해 커스터마이징합니다
4. 모든 컴포넌트는 `dark:` 프리픽스를 통해 다크 모드를 지원합니다

### 테마 컨텍스트 사용

```tsx
import { useTheme } from '@/hooks/use-theme'

function MyComponent() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  // theme: 'light' | 'dark' | 'system'
  // resolvedTheme: 'light' | 'dark' (항상 해석됨)
}
```

## 빌드 및 배포

- **빌드 명령어**: `npm run build` (TypeScript 검사 후 Vite 빌드 실행)
- **출력**: `dist/` 디렉토리
- **미리보기**: `npm run preview`로 프로덕션 빌드 로컬 테스트
- **배포**: 표준 정적 호스팅 (Vercel, Netlify 등)

## 알아야 할 의존성

- **@tanstack/react-router**: 완전한 TypeScript 지원이 있는 파일 기반 라우팅
- **shiki**: VS Code 수준의 구문 강조
- **@radix-ui**: 접근성 우선, 헤드리스 컴포넌트 프리미티브
- **TailwindCSS**: Utility-first CSS 프레임워크
- **lucide-react**: 5000개 이상의 일관된 SVG 아이콘

## 문서화 및 예제 시스템

이 프로젝트는 내장 문서화 시스템을 포함합니다:

- **예제 라우트** (`/examples`): 인터랙티브 컴포넌트 쇼케이스
  - 미리보기 + 코드 탭이 있는 `ComponentDemo` 래퍼 사용
  - 예제는 `src/lib/code-examples.tsx`에 정의됩니다
  - 각 예제는 작동하는 컴포넌트와 복사 가능한 코드를 표시합니다

- **문서 라우트** (`/docs`): 기술 가이드
  - 기술 스택 카드 (`src/lib/tech-stack.ts`)
  - 설정, 라우팅, 스타일링, 컴포넌트에 대한 단계별 가이드
  - 구문 강조 및 복사 기능이 있는 CodeBlock 컴포넌트

- **홈페이지 기능**:
  - 3가지 설치 옵션이 있는 빠른 시작 다이얼로그
  - 예제 및 문서로의 링크
  - 기능 쇼케이스 섹션

### 새로운 예제 추가

1. `src/lib/code-examples.tsx`에서 컴포넌트 생성
2. `component`, `code`, `title`, `description`이 있는 예제 객체 정의
3. `/examples` 라우트에 자동으로 표시됩니다 (그리드 레이아웃이 렌더링을 처리합니다)

## 언어 및 커뮤니케이션 규칙

- **기본 응답 언어**: 한국어
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화**: 한국어로 작성 (IMPORTANT)
- **변수명/함수명**: 영어 (코드 표준 준수)
