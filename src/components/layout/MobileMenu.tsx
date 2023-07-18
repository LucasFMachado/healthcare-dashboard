'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { styled } from 'styled-components'

import { LogoutIcon } from '@/assets/icons'
import { UserService } from '@/services/userServices'
import { Subtitle2 } from '@/styles/components'
import { colors, shadows } from '@/styles/variables'
import { pages } from '@/utils/pages'

import { Divider } from '../shared/Divider'

export function MobileMenu() {
  const path = usePathname()
  const router = useRouter()

  const handleLogout = () => {
    UserService.logout()
    router.push('/')
  }

  return (
    <Container>
      <Brand>
        <img src="brand/logo-mobile.svg" alt="Healthcare logo image" />
      </Brand>
      {pages.map(({ route, icon: Icon }) => (
        <Link key={route} href={route}>
          <MenuItem $selected={path === route}>
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
      <Link href="/">
        <button onClick={handleLogout}>
          <MenuItem>
            <LogoutIcon size={16} color={colors.grey.lightest} />
          </MenuItem>
        </button>
      </Link>
    </Container>
  )
}

const Container = styled.aside`
  width: 60px;
  height: 100%;
  padding: 24px 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.white};
  box-shadow: ${shadows.layout};
  position: fixed;
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

const MenuItem = styled(Subtitle2)<{ $selected?: boolean }>`
  color: ${props => (props.$selected ? colors.primary.main : colors.grey.dark)};
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
