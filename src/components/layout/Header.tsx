'use client'

import { FiMenu } from 'react-icons/fi'
import { styled } from 'styled-components'

import { NotificationIcon } from '@/assets/icons'
import { useMenu } from '@/contexts/MenuContext'
import { Body2, Small3 } from '@/styles/components'
import { breakpoints, colors, shadows } from '@/styles/variables'

export function Header() {
  const { toggleMenu } = useMenu()

  return (
    <Container>
      <Title>
        <button onClick={toggleMenu} aria-label="Toggle menu button">
          <FiMenu size={24} />
        </button>
        <Body2>Dashboard</Body2>
      </Title>
      <Actions>
        <Notification>
          <NotificationIcon size={22} color={colors.grey.light} />
          <Small3>2</Small3>
        </Notification>
        <Profile>
          <img src="avatars/profile.png" />
          <Body2>James Dean</Body2>
        </Profile>
      </Actions>
    </Container>
  )
}

const Container = styled.header`
  height: 50px;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.white};
  position: fixed;
  width: -webkit-fill-available;
  box-shadow: ${shadows.layout};
  z-index: 999;
`

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;

  button {
    border-radius: 50%;
    height: auto;
    width: auto;
    padding: 5px;
    color: ${colors.grey.dark};

    &:hover {
      background-color: ${colors.grey.lightest};
      color: ${colors.primary.main};
    }
  }

  span {
    font-size: 24px;
    font-weight: 300;
  }
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`

const Notification = styled.div`
  position: relative;
  cursor: pointer;

  span {
    background-color: ${colors.error.main};
    color: ${colors.white};
    position: absolute;
    padding: 1px 4px;
    border-radius: 50%;
    top: 0;
    right: -8px;
  }
`

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border-left: 1px solid ${colors.divider};
  padding-left: 16px;

  img {
    border-radius: 50%;
    width: 24px;
    height: 24px;
  }

  p {
    display: none;

    @media (min-width: ${breakpoints.laptop}) {
      display: initial;
    }
  }
`
