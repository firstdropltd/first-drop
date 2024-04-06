import theme from "@/components/ThemeRegistry/theme.js"
import { CssBaseline } from "@mui/material"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"
import { ThemeProvider } from "@mui/material/styles"
import React from "react"
import "./globals.css"
import HomePageLayoutWrapper from "."

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-inter">
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <React.Suspense>
              <HomePageLayoutWrapper>{children}</HomePageLayoutWrapper>
            </React.Suspense>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
