import { Outlet, RootRoute } from '@tanstack/react-router'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

function RootLayout() {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col bg-white text-gray-950 dark:bg-gray-950 dark:text-gray-50">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export const Route = new RootRoute({
  component: RootLayout,
})
