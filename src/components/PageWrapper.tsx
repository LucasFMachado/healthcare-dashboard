'use client'

import { ReactNode } from 'react'
import { styled } from 'styled-components'

import { colors } from '@/styles/variables'

interface PageWrapperProps {
  children: ReactNode
}

export function PageWrapper({ children }: PageWrapperProps) {
  return <Container>{children}</Container>
}

const Container = styled.main`
  width: 100%;
  padding: 16px;
  background-color: ${colors.white};
`
