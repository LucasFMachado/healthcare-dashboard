import type { ReactNode } from 'react'

import { StyledComponentsRegistry } from '@/lib/registry'

import { MenuProvider } from './MenuContext'

interface ProviderProps {
  children: ReactNode
}

export function Providers({ children }: ProviderProps) {
  return (
    <StyledComponentsRegistry>
      <MenuProvider>{children}</MenuProvider>
    </StyledComponentsRegistry>
  )
}
