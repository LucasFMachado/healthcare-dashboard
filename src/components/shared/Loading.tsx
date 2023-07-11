'use client'

import { ReactNode } from 'react'
import { styled } from 'styled-components'

interface LoadingProps {
  children: ReactNode
}

export function Loading({ children }: LoadingProps) {
  return <Container>{children}</Container>
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  backdrop-filter: blur(2px);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
