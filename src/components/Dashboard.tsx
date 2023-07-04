'use client'

import { ReactNode } from 'react'
import { styled } from 'styled-components'

import { useMenu } from '@/contexts/MenuContext'

import { DestokMenu } from './DestokMenu'
import { Header } from './Header'
import { MobileMenu } from './MobileMenu'
import { PageWrapper } from './PageWrapper'

interface DashboardProps {
  children: ReactNode
}

export function Dashboard({ children }: DashboardProps) {
  const { fullMenu } = useMenu()
  return (
    <Container>
      {fullMenu ? <DestokMenu /> : <MobileMenu />}
      <div>
        <Header />
        <PageWrapper>{children}</PageWrapper>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  gap: 8px;

  > div {
    width: 100%;
  }
`
