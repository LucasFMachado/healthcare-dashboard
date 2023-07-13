'use client'

import { ReactNode, useEffect, useState } from 'react'
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
  const [margin, setMargin] = useState('60px')

  useEffect(() => {
    setMargin(fullMenu ? '200px' : '60px')
  }, [fullMenu])

  return (
    <Container>
      {fullMenu ? <DestokMenu /> : <MobileMenu />}
      <Content margin={margin}>
        <Header />
        <PageWrapper>{children}</PageWrapper>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  gap: 8px;
`

const Content = styled.div<{ margin: string }>`
  width: -webkit-fill-available;
  margin-left: ${props => props.margin};
  padding-left: 16px;
`
