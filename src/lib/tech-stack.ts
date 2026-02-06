export interface TechInfo {
  name: string
  version: string
  description: string
  officialUrl: string
  docsUrl: string
  features: string[]
}

export const techStack: TechInfo[] = [
  {
    name: 'React',
    version: '19.2.0',
    description: '사용자 인터페이스를 구축하기 위한 JavaScript 라이브러리',
    officialUrl: 'https://react.dev',
    docsUrl: 'https://react.dev/learn',
    features: [
      'Compiler 내장으로 자동 최적화',
      'use 훅으로 비동기 처리 간소화',
      'Server Components 지원',
      '향상된 Suspense 기능',
    ],
  },
  {
    name: 'TypeScript',
    version: '5.9.3',
    description: 'JavaScript에 타입 시스템을 추가한 슈퍼셋',
    officialUrl: 'https://www.typescriptlang.org',
    docsUrl: 'https://www.typescriptlang.org/docs',
    features: [
      '정적 타입 검사로 런타임 에러 방지',
      '우수한 IDE 지원 (자동완성, 리팩토링)',
      '최신 ECMAScript 기능 지원',
      '점진적 적용 가능',
    ],
  },
  {
    name: 'Vite',
    version: '7.2.4',
    description: '번개 같은 속도의 프론트엔드 빌드 도구',
    officialUrl: 'https://vitejs.dev',
    docsUrl: 'https://vitejs.dev/guide',
    features: [
      '극도로 빠른 개발 서버',
      'ES 모듈 기반 HMR (Hot Module Replacement)',
      'Rollup 기반 최적화된 빌드',
      '플러그인 시스템으로 확장 가능',
    ],
  },
  {
    name: 'TailwindCSS',
    version: '4.1.18',
    description: 'Utility-first CSS 프레임워크',
    officialUrl: 'https://tailwindcss.com',
    docsUrl: 'https://tailwindcss.com/docs',
    features: [
      'Utility 클래스로 빠른 스타일링',
      '다크 모드 지원',
      'Responsive 디자인 기본 지원',
      'JIT 컴파일로 최소 CSS 생성',
    ],
  },
  {
    name: 'TanStack Router',
    version: '1.158.1',
    description: 'React를 위한 경량 라우팅 솔루션',
    officialUrl: 'https://tanstack.com/router',
    docsUrl: 'https://tanstack.com/router/latest',
    features: [
      'Type-safe 라우팅',
      'Nested routing 지원',
      'Code splitting 자동화',
      '강력한 검색 파라미터 관리',
    ],
  },
  {
    name: 'shadcn/ui',
    version: 'latest',
    description: 'Radix UI 기반의 재사용 가능한 컴포넌트 라이브러리',
    officialUrl: 'https://ui.shadcn.com',
    docsUrl: 'https://ui.shadcn.com/docs',
    features: [
      '접근성 우선 컴포넌트',
      'Unstyled 기반으로 커스터마이징 용이',
      'Dark mode 자동 지원',
      'TypeScript 완전 지원',
    ],
  },
  {
    name: 'Radix UI',
    version: '1.4.3',
    description: '접근성을 우선으로 하는 UI 원시 컴포넌트',
    officialUrl: 'https://radix-ui.com',
    docsUrl: 'https://radix-ui.com/docs',
    features: [
      'WAI-ARIA 기준 준수',
      '완전 키보드 네비게이션',
      'Screen reader 지원',
      '프리미티브 기반 구성',
    ],
  },
  {
    name: 'Lucide React',
    version: '0.563.0',
    description: '깔끔한 SVG 아이콘 라이브러리',
    officialUrl: 'https://lucide.dev',
    docsUrl: 'https://lucide.dev/guide/packages/lucide-react',
    features: [
      '5000개 이상의 아이콘',
      '일관된 스타일 (1.5px stroke)',
      'Tree-shakeable',
      'React 컴포넌트로 제공',
    ],
  },
]
