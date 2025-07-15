import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles'
import GlobalStyles from '@mui/material/GlobalStyles'
import theme from './theme.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StyledEngineProvider enableCssLayer>
      <GlobalStyles styles="@layer theme, base, mui, components, utilities;"/>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </StrictMode>,
)
