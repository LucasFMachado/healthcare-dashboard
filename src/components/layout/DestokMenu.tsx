'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { styled } from 'styled-components'

import { HelpIcon } from '@/assets/icons'
import { Body2, Subtitle2 } from '@/styles/components'
import { colors } from '@/styles/variables'
import { pages } from '@/utils/pages'

import { Divider } from '../shared/Divider'

export function DestokMenu() {
  const path = usePathname()

  return (
    <Container>
      <Brand>
        <img src="logo.svg" alt="Healthcare logo image" />
      </Brand>
      <MenuTitle>MEDICINE</MenuTitle>
      {pages.map(({ route, name, icon: Icon }) => (
        <Link key={route} href={route}>
          <MenuItem selected={path === route}>
            <Icon
              size={16}
              color={
                path === route ? colors.primary.main : colors.grey.lightest
              }
            />
            <span>{name}</span>
          </MenuItem>
        </Link>
      ))}
      <Divider />
      <Link href="/login">
        <MenuItem>
          <HelpIcon size={16} color={colors.grey.lightest} />
          <span>Help</span>
        </MenuItem>
      </Link>
    </Container>
  )
}

const Container = styled.aside`
  width: 200px;
  height: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 0px 8px 0px;

  position: fixed;
`

const Brand = styled.div`
  width: 100%;
  margin-bottom: 32px;

  img {
    width: 142px;
  }
`

const MenuTitle = styled(Body2)`
  color: ${colors.grey.main};
  align-items: center;
  justify-content: flex-start;
  display: flex;
  padding: 14px 0;
`

const MenuItem = styled(Subtitle2)<{ selected?: boolean }>`
  color: ${props => (props.selected ? colors.primary.main : colors.grey.dark)};
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-start;
  padding: 14px 0;
`
