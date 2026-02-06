# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a production-ready React 19 starter kit built with modern web technologies. It provides a complete foundation for building scalable web applications with documentation, examples, and best practices.

**Tech Stack**: React 19 + TypeScript + Vite 7 + TailwindCSS v4 + TanStack Router + shadcn/ui + Radix UI

## Key Architecture Patterns

### 1. File-Based Routing (TanStack Router)

Routes are defined using file-based convention in `src/routes/`:
- Each route file is a `.tsx` file (e.g., `src/routes/index.tsx`, `src/routes/examples.tsx`)
- Use `createFileRoute()` to define routes with type-safe paths
- Root layout defined in `src/routes/__root.tsx`
- Routes are automatically generated into `src/routeTree.gen.ts` (do not edit manually)
- Router instance created in `src/main.tsx` with automatic module augmentation for type safety

**Example route pattern**:
```tsx
import { createFileRoute } from '@tanstack/react-router'

function PageComponent() { /* ... */ }

export const Route = createFileRoute('/path')({
  component: PageComponent,
})
```

### 2. Theme System (Light/Dark Mode)

- **Context-based**: `src/contexts/theme-context.ts` provides theme state management
- **Provider**: `src/components/theme-provider.tsx` handles theme initialization and persistence
- **Storage**: Theme preference saved to localStorage
- **System detection**: Supports 'light' | 'dark' | 'system' modes with media query fallback
- **CSS classes**: Root element gets 'light' or 'dark' class for CSS targeting
- **Hook**: Use `useTheme()` from `src/hooks/use-theme.ts` to access theme state

### 3. UI Component Library (shadcn/ui)

- Components located in `src/components/ui/`
- Built on Radix UI primitives with Tailwind styling
- All components use slot-based composition pattern (data-slot attributes)
- Design system utilities in `src/lib/utils.ts` (cn() function for class merging)
- Component variants defined using CVA (class-variance-authority)

### 4. Code Highlighting & Documentation

- **Shiki**: Code highlighting powered by Shiki (same as VS Code)
- **Singleton pattern**: Highlighter instance cached in `src/lib/shiki-config.ts`
- **Components**:
  - `CodeBlock`: Renders syntax-highlighted code with copy button
  - `ComponentDemo`: Dual-view component (design view + code view using tabs)
- **Code examples**: Stored in `src/lib/code-examples.tsx` as JSX
- **Documentation**: Comprehensive guides in `/docs` route

## Common Development Commands

```bash
# Development server (runs on http://localhost:5175 or next available port)
npm run dev

# Build for production (TypeScript check + Vite build)
npm run build

# Linting
npm run lint

# Preview production build locally
npm run preview
```

## TypeScript Configuration

- **Path aliases**: `@/*` resolves to `src/*` (configured in tsconfig.json and vite.config.ts)
- **Type-only imports**: Required by `verbatimModuleSyntax` compiler option
  - Use: `import type { ReactNode } from 'react'`
  - Not: `import { ReactNode } from 'react'`
- **JSX**: Only works in `.tsx` files, not `.ts`
- **Target**: ES2020 with React 19 JSX transform (automatic JSX)

## Code Organization

```
src/
├── components/
│   ├── ui/               # shadcn/ui components
│   ├── layout/           # Header, Footer, layout wrappers
│   ├── code-block.tsx    # Shiki-powered code display
│   ├── component-demo.tsx # Demo container with tabs
│   ├── quick-start-dialog.tsx # Installation options dialog
│   ├── theme-toggle.tsx
│   ├── theme-provider.tsx
│   └── ...
├── routes/               # File-based routes (TanStack Router)
│   ├── __root.tsx       # Root layout
│   ├── index.tsx        # Home page
│   ├── examples.tsx     # Component examples showcase
│   ├── docs.tsx         # Documentation pages
│   └── ...
├── lib/
│   ├── utils.ts         # cn() utility for class merging
│   ├── shiki-config.ts  # Code highlighter setup
│   ├── code-examples.tsx # Component example data
│   ├── tech-stack.ts    # Technology information
│   └── ...
├── hooks/               # Custom React hooks
│   └── use-theme.ts     # Theme context hook
├── contexts/            # React Context definitions
│   └── theme-context.ts
├── main.tsx             # App entry point
├── routeTree.gen.ts     # Auto-generated routes (do not edit)
└── index.css            # Global styles

```

## Styling Guidelines

- **Tailwind CSS v4**: Utility-first CSS framework
- **CSS Variables**: Used for theme colors and design tokens
- **Dark Mode**: Use `dark:` prefix for dark mode styles
- **Class merging**: Use `cn()` from `src/lib/utils.ts` to safely merge Tailwind classes
- **Component styling**: shadcn/ui components already include responsive and dark mode support

**Example**:
```tsx
<div className="bg-white dark:bg-gray-950 text-black dark:text-white">
  Responsive dark mode content
</div>
```

## Key Features & Pages

- **Home Page** (`/`): Hero section with feature cards, button demos
- **Examples** (`/examples`): Showcases UI components with preview and code view
- **Documentation** (`/docs`): Technology stack, guides (setup, routing, styling, components)
- **Code Highlighting**: Syntax-highlighted code blocks with copy functionality
- **Quick Start**: Multiple installation options (StackBlitz, Tiged, Git)

## Important Notes

### Shiki Code Highlighting

- Async initialization: Always await `getHighlighter()` before use
- Languages loaded: TypeScript, TSX, JavaScript, JSX, Bash, JSON
- Themes: GitHub light/dark with CSS variable customization
- Used via `dangerouslySetInnerHTML` with trusted Shiki output

### Form Components

- Input components in `src/components/ui/input.tsx`
- Label components in `src/components/ui/label.tsx`
- Dialog/Modal in `src/components/ui/dialog.tsx`
- All support standard HTML patterns and attributes

### Git Workflow

- Feature commits with Korean messages (per global CLAUDE.md)
- Code comments in Korean
- Variable/function names in English
- Typical commit format: `feat:` or `fix:` prefix with description

## Performance Optimization

- Shiki highlighter is cached as singleton to prevent re-initialization
- Code examples are static JSX, not runtime-generated
- Vite provides fast HMR and optimized production bundles
- TailwindCSS v4 performs JIT compilation for minimal CSS output

## Common Patterns

### Creating New Routes

1. Create `src/routes/[name].tsx`
2. Import `createFileRoute` from `@tanstack/react-router`
3. Define component and export Route
4. Route tree auto-generates on file save

### Adding UI Components

1. Check `src/components/ui/` for existing components
2. Use shadcn/ui to add new components: `npx shadcn@latest add [component-name]`
3. Customize via component props and Tailwind classes
4. All components support dark mode via `dark:` prefix

### Using Theme Context

```tsx
import { useTheme } from '@/hooks/use-theme'

function MyComponent() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  // theme: 'light' | 'dark' | 'system'
  // resolvedTheme: 'light' | 'dark' (always resolved)
}
```

## Build & Deployment

- **Build command**: `npm run build` (runs TypeScript check then Vite build)
- **Output**: `dist/` directory
- **Preview**: `npm run preview` to test production build locally
- **Deployment**: Standard static hosting (Vercel, Netlify, etc.)

## Dependencies to Know

- **@tanstack/react-router**: File-based routing with full TypeScript support
- **shiki**: VS Code-grade syntax highlighting
- **@radix-ui**: Headless, accessible component primitives
- **TailwindCSS**: Utility-first CSS framework
- **lucide-react**: 5000+ consistent SVG icons

