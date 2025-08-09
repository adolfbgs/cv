'use client'

import { CacheProvider } from '@emotion/react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import createCache from '@emotion/cache'
import { createTheme } from '@mui/material/styles'

const muiCache = createCache({ key: 'mui', prepend: true })
const theme = createTheme()

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  )
}
