'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { styled } from 'styled-components'

import { HelpIcon } from '@/assets/icons'
import { Subtitle2 } from '@/styles/components'
import { colors } from '@/styles/variables'
import { pages } from '@/utils/pages'

import { Divider } from './Divider'

export function MobileMenu() {
  const path = usePathname()

  return (
    <Container>
      <Brand>
        <img src="logo-mobile.svg" alt="Healthcare logo image" />
      </Brand>
      {pages.map(({ route, icon: Icon }) => (
        <Link key={route} href={route}>
          <MenuItem selected={path === route}>
            <Icon
              size={16}
              color={
                path === route ? colors.primary.main : colors.grey.lightest
              }
            />
          </MenuItem>
        </Link>
      ))}
      <Divider />
      <Link href="/help">
        <MenuItem selected={path === '/help'}>
          <HelpIcon
            size={16}
            color={
              path === '/help' ? colors.primary.main : colors.grey.lightest
            }
          />
        </MenuItem>
      </Link>
    </Container>
  )
}

const Container = styled.aside`
  width: 68px;
  height: 100%;
  padding: 24px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.white};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 0px 8px 0px;
`

const Brand = styled.div`
  width: 100%;
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 30px;
    height: 30px;
  }
`

const MenuItem = styled(Subtitle2)<{ selected?: boolean }>`
  color: ${props => (props.selected ? colors.primary.main : colors.grey.dark)};
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-start;
  padding: 14px 0;

  svg {
    height: 16px;
    width: 16px;
  }
`
