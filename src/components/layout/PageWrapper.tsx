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
  padding: 16px 16px 16px 0;
  background-color: ${colors.white};
  margin-top: 50px;
`
