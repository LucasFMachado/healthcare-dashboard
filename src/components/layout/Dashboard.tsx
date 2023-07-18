'use client'

import { ReactNode, useEffect, useState } from 'react'
import { styled } from 'styled-components'

import { useMenu } from '@/contexts/MenuContext'
import { colors } from '@/styles/variables'

import { DestokMenu } from './DestokMenu'
import { Header } from './Header'
import { MobileMenu } from './MobileMenu'

interface DashboardProps {
  children: ReactNode
}

export function Dashboard({ children }: DashboardProps) {
  const { fullMenu } = useMenu()
  const [margin, setMargin] = useState('60px')

  useEffect(() => {
    setMargin(fullMenu ? '200px' : '60px')
  }, [fullMenu])

  return (
    <Container>
      {fullMenu ? <DestokMenu /> : <MobileMenu />}
      <PageWrapper $margin={margin}>
        <Header />
        <Content>{children}</Content>
      </PageWrapper>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  gap: 8px;
`

const PageWrapper = styled.div<{ $margin: string }>`
  width: -webkit-fill-available;
  margin-left: ${props => props.$margin};
  padding-left: 16px;
`

const Content = styled.main`
  width: 100%;
  padding: 16px 16px 16px 0;
  background-color: ${colors.white};
  margin-top: 50px;
`
